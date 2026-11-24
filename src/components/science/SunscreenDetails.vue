<script setup>
// 'all' also supports any existing use of this component outside the explorer.
defineProps({ mode: { type: String, default: 'all' } });

/* =========================================================
   SUNSCREEN - SCIENCE IS ALL AROUND US

   Phase 1: Move the original H5P sunscreen content into the
   same Vue components and GTAC styling as Helmet and Bread.

   The two ThingLink scenes stay EMBEDDED for now. Later we can
   replace either with a native interactive Vue infographic.

   The UV Beads Big Kahuna will be a separate component later.
   ========================================================= */

import ThingLinkBox from './ThingLinkBox.vue';
import TrueFalseQuestion from './TrueFalseQuestion.vue';

// Existing scenes supplied in the original GTAC H5P screenshots.
// The images and hotspots inside these scenes remain hosted on ThingLink.
const skinAnatomyScene = 'https://www.thinglink.com/view/scene/2113091318413525478';
const sunscreenExpertsScene = 'https://www.thinglink.com/view/scene/2113458427756806630';
</script>

<template>
  <!-- A. SHORT SCIENCE EXPLANATION -->
  <section v-if="mode !== 'experts'" class="gtac-section did-you-know">
    <div class="box-title heading-row">
      <span class="gtac-svg-icon title-icon" aria-hidden="true">
        <!-- UV rays and shield: inline SVG, no image asset needed. -->
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="7" r="2.4" stroke="white" stroke-width="1.7" />
          <path d="M7.5 1v2M7.5 11v2M1.5 7h2M11.5 7h2M3.4 2.9l1.4 1.4M10.2 9.7l1.4 1.4M11.6 2.9l-1.4 1.4M4.8 9.7l-1.4 1.4"
                stroke="white" stroke-width="1.4" stroke-linecap="round" />
          <path d="M14 12.5l4.5-2 4.5 2v4.2c0 2.7-2.7 4.5-4.5 5.3-1.8-.8-4.5-2.6-4.5-5.3v-4.2Z"
                stroke="white" stroke-width="1.7" stroke-linejoin="round" />
          <path d="m16.3 16.6 1.6 1.5 2.5-3" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <h3>Did you know?</h3>
    </div>

    <p>
      <strong>Sunscreen</strong> uses chemistry and engineering to help protect our skin
      from ultraviolet (UV) radiation from the Sun.
    </p>

    <ol class="uv-steps" aria-label="How sunscreen helps protect skin">
      <li>
        <span class="step-number" aria-hidden="true">1</span>
        <span>UV radiation is invisible. It can reach your skin even on cool days.</span>
      </li>
      <li>
        <span class="step-number" aria-hidden="true">2</span>
        <span>Too much UV can damage skin cells and cause sunburn.</span>
      </li>
      <li>
        <span class="step-number" aria-hidden="true">3</span>
        <span>Sunscreen contains UV filters that help reduce this damage.</span>
      </li>
    </ol>

    <p class="sun-safety-note">
      Shade, clothing, hats and sunglasses also help protect us from UV.
    </p>

    <!-- B. SKIN ANATOMY: original ThingLink, kept as an embed for now. -->
    <div class="section-box explore-skin">
      <div class="box-title explore-heading">
        <span class="gtac-svg-icon explore-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="white" stroke-width="1.8" />
            <path d="m15.5 15.5 5 5" stroke="white" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </span>
        <h3>Explore your skin</h3>
      </div>

      <p>Tap the dots to discover what is inside your skin.</p>

      <div class="skin-model">
        <ThingLinkBox
          title="Explore the layers of your skin"
          :src="skinAnatomyScene"
        />
      </div>

      <!-- Uses Helmet/Bread's existing interactive question component. -->
      <TrueFalseQuestion
        statement="Sunburn only happens on very hot days."
        :answer="false"
        correct-message="Correct! Sunburn is caused by UV radiation, not heat. UV can be strong even on cool days."
        incorrect-message="Not quite. It's UV radiation, not temperature, that causes sunburn."
      />
    </div>
  </section>

  <!-- C. SUNSCREEN STEM EXPERTS: existing ThingLink for now. -->
  <section v-if="mode !== 'explore'" class="gtac-section sunscreen-experts">
    <h3>Who helps protect us from the Sun?</h3>
    <p>Meet the STEM experts who develop and test sunscreen.</p>

    <!-- FUTURE: Replace this ThingLink with native clickable expert cards. -->
    <ThingLinkBox
      wide
      title="Discover the people behind sunscreen"
      :src="sunscreenExpertsScene"
    />
  </section>

  <!-- FUTURE: Add a separate UVBeadsFairTestBuilder.vue to the
       sunscreen extras in ScienceAroundUsView.vue. No empty activity shown. -->
</template>

<style scoped>
/* Match the rounded, outlined GTAC styling of Helmet and Bread. */
.did-you-know { background: var(--soft-purple); }
.heading-row { margin-bottom: 20px; }
.title-icon { background: var(--purple); }
.heading-row h3,
.explore-heading h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.uv-steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 0;
  margin: 20px 0;
  list-style: none;
}
.uv-steps li {
  min-width: 0;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 14px;
  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  line-height: 1.4;
  font-weight: 600;
}
.step-number {
  flex: 0 0 32px;
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  background: var(--yellow);
  border: 2px solid var(--charcoal);
  border-radius: 50%;
  font-weight: 800;
}
.sun-safety-note { margin-bottom: 0; }

.explore-skin {
  margin-top: 26px;
  background: var(--soft-blue);
  border: 2px solid var(--charcoal);
}
.explore-heading { margin-bottom: 16px; }
.explore-icon { background: #17b3c4; }
.explore-skin > p { margin: 0 0 14px; }
.skin-model {
  max-width: 580px;
  margin: 0 auto 20px;
}
.skin-model :deep(.thinglink-box) { width: 100%; }
.sunscreen-experts h3 { margin-top: 0; }

@media (max-width: 750px) {
  .uv-steps { grid-template-columns: 1fr; }
  .uv-steps li { padding: 12px; }
}
</style>
