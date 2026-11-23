<script setup>
import { computed, ref, watch } from "vue";
import Button from "../Button.vue";
import ActivityFeedback from "./ActivityFeedback.vue";

/* =========================================================
   EGG DROP BIG KAHUNA - A/B FAIR TEST BUILDER

   1. CHANGE: Choose one variable and set Egg A and Egg B
      separately. Matching choices are disabled.
   2. MEASURE: Choose egg damage.
   3. CONTROL: Choose the settings that stay the same.

   The diagram, ruler and summary all read the same settings.
   No wrapping is a valid comparison group. For Materials,
   the shared layer setting only applies to wrapped eggs.
   ========================================================= */

const stages = [
  { id: "change", label: "1. Change" },
  { id: "measure", label: "2. Measure" },
  { id: "control", label: "3. Control" },
];
const currentStage = ref("change");

const variables = [
  { id: "material", label: "Materials", options: ["No wrapping", "Foam", "Bubble Wrap", "Paper"] },
  { id: "layers", label: "Number of Layers", options: ["No Layers", "1 Layer", "2 Layers"] },
  { id: "height", label: "Drop Height", options: ["1m", "1.5m", "3m"] },
  { id: "surface", label: "Surface Type", options: ["Soft Surface", "Hard Surface"] },
  { id: "direction", label: "Direction of Drop", options: ["Blunt End", "Pointy End"] },
];

/* These starting pairs are already different and show up instantly. */
const startingPairs = {
  material: ["Foam", "Bubble Wrap"],
  layers: ["No Layers", "1 Layer"],
  height: ["1m", "1.5m"],
  surface: ["Soft Surface", "Hard Surface"],
  direction: ["Blunt End", "Pointy End"],
};
const startingControls = {
  material: "Foam",
  layers: "1 Layer",
  height: "1m",
  surface: "Soft Surface",
  direction: "Blunt End",
};
const freshPairs = () => Object.fromEntries(
  Object.entries(startingPairs).map(([id, pair]) => [id, [...pair]])
);

const changeId = ref("material");
const comparisons = ref(freshPairs());
const controls = ref({ ...startingControls });
const measureSelected = ref(false);
const showDamageScale = ref(false); // The image can be opened and closed independently.
const controlConfirmed = ref(false);
const feedback = ref(null);
const feedbackMessage = ref("");

const imageBase = `${import.meta.env.BASE_URL}assets/images/science/fair-test/`;
const eggPlain = `${imageBase}egg.png`;
const eggImages = {
  Foam: { "1 Layer": `${imageBase}egg-foam-1.png`, "2 Layers": `${imageBase}egg-foam-2.png` },
  "Bubble Wrap": { "1 Layer": `${imageBase}egg-bubble-wrap-1.png`, "2 Layers": `${imageBase}egg-bubble-wrap-2.png` },
  Paper: { "1 Layer": `${imageBase}egg-paper-1.png`, "2 Layers": `${imageBase}egg-paper-2.png` },
};
const measureImage = `${imageBase}protection-scale.png`;
const heightMarkers = ["3m", "1.5m", "1m"];
const releaseLevel = {
  "1m": "var(--release-1m)",
  "1.5m": "var(--release-1-5m)",
  "3m": "var(--release-3m)",
};
const surfaceClass = { "Soft Surface": "soft-surface", "Hard Surface": "hard-surface" };
const changedPart = {
  material: "the wrapping material",
  layers: "the number of layers",
  height: "the drop height",
  surface: "the surface",
  direction: "the drop direction",
};

const selectedVariable = computed(() => variables.find(v => v.id === changeId.value));
const controllableVariables = computed(() => variables.filter(v => v.id !== changeId.value));

/* No second variable can be chosen as a control if it is being changed. */
function controlOptions(variable) {
  if (variable.id === "material") return ["Foam", "Bubble Wrap", "Paper"];
  if (variable.id === "layers" && changeId.value === "material") {
    return ["1 Layer", "2 Layers"];
  }
  return variable.options;
}

function displaySetting(value) {
  return {
    "No Layers": "No wrapping",
    "1 Layer": "1 layer",
    "2 Layers": "2 layers",
    "1m": "1 m",
    "1.5m": "1.5 m",
    "3m": "3 m",
  }[value] || value;
}

/* Change the kind of comparison without clearing unrelated controls. */
function chooseChange(id) {
  if (changeId.value === id) return;
  changeId.value = id;
  if (id === "material" && controls.value.layers === "No Layers") {
    controls.value.layers = "1 Layer";
  }
}

/* Each egg has its OWN selector. The other egg's choice is unavailable. */
function setEggChoice(eggIndex, value) {
  const options = selectedVariable.value.options;
  if (!options.includes(value)) return;
  const otherIndex = eggIndex === 0 ? 1 : 0;
  if (comparisons.value[changeId.value][otherIndex] === value) return;
  comparisons.value[changeId.value][eggIndex] = value;
}
function isOtherEggChoice(eggIndex, value) {
  return comparisons.value[changeId.value][eggIndex === 0 ? 1 : 0] === value;
}

/* ALL visual elements use this exact A/B resolved experiment state. */
const lanes = computed(() => ["A", "B"].map((name, index) => ({
  name,
  ...controls.value,
  [changeId.value]: comparisons.value[changeId.value][index],
})));

function isWrapped(lane) {
  return lane.material !== "No wrapping" && lane.layers !== "No Layers";
}
function eggSrc(lane) {
  return isWrapped(lane) ? eggImages[lane.material]?.[lane.layers] || eggPlain : eggPlain;
}
function eggDescription(lane) {
  return isWrapped(lane)
    ? `${lane.material}, ${displaySetting(lane.layers)}`
    : "No wrapping";
}
function displayTableCell(lane, variableId) {
  // An unwrapped egg has no physical wrapping layers. Show a dash rather
  // than pretending a layer exists. Other settings remain shared.
  if (variableId === "layers" && lane.material === "No wrapping") return "—";
  return displaySetting(lane[variableId]);
}
const tableRows = computed(() => variables.map(v => ({
  id: v.id,
  label: v.id === "layers" && changeId.value === "material" ? "Layers (if wrapped)" : v.label,
  changed: changeId.value === v.id,
  a: displayTableCell(lanes.value[0], v.id),
  b: displayTableCell(lanes.value[1], v.id),
})));

function clearFeedback() {
  feedback.value = null;
  feedbackMessage.value = "";
}
/* Edits invalidate the previous confirmation and success message. */
watch([changeId, comparisons, controls], () => {
  controlConfirmed.value = false;
  clearFeedback();
}, { deep: true, flush: "sync" });
watch([measureSelected, controlConfirmed], clearFeedback, { flush: "sync" });

function getDesignIssue() {
  const pair = comparisons.value[changeId.value];
  if (!pair || pair[0] === pair[1]) return "Choose two different options for the eggs.";
  if (!measureSelected.value) return "Step 2: Choose what to measure.";
  if (!controlConfirmed.value) return "Step 3: Confirm the controls.";

  const [a, b] = lanes.value;
  const changed = variables.filter(v => a[v.id] !== b[v.id]).map(v => v.id);
  if (changed.length !== 1 || changed[0] !== changeId.value) {
    return "Change just one thing between the eggs.";
  }
  if (changeId.value === "material" && controls.value.layers === "No Layers") {
    return "Choose 1 or 2 layers for the wrapped egg.";
  }
  return "";
}
function checkDesign() {
  const issue = getDesignIssue();
  feedbackMessage.value = issue;
  feedback.value = issue ? "try-again" : "success";
}
function reset() {
  currentStage.value = "change";
  changeId.value = "material";
  comparisons.value = freshPairs();
  controls.value = { ...startingControls };
  measureSelected.value = false;
  showDamageScale.value = false;
  controlConfirmed.value = false;
  clearFeedback();
}
</script>

<template>
  <section class="gtac-section fair-test">
    <h2 class="fair-test-title">Build Your Fair Test Plan</h2>
    <p class="fair-test-instructions">Change one thing. Keep the rest the same.</p>

    <nav class="fair-test-progress" aria-label="Investigation sections">
      <Button
        v-for="stage in stages"
        :key="stage.id"
        type="button"
        class="fair-test-step"
        :class="{ active: currentStage === stage.id }"
        :aria-pressed="currentStage === stage.id"
        @click="currentStage = stage.id"
      >{{ stage.label }}</Button>
    </nav>

    <div class="fair-test-controls">
      <!-- Step 1: select the variable here; choose the two values ABOVE the eggs. -->
      <template v-if="currentStage === 'change'">
        <p class="control-instruction">What will you change?</p>
        <div class="choice-buttons">
          <Button
            v-for="variable in variables"
            :key="variable.id"
            type="button"
            class="choice-button"
            :class="{ selected: changeId === variable.id }"
            :aria-pressed="changeId === variable.id"
            @click="chooseChange(variable.id)"
          >{{ variable.label }}</Button>
        </div>
      </template>

      <!-- Step 2: egg damage is the measured outcome. -->
      <template v-else-if="currentStage === 'measure'">
        <p class="control-instruction">What will you measure?</p>
        <div class="choice-buttons">
          <Button
            type="button"
            class="choice-button"
            :class="{ selected: measureSelected }"
            :aria-pressed="measureSelected"
            @click="measureSelected = true; showDamageScale = true"
          >Egg damage</Button>
          <button
            v-if="measureSelected"
            type="button"
            class="measure-toggle"
            :aria-expanded="showDamageScale"
            aria-controls="egg-damage-scale"
            @click="showDamageScale = !showDamageScale"
          >{{ showDamageScale ? 'Hide scale' : 'View damage scale' }}</button>
        </div>
        <figure
          v-if="measureSelected"
          v-show="showDamageScale"
          id="egg-damage-scale"
          class="measure-image"
        >
          <img
            :src="measureImage"
            alt="Egg damage scale: 1 means no cracks; 5 means the egg has broken open."
          />
        </figure>
      </template>

      <!-- Step 3: every control is shared by A and B and starts pre-filled. -->
      <template v-else>
        <p class="control-instruction">Keep these the same for both eggs:</p>
        <div class="control-grid">
          <label
            v-for="variable in controllableVariables"
            :key="variable.id"
            class="control-field"
          >
            <span>{{ variable.id === 'layers' && changeId === 'material'
              ? 'Layers (if wrapped)' : variable.label }}</span>
            <select v-model="controls[variable.id]">
              <option v-for="option in controlOptions(variable)" :key="option" :value="option">
                {{ displaySetting(option) }}
              </option>
            </select>
          </label>
        </div>
        <Button
          type="button"
          class="confirm-controls"
          :class="{ 'is-confirmed': controlConfirmed }"
          @click="controlConfirmed = true"
        >{{ controlConfirmed ? '✓ Controls confirmed' : 'Confirm controls' }}</Button>
      </template>
    </div>

    <div class="fair-test-card">
      <h3>Your Experiment</h3>
      <div class="fair-test-canvas" aria-label="Two egg-drop experiments with a height ruler">
        <!-- ALWAYS show the same tall ruler. The marks align to the egg bottoms. -->
        <div class="height-guide" aria-hidden="true">
          <div class="height-guide-rail"></div>
          <div
            v-for="marker in heightMarkers"
            :key="marker"
            class="height-guide-mark"
            :style="{ top: releaseLevel[marker] }"
          >
            <span class="height-guide-tick"></span>
            <span>{{ displaySetting(marker) }}</span>
          </div>
        </div>

        <template v-for="(lane, index) in lanes" :key="lane.name">
          <div class="lane-heading" :class="`lane-${lane.name.toLowerCase()}`">
            <span class="lane-title">Experiment {{ lane.name }}</span>
            <label v-if="currentStage === 'change'" class="lane-choice">
              <span class="sr-only">Choose {{ selectedVariable.label }} for Egg {{ lane.name }}</span>
              <select
                :value="comparisons[changeId][index]"
                :aria-label="`${selectedVariable.label} for Egg ${lane.name}`"
                @change="setEggChoice(index, $event.target.value)"
              >
                <option
                  v-for="option in selectedVariable.options"
                  :key="option"
                  :value="option"
                  :disabled="isOtherEggChoice(index, option)"
                >{{ displaySetting(option) }}</option>
              </select>
            </label>
            <span v-else class="lane-choice-summary">{{ displaySetting(lane[changeId]) }}</span>
          </div>

          <div class="drop-line" :class="`lane-${lane.name.toLowerCase()}`"></div>
          <!-- Transparent padding in the PNG is compensated for below.
               The metre positions and ruler tick marks remain unchanged. -->
          <img
            class="egg"
            :class="`lane-${lane.name.toLowerCase()}`"
            :style="{
              top: `calc(${releaseLevel[lane.height]} + var(--egg-image-bottom-inset))`,
              transform: `translate(-50%, -100%) rotate(${lane.direction === 'Pointy End' ? 180 : 0}deg)`,
            }"
            :src="eggSrc(lane)"
            :alt="`Egg ${lane.name}: ${eggDescription(lane)}, dropped from ${displaySetting(lane.height)}`"
          />
          <div
            class="surface"
            :class="[`lane-${lane.name.toLowerCase()}`, surfaceClass[lane.surface]]"
          ><span>{{ lane.surface }}</span></div>
        </template>
      </div>
    </div>

    <!-- Live table: never store duplicate A/B settings here. -->
    <div class="fair-test-blueprint">
      <div class="blueprint-title-row">
        <h3>Your fair test plan</h3>
        <span class="blueprint-status" :class="{ 'is-confirmed': controlConfirmed }">
          {{ controlConfirmed ? '✓ Controls set' : 'Suggested settings' }}
        </span>
      </div>
      <div class="blueprint-table-wrap">
        <table class="blueprint-table">
          <thead><tr><th scope="col">Setting</th><th scope="col">Egg A</th><th scope="col">Egg B</th></tr></thead>
          <tbody>
            <tr v-for="row in tableRows" :key="row.id" :class="{ 'blueprint-row--change': row.changed }">
              <th scope="row">
                {{ row.label }}
                <span v-if="row.changed" class="blueprint-pill blueprint-pill--change">Change</span>
              </th>
              <td>{{ row.a }}</td>
              <td>{{ row.b }}</td>
            </tr>
            <tr class="blueprint-row--measure">
              <th scope="row">Measure</th>
              <td colspan="2" :class="{ 'blueprint-cell--pending': !measureSelected }">
                {{ measureSelected ? 'Egg damage' : 'Choose in Step 2' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ActivityFeedback
        v-if="feedback"
        :success="feedback === 'success'"
        :success-feedback="`Only ${changedPart[changeId]} changes. The rest matches.`"
        :try-again-feedback="feedbackMessage"
      />
      <div class="fair-test-actions">
        <Button type="button" class="reset-button" @click="reset">Reset</Button>
        <Button type="button" class="check-fair-test-button" @click="checkDesign">Check plan</Button>
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
  margin: 0 0 18px;
  color: var(--muted);
  font-weight: 700;
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

/* Small, optional reference image. It no longer takes over the page. */
.measure-toggle {
  padding: 9px 14px;
  background: var(--paper);
  color: var(--text);
  border: 2px solid var(--charcoal);
  border-radius: 10px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.measure-toggle:hover {
  background: var(--soft-yellow);
}
.measure-toggle:focus-visible {
  outline: 3px solid var(--purple);
  outline-offset: 2px;
}
.measure-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(100%, 720px);
  margin: 12px auto 0;
  padding: 8px;
  background: white;
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  box-sizing: border-box;
}
.measure-image img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 235px;
  object-fit: contain;
}

/* ---------- Shared controls ---------- */
.control-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.control-field {
  display: grid;
  gap: 6px;
  min-width: 0;
  padding: 11px 13px;
  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  font-weight: 700;
}

.control-field select {
  width: 100%;
  min-width: 0;
  padding: 8px 10px;
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  background: white;
  font: inherit;
}

.confirm-controls {
  --background: var(--mint);
  margin-top: 12px;
}
.confirm-controls.is-confirmed { --background: var(--soft-green); }

/* ---------- Diagram ---------- */
.fair-test-card {
  padding: 20px;
  margin-bottom: 24px;

  background: var(--cream);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-medium);
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
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 16px;
  align-items: start;
}

/* Give the A/B comparison the full width when no wrapping panel is needed. */
.fair-test-visual--full {
  grid-template-columns: minmax(0, 1fr);
}

.fair-test-canvas {
  /* A shared scale keeps the diagram, egg bottoms and guide in sync.
     Relative spacing: 1m = 52px, 1.5m = 78px, 3m = 156px. */
  --surface-height: 58px;
  --release-1m: calc(92% - var(--surface-height) - 52px);
  --release-1-5m: calc(92% - var(--surface-height) - 78px);
  --release-3m: calc(92% - var(--surface-height) - 156px);

  position: relative;
  min-height: 455px;
  overflow: hidden;

  background: linear-gradient(to bottom, #fffdf4 0 88%, #eee7d6 88% 100%);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

/* ---------- Height guide ---------- */
/* Every purple tick is at the exact same CSS top as an egg's bottom edge
   when that drop height is selected. The rail ends at the surface's top. */
.height-guide {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.height-guide-rail {
  position: absolute;
  left: 5%;
  top: var(--release-3m);
  bottom: calc(8% + var(--surface-height));
  box-sizing: border-box;
  width: 20px;
  background: #fff8c9;
  border: 3px solid var(--charcoal);
  border-radius: 7px;
}

.height-guide-mark {
  position: absolute;
  left: calc(5% + 10px);
  display: flex;
  align-items: center;
  gap: 7px;
  transform: translateY(-50%);
  color: var(--purple);
  font-size: 0.92rem;
  font-weight: 800;
  white-space: nowrap;
}

.height-guide-tick {
  display: block;
  width: 54px;
  border-top: 3px solid var(--purple);
}

.height-guide-note {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.45;
}

/* ---------- Lanes ---------- */
.lane-label {
  position: absolute;
  top: 18px;
  transform: translateX(-50%);
  z-index: 4;
  padding: 6px 12px;
  background: #fff;
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  font-weight: 700;
  white-space: nowrap;
}

/* Describe the wrapping on each egg, instead of relying on pictures alone. */
.lane-wrap-label {
  position: absolute;
  top: 62px;
  transform: translateX(-50%);
  z-index: 4;
  width: 29%;
  padding: 3px 5px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
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
  box-sizing: border-box;

  display: grid;
  place-items: center;

  width: 28%;
  height: var(--surface-height);

  border: 4px solid var(--charcoal);
  border-radius: 10px 10px 4px 4px;

  font-weight: 700;
}

.soft-surface span {
  color: var(--paper);
}

.hard-surface {
  background: repeating-linear-gradient(
    90deg,
    #dddddd 0 42px,
    #b8b8b8 42px 45px
  );
}

.soft-surface {
  /* Blades of grass (thin vertical strokes at two spacings) over a green base */
  background:
    repeating-linear-gradient(
      80deg,
      transparent 0 5px,
      #2e7d32 5px 7px,
      transparent 7px 11px
    ),
    repeating-linear-gradient(
      100deg,
      transparent 0 8px,
      #81c784 8px 10px,
      transparent 10px 15px
    ),
    linear-gradient(to bottom, #66bb6a, #388e3c);
}

/* Experiment A / B horizontal positions */
.lane-label.lane-a,
.lane-wrap-label.lane-a,
.drop-line.lane-a,
.egg.lane-a {
  left: 43%;
}

.lane-label.lane-b,
.lane-wrap-label.lane-b,
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

/* Without a layers panel, centre both eggs across the full diagram. */
.fair-test-visual--full .lane-label.lane-a,
.fair-test-visual--full .lane-wrap-label.lane-a,
.fair-test-visual--full .drop-line.lane-a,
.fair-test-visual--full .egg.lane-a {
  left: 33%;
}
.fair-test-visual--full .lane-label.lane-b,
.fair-test-visual--full .lane-wrap-label.lane-b,
.fair-test-visual--full .drop-line.lane-b,
.fair-test-visual--full .egg.lane-b {
  left: 67%;
}
.fair-test-visual--full .surface.lane-a {
  left: 19%;
}
.fair-test-visual--full .surface.lane-b {
  left: 53%;
}

/* ---------- Wrapping preview panel (only when relevant) ---------- */
.layers-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background: var(--soft-orange);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

.layers-panel h4 {
  margin: 0;
}

.layer-previews {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 84px), 1fr));
  gap: 10px;
}

.layer-previews figure {
  display: grid;
  gap: 6px;
  margin: 0;
  min-width: 0;
}

.layer-preview-title {
  text-align: center;
  font-size: 0.84rem;
}

.layer-previews img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

.layer-previews figcaption {
  text-align: center;
  font-size: 0.82rem;
  font-weight: 700;
}

/* ---------- Always-visible A/B settings table ---------- */
.fair-test-blueprint h3 {
  margin: 0 0 6px;
}

.blueprint-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 12px;
}
.blueprint-title-row h3 { margin: 0; }
.blueprint-status {
  padding: 5px 10px;
  border-radius: 999px;
  background: #f4f0e2;
  color: var(--text);
  font-size: 0.79rem;
  font-weight: 700;
}
.blueprint-status.is-confirmed { background: var(--mint); }

.blueprint-table-wrap {
  max-width: 100%;
  overflow-x: auto;
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  background: var(--paper);
}

.blueprint-table {
  width: 100%;
  min-width: 540px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.94rem;
}

.blueprint-table th,
.blueprint-table td {
  padding: 12px 14px;
  border-right: 1px solid #c7c5be;
  border-bottom: 1px solid #c7c5be;
  line-height: 1.35;
  vertical-align: middle;
}

.blueprint-table tr > :last-child {
  border-right: 0;
}

.blueprint-table tbody tr:last-child > * {
  border-bottom: 0;
}

.blueprint-table thead th {
  background: #e9e6f4;
  font-weight: 800;
  text-align: center;
  border-bottom: 2px solid var(--charcoal);
}

.blueprint-table thead th:first-child {
  width: 40%;
  text-align: left;
}

.blueprint-table thead th:nth-child(2) {
  background: #d8f2e7;
}

.blueprint-table thead th:nth-child(3) {
  background: #ffe2d6;
}

.blueprint-table tbody th {
  text-align: left;
  font-weight: 700;
}

.blueprint-table tbody td {
  width: 30%;
  text-align: center;
}

.blueprint-row--measure td[colspan="2"] { width: auto; }

.blueprint-row--change > * {
  background: #fff2bf;
}

.blueprint-row--measure > * {
  background: #f5efff;
}

.blueprint-pill {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 7px;
  border: 1px solid var(--charcoal);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  vertical-align: middle;
}

.blueprint-pill--change { background: var(--yellow); }
.blueprint-pill--control { background: var(--mint); }
.blueprint-pill--measure { background: #e1d8ff; }
.blueprint-cell--pending { color: #777; }

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
  .control-grid { grid-template-columns: minmax(0, 1fr); }

  .fair-test-visual {
    grid-template-columns: minmax(0, 1fr);
  }

  .fair-test-canvas {
    /* Keep the same 1 : 1.5 : 3 proportions on small screens. */
    --surface-height: 52px;
    --release-1m: calc(92% - var(--surface-height) - 44px);
    --release-1-5m: calc(92% - var(--surface-height) - 66px);
    --release-3m: calc(92% - var(--surface-height) - 132px);
    min-height: 405px;
  }

  .lane-label {
    padding: 5px 8px;
    font-size: 0.84rem;
  }

  .lane-wrap-label {
    width: 40%;
    top: 60px;
    font-size: 0.75rem;
  }

  .egg {
    width: 82px;
  }

  /* Space the two eggs evenly at smaller screen widths. */
  .fair-test-visual .lane-label.lane-a,
  .fair-test-visual .lane-wrap-label.lane-a,
  .fair-test-visual .drop-line.lane-a,
  .fair-test-visual .egg.lane-a {
    left: 29%;
  }
  .fair-test-visual .lane-label.lane-b,
  .fair-test-visual .lane-wrap-label.lane-b,
  .fair-test-visual .drop-line.lane-b,
  .fair-test-visual .egg.lane-b {
    left: 72%;
  }

  .fair-test-visual .surface {
    width: 34%;
    height: 52px;
    font-size: 0.78rem;
    text-align: center;
  }
  .fair-test-visual .surface.lane-a {
    left: 12%;
  }
  .fair-test-visual .surface.lane-b {
    left: 55%;
  }

  .height-guide-rail {
    left: 1.5%;
    width: 12px;
    border-width: 2px;
  }

  .height-guide-mark {
    left: calc(1.5% + 6px);
    gap: 4px;
    font-size: 0.7rem;
  }

  .height-guide-tick {
    width: 27px;
    border-top-width: 2px;
  }

  /* On phones, show both A and B at once rather than hiding B off-screen. */
  .blueprint-table {
    min-width: 0;
    table-layout: fixed;
    font-size: 0.79rem;
  }

  .blueprint-table thead th:first-child {
    width: 38%;
  }

  .blueprint-table tbody td {
    width: 31%;
    overflow-wrap: anywhere;
  }

  .blueprint-table th,
  .blueprint-table td {
    padding: 9px 7px;
  }

  .blueprint-pill {
    display: block;
    width: max-content;
    max-width: 100%;
    margin: 4px 0 0;
    padding: 2px 5px;
    font-size: 0.65rem;
  }
}

/* ---------------- NEW A/B REDESIGN OVERRIDES BELOW ---------------- */

/* Always-on tall ruler and full-width two-egg canvas.
   Release positions are the BOTTOM edge of each egg, relative to
   the TOP of the landing surface. The scale is 110 px per metre. */
.fair-test-card { padding: 18px; }
.fair-test-card > h3 { margin: 0 0 12px; }
.fair-test-canvas {
  --surface-bottom: 36px;
  --surface-height: 60px;
  /* Visible egg shell sits ~12px above the bottom of its PNG canvas. */
  --egg-image-bottom-inset: 12px;
  --landing-y: calc(100% - var(--surface-bottom) - var(--surface-height));
  --release-1m: calc(var(--landing-y) - 110px);
  --release-1-5m: calc(var(--landing-y) - 165px);
  --release-3m: calc(var(--landing-y) - 330px);
  height: 645px;
  min-height: 0;
  background: linear-gradient(to bottom,
    #fffdf4 0 var(--landing-y),
    #eee7d6 var(--landing-y) 100%);
}
.height-guide { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
.height-guide-rail {
  left: 5%; top: 92px;
  bottom: calc(var(--surface-bottom) + var(--surface-height));
  width: 64px;
  border-width: 4px;
  border-radius: 10px;
}
.height-guide-mark { left: calc(5% + 64px); font-size: 0.95rem; }
.height-guide-tick { width: 54px; }

/* Individual dropdowns are ON the diagram, directly above each egg. */
.lane-heading {
  position: absolute;
  top: 14px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 29%;
  max-width: 210px;
  transform: translateX(-50%);
}
.lane-heading.lane-a { left: 45%; }
.lane-heading.lane-b { left: 77%; }
.lane-title {
  padding: 6px 11px;
  background: #fff;
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  font-weight: 800;
  line-height: 1.2;
  white-space: nowrap;
}
.lane-choice { display: block; width: 100%; }
.lane-choice select {
  display: block;
  width: 100%; min-width: 0;
  padding: 7px 9px;
  background: #fff;
  border: 2px solid var(--charcoal);
  border-radius: 9px;
  font: inherit;
  font-size: 0.93rem;
  font-weight: 700;
  cursor: pointer;
  text-overflow: ellipsis;
}
.lane-choice select:focus-visible, .control-field select:focus-visible {
  outline: 3px solid var(--purple);
  outline-offset: 2px;
}
.lane-choice-summary {
  max-width: 100%;
  padding: 6px 9px;
  background: #fff;
  border-radius: 7px;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
}
.drop-line {
  top: 120px;
  bottom: calc(var(--surface-bottom) + var(--surface-height));
}
.egg { width: 95px; height: 90px; object-fit: contain; }
.surface {
  bottom: var(--surface-bottom);
  width: 27%;
  height: var(--surface-height);
  text-align: center;
}
.drop-line.lane-a, .egg.lane-a { left: 45%; }
.drop-line.lane-b, .egg.lane-b { left: 77%; }
.surface.lane-a { left: 31.5%; }
.surface.lane-b { left: 63.5%; }

/* Keep the compact controls and table from the previous version. */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 700px) {
  .control-grid { grid-template-columns: minmax(0, 1fr); }
  .fair-test-card { padding: 12px; }
  .fair-test-canvas {
    --surface-bottom: 28px;
    --surface-height: 50px;
    /* Smaller egg image has slightly less transparent bottom padding. */
    --egg-image-bottom-inset: 10px;
    --release-1m: calc(var(--landing-y) - 94px);
    --release-1-5m: calc(var(--landing-y) - 141px);
    --release-3m: calc(var(--landing-y) - 282px);
    height: 570px;
    min-height: 0;
  }
  .height-guide-rail { left: 1.5%; top: 84px; width: 24px; border-width: 3px; }
  .height-guide-mark { left: calc(1.5% + 24px); gap: 4px; font-size: 0.72rem; }
  .height-guide-tick { width: 24px; border-top-width: 2px; }
  .lane-heading { top: 13px; width: 34%; gap: 5px; }
  .lane-heading.lane-a { left: 44%; }
  .lane-heading.lane-b { left: 79%; }
  .lane-title { padding: 5px 7px; font-size: 0.81rem; }
  .lane-choice select { padding: 6px 3px; font-size: 0.8rem; }
  .lane-choice-summary { font-size: 0.78rem; padding: 5px 4px; }
  .drop-line { top: 111px; }
  .egg { width: 80px; height: 78px; }
  .drop-line.lane-a, .egg.lane-a { left: 44%; }
  .drop-line.lane-b, .egg.lane-b { left: 79%; }
  .surface { width: 32%; height: var(--surface-height); font-size: 0.78rem; }
  .surface.lane-a { left: 28%; }
  .surface.lane-b { left: 63%; }
}
</style>
