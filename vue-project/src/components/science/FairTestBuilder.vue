<script setup>
import { computed, ref } from 'vue';
import Button from '../Button.vue';
import ActivityFeedback from './ActivityFeedback.vue';

const stages = [
  { id: 'change', label: '1. Change', prompt: 'Choose the one variable that will be different.' },
  { id: 'measure', label: '2. Measure', prompt: 'Choose what you will measure.' },
  { id: 'control', label: '3. Control', prompt: 'Choose the variables that stay the same.' },
];

const currentStage = ref('change');

// The variables students can change or control, each with its dropdown options
const variables = [
  { id: 'material', label: 'Materials', options: ['Foam', 'Bubble Wrap', 'Paper'] },
  {
    id: 'layers',
    label: 'Number of Layers',
    // Change options compare two settings; Control options are a single shared setting
    options: ['No Layers vs. 1 Layer', 'No Layers vs. 2 Layers', '1 Layer vs. 2 Layers'],
    controlOptions: ['No Layers', '1 Layer', '2 Layers'],
  },
  {
    id: 'height',
    label: 'Drop Height',
    // Experiment A is always dropped from the baseline; Change picks B's height
    options: ['1.5m', '3m'],
    baseline: '1m',
    controlOptions: ['1m', '1.5m', '3m'],
  },
  // fixedPair: Change compares both options (A = first, B = second) with no dropdown
  { id: 'surface', label: 'Surface Type', options: ['Grass', 'Concrete'], fixedPair: true },
  { id: 'direction', label: 'Direction of Drop', options: ['Blunt End', 'Pointy End'], fixedPair: true },
];

// TODO: add these images to public/assets/images/fair-test/
const imageBase = `${import.meta.env.BASE_URL}assets/images/science/fair-test/`;
const defaultEggImage = `${imageBase}egg.png`;
// Wrapped egg on the canvas: one image per material and layer count
const eggImages = {
  Foam: {
    '1 Layer': `${imageBase}egg-foam-1.png`,
    '2 Layers': `${imageBase}egg-foam-2.png`
  },
  'Bubble Wrap': {
    '1 Layer': `${imageBase}egg-bubble-wrap-1.png`,
    '2 Layers': `${imageBase}egg-bubble-wrap-2.png`,
  },
  Paper: {
    '1 Layer': `${imageBase}egg-paper-1.png`,
    '2 Layers': `${imageBase}egg-paper-2.png`
  },
};
// Layers panel: one image per material and layer count
const layerImages = {
  Foam: {
    '1 Layer': `${imageBase}layers-foam-1.png`,
    '2 Layers': `${imageBase}layers-foam-2.png`
  },
  'Bubble Wrap': {
    '1 Layer': `${imageBase}layers-bubble-wrap-1.png`,
    '2 Layers': `${imageBase}layers-bubble-wrap-2.png`,
  },
  Paper: {
    '1 Layer': `${imageBase}layers-paper-1.png`,
    '2 Layers': `${imageBase}layers-paper-2.png`
  },
};
// Egg position down the ruler (matches the ruler markers)
const heightTop = { '1m': '61%', '1.5m': '53%', '3m': '31%' };
const surfaceClass = { Grass: 'soft-surface', Concrete: 'hard-surface' };

const measureLabel = 'Level of Protection';
const measureImage = ''; // TODO: replace with the real image path

// Student choices
const changeId = ref(''); // variable being changed
const changeValues = ref({}); // { variableId: chosen option } for the change variable
const measureSelected = ref(false);
const controlId = ref(''); // control variable whose dropdown is open
const controlValues = ref({}); // { variableId: chosen option } for each controlled variable

const getVariable = (id) => variables.find((v) => v.id === id);
const getControlOptions = (id) => getVariable(id).controlOptions || getVariable(id).options;

// [Experiment A, Experiment B] layers for each Number of Layers comparison
const layerPairs = {
  'No Layers vs. 1 Layer': ['No Layers', '1 Layer'],
  'No Layers vs. 2 Layers': ['No Layers', '2 Layers'],
  '1 Layer vs. 2 Layers': ['1 Layer', '2 Layers'],
};

function chooseChange(id) {
  changeId.value = id;
  // A variable that is now being changed can't also be controlled
  delete controlValues.value[id];
  if (controlId.value === id) controlId.value = '';
  // Experiment A uses the first option, so default B to the second to show a difference
  if (!changeValues.value[id]) changeValues.value[id] = getVariable(id).options[1];
}

function chooseControl(id) {
  controlId.value = id;
  if (!controlValues.value[id]) controlValues.value[id] = getControlOptions(id)[0];
}

// Every variable except the one being changed (all of them until one is chosen)
const controllableVariables = computed(() => variables.filter((v) => v.id !== changeId.value));

// Resolved settings for each experiment: controlled values are shared (first option until set);
// the changed variable is the first option in A and the dropdown choice in B
const lanes = computed(() =>
  ['A', 'B'].map((name) => {
    const settings = {};
    for (const v of variables) settings[v.id] = controlValues.value[v.id] || getControlOptions(v.id)[0];
    // Without a layers choice the egg is unwrapped, unless the material is being compared
    if (!controlValues.value.layers && changeId.value === 'material') settings.layers = '1 Layer';

    if (changeId.value === 'layers') {
      settings.layers = layerPairs[changeValues.value.layers][name === 'A' ? 0 : 1];
    } else if (changeId.value) {
      const variable = getVariable(changeId.value);
      settings[variable.id] = name === 'A' ? variable.baseline || variable.options[0] : changeValues.value[variable.id];
    }
    return { name, ...settings };
  })
);

// An egg is only shown wrapped when it has layers
const isWrapped = (lane) => lane.layers !== 'No Layers';

const changeSummary = computed(() => {
  if (!changeId.value) return '';
  const variable = getVariable(changeId.value);
  return {
    id: variable.id,
    label: variable.label,
    value: variable.fixedPair ? variable.options.join(' vs. ') : changeValues.value[variable.id]
  }
});

const measureSummary = computed(() => (measureSelected.value ? measureLabel : ''));
// One line per controlled variable that has a chosen value
const controlSummary = computed(() =>
  controllableVariables.value
    .filter((v) => controlValues.value[v.id])
    .map((v) => ({ id: v.id, label: v.label, value: controlValues.value[v.id] }))
);

// null until the student checks their design, then 'success' or 'try-again'
const feedback = ref(null);

// Change and Measure picked, and a value chosen for every controlled variable
function checkAllSelected() {
  return Boolean(changeId.value) && measureSelected.value && controllableVariables.value.every((v) => controlValues.value[v.id]);
}

function checkDesign() {
  feedback.value = checkAllSelected() ? 'success' : 'try-again';
}

function reset() {
  currentStage.value = 'change';
  changeId.value = '';
  changeValues.value = {};
  measureSelected.value = false;
  controlId.value = '';
  controlValues.value = {};
  feedback.value = null;
}
</script>

<template>
  <section class="gtac-section fair-test">
    <h2 class="fair-test-title">Build Your Fair Test Plan</h2>

    <div class="fair-test-instructions">
      <p>Follow the steps and watch as your <strong>fair test</strong> diagram is created.</p>

      <ol>
        <li>
          Click on the <strong><em>Change</em></strong> button. Then select the
          <strong><em>independent variable</em></strong> - what you will change. Then use the drop-down menu to make a
          choice from the selections offered.
        </li>
        <li>
          Click on the <strong><em>Measure</em></strong> button. Then select the
          <strong>dependent variable</strong> - what you will measure.
        </li>
        <li>
          Click on the <strong><em>Control</em></strong> button. Then select all the <strong>variables</strong> you
          must keep the same.
        </li>
      </ol>
    </div>

    <!-- Progress steps -->
    <nav class="fair-test-progress" aria-label="Investigation sections">
      <Button
        v-for="stage in stages"
        :key="stage.id"
        type="button"
        class="fair-test-step"
        :class="{ active: currentStage === stage.id }"
        @click="currentStage = stage.id"
      >
        {{ stage.label }}
      </Button>
    </nav>

    <!-- Controls for the current stage -->
    <div class="fair-test-controls" aria-label="Experiment choices">
      <!-- Change: pick one variable, then choose its option -->
      <template v-if="currentStage === 'change'">
        <p class="control-instruction">What will you change?</p>

        <div class="choice-buttons">
          <Button
            v-for="variable in variables"
            :key="variable.id"
            type="button"
            class="choice-button"
            :class="{ selected: changeId === variable.id }"
            @click="chooseChange(variable.id)"
          >
            {{ variable.label }}
          </Button>
        </div>

        <!-- Fixed comparisons (surface, direction) have no dropdown, just the two settings -->
        <div v-if="changeId && getVariable(changeId).fixedPair" class="revealed-menu">
          <strong>{{ getVariable(changeId).options.join(' vs. ') }}</strong>
        </div>

        <div v-else-if="changeId" class="revealed-menu">
          <label for="change-select">{{ getVariable(changeId).label }}</label>
          <select id="change-select" v-model="changeValues[changeId]">
            <option v-for="option in getVariable(changeId).options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
      </template>

      <!-- Measure: one button that reveals an image -->
      <template v-else-if="currentStage === 'measure'">
        <p class="control-instruction">What will you measure?</p>

        <div class="choice-buttons">
          <Button
            type="button"
            class="choice-button"
            :class="{ selected: measureSelected }" @click="measureSelected = true"
          >
            {{ measureLabel }}
          </Button>
        </div>

        <div v-if="measureSelected" class="measure-image">
          <img v-if="measureImage" :src="measureImage" :alt="measureLabel" />
          <span v-else>Image placeholder</span>
        </div>
      </template>

      <!-- Control: all variables; the one being changed is disabled -->
      <template v-else>
        <p class="control-instruction">What will you keep the same?</p>

        <div class="choice-buttons">
          <Button
            v-for="variable in variables"
            :key="variable.id"
            type="button"
            class="choice-button"
            :class="{ selected: controlId === variable.id }"
            :disabled="changeId === variable.id"
            @click="chooseControl(variable.id)"
          >
            {{ variable.label }}
          </Button>
        </div>

        <div v-if="controlId" class="revealed-menu">
          <label for="control-select">{{ getVariable(controlId).label }}</label>
          <select id="control-select" v-model="controlValues[controlId]">
            <option v-for="option in getControlOptions(controlId)" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
      </template>
    </div>

    <!-- Experiment diagram -->
    <div class="fair-test-card">
      <div class="fair-test-heading">
        <h3>Your Experiment</h3>
        <p>{{ stages.find((s) => s.id === currentStage).prompt }}</p>
      </div>

      <div class="fair-test-visual">
        <div class="fair-test-canvas" aria-label="Visual experiment builder">
          <div v-if="changeId === 'height' || controlValues.height" class="ruler" aria-hidden="true">
            <span class="ruler-mark" style="top: 32%">3 m</span>
            <span class="ruler-mark" style="top: 66%">1.5 m</span>
            <span class="ruler-mark" style="top: 77%">1 m</span>
          </div>

          <template v-for="lane in lanes" :key="lane.name">
            <div class="lane-label" :class="`lane-${lane.name.toLowerCase()}`">Experiment {{ lane.name }}</div>
            <div class="drop-line" :class="`lane-${lane.name.toLowerCase()}`"></div>
            <img
              class="egg"
              :class="`lane-${lane.name.toLowerCase()}`"
              :style="{
                top: heightTop[lane.height],
                transform: `translate(-50%, -50%) rotate(${lane.direction === 'Pointy End' ? 180 : 0}deg)`,
              }"
              :src="isWrapped(lane) ? eggImages[lane.material][lane.layers] : defaultEggImage"
              :alt="
                isWrapped(lane) ? `Egg protected with ${lane.layers} of ${lane.material}` : 'Egg with no protection'
              "
            />
            <div class="surface" :class="[`lane-${lane.name.toLowerCase()}`, surfaceClass[lane.surface]]">
              <span>{{ lane.surface }}</span>
            </div>
          </template>
        </div>

        <!-- Number of layers -->
        <aside class="layers-panel" aria-label="Number of layers">
          <h4>Number of layers</h4>

          <figure>
            <div v-if="isWrapped(lanes[1]) && lanes[0].layers == '1 Layer' && lanes[1].layers == '2 Layers'">
              <img
                :src="layerImages[lanes[0].material][lanes[0].layers]"
                :alt="`${lanes[0].layers} of ${lanes[0].material}`"
              />
              <figcaption>{{ lanes[0].layers }}</figcaption>
            </div>
            <img
              :src="isWrapped(lanes[1]) ? layerImages[lanes[1].material][lanes[1].layers] : defaultEggImage"
              :alt="isWrapped(lanes[1]) ? `${lanes[1].layers} of ${lanes[1].material}` : 'Egg with no protection'"
            />
            <figcaption>{{ lanes[1].layers }}</figcaption>
          </figure>
        </aside>
      </div>
    </div>

    <!-- Summary of the design -->
    <div class="fair-test-blueprint">
      <h3>Fair test experiment design</h3>

      <div class="blueprint-grid">
        <article class="blueprint-card blueprint-change">
          <strong>Change</strong>
          <span v-if="!changeSummary">Not selected yet</span>
          <span v-if="changeSummary"><strong>{{ changeSummary.label }}:</strong> {{ changeSummary.value }}</span>
        </article>
        <article class="blueprint-card blueprint-measure">
          <strong>Measure</strong>
          <span>{{ measureSummary || 'Not selected yet' }}</span>
        </article>
        <article class="blueprint-card blueprint-control">
          <strong>Control</strong>
          <span v-if="!controlSummary.length">Not selected yet</span>
          <span v-for="item in controlSummary" :key="item"><strong>{{ item.label }}:</strong> {{ item.value }}</span>
        </article>
      </div>

      <ActivityFeedback
        v-if="feedback"
        :success="feedback === 'success'"
        success-feedback="You have chosen what to change, what to measure and what to keep the same."
        try-again-feedback="Make sure you have chosen what to change, what to measure, and a setting for every variable you keep the same."
      />

      <div class="fair-test-actions">
        <Button type="button" class="reset-button" @click="reset">Reset</Button>
        <Button type="button" class="check-fair-test-button" @click="checkDesign">
          Check fair test experiment design
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fair-test-title {
  margin: 0 0 20px;
  text-align: center;
}

.fair-test-instructions {
  margin-bottom: 24px;
  padding: 18px 22px;

  background: var(--soft-blue);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-medium);

  line-height: 1.6;
}

.fair-test-instructions ol {
  display: grid;
  gap: 8px;

  margin: 12px 0 0;
  padding-left: 22px;
}

/* ---------- Progress ---------- */
.fair-test-progress {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 20px;
}

.fair-test-step {
  --padding: 8px 16px;
  --background: var(--paper);
  --color: var(--text);
  --border-radius: 999px;
  
  --background-hover: var(--soft-yellow);
  --translate-amount-hover: -2px;
  --box-shadow-hover: var(--shadow-medium);

  --background-active: var(--yellow);
  --translate-amount-active: 3px;
  --box-shadow-active: none;
}

.fair-test-controls {
  margin-bottom: 20px;
}

.control-instruction {
  margin: 0 0 10px;
  font-weight: 700;
}

.choice-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.choice-button {
  --padding: 12px 20px;
  --background: var(--paper);
  --color: var(--text);
  
  --background-hover: var(--soft-green);

  --background-active: var(--mint);

  --animation: none;
}

.control-note {
  margin: 10px 0 0;

  color: var(--muted);
  font-size: 0.9rem;
}

.revealed-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  margin-top: 14px;
  padding: 14px 16px;

  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

.revealed-menu label {
  font-weight: 700;
}

.revealed-menu select {
  padding: 8px 12px;

  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);

  font: inherit;
}

.measure-image {
  display: grid;
  place-items: center;

  min-height: 220px;
  margin-top: 14px;

  background: var(--soft-yellow);
  border: 2px dashed var(--charcoal);
  border-radius: var(--radius-small);

  color: var(--muted);
}

.measure-image img {
  max-width: 100%;
}

/* ---------- Diagram ---------- */
.fair-test-card {
  padding: 20px;
  margin-bottom: 24px;

  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-medium);
}

.fair-test-heading h3 {
  margin: 0 0 4px;
}

.fair-test-heading p {
  margin: 0 0 16px;
  color: var(--muted);
}

.fair-test-visual {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 16px;

  align-items: start;
}

.fair-test-canvas {
  position: relative;
  min-height: 560px;
  overflow: hidden;

  background: linear-gradient(to bottom, #fffdf4 0 88%, #eee7d6 88% 100%);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

/* ---------- Ruler ---------- */
.ruler {
  position: absolute;
  left: 4.5%;
  top: 8%;

  width: 78px;
  height: 70%;

  background: #fff8c9;
  border: 4px solid var(--charcoal);
  border-radius: 10px;
}

/* Horizontal height markers */
.ruler-mark {
  position: absolute;
  left: 88px;
  width: 72px;

  padding-top: 7px;
  border-top: 3px solid var(--purple);

  color: var(--purple);
  font-size: 1rem;
  font-weight: 700;
}

/* ---------- Lanes ---------- */
.lane-label {
  position: absolute;
  top: 18px;
  transform: translateX(-50%);

  padding: 6px 12px;

  background: #fff;
  border: 2px solid var(--charcoal);
  border-radius: 999px;

  font-weight: 700;
}

.drop-line {
  position: absolute;
  top: 17%;
  bottom: 18%;

  border-left: 3px dashed #888;
  opacity: 0.65;
}

.egg {
  position: absolute;
  z-index: 3;

  width: 90px;
  height: auto;

  transition:
    top 0.25s,
    transform 0.25s;
}

.surface {
  position: absolute;
  bottom: 8%;

  display: grid;
  place-items: center;

  width: 28%;
  height: 58px;

  border: 4px solid var(--charcoal);
  border-radius: 10px 10px 4px 4px;

  font-weight: 700;
}

.soft-surface span {
  color: var(--paper);
}

.hard-surface {
  background: repeating-linear-gradient(90deg, #dddddd 0 42px, #b8b8b8 42px 45px);
}

.soft-surface {
  /* Blades of grass (thin vertical strokes at two spacings) over a green base */
  background:
    repeating-linear-gradient(80deg, transparent 0 5px, #2e7d32 5px 7px, transparent 7px 11px),
    repeating-linear-gradient(100deg, transparent 0 8px, #81c784 8px 10px, transparent 10px 15px),
    linear-gradient(to bottom, #66bb6a, #388e3c);
}

/* Experiment A / B horizontal positions */
.lane-label.lane-a,
.drop-line.lane-a,
.egg.lane-a {
  left: 43%;
}

.lane-label.lane-b,
.drop-line.lane-b,
.egg.lane-b {
  left: 72%;
}

.surface.lane-a {
  left: 29%;
}

.surface.lane-b {
  left: 58%;
}

/* ---------- Layers panel ---------- */
.layers-panel {
  display: grid;
  gap: 12px;

  padding: 14px;

  background: var(--soft-purple);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

.layers-panel h4 {
  margin: 0;
}

.layers-panel figure {
  display: grid;
  gap: 6px;

  margin: 0;
}

.layers-panel img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;

  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

.layers-panel figcaption {
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
}

.layers-panel div figcaption {
  margin-top: 5px;
}

/* ---------- Blueprint ---------- */
.fair-test-blueprint h3 {
  margin: 0 0 14px;
}

.blueprint-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.blueprint-card {
  --border-top-color: none;
  display: grid;
  gap: 6px;

  padding: 14px;

  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-top: 6px solid var(--border-top-color);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-medium)
}

.blueprint-card > strong {
  font-size: 20px;
  text-align: center;
}

.blueprint-change {
  --border-top-color: var(--yellow);
}

.blueprint-measure {
  --border-top-color: var(--purple);
}

.blueprint-control {
  --border-top-color: var(--green);
}

.fair-test-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 18px;
}

.reset-button {
  --background: var(--orange);

  --color-hover: white;

  --background-active: var(--purple);
  --color-active: white;
}

.check-fair-test-button {
  --background: var(--blue);
  --color: var(--text);

  --background-hover: var(--purple);
  --color-hover: white;
    
  --background-active: var(--purple);
  --color-active: white;
}

@media (max-width: 650px) {
  .fair-test-visual {
    grid-template-columns: 1fr;
  }

  .blueprint-grid {
    grid-template-columns: 1fr;
  }
}
</style>
