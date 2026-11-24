<script setup>
// 'all' also supports any existing use of this component outside the explorer.
defineProps({ mode: { type: String, default: 'all' } });

/* =========================================================
   BREAD - SCIENCE IS ALL AROUND US

   First-phase migration from GTAC's H5P Bread activity.
   Uses existing ThingLinkBox and TrueFalseQuestion components,
   just like HelmetDetails.vue.

   The Yeast Big Kahuna and Predict / Observe / Explain
   activity will be added separately when their plan is ready.
   ========================================================= */

import ThingLinkBox from './ThingLinkBox.vue';
import TrueFalseQuestion from './TrueFalseQuestion.vue';

// Existing ThingLink scenes from the GTAC H5P Bread activity.
const breadModelScene = 'https://www.thinglink.com/view/scene/2105829252908712804';
const breadExpertsScene = 'https://www.thinglink.com/view/scene/2105852139921212260';
</script>

<template>
  <!-- A. BREAD SCIENCE: match the visual language of HelmetDetails.vue. -->
  <section v-if="mode !== 'experts'" class="gtac-section did-you-know">
    <div class="box-title did-you-know-title">
      <span class="gtac-svg-icon did-you-know-icon" aria-hidden="true">
        <!-- Simple bread icon; no image asset required. -->
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 10.2C3.6 9.6 3 8.5 3 7.2 3 5 4.9 3.5 7 3.5c1.1 0 2.2.5 2.8 1.3C10.4 4 11.2 3.5 12 3.5c1.1 0 2.1.6 2.7 1.4.6-.9 1.5-1.4 2.5-1.4 2.2 0 3.8 1.7 3.8 3.7 0 1.4-.7 2.5-2 3.1V19H5v-8.8Z"
            stroke="white"
            stroke-width="1.7"
            stroke-linejoin="round"
          />
          <path d="M8 13v3M12 12v5M16 13v3" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </span>
      <h3>Did you know?</h3>
    </div>

    <p>
      Many breads rise because of <strong>yeast</strong>, a tiny living fungus.
      Here's what happens in the dough:
    </p>

    <ol class="bread-steps" aria-label="How yeast makes bread rise">
      <li><span class="step-number">1</span><span>Yeast uses sugar for energy.</span></li>
      <li><span class="step-number">2</span><span>It releases carbon dioxide gas.</span></li>
      <li><span class="step-number">3</span><span>Gas bubbles get trapped, making the dough rise!</span></li>
    </ol>

    <p class="bread-summary">
      Bakers use science to choose the right ingredients, temperature and baking time.
    </p>

    <!-- B. EXPLORE THE LOAF: original Bread 3D Model ThingLink. -->
    <div class="section-box explore-loaf">
      <div class="box-title explore-title">
        <span class="gtac-svg-icon explore-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="white" stroke-width="1.8" />
            <path d="m15.5 15.5 5 5" stroke="white" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </span>
        <h3>Explore a loaf</h3>
      </div>

      <p>Click the bread to look inside.</p>

      <div class="bread-model">
        <ThingLinkBox
          title="Explore the parts of this loaf"
          :src="breadModelScene"
        />
      </div>

      <!-- Reuses the same feedback and button behaviour as Helmet's question. -->
      <TrueFalseQuestion
        statement="Bread rises because yeast makes gas that gets trapped in the dough."
        :answer="true"
        correct-message="That's right! Carbon dioxide bubbles help the dough rise."
        incorrect-message="Yeast releases carbon dioxide. Its bubbles get trapped in the dough and make it rise."
      />
    </div>
  </section>

  <!-- C. THE PEOPLE: original Bread STEM Experts ThingLink. -->
  <section v-if="mode !== 'explore'" class="gtac-section bread-experts">
    <h3>Who helps bring bread to the table?</h3>
    <p>Lots of STEM experts work together, from growing wheat to baking bread.</p>

    <ThingLinkBox
      wide
      title="Follow bread from the field to your table"
      :src="breadExpertsScene"
    />
  </section>

  <!-- D. FUTURE: insert the Yeast Kahuna / Predict-Observe-Explain
       as a separate component in ScienceAroundUsView.vue.
       Nothing unfinished is displayed to students. -->
</template>

<style scoped>
/* Match the Helmet page's rounded, outlined GTAC design. */
.did-you-know {
  background: var(--soft-purple);
}

.did-you-know-title {
  margin-bottom: 20px;
}

.did-you-know-icon {
  background: var(--purple);
}

.did-you-know-title h3,
.explore-title h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.bread-steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 0;
  margin: 22px 0;
  list-style: none;
}

.bread-steps li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px;
  min-width: 0;
  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  line-height: 1.4;
  font-weight: 600;
}

.step-number {
  display: inline-grid;
  place-items: center;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--yellow);
  border: 2px solid var(--charcoal);
  font-weight: 800;
}

.bread-summary {
  margin-bottom: 0;
}

.explore-loaf {
  margin-top: 26px;
  background: var(--soft-blue);
  border: 2px solid var(--charcoal);
}

.explore-title {
  margin-bottom: 16px;
}

.explore-icon {
  background: #17b3c4;
}

.explore-loaf > p {
  margin: 0 0 14px;
}

/* Keep the 3D ThingLink manageable instead of a huge square. */
.bread-model {
  max-width: 560px;
  margin: 0 auto 20px;
}

.bread-model :deep(.thinglink-box) {
  width: 100%;
}

.bread-experts h3 {
  margin-top: 0;
}

@media (max-width: 750px) {
  .bread-steps {
    grid-template-columns: 1fr;
  }
  .bread-steps li {
    padding: 12px;
  }
}
</style>
