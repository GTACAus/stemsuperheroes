<script setup>
import { computed, ref, watch } from 'vue';
import Button from '../Button.vue';
import ActivityFeedback from './ActivityFeedback.vue';

/* =========================================================
   YEAST BIG KAHUNA - DESIGN A FAIR TEST

   Based on Heidi's three-glass yeast experiment.
   This activity is for PLANNING, not recording results.

   1. CHANGE: choose yeast OR sugar and set an amount
      for Glass A, B and C.
   2. MEASURE: choose the height of the mixture after 10 min.
   3. CONTROL: keep all other conditions the same.

   The illustration shows STARTING levels only.
   No experimental outcomes are predicted or invented.
   ========================================================= */

const steps = [
  { id: 'change', label: '1. Change' },
  { id: 'measure', label: '2. Measure' },
  { id: 'control', label: '3. Control' },
];
const variableChoices = [
  { id: 'yeast', label: 'Yeast amount' },
  { id: 'sugar', label: 'Sugar amount' },
];
const glassLetters = ['A', 'B', 'C'];
const amounts = [0, 1, 2, 3]; // teaspoons
const temperatureChoices = ['Cool', 'Room temperature', 'Warm'];
const startingLevelChoices = [5, 6, 7, 8]; // centimetres
const scaleMarks = [12, 9, 6, 3, 0];
const maxScale = 14;

// Suggested settings based on Heidi's experiment setup.
function defaultControls() {
  return { yeast: 2, sugar: 2, temperature: 'Warm', startingLevel: 6 };
}
function defaultComparisons() {
  return { yeast: [0, 1, 2], sugar: [0, 1, 3] };
}

const activeStep = ref('change');
const variable = ref('yeast');
const selectedAmounts = ref(defaultComparisons());
const controls = ref(defaultControls());
const measureSelected = ref(false);
const controlsConfirmed = ref(false);
const feedback = ref(null);
const feedbackText = ref('');

const variedLabel = computed(() => variable.value === 'yeast' ? 'Yeast' : 'Sugar');
const sharedLabel = computed(() => variable.value === 'yeast' ? 'Sugar' : 'Yeast');
const sharedVariable = computed(() => variable.value === 'yeast' ? 'sugar' : 'yeast');

// All three glasses are derived from the SAME controls and selections.
// This keeps the illustration and the plan table in sync.
const glasses = computed(() => glassLetters.map((name, index) => ({
  name,
  yeast: variable.value === 'yeast' ? selectedAmounts.value.yeast[index] : controls.value.yeast,
  sugar: variable.value === 'sugar' ? selectedAmounts.value.sugar[index] : controls.value.sugar,
  temperature: controls.value.temperature,
  startingLevel: controls.value.startingLevel,
})));

function teaspoons(value) { return `${value} tsp`; }
function centimetres(value) { return `${value} cm`; }
function percentHeight(value) {
  return `${Math.max(0, Math.min(100, (value / maxScale) * 100))}%`;
}
function chooseVariable(next) {
  if (variableChoices.some(choice => choice.id === next)) variable.value = next;
}
function amountTaken(index, amount) {
  return selectedAmounts.value[variable.value].some((selected, otherIndex) =>
    otherIndex !== index && selected === amount);
}
function chooseAmount(index, rawValue) {
  const next = Number(rawValue);
  if (!amounts.includes(next) || amountTaken(index, next)) return;
  selectedAmounts.value[variable.value][index] = next;
}
function checkPlan() {
  const varied = selectedAmounts.value[variable.value];
  let issue = '';
  if (new Set(varied).size !== 3) issue = 'Choose three different amounts.';
  else if (!measureSelected.value) issue = 'Choose a measurement in Step 2.';
  else if (!controlsConfirmed.value) issue = 'Confirm the controls in Step 3.';
  feedback.value = issue ? 'try-again' : 'success';
  feedbackText.value = issue;
}
function reset() {
  activeStep.value = 'change';
  variable.value = 'yeast';
  selectedAmounts.value = defaultComparisons();
  controls.value = defaultControls();
  measureSelected.value = false;
  controlsConfirmed.value = false;
  feedback.value = null;
  feedbackText.value = '';
}

// Changing the recipe invalidates an earlier confirmation or feedback.
watch([variable, selectedAmounts, controls], () => {
  controlsConfirmed.value = false;
  feedback.value = null;
  feedbackText.value = '';
}, { deep: true, flush: 'sync' });
watch([measureSelected, controlsConfirmed], () => {
  feedback.value = null;
  feedbackText.value = '';
}, { flush: 'sync' });
</script>

<template>
  <section class="gtac-section yeast-kahuna" aria-label="Yeast fair test planner">
    <h2 class="yeast-title">Yeast Big Kahuna</h2>
    <p class="yeast-subtitle">Change one thing. Keep the rest the same.</p>

    <nav class="yeast-steps" aria-label="Fair test steps">
      <Button v-for="step in steps" :key="step.id" type="button"
        class="yeast-step" :class="{ active: activeStep === step.id }"
        :aria-pressed="activeStep === step.id"
        @click="activeStep = step.id">{{ step.label }}</Button>
    </nav>

    <!-- STEP 1: Choose which ingredient to change. -->
    <div class="yeast-step-content">
      <template v-if="activeStep === 'change'">
        <p class="yeast-prompt">What will you change?</p>
        <div class="yeast-choice-row">
          <Button v-for="choice in variableChoices" :key="choice.id" type="button"
            class="yeast-choice" :class="{ selected: variable === choice.id }"
            :aria-pressed="variable === choice.id"
            @click="chooseVariable(choice.id)">{{ choice.label }}</Button>
        </div>
      </template>

      <!-- STEP 2: The one measurement students will make after testing. -->
      <template v-else-if="activeStep === 'measure'">
        <p class="yeast-prompt">What will you measure?</p>
        <Button type="button" class="yeast-measure-choice"
          :class="{ selected: measureSelected }" :aria-pressed="measureSelected"
          @click="measureSelected = true">Mixture height after 10 min</Button>
      </template>

      <!-- STEP 3: Shared controls; the changed ingredient is intentionally absent. -->
      <template v-else>
        <p class="yeast-prompt">Keep these the same in all three glasses:</p>
        <div class="yeast-control-grid">
          <label class="yeast-control">
            <span>{{ sharedLabel }} amount</span>
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
            <span>Wait before measuring</span><strong>10 minutes</strong>
          </div>
        </div>
        <Button type="button" class="yeast-confirm" :class="{ confirmed: controlsConfirmed }"
          @click="controlsConfirmed = true">
          {{ controlsConfirmed ? '✓ Controls confirmed' : 'Confirm controls' }}
        </Button>
      </template>
    </div>

    <!-- A/C/B recipe selectors have their OWN rows above the glass illustrations. -->
    <div class="yeast-experiment-card">
      <div class="yeast-experiment-heading">
        <h3>Your Experiment</h3>
        <span class="yeast-state">Starting level · {{ centimetres(controls.startingLevel) }}</span>
      </div>

      <div class="yeast-diagram" role="group" aria-label="Three glasses at their starting levels">
        <div class="yeast-scale" aria-hidden="true">
          <div class="yeast-scale-track">
            <span class="yeast-scale-label">cm</span>
            <span v-for="mark in scaleMarks" :key="mark" class="yeast-scale-mark"
              :style="{ bottom: percentHeight(mark) }">
              <span class="yeast-scale-tick"></span>{{ mark }}
            </span>
          </div>
        </div>

        <div v-for="(glass, index) in glasses" :key="glass.name" class="yeast-glass-column">
          <div class="yeast-glass-heading">
            <strong>Glass {{ glass.name }}</strong>
            <select v-if="activeStep === 'change'" class="yeast-amount-select"
              :value="selectedAmounts[variable][index]"
              :aria-label="`${variedLabel} amount for Glass ${glass.name}`"
              @change="chooseAmount(index, $event.target.value)">
              <option v-for="amount in amounts" :key="amount" :value="amount"
                :disabled="amountTaken(index, amount)">{{ teaspoons(amount) }}</option>
            </select>
            <span v-else class="yeast-amount-summary">
              {{ teaspoons(glass[variable]) }} {{ variedLabel.toLowerCase() }}
            </span>
          </div>
          <div class="yeast-glass" role="img"
            :aria-label="`Glass ${glass.name}: ${teaspoons(glass.yeast)} yeast, ${teaspoons(glass.sugar)} sugar; starting level ${centimetres(glass.startingLevel)}`">
            <div class="yeast-liquid" :style="{ height: percentHeight(glass.startingLevel) }">
              <div class="yeast-liquid-bubbles" aria-hidden="true"></div>
            </div>
            <span class="yeast-glass-highlight" aria-hidden="true"></span>
          </div>
          <output class="yeast-level-label">{{ centimetres(glass.startingLevel) }}</output>
        </div>
      </div>
    </div>

    <!-- Planning table, not a results sheet. No fabricated readings. -->
    <div class="yeast-plan">
      <div class="yeast-plan-title">
        <h3>Your fair test plan</h3>
        <span>{{ controlsConfirmed ? '✓ Controls set' : 'Suggested settings' }}</span>
      </div>
      <div class="yeast-table-wrap">
        <table class="yeast-table">
          <thead>
            <tr>
              <th scope="col">Setting</th>
              <th v-for="glass in glasses" :key="glass.name" scope="col">{{ glass.name }}</th>
            </tr>
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
            <tr>
              <th scope="row">Water</th>
              <td v-for="glass in glasses" :key="glass.name">{{ glass.temperature }}</td>
            </tr>
            <tr>
              <th scope="row">At start</th>
              <td v-for="glass in glasses" :key="glass.name">{{ centimetres(glass.startingLevel) }}</td>
            </tr>
            <tr>
              <th scope="row">Measure after</th>
              <td v-for="glass in glasses" :key="glass.name">10 min</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="yeast-measure-summary">Measure: <strong>mixture height (cm)</strong> after 10 min.</p>
      <ActivityFeedback v-if="feedback" :success="feedback === 'success'"
        :success-feedback="`Only ${variedLabel.toLowerCase()} changes. The other settings match.`"
        :try-again-feedback="feedbackText" />
      <div class="yeast-actions">
        <Button type="button" class="yeast-reset" @click="reset">Reset</Button>
        <Button type="button" class="yeast-check" @click="checkPlan">Check plan</Button>
      </div>
    </div>

    <!-- Handy reference; collapsed so the planner stays compact. -->
    <details class="yeast-method">
      <summary>Materials & method</summary>
      <p>You'll need yeast, sugar, water, three matching glasses, rulers and tape.</p>
      <ol>
        <li>Attach rulers at the same height on each glass.</li>
        <li>Add the planned water, sugar and yeast. Stir.</li>
        <li>Record the starting level.</li>
        <li>After 10 minutes, measure the mixture again.</li>
      </ol>
    </details>
  </section>
</template>

<style scoped>
/* GTAC colours and outlines match the Egg Drop and Bread activities. */
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
.yeast-control-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.yeast-control { display: grid; gap: 5px; min-width: 0; padding: 10px 12px; background: var(--paper); border: 2px solid var(--charcoal); border-radius: var(--radius-small); font-weight: 700; }
.yeast-control select {
  width: 100%; min-width: 0; padding: 8px 10px; background: white;
  border: 2px solid var(--charcoal); border-radius: 10px; font: inherit;
}
.yeast-fixed strong { display: flex; align-items: center; min-height: 38px; font-size: .95rem; }
.yeast-confirm { margin-top: 12px; --background: var(--mint); }
.yeast-confirm.confirmed { --background: var(--soft-green); }
.yeast-experiment-card { padding: 18px; background: var(--cream); border: 2px solid var(--charcoal); border-radius: var(--radius-medium); box-shadow: var(--shadow-medium); }
.yeast-experiment-heading, .yeast-plan-title { display: flex; justify-content: space-between; gap: 10px; align-items: center; flex-wrap: wrap; }
.yeast-experiment-heading h3, .yeast-plan-title h3 { margin: 0; }
.yeast-state, .yeast-plan-title > span { padding: 5px 10px; border-radius: 999px; background: var(--soft-yellow); font-size: .78rem; font-weight: 700; }
.yeast-diagram {
  /* Header and glass rows are explicitly separated: no overlap. */
  --glass-header-space: 76px; --glass-height: 245px; --glass-footer-space: 27px;
  display: grid; grid-template-columns: 50px repeat(3, minmax(0, 1fr));
  gap: clamp(6px, 2%, 18px); align-items: stretch;
  background: var(--paper); border: 2px solid var(--charcoal);
  border-radius: var(--radius-small); padding: 16px 16px 14px; margin-top: 14px;
}
.yeast-scale { position: relative; min-width: 0; }
.yeast-scale-track { position: absolute; left: 0; right: 0; top: var(--glass-header-space); height: var(--glass-height); }
.yeast-scale-label { position: absolute; top: -23px; left: 7px; font-weight: 700; color: var(--purple); }
.yeast-scale-mark {
  position: absolute; left: 0; display: flex; align-items: center;
  gap: 5px; transform: translateY(50%); color: var(--purple);
  font-size: .82rem; font-weight: 800; white-space: nowrap;
}
.yeast-scale-tick { display: block; width: 17px; border-top: 2px solid var(--purple); }
.yeast-glass-column {
  display: grid; grid-template-rows: var(--glass-header-space) var(--glass-height) var(--glass-footer-space);
  justify-items: center; min-width: 0;
}
.yeast-glass-heading {
  display: flex; flex-direction: column; align-items: center;
  justify-content: flex-start; gap: 8px; padding-top: 2px;
  width: 100%; min-width: 0; text-align: center;
}
.yeast-glass-heading strong {
  border: 2px solid var(--charcoal); border-radius: 999px; background: white;
  padding: 4px 12px; white-space: nowrap; font-size: .92rem;
}
.yeast-amount-select {
  display: block; width: auto; max-width: min(100%, 130px); min-width: 80px;
  padding: 5px 10px; background: white; border: 2px solid var(--charcoal);
  border-radius: 8px; font: inherit; font-size: .91rem; font-weight: 700;
}
.yeast-amount-summary {
  max-width: 100%; font-size: .79rem; background: white;
  border-radius: 6px; padding: 4px 6px; white-space: nowrap;
}
.yeast-glass {
  position: relative; display: block; overflow: hidden; width: min(100%, 118px);
  height: var(--glass-height); box-sizing: border-box; border: 3px solid #556b78;
  border-top: 2px solid #9dafb7; border-radius: 7px 7px 17px 17px;
  background: linear-gradient(90deg,#eaf5fb88 0%,#ffffff22 34%,#cfe7f17c 100%);
  box-shadow: inset 7px 0 9px #ffffffae, inset -5px 0 8px #adcedc7e, 0 7px 0 #d0d7d2;
}
.yeast-liquid {
  position: absolute; left: 0; right: 0; bottom: 0;
  background: linear-gradient(110deg,#e7c187 0%,#f4dfae 48%,#cf9d67 100%);
  transition: height .28s ease;
}
.yeast-liquid-bubbles {
  position: absolute; inset: 0; opacity: .32;
  background-image: radial-gradient(circle at 17% 55%, white 2px, transparent 3px),
    radial-gradient(circle at 64% 25%, white 3px, transparent 4px),
    radial-gradient(circle at 78% 76%, white 2px, transparent 3px),
    radial-gradient(circle at 34% 85%, white 3px, transparent 4px);
  background-size: 44px 56px;
}
.yeast-glass-highlight {
  pointer-events: none; position: absolute; inset: 4px auto 8px 7px;
  width: 7px; background: linear-gradient(180deg,#ffffffa8,#ffffff14); border-radius: 99px;
}
.yeast-level-label {
  display: flex; justify-content: center; align-items: end; margin: 0;
  min-height: var(--glass-footer-space); font-weight: 800; color: var(--text);
}
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
.yeast-change-label { display: inline-block; margin-left: 4px; padding: 2px 4px; background: var(--purple); color: white; font-size: .66rem; border-radius: 5px; vertical-align: middle; }
.yeast-measure-summary { margin: 10px 0 0; color: var(--muted); font-size: .88rem; }
.yeast-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.yeast-reset { --background: var(--orange); }
.yeast-check { --background: var(--mint); }
.yeast-method {
  margin-top: 16px; padding: 13px 15px; background: var(--soft-yellow);
  border: 2px solid var(--charcoal); border-radius: var(--radius-medium);
}
.yeast-method summary { cursor: pointer; font-weight: 800; }
.yeast-method p { margin: 10px 0 4px; }
.yeast-method ol { margin: 8px 0 0; padding-left: 20px; }
.yeast-method li { margin-top: 5px; }
.yeast-amount-select:focus-visible, .yeast-control select:focus-visible { outline: 3px solid var(--purple); outline-offset: 3px; }
@media (max-width: 650px) {
  .yeast-control-grid { grid-template-columns: 1fr; }
  .yeast-diagram {
    --glass-header-space: 75px; --glass-height: 204px; --glass-footer-space: 24px;
    grid-template-columns: 29px repeat(3,minmax(0,1fr));
    padding: 12px 6px 12px; gap: 6px;
  }
  .yeast-glass { width: min(100%,92px); }
  .yeast-glass-heading { gap: 6px; padding-top: 3px; }
  .yeast-glass-heading strong { font-size: .73rem; padding: 4px 6px; }
  .yeast-amount-select { font-size: .77rem; min-width: 0; max-width: 100%; padding: 5px 2px; }
  .yeast-amount-summary { white-space: normal; font-size: .7rem; padding: 4px 3px; }
  .yeast-scale-mark { font-size: .72rem; }
  .yeast-scale-tick { width: 10px; }
  .yeast-table th, .yeast-table td { padding: 9px 5px; font-size: .8rem; }
  .yeast-change-label { display: block; width: fit-content; margin: 2px 0 0; }
}
</style>
