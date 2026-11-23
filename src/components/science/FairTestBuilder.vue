<script setup>
import { computed, ref, watch } from "vue";
import Button from "../Button.vue";
import ActivityFeedback from "./ActivityFeedback.vue";

const stages = [
  { id: "change", label: "1. Change" },
  { id: "measure", label: "2. Measure" },
  { id: "control", label: "3. Control" },
];

const currentStage = ref("change");

// Options for the ONE changed variable and the shared controls.
const variables = [
  {
    id: "material",
    label: "Materials",
    options: ["Foam vs. Bubble Wrap", "Foam vs. Paper", "Bubble Wrap vs. Paper"],
    controlOptions: ["Foam", "Bubble Wrap", "Paper"],
  },
  {
    id: "layers",
    label: "Number of Layers",
    // Unwrapped eggs are a deliberate option for testing protection.
    options: ["Unwrapped vs. 1 Layer", "Unwrapped vs. 2 Layers", "1 Layer vs. 2 Layers"],
    controlOptions: ["No Layers", "1 Layer", "2 Layers"],
  },
  {
    id: "height",
    label: "Drop Height",
    options: ["1.5m", "3m"],
    baseline: "1m",
    controlOptions: ["1m", "1.5m", "3m"],
  },
  {
    id: "surface",
    label: "Surface Type",
    options: ["Soft Surface", "Hard Surface"],
    fixedPair: true,
  },
  {
    id: "direction",
    label: "Direction of Drop",
    options: ["Blunt End", "Pointy End"],
    fixedPair: true,
  },
];

// Artwork stored in public/assets/images/science/fair-test/.
const imageBase = `${import.meta.env.BASE_URL}assets/images/science/fair-test/`;
const defaultEggImage = `${imageBase}egg.png`;
// Wrapped egg on the canvas: one image per material and layer count
const eggImages = {
  Foam: {
    "1 Layer": `${imageBase}egg-foam-1.png`,
    "2 Layers": `${imageBase}egg-foam-2.png`,
  },
  "Bubble Wrap": {
    "1 Layer": `${imageBase}egg-bubble-wrap-1.png`,
    "2 Layers": `${imageBase}egg-bubble-wrap-2.png`,
  },
  Paper: {
    "1 Layer": `${imageBase}egg-paper-1.png`,
    "2 Layers": `${imageBase}egg-paper-2.png`,
  },
};
// Layers panel: one image per material and layer count
const layerImages = {
  Foam: {
    "1 Layer": `${imageBase}layers-foam-1.png`,
    "2 Layers": `${imageBase}layers-foam-2.png`,
  },
  "Bubble Wrap": {
    "1 Layer": `${imageBase}layers-bubble-wrap-1.png`,
    "2 Layers": `${imageBase}layers-bubble-wrap-2.png`,
  },
  Paper: {
    "1 Layer": `${imageBase}layers-paper-1.png`,
    "2 Layers": `${imageBase}layers-paper-2.png`,
  },
};
// A shared vertical position for each release height.
// Both the ruler tick AND the bottom edge of the egg use these CSS values.
// Each 1 m step has the same visual distance from the surface.
const heightMarkers = ["3m", "1.5m", "1m"];
const releaseLevel = {
  "1m": "var(--release-1m)",
  "1.5m": "var(--release-1-5m)",
  "3m": "var(--release-3m)",
};
const surfaceClass = {
  "Soft Surface": "soft-surface",
  "Hard Surface": "hard-surface",
};

const changedPart = {
  material: "the wrapping material",
  layers: "the number of layers",
  height: "the drop height",
  surface: "the surface",
  direction: "the drop direction",
};

const measureLabel = "Egg damage";
const measureImage = `${imageBase}protection-scale.png`;

// A useful A/B comparison is visible as soon as the activity opens.
// These settings are suggestions: students can edit them and must confirm
// the controls in Step 3 before checking their plan.
const defaultControls = {
  material: "Foam",
  layers: "1 Layer",
  height: "1m",
  surface: "Soft Surface",
  direction: "Blunt End",
};
const defaultComparison = {
  material: "Foam vs. Bubble Wrap",
  layers: "Unwrapped vs. 1 Layer",
  height: "1.5m",
  surface: "Hard Surface",
  direction: "Pointy End",
};

const changeId = ref("material");
const changeValues = ref({ material: defaultComparison.material });
const measureSelected = ref(false);
const controlValues = ref({ ...defaultControls });
const controlConfirmed = ref(false);

const getVariable = (id) => variables.find((v) => v.id === id);
const getControlOptions = (id) => {
  // A materials comparison MUST have wrapping; 'No Layers' is instead
  // available when testing Number of Layers, height, surface or direction.
  if (id === "layers" && changeId.value === "material") {
    return ["1 Layer", "2 Layers"];
  }
  const variable = getVariable(id);
  return variable.controlOptions || variable.options;
};

// Exact A/B pairs: only the chosen variable changes.
const materialPairs = {
  "Foam vs. Bubble Wrap": ["Foam", "Bubble Wrap"],
  "Foam vs. Paper": ["Foam", "Paper"],
  "Bubble Wrap vs. Paper": ["Bubble Wrap", "Paper"],
};
const layerPairs = {
  "Unwrapped vs. 1 Layer": ["No Layers", "1 Layer"],
  "Unwrapped vs. 2 Layers": ["No Layers", "2 Layers"],
  "1 Layer vs. 2 Layers": ["1 Layer", "2 Layers"],
};

function chooseChange(id) {
  if (changeId.value === id) return;
  changeId.value = id;
  changeValues.value = { [id]: defaultComparison[id] };
  controlValues.value = { ...defaultControls };
  controlConfirmed.value = false;
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

// Every variable except the one being changed (all of them until one is chosen)
const controllableVariables = computed(() =>
  variables.filter((v) => v.id !== changeId.value),
);

// Diagram, wrapping previews and table all read these SAME two lane objects.
const lanes = computed(() =>
  ["A", "B"].map((name) => {
    const settings = { ...controlValues.value };
    const index = name === "A" ? 0 : 1;

    if (changeId.value === "layers") {
      settings.layers = layerPairs[changeValues.value.layers][index];
    } else if (changeId.value === "material") {
      settings.material = materialPairs[changeValues.value.material][index];
    } else if (changeId.value) {
      const variable = getVariable(changeId.value);
      settings[variable.id] = index === 0
        ? (variable.baseline || variable.options[0])
        : changeValues.value[variable.id];
    }
    return { name, ...settings };
  }),
);

// An egg is only shown wrapped when it has layers.
const isWrapped = (lane) => lane.layers !== "No Layers";
const laneWrapLabel = (lane) =>
  isWrapped(lane) ? `${lane.material} · ${displaySetting(lane.layers)}` : "No wrapping";

// Avoid a large, empty layers panel when both eggs are unwrapped.
// Still show both A and B when students are comparing layer counts.
const showLayersPanel = computed(
  () => changeId.value === "layers" || lanes.value.some(isWrapped),
);

// One preview when wrapping is identical; two labelled previews if it differs.
const layerPreviews = computed(() => {
  const [a, b] = lanes.value;
  if (a.material === b.material && a.layers === b.layers) {
    return [{ ...a, previewLabel: "Both eggs" }];
  }
  return lanes.value.map((lane) => ({
    ...lane,
    previewLabel: `Egg ${lane.name}`,
  }));
});

const layerPreviewSrc = (lane) =>
  isWrapped(lane)
    ? layerImages[lane.material]?.[lane.layers] || defaultEggImage
    : defaultEggImage;

// Every setting is filled from lanes, even before controls are confirmed.
// Thus the table never disagrees with the egg diagram.
const tableRows = computed(() =>
  variables.map((variable) => ({
    id: variable.id,
    label: variable.label,
    changed: changeId.value === variable.id,
    a: displaySetting(lanes.value[0][variable.id]),
    b: displaySetting(lanes.value[1][variable.id]),
  })),
);

const feedback = ref(null); // null | 'success' | 'try-again'
const feedbackMessage = ref("");
function clearFeedback() {
  feedback.value = null;
  feedbackMessage.value = "";
}

// Any edit to the A/B design clears control confirmation and old feedback.
watch([changeId, changeValues, controlValues], () => {
  controlConfirmed.value = false;
  clearFeedback();
}, { deep: true, flush: "sync" });
watch([measureSelected, controlConfirmed], clearFeedback, { flush: "sync" });

function getDesignIssue() {
  if (!changeId.value) return "Step 1: Choose what to change.";
  if (!measureSelected.value) return "Step 2: Choose what to measure.";
  if (!controlConfirmed.value) return "Step 3: Confirm the controls.";

  const [a, b] = lanes.value;
  const changedIds = variables.filter((variable) => a[variable.id] !== b[variable.id]).map((v) => v.id);
  if (changedIds.length !== 1 || changedIds[0] !== changeId.value) {
    return "Change one setting. Keep the others the same.";
  }
  if (changeId.value === "material" && !isWrapped(a)) {
    return "Use 1 or 2 layers to compare wrapping materials.";
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
  changeValues.value = { material: defaultComparison.material };
  measureSelected.value = false;
  controlValues.value = { ...defaultControls };
  controlConfirmed.value = false;
  clearFeedback();
}
</script>

<template>
  <section class="gtac-section fair-test">
    <h2 class="fair-test-title">Build Your Fair Test Plan</h2>

    <p class="fair-test-instructions">Change one thing. Keep the rest the same.</p>

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
            :aria-pressed="changeId === variable.id"
            @click="chooseChange(variable.id)"
          >
            {{ variable.label }}
          </Button>
        </div>

        <!-- Fixed comparisons (surface, direction) have no dropdown, just the two settings -->
        <div
          v-if="changeId && getVariable(changeId).fixedPair"
          class="revealed-menu"
        >
          <strong>{{ getVariable(changeId).options.join(" vs. ") }}</strong>
        </div>

        <div v-else-if="changeId" class="revealed-menu">
          <label for="change-select">{{ changeId === 'material' ? 'Compare materials' : getVariable(changeId).label }}</label>
          <select id="change-select" v-model="changeValues[changeId]">
            <option
              v-for="option in getVariable(changeId).options"
              :key="option"
              :value="option"
            >
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
            :class="{ selected: measureSelected }"
            :aria-pressed="measureSelected"
            @click="measureSelected = true"
          >
            {{ measureLabel }}
          </Button>
        </div>

        <figure v-if="measureSelected" class="measure-image">
          <figcaption>How much did it crack?</figcaption>
          <img v-if="measureImage" :src="measureImage" :alt="measureLabel" />
        </figure>
      </template>

      <!-- Control: all unchanged variables start with sensible shared values. -->
      <template v-else>
        <p class="control-instruction">Keep these the same for both eggs:</p>
        <div class="control-grid">
          <label v-for="variable in controllableVariables" :key="variable.id" class="control-field">
            <span>{{ variable.label }}</span>
            <select v-model="controlValues[variable.id]">
              <option
                v-for="option in getControlOptions(variable.id)"
                :key="option"
                :value="option"
              >{{ displaySetting(option) }}</option>
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

    <!-- Experiment diagram -->
    <div class="fair-test-card">
      <div class="fair-test-heading">
        <h3>Your Experiment</h3>
      </div>

      <div
        class="fair-test-visual"
        :class="{ 'fair-test-visual--full': !showLayersPanel }"
      >
        <div class="fair-test-canvas" aria-label="Visual experiment builder">
          <!-- Height markers and egg bottoms share one calculated release level.
               The distance is measured down to the TOP of the landing surface. -->
          <div
            v-if="changeId === 'height'"
            class="height-guide"
            aria-hidden="true"
          >
            <div class="height-guide-rail"></div>
            <div
              v-for="marker in heightMarkers"
              :key="marker"
              class="height-guide-mark"
              :style="{ top: releaseLevel[marker] }"
            >
              <span class="height-guide-tick"></span>
              <span>{{ marker.replace('m', ' m') }}</span>
            </div>
          </div>

          <template v-for="lane in lanes" :key="lane.name">
            <div class="lane-label" :class="`lane-${lane.name.toLowerCase()}`">
              Experiment {{ lane.name }}
            </div>
            <div class="lane-wrap-label" :class="`lane-${lane.name.toLowerCase()}`">
              {{ laneWrapLabel(lane) }}
            </div>
            <div
              class="drop-line"
              :class="`lane-${lane.name.toLowerCase()}`"
            ></div>
            <img
              class="egg"
              :class="`lane-${lane.name.toLowerCase()}`"
              :style="{
                top: releaseLevel[lane.height],
                transform: `translate(-50%, -100%) rotate(${lane.direction === 'Pointy End' ? 180 : 0}deg)`,
              }"
              :src="
                isWrapped(lane)
                  ? eggImages[lane.material][lane.layers]
                  : defaultEggImage
              "
              :alt="
                isWrapped(lane)
                  ? `Egg protected with ${lane.layers} of ${lane.material}`
                  : 'Egg with no protection'
              "
            />
            <div
              class="surface"
              :class="[
                `lane-${lane.name.toLowerCase()}`,
                surfaceClass[lane.surface],
              ]"
            >
              <span>{{ lane.surface }}</span>
            </div>
          </template>
        </div>

        <!-- Show layers only when a wrapping comparison is relevant. -->
        <aside
          v-if="showLayersPanel"
          class="layers-panel"
          aria-label="Wrapping layers"
        >
          <h4>Wrapping layers</h4>
          <div class="layer-previews">
            <figure v-for="preview in layerPreviews" :key="preview.previewLabel">
              <strong class="layer-preview-title">{{ preview.previewLabel }}</strong>
              <img
                :src="layerPreviewSrc(preview)"
                :alt="isWrapped(preview)
                  ? `${preview.layers} of ${preview.material}`
                  : 'Egg with no wrapping'"
              />
              <figcaption>{{ displaySetting(preview.layers) }}</figcaption>
            </figure>
          </div>
        </aside>
      </div>
      <p
        v-if="changeId === 'height'"
        class="height-guide-note"
      >
        Height = bottom of egg to surface.
      </p>
    </div>

    <!-- One live A/B table, driven by the same settings as the diagram. -->
    <div class="fair-test-blueprint">
      <div class="blueprint-title-row">
        <h3>Your fair test plan</h3>
        <span class="blueprint-status" :class="{ 'is-confirmed': controlConfirmed }">
          {{ controlConfirmed ? '✓ Controls set' : 'Suggested settings' }}
        </span>
      </div>

      <div class="blueprint-table-wrap">
        <table class="blueprint-table">
          <thead>
            <tr>
              <th scope="col">Setting</th>
              <th scope="col">Experiment A</th>
              <th scope="col">Experiment B</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in tableRows"
              :key="row.id"
              :class="{ 'blueprint-row--change': row.changed }"
            >
              <th scope="row">
                <span>{{ row.label }}</span>
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
        <Button
          type="button"
          class="check-fair-test-button"
          @click="checkDesign"
        >
          Check plan
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

.measure-image {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  justify-self: center;
  min-height: 220px;
  margin-top: 14px;

  background-color: white;
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);

  color: var(--muted);
  overflow: hidden;

  animation: pop-fade-in 0.5s ease;
}

.measure-image figcaption {
  position: absolute;
  top: 20px;

  padding: 10px;
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-small);

  font-weight: 700;
}

.measure-image img {
  max-width: 100%;
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
</style>
