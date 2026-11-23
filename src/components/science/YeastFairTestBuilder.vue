<script setup>
import { computed, ref, watch } from 'vue';
import Button from '../Button.vue';
import ActivityFeedback from './ActivityFeedback.vue';

/* =========================================================
   YEAST BIG KAHUNA - THREE-GLASS FAIR TEST

   Based on Heidi's GTAC yeast experiment infographic.
   - Compare THREE glasses rather than two eggs.
   - Change only the yeast OR sugar amount.
   - Keep the other conditions equal.
   - Show Heidi's ACTUAL recorded data only for her
     two original experiments, not invented predictions.
   - Record student measurements for any other recipe.
   ========================================================= */

const steps = [
  { id: 'change', label: '1. Change' },
  { id: 'measure', label: '2. Measure' },
  { id: 'control', label: '3. Control' },
];
const activeStep = ref('change');

const variableChoices = [
  { id: 'yeast', label: 'Yeast amount' },
  { id: 'sugar', label: 'Sugar amount' },
];
const amounts = [0, 1, 2, 3]; // teaspoons
const glassLetters = ['A', 'B', 'C'];
const temperatureChoices = ['Cool', 'Room temperature', 'Warm'];
const startingLevelChoices = [5, 6, 7, 8]; // centimetres
const scaleMarks = [12, 9, 6, 3, 0];
const maxScale = 14; // 0-14 cm, enough for Heidi's highest recorded result (12 cm)
const defaultControls = () => ({
  yeast: 2, // used when SUGAR is the changed variable
  sugar: 2, // used when YEAST is the changed variable
  temperature: 'Warm',
  startingLevel: 6,
});
const startingComparison = () => ({
  yeast: [0, 1, 2], // Heidi's first experiment
  sugar: [0, 1, 3], // Heidi's second experiment
});

const variable = ref('yeast');
const selectedAmounts = ref(startingComparison());
const controls = ref(defaultControls());
const measureSelected = ref(false);
const controlsConfirmed = ref(false);
const showSampleResults = ref(false);
const customResults = ref(['', '', '']);
const useCustomResults = ref(false);
const prediction = ref('');
const explanation = ref('');
const feedback = ref(null);
const feedbackText = ref('');

const variedLabel = computed(() => variable.value === 'yeast' ? 'Yeast' : 'Sugar');
const sharedLabel = computed(() => variable.value === 'yeast' ? 'Sugar' : 'Yeast');
const sharedVariable = computed(() => variable.value === 'yeast' ? 'sugar' : 'yeast');

const glasses = computed(() => glassLetters.map((name, index) => ({
  name,
  yeast: variable.value === 'yeast' ? selectedAmounts.value.yeast[index] : controls.value.yeast,
  sugar: variable.value === 'sugar' ? selectedAmounts.value.sugar[index] : controls.value.sugar,
  temperature: controls.value.temperature,
  startingLevel: controls.value.startingLevel,
})));

/* Original measurements from Heidi's infographic. No invented readings. */
const heidiObservations = {
  yeast: { 0: 6, 1: 8, 2: 12 },
  sugar: { 0: 6.5, 1: 10.5, 3: 11 },
};

const hasHeidiResults = computed(() => {
  const correctControls = controls.value.temperature === 'Warm'
    && controls.value.startingLevel === 6
    && controls.value[sharedVariable.value] === 2;
  if (!correctControls) return false;
  const expected = variable.value === 'yeast' ? [0, 1, 2] : [0, 1, 3];
  const actual = [...selectedAmounts.value[variable.value]].sort((a, b) => a - b);
  return actual.length === 3 && actual.every((amount, index) => amount === expected[index]);
});

const observedHeights = computed(() => {
  if (useCustomResults.value) {
    return customResults.value.map(value => {
      if (value === '' || value === null) return null;
      const number = Number(value);
      return Number.isFinite(number) && number >= 0 && number <= maxScale ? number : null;
    });
  }
  if (showSampleResults.value && hasHeidiResults.value) {
    return glasses.value.map(glass => heidiObservations[variable.value][glass[variable.value]]);
  }
  return [null, null, null];
});

const displayGlasses = computed(() => glasses.value.map((glass, index) => ({
  ...glass,
  finalHeight: observedHeights.value[index],
  visibleHeight: observedHeights.value[index] ?? glass.startingLevel,
  rise: observedHeights.value[index] === null
    ? 0 : Math.max(0, observedHeights.value[index] - glass.startingLevel),
})));
const hasAnyResults = computed(() => observedHeights.value.some(value => value !== null));
const resultSource = computed(() => useCustomResults.value
  ? 'Your measurements' : showSampleResults.value && hasHeidiResults.value
    ? "Heidi's observations" : 'At 0 min');

function centimetres(value) { return `${value} cm`; }
function teaspoons(value) { return `${value} tsp`; }
function percentHeight(value) {
  return `${Math.min(100, Math.max(0, (value / maxScale) * 100))}%`;
}
function foamPercent(glass) {
  return glass.visibleHeight > 0 ? `${(glass.rise / glass.visibleHeight) * 100}%` : '0%';
}
function chooseVariable(next) {
  if (!variableChoices.some(choice => choice.id === next)) return;
  variable.value = next;
}
function chooseAmount(index, value) {
  const number = Number(value);
  if (!amounts.includes(number)) return;
  // Keep the three values distinct so students can see a three-way comparison.
  const pair = selectedAmounts.value[variable.value];
  if (pair.some((amount, i) => i !== index && amount === number)) return;
  selectedAmounts.value[variable.value][index] = number;
}
function takenByOtherGlass(index, amount) {
  return selectedAmounts.value[variable.value].some((selected, i) => i !== index && selected === amount);
}
function showHeidisResults() {
  if (!hasHeidiResults.value) return;
  showSampleResults.value = true;
  useCustomResults.value = false;
}
function showStartingLevels() {
  showSampleResults.value = false;
  useCustomResults.value = false;
}
function showMyReadings() {
  showSampleResults.value = false;
  useCustomResults.value = true;
}
function checkPlan() {
  let issue = '';
  const values = selectedAmounts.value[variable.value];
  if (new Set(values).size !== 3) issue = 'Choose three different amounts.';
  else if (!measureSelected.value) issue = 'Choose the measurement in Step 2.';
  else if (!controlsConfirmed.value) issue = 'Confirm the controls in Step 3.';
  feedbackText.value = issue;
  feedback.value = issue ? 'try-again' : 'success';
}
function reset() {
  activeStep.value = 'change';
  variable.value = 'yeast';
  selectedAmounts.value = startingComparison();
  controls.value = defaultControls();
  measureSelected.value = false;
  controlsConfirmed.value = false;
  showSampleResults.value = false;
  customResults.value = ['', '', ''];
  useCustomResults.value = false;
  prediction.value = '';
  explanation.value = '';
  feedback.value = null;
  feedbackText.value = '';
}

// Any change to the recipe makes old measurements and check feedback obsolete.
watch([variable, selectedAmounts, controls], () => {
  controlsConfirmed.value = false;
  feedback.value = null;
  feedbackText.value = '';
  showSampleResults.value = false;
  useCustomResults.value = false;
  customResults.value = ['', '', ''];
}, { deep: true, flush: 'sync' });
watch([measureSelected, controlsConfirmed], () => {
  feedback.value = null;
  feedbackText.value = '';
}, { flush: 'sync' });
</script>

<template>
  <section class="gtac-section yeast-kahuna" aria-label="Yeast experiment fair test builder">
    <h2 class="yeast-title">Yeast Big Kahuna</h2>
    <p class="yeast-subtitle">Change one thing. Keep the rest the same.</p>

    <nav class="yeast-steps" aria-label="Fair test steps">
      <Button v-for="step in steps" :key="step.id" type="button"
        class="yeast-step" :class="{ active: activeStep === step.id }"
        :aria-pressed="activeStep === step.id"
        @click="activeStep = step.id">{{ step.label }}</Button>
    </nav>

    <div class="yeast-step-content">
      <template v-if="activeStep === 'change'">
        <p class="yeast-prompt">What will you change?</p>
        <div class="yeast-choice-row">
          <Button v-for="choice in variableChoices" :key="choice.id" type="button"
            class="yeast-choice" :class="{ selected: variable === choice.id }"
            :aria-pressed="variable === choice.id" @click="chooseVariable(choice.id)">
            {{ choice.label }}
          </Button>
        </div>
      </template>

      <template v-else-if="activeStep === 'measure'">
        <p class="yeast-prompt">What will you measure?</p>
        <Button type="button" class="yeast-measure-choice"
          :class="{ selected: measureSelected }" :aria-pressed="measureSelected"
          @click="measureSelected = true">Mixture height after 10 min</Button>
      </template>

      <template v-else>
        <p class="yeast-prompt">Keep these the same:</p>
        <div class="yeast-control-grid">
          <label class="yeast-control">
            <span>{{ sharedLabel }} (all glasses)</span>
            <select v-model.number="controls[sharedVariable]">
              <option v-for="amount in amounts" :key="amount" :value="amount">{{ teaspoons(amount) }}</option>
            </select>
          </label>
          <label class="yeast-control">
            <span>Water temperature</span>
            <select v-model="controls.temperature">
              <option v-for="temperature in temperatureChoices" :key="temperature" :value="temperature">{{ temperature }}</option>
            </select>
          </label>
          <label class="yeast-control">
            <span>Starting level</span>
            <select v-model.number="controls.startingLevel">
              <option v-for="level in startingLevelChoices" :key="level" :value="level">{{ centimetres(level) }}</option>
            </select>
          </label>
          <div class="yeast-control yeast-fixed">
            <span>Time</span><strong>10 min</strong>
          </div>
        </div>
        <Button type="button" class="yeast-confirm" :class="{ confirmed: controlsConfirmed }"
          @click="controlsConfirmed = true">
          {{ controlsConfirmed ? '✓ Controls confirmed' : 'Confirm controls' }}
        </Button>
      </template>
    </div>

    <div class="yeast-experiment-card">
      <div class="yeast-experiment-heading">
        <h3>Your Experiment</h3>
        <span class="yeast-state">{{ resultSource }}</span>
      </div>
      <p class="yeast-question">How does {{ variable === 'yeast' ? 'yeast' : 'sugar' }} affect the rise?</p>
      <div class="yeast-diagram" role="group" aria-label="Three glasses with a centimetre scale">
        <div class="yeast-scale" aria-hidden="true">
          <!-- The inner track has EXACTLY the same height and bottom edge as each glass. -->
          <div class="yeast-scale-track">
            <span class="yeast-scale-label">cm</span>
            <span v-for="mark in scaleMarks" :key="mark" class="yeast-scale-mark"
              :style="{ bottom: percentHeight(mark) }">
              <span class="yeast-scale-tick"></span>{{ mark }}
            </span>
          </div>
        </div>

        <div v-for="(glass, index) in displayGlasses" :key="glass.name" class="yeast-glass-column">
          <div class="yeast-glass-heading">
            <strong>Glass {{ glass.name }}</strong>
            <label v-if="activeStep === 'change'" class="yeast-amount-choice">
              <span class="sr-only">{{ variedLabel }} for Glass {{ glass.name }}</span>
              <select :value="selectedAmounts[variable][index]"
                :aria-label="`${variedLabel} for Glass ${glass.name}`"
                @change="chooseAmount(index, $event.target.value)">
                <option v-for="amount in amounts" :key="amount" :value="amount"
                  :disabled="takenByOtherGlass(index, amount)">
                  {{ teaspoons(amount) }}
                </option>
              </select>
            </label>
            <span v-else class="yeast-amount-summary">{{ teaspoons(glass[variable]) }} {{ variedLabel.toLowerCase() }}</span>
          </div>
          <div class="yeast-glass" role="img"
            :aria-label="`Glass ${glass.name}: ${teaspoons(glass.yeast)} yeast, ${teaspoons(glass.sugar)} sugar, level ${centimetres(glass.visibleHeight)}${glass.finalHeight === null ? ' at the start' : ' at 10 minutes'}`">
            <div class="yeast-liquid" :style="{ height: percentHeight(glass.visibleHeight) }">
              <div class="yeast-liquid-bubbles" aria-hidden="true"></div>
              <div v-if="glass.rise > 0" class="yeast-foam"
                :style="{ height: foamPercent(glass) }" aria-hidden="true"></div>
            </div>
            <span class="yeast-glass-highlight" aria-hidden="true"></span>
          </div>
          <output class="yeast-level-label">{{ centimetres(glass.visibleHeight) }}</output>
        </div>
      </div>

      <div class="yeast-results-bar">
        <button type="button" class="yeast-result-button"
          :class="{ active: !useCustomResults && !showSampleResults }"
          @click="showStartingLevels">0 min</button>
        <button v-if="hasHeidiResults" type="button" class="yeast-result-button"
          :class="{ active: showSampleResults && !useCustomResults }"
          @click="showHeidisResults">Heidi's results · 10 min</button>
        <button type="button" class="yeast-result-button"
          :class="{ active: useCustomResults }" @click="showMyReadings">My readings</button>
      </div>
      <div v-if="useCustomResults" class="yeast-reading-fields">
        <label v-for="(glass, index) in glasses" :key="glass.name">
          <span>Glass {{ glass.name }} · cm</span>
          <input v-model="customResults[index]" type="number" min="0" :max="maxScale" step="0.5"
            :aria-label="`Measured level for glass ${glass.name} after 10 minutes in centimetres`" placeholder="—" />
        </label>
      </div>
      <p v-if="!hasHeidiResults && !useCustomResults" class="yeast-short-note">
        New recipe — enter your own results after testing.
      </p>
      <p v-else-if="showSampleResults && !useCustomResults" class="yeast-short-note">
        Recorded in Heidi's test. Other recipes may behave differently.
      </p>
    </div>

    <div class="yeast-plan">
      <div class="yeast-plan-title">
        <h3>Your fair test plan</h3>
        <span>{{ controlsConfirmed ? '✓ Controls set' : 'Suggested settings' }}</span>
      </div>
      <div class="yeast-table-wrap">
        <table class="yeast-table">
          <thead>
            <tr><th scope="col">Setting</th><th v-for="glass in glasses" :key="glass.name" scope="col">{{ glass.name }}</th></tr>
          </thead>
          <tbody>
            <tr :class="{ 'yeast-table-changed': variable === 'yeast' }">
              <th scope="row">Yeast <span v-if="variable === 'yeast'" class="yeast-change-label">Change</span></th>
              <td v-for="glass in glasses" :key="glass.name">{{ teaspoons(glass.yeast) }}</td>
            </tr>
            <tr :class="{ 'yeast-table-changed': variable === 'sugar' }">
              <th scope="row">Sugar <span v-if="variable === 'sugar'" class="yeast-change-label">Change</span></th>
              <td v-for="glass in glasses" :key="glass.name">{{ teaspoons(glass.sugar) }}</td>
            </tr>
            <tr><th scope="row">Water</th><td v-for="glass in glasses" :key="glass.name">{{ glass.temperature }}</td></tr>
            <tr><th scope="row">At 0 min</th><td v-for="glass in glasses" :key="glass.name">{{ centimetres(glass.startingLevel) }}</td></tr>
            <tr class="yeast-table-measure">
              <th scope="row">At 10 min</th>
              <td v-for="glass in displayGlasses" :key="glass.name">
                {{ glass.finalHeight === null ? '—' : centimetres(glass.finalHeight) }}
              </td>
            </tr>
            <tr v-if="hasAnyResults">
              <th scope="row">Rise</th>
              <td v-for="glass in displayGlasses" :key="glass.name">
                {{ glass.finalHeight === null ? '—' : `${(glass.finalHeight - glass.startingLevel).toFixed(1).replace(/\.0$/, '')} cm` }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ActivityFeedback v-if="feedback" :success="feedback === 'success'"
        :success-feedback="`Only ${variedLabel.toLowerCase()} changes. The other settings match.`"
        :try-again-feedback="feedbackText" />
      <div class="yeast-actions">
        <Button type="button" class="yeast-reset" @click="reset">Reset</Button>
        <Button type="button" class="yeast-check" @click="checkPlan">Check plan</Button>
      </div>
    </div>

    <details class="yeast-method">
      <summary>How to run the real experiment</summary>
      <p>You'll need yeast, sugar, water, three matching glasses, rulers and tape.</p>
      <ol>
        <li>Attach a ruler to each glass at the same height.</li>
        <li>Add water, sugar and yeast. Stir each glass.</li>
        <li>Measure the starting level (0 min).</li>
        <li>After 10 minutes, measure the mixture again.</li>
      </ol>
    </details>

    <details class="yeast-reflection">
      <summary>Predict · Observe · Explain</summary>
      <label>
        <span>Predict: Which glass will rise the most?</span>
        <select v-model="prediction">
          <option value="">Choose...</option><option v-for="letter in glassLetters" :key="letter" :value="letter">Glass {{ letter }}</option>
          <option value="same">All the same</option>
        </select>
      </label>
      <label>
        <span>Explain: What do your results show?</span>
        <textarea v-model="explanation" rows="2" placeholder="I noticed..." />
      </label>
    </details>
  </section>
</template>

<style scoped>
/* Same rounded GTAC palette and strong outlines as Egg Drop. */
.yeast-title { margin: 0 0 12px; text-align: center; }
.yeast-subtitle { margin: 0 0 16px; color: var(--muted); font-weight: 700; }
.yeast-steps, .yeast-choice-row { display: flex; flex-wrap: wrap; gap: 10px; }
.yeast-steps { margin-bottom: 20px; }
.yeast-step {
  --padding: 8px 16px; --background: var(--paper); --color: var(--text);
  --border-radius: 999px; --background-hover: var(--soft-yellow);
  --background-active: var(--yellow); --box-shadow-hover: var(--shadow-medium);
  --translate-amount-hover: -2px;
}
.yeast-step.active { --background: var(--yellow); }
.yeast-step-content { margin-bottom: 18px; }
.yeast-prompt { margin: 0 0 10px; font-weight: 700; }
.yeast-choice { --background: var(--paper); --color: var(--text); --background-hover: var(--soft-green); }
.yeast-choice.selected { --background: var(--mint); }
.yeast-measure-choice { --background: var(--paper); --color: var(--text); }
.yeast-measure-choice.selected { --background: var(--mint); }
.yeast-control-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
.yeast-control { display: grid; gap: 5px; min-width: 0; padding: 10px 12px; background: var(--paper); border: 2px solid var(--charcoal); border-radius: var(--radius-small); font-weight: 700; }
.yeast-control select, .yeast-reflection select, .yeast-reflection textarea {
  width: 100%; min-width: 0; padding: 8px 10px; background: white;
  border: 2px solid var(--charcoal); border-radius: 10px; font: inherit;
}
.yeast-fixed strong { display: flex; align-items: center; min-height: 38px; font-size: 0.95rem; }
.yeast-confirm { margin-top: 12px; --background: var(--mint); }
.yeast-confirm.confirmed { --background: var(--soft-green); }
.yeast-experiment-card { padding: 18px; background: var(--cream); border: 2px solid var(--charcoal); border-radius: var(--radius-medium); box-shadow: var(--shadow-medium); }
.yeast-experiment-heading, .yeast-plan-title { display: flex; justify-content: space-between; gap: 10px; align-items: center; flex-wrap: wrap; }
.yeast-experiment-heading h3, .yeast-plan-title h3 { margin: 0; }
.yeast-state, .yeast-plan-title > span { padding: 5px 10px; border-radius: 999px; background: var(--soft-yellow); font-size: 0.78rem; font-weight: 700; }
.yeast-question { margin: 4px 0 13px; color: var(--muted); font-size: .93rem; }
.yeast-diagram { display: grid; grid-template-columns: 50px repeat(3,minmax(0,1fr)); gap: clamp(6px,2%,18px); align-items: end; background: var(--paper); border: 2px solid var(--charcoal); border-radius: var(--radius-small); padding: 14px 16px 18px; }
.yeast-scale, .yeast-glass-column { position: relative; height: 326px; min-width: 0; }
.yeast-scale-track { position: absolute; left: 0; right: 0; bottom: 33px; height: 245px; }
.yeast-scale-label { position: absolute; top: -23px; left: 8px; font-weight: 700; color: var(--purple); }
.yeast-scale-mark { position: absolute; left: 0; display: flex; align-items: center; gap: 5px; transform: translateY(50%); color: var(--purple); font-size: 0.82rem; font-weight: 800; white-space: nowrap; }
.yeast-scale-tick { display: block; width: 17px; border-top: 2px solid var(--purple); }
.yeast-glass-column { display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }
.yeast-glass-heading { position: absolute; z-index: 3; top: 0; left: 0; right: 0; display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center; }
.yeast-glass-heading strong { border: 2px solid var(--charcoal); border-radius: 999px; background: white; padding: 4px 10px; white-space: nowrap; font-size: .92rem; }
.yeast-amount-choice select { display: block; width: max-content; max-width: 100%; padding: 5px 7px; background: white; border: 2px solid var(--charcoal); border-radius: 8px; font: inherit; font-weight: 700; }
.yeast-amount-summary { max-width: 100%; font-size: .8rem; background: white; border-radius: 6px; padding: 3px 5px; white-space: nowrap; }
.yeast-glass { position: relative; display: block; overflow: hidden; width: min(100%, 118px); height: 245px; box-sizing: border-box; border: 3px solid #556b78; border-top: 2px solid #9dafb7; border-radius: 7px 7px 17px 17px; background: linear-gradient(90deg,#eaf5fb88 0%, #ffffff22 34%,#cfe7f17c 100%); box-shadow: inset 7px 0 9px #ffffffae, inset -5px 0 8px #adcedc7e, 0 7px 0 #d0d7d2; }
.yeast-liquid { position: absolute; left: 0; right: 0; bottom: 0; background: linear-gradient(110deg,#e7c187 0%,#f4dfae 48%,#cf9d67 100%); transition: height .28s ease; }
.yeast-liquid-bubbles { position: absolute; inset: 0; opacity: .32; background-image: radial-gradient(circle at 17% 55%, white 2px, transparent 3px), radial-gradient(circle at 64% 25%, white 3px, transparent 4px), radial-gradient(circle at 78% 76%, white 2px, transparent 3px), radial-gradient(circle at 34% 85%, white 3px, transparent 4px); background-size: 44px 56px; }
.yeast-foam { position: absolute; top: 0; left: 0; right: 0; background: radial-gradient(circle at 20% 25%,#ffffffbb 4px,transparent 6px) 0 0/24px 24px, radial-gradient(circle at 60% 70%,#f9f1db 5px,transparent 7px) 0 0/30px 28px, linear-gradient(180deg,#fff9eb,#f1e1c5); border-bottom: 2px solid #e2ca9d; }
.yeast-glass-highlight { pointer-events: none; position: absolute; inset: 4px auto 8px 7px; width: 7px; background: linear-gradient(180deg,#ffffffa8,#ffffff14); border-radius: 99px; }
.yeast-level-label { margin-top: 12px; min-height: 21px; font-weight: 800; color: var(--text); }
.yeast-results-bar { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.yeast-result-button { padding: 8px 11px; border: 2px solid var(--charcoal); border-radius: 999px; background: var(--paper); font: inherit; font-size: .88rem; font-weight: 700; cursor: pointer; }
.yeast-result-button.active { background: var(--mint); }
.yeast-result-button:hover { background: var(--soft-yellow); }
.yeast-reading-fields { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.yeast-reading-fields label { display: grid; gap: 5px; font-weight: 700; font-size: .85rem; }
.yeast-reading-fields input { width: 100%; min-width: 0; padding: 7px; border: 2px solid var(--charcoal); border-radius: 8px; font: inherit; background: white; box-sizing: border-box; }
.yeast-short-note { font-size: .84rem; color: var(--muted); margin: 8px 0 0; }
.yeast-plan { margin-top: 22px; }
.yeast-plan-title { margin-bottom: 10px; }
.yeast-table-wrap { max-width: 100%; overflow-x: auto; border: 2px solid var(--charcoal); border-radius: var(--radius-small); }
.yeast-table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: .93rem; }
.yeast-table th, .yeast-table td { padding: 10px 12px; border-bottom: 1px solid #d4cec4; text-align: center; overflow-wrap: anywhere; }
.yeast-table th:first-child { width: 35%; text-align: left; }
.yeast-table thead th { background: var(--soft-purple); font-weight: 800; }
.yeast-table thead th:nth-child(2) { background: #d9efe8; }
.yeast-table thead th:nth-child(3) { background: #ffe0d3; }
.yeast-table thead th:nth-child(4) { background: #def1f8; }
.yeast-table tr:last-child > * { border-bottom: 0; }
.yeast-table-changed { background: #e9dfff; }
.yeast-table-measure { background: var(--soft-green); font-weight: 700; }
.yeast-change-label { display: inline-block; margin-left: 4px; padding: 2px 4px; background: var(--purple); color: white; font-size: .66rem; border-radius: 5px; vertical-align: middle; }
.yeast-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.yeast-reset { --background: var(--orange); }
.yeast-check { --background: var(--mint); }
.yeast-method, .yeast-reflection { margin-top: 16px; padding: 13px 15px; background: var(--soft-blue); border: 2px solid var(--charcoal); border-radius: var(--radius-medium); }
.yeast-method { background: var(--soft-yellow); }
.yeast-method summary, .yeast-reflection summary { cursor: pointer; font-weight: 800; }
.yeast-method p { margin: 10px 0 4px; }
.yeast-method ol { margin: 8px 0 0; padding-left: 20px; }
.yeast-method li { margin-top: 5px; }
.yeast-reflection label { display: grid; gap: 6px; margin-top: 12px; font-weight: 700; }
.yeast-reflection textarea { resize: vertical; }
.yeast-step :focus-visible, .yeast-result-button:focus-visible, .yeast-amount-choice select:focus-visible,
.yeast-control select:focus-visible, .yeast-reading-fields input:focus-visible,
.yeast-reflection select:focus-visible, .yeast-reflection textarea:focus-visible { outline: 3px solid var(--purple); outline-offset: 3px; }
@media (max-width: 650px) {
  .yeast-control-grid { grid-template-columns: 1fr; }
  .yeast-diagram { grid-template-columns: 27px repeat(3,minmax(0,1fr)); padding: 12px 5px 14px; gap: 7px; }
  .yeast-scale, .yeast-glass-column { height: 284px; }
  .yeast-scale-track { height: 202px; }
  .yeast-glass { height: 202px; width: min(100%, 92px); }
  .yeast-glass-heading strong { font-size: .72rem; padding: 4px 3px; }
  .yeast-amount-choice select { font-size: .73rem; padding: 4px 2px; }
  .yeast-amount-summary { white-space: normal; }
  .yeast-scale-mark { font-size: .73rem; }
  .yeast-scale-tick { width: 10px; }
  .yeast-table th, .yeast-table td { padding: 9px 5px; font-size: .8rem; }
  .yeast-change-label { display: block; width: fit-content; margin: 2px 0 0; }
}
</style>
