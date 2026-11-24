<script setup>
import { computed, reactive, ref, watch } from 'vue';
import Button from '../Button.vue';
import ActivityFeedback from './ActivityFeedback.vue';

/* =========================================================
   UV BEADS BIG KAHUNA — PLAN A FAIR TEST

   Based on Heidi's "Sunscreen and UV beads experiment".
   The reference method uses 10 UV beads per non-reflective dish,
   a dark box, 30 seconds of exposure, and a bead-colour scale.

   This PLANNER deliberately does not simulate outcomes or invent
   protection scores. Beads remain pale until a real test is done.

   The three comparisons are:
      1. Protective cover (includes an unprotected control)
      2. Exposure time
      3. Sunlight vs shade

   The diagram and planning table derive from the same data.
   Sun/shade affect a full scene; planned seconds are shown on a
   real clock face (15s = quarter, 30s = half, 60s = full sweep).
   Step 2 shows the only measure visually, with no redundant selection button.
   ========================================================= */

const steps = [
  { id: 'change', label: '1. Change' },
  { id: 'measure', label: '2. Measure' },
  { id: 'control', label: '3. Control' },
];

const variables = [
  { id: 'cover', label: 'Protective cover' },
  { id: 'time', label: 'Time in UV' },
  { id: 'light', label: 'Sun or shade' },
];

// Covers are based on the supplies and examples in Heidi's infographic.
// "Shade" is a separate UV-condition comparison, not a material.
const covers = [
  { id: 'none', label: 'No cover', short: 'No cover' },
  { id: 'tissue', label: 'Tissue', short: 'Tissue' },
  { id: 'paper', label: 'Paper', short: 'Paper' },
  { id: 'sunscreen', label: 'Sunscreen on tissue', short: 'Sunscreen tissue' },
  { id: 'glass', label: 'Glass', short: 'Glass' },
  { id: 'glasses0', label: 'Sunglasses · Cat 0', short: 'Cat 0 sunglasses' },
  { id: 'glasses3', label: 'Sunglasses · Cat 3', short: 'Cat 3 sunglasses' },
];
const exposureTimes = [15, 30, 60]; // 30 s matches Heidi's method; others are optional comparisons.
const lightOptions = [
  { id: 'sun', label: 'Direct sunlight' },
  { id: 'shade', label: 'Shade' },
];

const startingComparisons = () => ({
  cover: ['none', 'sunscreen'],
  time: [15, 30],
  light: ['sun', 'shade'],
});

const activeStep = ref('change');
const variable = ref('cover');
const comparisons = reactive(startingComparisons());
const controls = reactive({
  cover: 'tissue',
  time: 30,
  light: 'sun',
});
const controlsConfirmed = ref(false);
const showColourScale = ref(true);
const feedback = ref(null);
const feedbackMessage = ref('');

const variableLabel = computed(() => variables.find(item => item.id === variable.value)?.label ?? 'Setting');
const optionsForChange = computed(() => {
  if (variable.value === 'cover') return covers.map(({ id, label }) => ({ value: id, label }));
  if (variable.value === 'time') return exposureTimes.map(seconds => ({ value: seconds, label: `${seconds} s` }));
  return lightOptions.map(({ id, label }) => ({ value: id, label }));
});

function coverLabel(value, short = false) {
  const match = covers.find(item => item.id === value);
  return match ? (short ? match.short : match.label) : 'Unknown';
}
function lightLabel(value) { return value === 'shade' ? 'Shade' : 'Direct sun'; }
function valueLabel(kind, value) {
  if (kind === 'cover') return coverLabel(value);
  if (kind === 'time') return `${value} s`;
  return lightLabel(value);
}
function dishValue(index, kind) {
  return variable.value === kind ? comparisons[kind][index] : controls[kind];
}

// A and B always reflect exactly the settings entered by the student.
const dishes = computed(() => ['A', 'B'].map((letter, index) => ({
  letter,
  cover: dishValue(index, 'cover'),
  time: dishValue(index, 'time'),
  light: dishValue(index, 'light'),
  beadCount: 10,
})));

function chooseVariable(id) {
  if (variables.some(item => item.id === id)) variable.value = id;
}
function isTaken(index, value) {
  return comparisons[variable.value][index === 0 ? 1 : 0] === value;
}
function chooseDishValue(index, rawValue) {
  const next = variable.value === 'time' ? Number(rawValue) : rawValue;
  if (!optionsForChange.value.some(option => option.value === next)) return;
  if (isTaken(index, next)) return; // Two identical options would not compare this variable.
  comparisons[variable.value][index] = next;
}
function checkPlan() {
  const [a, b] = comparisons[variable.value];
  let issue = '';
  if (a === b) {
    issue = 'Choose different options for Dish A and Dish B.';
    activeStep.value = 'change';
  } else if (!controlsConfirmed.value) {
    issue = 'Confirm the shared settings in Step 3.';
    activeStep.value = 'control';
  }
  feedback.value = issue ? 'try-again' : 'success';
  feedbackMessage.value = issue;
}
function reset() {
  activeStep.value = 'change';
  variable.value = 'cover';
  const defaults = startingComparisons();
  Object.keys(defaults).forEach(key => { comparisons[key] = [...defaults[key]]; });
  controls.cover = 'tissue';
  controls.time = 30;
  controls.light = 'sun';
  controlsConfirmed.value = false;
  showColourScale.value = true;
  feedback.value = null;
  feedbackMessage.value = '';
}

// A new choice or changed control means the earlier confirmation is no longer valid.
watch([variable, comparisons, controls], () => {
  controlsConfirmed.value = false;
  feedback.value = null;
  feedbackMessage.value = '';
}, { deep: true, flush: 'sync' });
watch(controlsConfirmed, () => {
  feedback.value = null;
  feedbackMessage.value = '';
}, { flush: 'sync' });

// A five-point bead-colour guide based on Heidi's infographic.
// Each sample matches the appearance of the beads in the experiment diagram.
// These are reference colours, NOT results of the planned experiment.
const colourScale = [
  { score: 5, colour: '#f4f1fa', level: 'Most protection' },
  { score: 4, colour: '#d7d1e3', level: '' },
  { score: 3, colour: '#b292d0', level: '' },
  { score: 2, colour: '#8a70c0', level: '' },
  { score: 1, colour: '#5857ad', level: 'Least protection' },
];

// Ten beads per dish, with fixed positions so they do not jump when settings change.
const beadPositions = [
  [24, 23], [48, 19], [71, 27], [18, 46], [42, 43],
  [67, 48], [82, 62], [22, 72], [48, 72], [70, 78],
];
</script>

<template>
  <section class="gtac-section uv-kahuna" aria-label="UV beads fair test planner">
    <h2 class="uv-title">UV Beads Big Kahuna</h2>
    <p class="uv-subtitle">Change one thing. Keep the rest the same.</p>

    <nav class="uv-steps" aria-label="Fair test steps">
      <Button v-for="step in steps" :key="step.id" type="button"
        class="uv-step" :class="{ active: activeStep === step.id }"
        :aria-pressed="activeStep === step.id" @click="activeStep = step.id">
        {{ step.label }}
      </Button>
    </nav>

    <!-- STEP 1: The variable being tested. Dropdowns sit above the matching dishes. -->
    <div class="uv-step-content">
      <template v-if="activeStep === 'change'">
        <p class="uv-prompt">What will you change?</p>
        <div class="uv-choice-row">
          <Button v-for="option in variables" :key="option.id" type="button"
            class="uv-choice" :class="{ selected: variable === option.id }"
            :aria-pressed="variable === option.id" @click="chooseVariable(option.id)">
            {{ option.label }}
          </Button>
        </div>
      </template>

      <!-- STEP 2: One fixed measure. The examples look like the UV beads below,
           so children can immediately see what "bead colour" means. -->
      <template v-else-if="activeStep === 'measure'">
        <p class="uv-prompt">How will you measure UV exposure?</p>
        <div class="uv-measure-guide">
          <div class="uv-measure-intro">
            <span class="uv-measure-pair" aria-hidden="true">
              <span class="uv-sample-bead" style="--bead-tone: #f4f1fa"></span>
              <span class="uv-measure-arrow">→</span>
              <span class="uv-sample-bead" style="--bead-tone: #5857ad"></span>
            </span>
            <div class="uv-measure-copy">
              <strong>Colour of the UV beads</strong>
              <span>Pale = less UV · Purple = more UV</span>
            </div>
            <button type="button" class="uv-colour-toggle"
              :aria-expanded="showColourScale" aria-controls="uv-bead-colour-guide"
              @click="showColourScale = !showColourScale">
              {{ showColourScale ? 'Hide guide' : 'Show guide' }}
            </button>
          </div>
          <div v-show="showColourScale" id="uv-bead-colour-guide" class="uv-scale-panel">
            <div class="uv-scale-heading">UV protection scale</div>
            <div class="uv-colour-scale" role="img"
              aria-label="UV protection guide: bead 5 is pale and means most protection; bead 1 is dark purple and means least protection">
              <div v-for="swatch in colourScale" :key="swatch.score" class="uv-scale-sample">
                <span class="uv-sample-bead" :style="{ '--bead-tone': swatch.colour }"></span>
                <strong>{{ swatch.score }}</strong>
              </div>
            </div>
            <div class="uv-scale-key"><span>5 · Most protection</span><span>1 · Least protection</span></div>
          </div>
        </div>
      </template>

      <!-- STEP 3: Only shared controls appear; the changed variable is excluded. -->
      <template v-else>
        <p class="uv-prompt">Keep these the same for both dishes:</p>
        <div class="uv-control-grid">
          <label v-if="variable !== 'cover'" class="uv-control">
            <span>Protective cover</span>
            <select v-model="controls.cover">
              <option v-for="cover in covers" :key="cover.id" :value="cover.id">{{ cover.label }}</option>
            </select>
          </label>
          <label v-if="variable !== 'time'" class="uv-control">
            <span>Time in UV</span>
            <select v-model.number="controls.time">
              <option v-for="time in exposureTimes" :key="time" :value="time">{{ time }} s</option>
            </select>
          </label>
          <label v-if="variable !== 'light'" class="uv-control">
            <span>UV conditions</span>
            <select v-model="controls.light">
              <option v-for="light in lightOptions" :key="light.id" :value="light.id">{{ light.label }}</option>
            </select>
          </label>
          <div class="uv-control uv-fixed"><span>UV beads</span><strong>10 per dish</strong></div>
        </div>
        <Button type="button" class="uv-confirm" :class="{ confirmed: controlsConfirmed }"
          @click="controlsConfirmed = true">
          {{ controlsConfirmed ? '✓ Controls confirmed' : 'Confirm controls' }}
        </Button>
      </template>
    </div>

    <!-- ONE SOURCE OF TRUTH: both the diagram and the table use `dishes`. -->
    <div class="uv-experiment-card">
      <div class="uv-experiment-header">
        <h3>Your Experiment</h3>
        <span class="uv-start-tag">Before testing</span>
      </div>
      <div class="uv-diagram" role="group" aria-label="Two UV bead dishes before testing">
        <div v-for="(dish, i) in dishes" :key="dish.letter" class="uv-dish-column">
          <div class="uv-dish-heading">
            <strong>Dish {{ dish.letter }}</strong>
            <select v-if="activeStep === 'change'" class="uv-dish-select"
              :value="comparisons[variable][i]"
              :aria-label="`${variableLabel} for Dish ${dish.letter}`"
              @change="chooseDishValue(i, $event.target.value)">
              <option v-for="option in optionsForChange" :key="option.value" :value="option.value"
                :disabled="isTaken(i, option.value)">{{ option.label }}</option>
            </select>
            <span v-else class="uv-dish-choice">{{ valueLabel(variable, dish[variable]) }}</span>
          </div>

          <div class="uv-setup" role="img" :aria-label="`Dish ${dish.letter}: ${coverLabel(dish.cover)}; ${dish.time} seconds; ${lightLabel(dish.light).toLowerCase()}; 10 UV beads`">
            <!-- ONE continuous scene: light falls on the actual dish.
                 Shade has a roof; sun has visible rays reaching the beads. -->
            <div class="uv-exposure-scene" :class="`uv-exposure-scene--${dish.light}`" aria-hidden="true">
              <div class="uv-scene-sun"></div>
              <div v-if="dish.light === 'sun'" class="uv-scene-beams"></div>
              <div v-else class="uv-scene-canopy">
                <span class="uv-canopy-roof"></span>
              </div>
              <span class="uv-scene-condition">{{ dish.light === 'sun' ? 'SUNLIGHT' : 'SHADE' }}</span>
              <div class="uv-scene-workspace">
                <div class="uv-cover-sample" :class="`uv-cover-${dish.cover}`">
                  <span>{{ coverLabel(dish.cover, true) }}</span>
                </div>
                <div class="uv-dish">
                  <span v-for="(position, beadIndex) in beadPositions" :key="beadIndex"
                    class="uv-bead" :style="{ left: position[0] + '%', top: position[1] + '%' }"></span>
                </div>
              </div>
              <span class="uv-scene-floor"></span>
            </div>

            <!-- An actual clock *face* changes: 15 = quarter, 30 = half,
                 60 = a full revolution. This is a planned duration, NOT a timer. -->
            <div class="uv-time-display" :aria-label="`Planned UV exposure: ${dish.time} seconds`">
              <span class="uv-clock-face" :style="{ '--clock-sweep': `${dish.time * 6}deg` }" aria-hidden="true">
                <span class="uv-clock-tick uv-clock-tick--top"></span>
                <span class="uv-clock-tick uv-clock-tick--right"></span>
                <span class="uv-clock-tick uv-clock-tick--bottom"></span>
                <span class="uv-clock-tick uv-clock-tick--left"></span>
                <span class="uv-clock-hand"></span>
                <span class="uv-clock-center"></span>
              </span>
              <span class="uv-time-caption">
                <span>Exposure time</span>
                <strong>{{ dish.time }} seconds</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uv-plan">
      <div class="uv-plan-title">
        <h3>Your fair test plan</h3>
        <span>{{ controlsConfirmed ? '✓ Controls set' : 'Suggested settings' }}</span>
      </div>
      <div class="uv-table-wrap">
        <table class="uv-table">
          <thead><tr><th scope="col">Setting</th><th scope="col">Dish A</th><th scope="col">Dish B</th></tr></thead>
          <tbody>
            <tr :class="{ 'uv-table-changed': variable === 'cover' }">
              <th scope="row">Cover <span v-if="variable === 'cover'" class="uv-change-pill">Change</span></th>
              <td v-for="dish in dishes" :key="dish.letter">{{ coverLabel(dish.cover) }}</td>
            </tr>
            <tr :class="{ 'uv-table-changed': variable === 'time' }">
              <th scope="row">UV time <span v-if="variable === 'time'" class="uv-change-pill">Change</span></th>
              <td v-for="dish in dishes" :key="dish.letter">{{ dish.time }} s</td>
            </tr>
            <tr :class="{ 'uv-table-changed': variable === 'light' }">
              <th scope="row">UV conditions <span v-if="variable === 'light'" class="uv-change-pill">Change</span></th>
              <td v-for="dish in dishes" :key="dish.letter">{{ lightLabel(dish.light) }}</td>
            </tr>
            <tr><th scope="row">Beads</th><td>10</td><td>10</td></tr>
            <tr><th scope="row">Dish and box</th><td>Same type</td><td>Same type</td></tr>
          </tbody>
        </table>
      </div>
      <p class="uv-measure-summary">Measure: <strong>UV bead colour</strong>.</p>
      <ActivityFeedback v-if="feedback" :success="feedback === 'success'"
        :success-feedback="`Only ${variableLabel.toLowerCase()} changes. The other settings match.`"
        :try-again-feedback="feedbackMessage" />
      <div class="uv-actions">
        <Button type="button" class="uv-reset" @click="reset">Reset</Button>
        <Button type="button" class="uv-check" @click="checkPlan">Check plan</Button>
      </div>
    </div>

    <!-- Heidi's method, tucked away so the planner stays the focus. -->
    <details class="uv-method">
      <summary>Materials & method</summary>
      <p><strong>You need:</strong> UV beads, non-reflective dishes, dark box, protective covers, timer and camera.</p>
      <ol>
        <li>Indoors, place 10 beads in each dish. Keep them out of sunlight.</li>
        <li>Put dishes in the dark box and add the chosen covers.</li>
        <li>Outside, keep the box covered until the test begins.</li>
        <li>Lift the box lid for the planned time. Then remove the test covers and take a photo quickly.</li>
        <li>Compare the bead colours using the UV protection scale.</li>
      </ol>
      <p class="uv-method-note">UV beads show UV exposure, not an SPF rating. Sunglasses category alone does not prove UV protection. Follow your school's sun-safety rules.</p>
    </details>
  </section>
</template>

<style scoped>
/* The same GTAC visual language as Egg Drop and Yeast: rounded boxes and bold outlines. */
.uv-title { margin: 0 0 12px; text-align: center; }
.uv-subtitle { margin: 0 0 16px; color: var(--muted); font-weight: 700; }
.uv-steps, .uv-choice-row { display: flex; flex-wrap: wrap; gap: 10px; }
.uv-steps { margin-bottom: 20px; }
.uv-step {
  --padding: 8px 16px; --background: var(--paper); --color: var(--text);
  --border-radius: 999px; --background-hover: var(--soft-yellow);
  --background-active: var(--yellow); --box-shadow-hover: var(--shadow-medium);
  --translate-amount-hover: -2px;
}
.uv-step.active { --background: var(--yellow); }
.uv-step-content { margin-bottom: 18px; }
.uv-prompt { margin: 0 0 10px; font-weight: 700; }
.uv-choice { --background: var(--paper); --color: var(--text); --background-hover: var(--soft-green); }
.uv-choice.selected { --background: var(--mint); }
/* STEP 2: The guide uses the same bead illustration as the experiment. */
.uv-measure-guide { max-width: 650px; padding: 12px; border: 2px solid var(--charcoal); border-radius: var(--radius-small); background: var(--paper); }
.uv-measure-intro { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
.uv-measure-pair { display: inline-flex; gap: 6px; align-items: center; padding: 3px 5px; }
.uv-measure-arrow { font-weight: 900; color: var(--purple); }
.uv-measure-copy { display: grid; gap: 3px; flex: 1 1 190px; }
.uv-measure-copy strong { font-size: 1rem; }
.uv-measure-copy span { font-size: .84rem; color: var(--muted); }
.uv-colour-toggle { border: 2px solid var(--charcoal); border-radius: 999px; padding: 7px 11px; background: white; font: inherit; font-size: .86rem; font-weight: 700; cursor: pointer; }
.uv-colour-toggle:hover { background: var(--soft-yellow); }
.uv-scale-panel { border-top: 1px solid #d7d1c7; margin-top: 12px; padding-top: 10px; }
.uv-scale-heading { margin-bottom: 7px; font-size: .87rem; font-weight: 800; }
.uv-colour-scale { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 6px; max-width: 450px; }
.uv-scale-sample { min-width: 0; display: grid; gap: 4px; justify-items: center; padding: 7px 3px; border-radius: 9px; background: #f4f1ed; }
.uv-scale-sample strong { font-size: .86rem; }
/* Shared ring/donut appearance links the legend to the physical UV beads. */
.uv-sample-bead { position: relative; display: inline-block; flex: 0 0 auto; width: 30px; aspect-ratio: 1; border: 1px solid #aab0c0; border-radius: 50%; background: radial-gradient(circle at 48% 44%, #fcfdff 0 24%, #a6a9c1 27%, var(--bead-tone, #e4e2f1) 45%, #fcfbff 87%); box-shadow: inset -2px -2px 3px #8084a130, 1px 2px 3px #5554; }
.uv-scale-key { display: flex; justify-content: space-between; gap: 10px; max-width: 450px; margin-top: 6px; font-size: .75rem; font-weight: 700; }
.uv-control-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
.uv-control { display: grid; gap: 5px; min-width: 0; padding: 10px 12px; background: var(--paper); border: 2px solid var(--charcoal); border-radius: var(--radius-small); font-weight: 700; }
.uv-control select { width: 100%; min-width: 0; padding: 8px 10px; background: white; border: 2px solid var(--charcoal); border-radius: 9px; font: inherit; }
.uv-fixed strong { display: flex; align-items: center; min-height: 38px; }
.uv-confirm { margin-top: 12px; --background: var(--mint); }
.uv-confirm.confirmed { --background: var(--soft-green); }
.uv-experiment-card { padding: 18px; background: var(--cream); border: 2px solid var(--charcoal); border-radius: var(--radius-medium); box-shadow: var(--shadow-medium); }
.uv-experiment-header, .uv-plan-title { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
.uv-experiment-header h3, .uv-plan-title h3 { margin: 0; }
.uv-start-tag, .uv-plan-title > span { background: var(--soft-yellow); border-radius: 999px; padding: 5px 10px; font-size: .78rem; font-weight: 700; }
.uv-diagram { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 20px; margin-top: 14px; padding: 16px; background: var(--paper); border: 2px solid var(--charcoal); border-radius: var(--radius-small); }
.uv-dish-column { display: grid; min-width: 0; justify-items: center; align-content: start; }
.uv-dish-heading { width: 100%; min-height: 83px; display: flex; flex-direction: column; align-items: center; gap: 9px; text-align: center; }
.uv-dish-heading strong { padding: 4px 12px; border-radius: 999px; background: white; border: 2px solid var(--charcoal); }
.uv-dish-select { width: min(100%,250px); min-height: 38px; padding: 6px 10px; background: white; border: 2px solid var(--charcoal); border-radius: 9px; font: inherit; font-weight: 700; }
.uv-dish-choice { max-width: 100%; padding: 6px 9px; background: white; border-radius: 7px; font-size: .89rem; font-weight: 700; }
/* Sun/shade is now the environment OF the dish, not a separate icon card. */
.uv-setup { display: grid; justify-items: center; width: 100%; min-width: 0; gap: 12px; }
.uv-exposure-scene {
  position: relative; isolation: isolate; width: min(100%, 320px); min-height: 355px;
  display: flex; flex-direction: column; align-items: center;
  border: 2px solid #b0c5ce; border-radius: 17px; overflow: hidden;
  background: linear-gradient(165deg, #d9f0fc 0%, #f1f9f4 43%, #fff8dc 100%);
}
.uv-exposure-scene--sun { border-color: #e1c670; }
.uv-exposure-scene--shade {
  border-color: #8da8b7;
  background: linear-gradient(to bottom, #d9eaf4 0 104px, #d9e3e9 104px 100%);
}
/* One large sun at the top: its rays reach the experiment below. */
.uv-scene-sun {
  position: absolute; top: 19px; right: 32px; z-index: 1;
  width: 75px; aspect-ratio: 1; border-radius: 50%;
  background: radial-gradient(circle at 33% 27%, #fff6b5 0 13%, #ffdb51 42%, #ffbc36 100%);
  border: 3px solid #e7a823;
  box-shadow: 0 0 0 8px #ffe68b55, 0 0 30px 11px #ffe48588;
}
.uv-scene-sun::before {
  content: ''; position: absolute; inset: -26px;
  background: repeating-conic-gradient(from 7deg,#f3ba2a 0deg 7deg,transparent 7deg 45deg);
  mask: radial-gradient(transparent 0 49%, black 51% 58%, transparent 60%);
}
.uv-exposure-scene--shade .uv-scene-sun { top: 14px; right: 25px; transform: scale(.78); opacity: .83; }
.uv-scene-beams {
  position: absolute; inset: 83px -12px 0; z-index: 1; pointer-events: none;
  background: repeating-linear-gradient(112deg, transparent 0 23px, #ffd64d6b 24px 43px, transparent 44px 74px);
  clip-path: polygon(59% 0%, 92% 0%, 100% 100%, 0 100%);
}
.uv-scene-condition {
  position: absolute; top: 16px; left: 13px; z-index: 5;
  display: inline-flex; align-items: center; padding: 5px 8px;
  background: #fffdf6f2; border: 1px solid #d3cfbc;
  border-radius: 999px; color: #384e52; font-size: .74rem; font-weight: 900; letter-spacing: .035em;
}
/* A real roof sits BETWEEN the sun and the dish. The lower scene is shaded. */
.uv-scene-canopy { position: absolute; inset: 104px 0 auto; z-index: 3; height: 22px; }
.uv-canopy-roof {
  display: block; height: 22px; width: 100%;
  border-top: 4px solid #344d60; border-bottom: 3px solid #344d60;
  background: repeating-linear-gradient(90deg,#46738d 0px 32px,#83aec4 32px 64px);
  box-shadow: 0 14px 15px #344a6080;
}
.uv-scene-canopy::before, .uv-scene-canopy::after {
  content: ''; position: absolute; top: 21px; bottom: auto;
  height: 205px; width: 7px; background: #68879a; border-inline: 1px solid #44596c; opacity: .65;
}
.uv-scene-canopy::before { left: 10px; }
.uv-scene-canopy::after { right: 10px; }
.uv-scene-workspace {
  position: relative; z-index: 4; display: flex; flex-direction: column; align-items: center;
  width: 100%; padding: 137px 10px 17px;
}
.uv-scene-floor {
  position: absolute; z-index: 2; inset: auto 0 0; height: 27px;
  border-top: 2px solid #d1d0bb; background: #e8e4d9;
}
.uv-exposure-scene--shade .uv-scene-floor { background: #c5d1d8; border-color: #aabac5; }
/* Clock has a genuine quarter/half/full coloured face and a rotating second hand. */
.uv-time-display {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  width: min(100%, 320px); padding: 10px 12px;
  background: #fffdf5; border: 2px solid #d7d4cb; border-radius: 14px;
}
.uv-clock-face {
  --clock-size: 62px;
  position: relative; flex: 0 0 var(--clock-size); width: var(--clock-size); aspect-ratio: 1;
  border: 3px solid #405665; border-radius: 50%;
  background: conic-gradient(#8ae2c9 0deg var(--clock-sweep), #fff 0deg 360deg);
  box-shadow: inset 0 0 0 4px #fff8, 0 2px 4px #25353a36;
}
.uv-clock-tick { position: absolute; z-index: 2; background: #546877; border-radius: 2px; }
.uv-clock-tick--top { top: 4px; left: calc(50% - 1px); width: 2px; height: 8px; }
.uv-clock-tick--right { right: 4px; top: calc(50% - 1px); width: 8px; height: 2px; }
.uv-clock-tick--bottom { bottom: 4px; left: calc(50% - 1px); width: 2px; height: 8px; }
.uv-clock-tick--left { left: 4px; top: calc(50% - 1px); width: 8px; height: 2px; }
.uv-clock-hand {
  position: absolute; z-index: 3; left: calc(50% - 1.5px); top: 11px;
  width: 3px; height: calc(50% - 11px); background: #284456; border-radius: 3px;
  transform-origin: bottom center; transform: rotate(var(--clock-sweep));
}
.uv-clock-center { position: absolute; z-index: 4; top: calc(50% - 4px); left: calc(50% - 4px); width: 8px; height: 8px; border-radius: 50%; background: #284456; border: 1px solid white; }
.uv-time-caption { display: grid; gap: 2px; min-width: 0; }
.uv-time-caption > span { font-size: .77rem; font-weight: 700; color: var(--muted); }
.uv-time-caption strong { font-size: 1.15rem; line-height: 1.15; white-space: nowrap; font-variant-numeric: tabular-nums; }
.uv-cover-sample { position: relative; z-index: 4; width: min(90%,230px); min-height: 35px; display: grid; place-items: center; margin-bottom: 11px; padding: 5px 8px; border: 2px solid var(--charcoal); border-radius: 8px; font-size: .78rem; font-weight: 700; background: #efe9da; text-align: center; }
.uv-cover-none { background: transparent; border-style: dashed; }
.uv-cover-tissue { background: #faf4ec; }
.uv-cover-paper { background: #f0dbab; }
.uv-cover-sunscreen { background: linear-gradient(135deg,#fcf1e3,#e5d4f4,#fcf1e3); }
.uv-cover-glass { background: linear-gradient(120deg,#d5eef5a8,#f4fdff88,#bce2efb5); }
.uv-cover-glasses0 { background: linear-gradient(125deg,#e4eff6,#dce8ed); }
.uv-cover-glasses3 { background: linear-gradient(125deg,#aeb9cb,#7b89a2); color: white; }
.uv-dish { position: relative; z-index: 4; width: min(100%,190px); aspect-ratio: 1; border-radius: 50%; border: 7px solid #a7b8bf; background: radial-gradient(circle at 42% 36%,#fbfaff 0%,#e6e7ee 78%,#c7ced9 100%); box-shadow: 0 8px 0 #c4cdd0, inset 0 0 0 3px #fff9; }
.uv-bead { position: absolute; width: 19%; aspect-ratio: 1; transform: translate(-50%,-50%); border-radius: 50%; background: radial-gradient(circle at 48% 44%,#fbfcff 0 25%,#8e91b2 27%,#e4e2f1 44%,#fcfbff 75%); border: 1.5px solid #b2b2c5; box-shadow: inset -2px -2px 4px #8084a133, 1px 2px 3px #5555; }
.uv-plan { margin-top: 22px; }
.uv-plan-title { margin-bottom: 10px; }
.uv-table-wrap { max-width: 100%; overflow-x: auto; border: 2px solid var(--charcoal); border-radius: var(--radius-small); }
.uv-table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: .92rem; }
.uv-table th, .uv-table td { padding: 10px 12px; border-bottom: 1px solid #d4cec4; text-align: center; overflow-wrap: anywhere; }
.uv-table th:first-child { width: 36%; text-align: left; }
.uv-table thead th { background: var(--soft-purple); font-weight: 800; }
.uv-table thead th:nth-child(2) { background: #d9efe8; }
.uv-table thead th:nth-child(3) { background: #ffe0d3; }
.uv-table tr:last-child > * { border-bottom: 0; }
.uv-table-changed { background: #e9dfff; }
.uv-change-pill { margin-left: 4px; padding: 2px 4px; background: var(--purple); color: white; border-radius: 5px; font-size: .66rem; vertical-align: middle; white-space: nowrap; }
.uv-measure-summary { margin: 10px 0 0; color: var(--muted); font-size: .87rem; }
.uv-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.uv-reset { --background: var(--orange); }
.uv-check { --background: var(--mint); }
.uv-method { margin-top: 16px; padding: 13px 15px; background: var(--soft-yellow); border: 2px solid var(--charcoal); border-radius: var(--radius-medium); }
.uv-method summary { cursor: pointer; font-weight: 800; }
.uv-method p { margin: 10px 0 4px; }
.uv-method ol { margin: 8px 0 0; padding-left: 20px; }
.uv-method li { margin-top: 5px; }
.uv-method-note { font-size: .85rem; color: var(--muted); }
.uv-dish-select:focus-visible, .uv-control select:focus-visible, .uv-colour-toggle:focus-visible { outline: 3px solid var(--purple); outline-offset: 3px; }
@media (max-width: 650px) {
  .uv-control-grid { grid-template-columns: 1fr; }
  .uv-diagram { gap: 10px; padding: 12px 8px; }
  .uv-dish-heading { min-height: 95px; }
  .uv-dish-heading strong { font-size: .85rem; }
  .uv-dish-select { padding: 7px 3px; font-size: .79rem; }
  .uv-dish-choice { font-size: .78rem; }
  .uv-dish { border-width: 4px; }
  .uv-bead { border-width: 1px; }
  .uv-cover-sample { font-size: .68rem; min-height: 29px; margin-bottom: 9px; }
  .uv-setup { gap: 8px; }
  .uv-exposure-scene { min-height: 280px; border-radius: 13px; }
  .uv-exposure-scene--shade { background: linear-gradient(to bottom, #d9eaf4 0 91px, #d9e3e9 91px 100%); }
  .uv-scene-sun { width: 50px; top: 14px; right: 13px; }
  .uv-scene-sun::before { inset: -16px; }
  .uv-exposure-scene--shade .uv-scene-sun { top: 10px; right: 8px; }
  .uv-scene-beams { top: 58px; }
  .uv-scene-condition { top: 8px; left: 6px; font-size: .59rem; padding: 4px 5px; }
  .uv-scene-canopy { top: 90px; height: 16px; }
  .uv-canopy-roof { height: 16px; border-top-width: 3px; border-bottom-width: 2px; }
  .uv-scene-canopy::before, .uv-scene-canopy::after { top: 15px; height: 163px; width: 4px; }
  .uv-scene-workspace { padding: 125px 3px 12px; }
  .uv-scene-floor { height: 16px; }
  .uv-time-display { gap: 6px; padding: 6px; border-radius: 10px; }
  .uv-clock-face { --clock-size: 46px; border-width: 2px; }
  .uv-clock-hand { top: 8px; height: calc(50% - 8px); }
  .uv-clock-tick--top { top: 2px; } .uv-clock-tick--right { right: 2px; }
  .uv-clock-tick--bottom { bottom: 2px; } .uv-clock-tick--left { left: 2px; }
  .uv-time-caption > span { font-size: .63rem; }
  .uv-time-caption strong { font-size: .79rem; }
  .uv-measure-guide { padding: 10px; }
  .uv-measure-intro { gap: 7px; }
  .uv-sample-bead { width: 25px; }
  .uv-scale-key { font-size: .69rem; }
  .uv-table th, .uv-table td { padding: 9px 5px; font-size: .79rem; }
  .uv-change-pill { display: block; width: fit-content; margin: 3px 0 0; }
}
@media (max-width: 390px) {
  .uv-diagram { gap: 6px; padding: 10px 4px; }
  .uv-dish-heading strong { padding: 4px 8px; }
  .uv-dish-select { font-size: .73rem; }
  .uv-time-display { gap: 4px; padding: 5px 3px; }
  .uv-time-caption strong { font-size: .73rem; }
}
</style>
