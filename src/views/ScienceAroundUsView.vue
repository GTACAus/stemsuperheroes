<script setup>
/* =========================================================
   SCIENCE IS ALL AROUND US

   Observe -> Explore -> Plan -> Meet STEM experts.
   Each object is mounted only after it is chosen, but stays
   mounted after that so students don't lose written answers.

   To add a new object, update science-objects.js and add its
   detail and planner components to objectActivities below.
   ========================================================= */
import { defineAsyncComponent, nextTick, ref } from 'vue';
import Button from '@/components/Button.vue';
import LearningOverview from '@/components/science/LearningOverview.vue';
import StwSection from '@/components/science/StwSection.vue';
import { scienceObjects } from '@/data/science-objects.js';

// Load the heavier activities only when a student selects the object.
const objectActivities = {
  helmet: {
    details: defineAsyncComponent(() => import('@/components/science/HelmetDetails.vue')),
    kahuna: defineAsyncComponent(() => import('@/components/science/FairTestBuilder.vue')),
  },
  bread: {
    details: defineAsyncComponent(() => import('@/components/science/BreadDetails.vue')),
    kahuna: defineAsyncComponent(() => import('@/components/science/YeastFairTestBuilder.vue')),
  },
  sunscreen: {
    details: defineAsyncComponent(() => import('@/components/science/SunscreenDetails.vue')),
    kahuna: defineAsyncComponent(() => import('@/components/science/UVBeadsFairTestBuilder.vue')),
  },
};

const selectedId = ref(null);
// A Set of previously visited objects keeps forms and activity selections intact.
const visitedIds = ref(new Set());

async function selectObject(id) {
  selectedId.value = id;
  visitedIds.value.add(id);
  await nextTick();
  document.getElementById(`${id}-content`)?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  });
}
</script>

<template>
  <main id="main-content" class="page">
    <section class="science-hero" aria-labelledby="science-title">
      <p class="science-eyebrow">Science is everywhere</p>
      <h1 id="science-title">Science is All Around Us</h1>
      <p class="science-intro">Look closer at everyday things. Discover the science behind them.</p>
    </section>

    <!-- Learning goals and See / Think / Wonder guide appear BEFORE object choices. -->
    <LearningOverview
      learningObjective="Explore how STEM is used to solve problems and create or improve everyday objects"
      :successCriteria="[
        'I can explain what problem an everyday object is designed to solve',
        'I can identify how science, technology, engineering, or mathematics is used in an everyday object',
        'I can describe how STEM experts use their skills to design, test or improve everyday objects',
      ]"
    />

    <section id="object-choices" class="science-explorer" aria-labelledby="objects-heading">
      <div class="science-explorer-heading">
        <h2 id="objects-heading">Choose something to explore</h2>
      </div>
      <div class="science-object-grid">
        <Button
          v-for="object in scienceObjects"
          :key="object.id"
          class="science-object-card"
          :class="{ selected: selectedId === object.id }"
          :aria-pressed="String(selectedId === object.id)"
          type="button"
          @click="selectObject(object.id)"
        >
          <div class="science-object-image">
            <img :src="object.image" :alt="object.imageAlt" loading="lazy" />
          </div>
          <span>{{ object.name }}</span>
        </Button>
      </div>
    </section>

    <!-- v-if: first mount on selection. v-show: keep visited activities alive. -->
    <template v-for="object in scienceObjects" :key="object.id">
      <div
        v-if="visitedIds.has(object.id)"
        v-show="selectedId === object.id"
        :id="`${object.id}-content`"
        class="science-content-panel"
      >
        <nav class="science-section-nav" :aria-label="`${object.name} activity sections`">
          <a :href="`#${object.id}-observe`">1. Observe</a>
          <a :href="`#${object.id}-explore`">2. Explore</a>
          <a :href="`#${object.id}-plan`">3. Plan a test</a>
          <a :href="`#${object.id}-experts`">4. STEM experts</a>
        </nav>

        <section :id="`${object.id}-observe`" class="gtac-section science-content-section" aria-labelledby="`${object.id}-observe-title`">
          <div class="science-content-heading">
            <h2 :id="`${object.id}-observe-title`">See / Think / Wonder</h2>
          </div>
          <StwSection
            type="see"
            :images="object.observationImages"
            :lead="object.stwPrompts?.see?.lead"
            :question="object.stwPrompts?.see?.question"
            :image-aspect="object.stwImageAspect || 'landscape'"
            :placeholder="object.placeholders.see"
            :aria-label="`Add an observation about the ${object.name.toLowerCase()} images`"
          />
          <StwSection
            type="think"
            :lead="object.stwPrompts?.think?.lead"
            :question="object.stwPrompts?.think?.question"
            :placeholder="object.placeholders.think"
            :aria-label="`Add a thought about the ${object.name.toLowerCase()} images`"
          />
          <StwSection
            type="wonder"
            :lead="object.stwPrompts?.wonder?.lead"
            :question="object.stwPrompts?.wonder?.question"
            :placeholder="object.placeholders.wonder"
            :aria-label="`Add a question about the ${object.name.toLowerCase()} images`"
          />
        </section>

        <div :id="`${object.id}-explore`" class="science-stage" aria-label="Discover the science">
          <component :is="objectActivities[object.id].details" mode="explore" />
        </div>

        <div :id="`${object.id}-plan`" class="science-stage" aria-label="Plan a fair test">
          <component :is="objectActivities[object.id].kahuna" />
        </div>

        <div :id="`${object.id}-experts`" class="science-stage" aria-label="Meet the STEM experts">
          <component :is="objectActivities[object.id].details" mode="experts" />
        </div>

        <a href="#object-choices" class="science-back-link">↑ Choose another object</a>
      </div>
    </template>
  </main>
</template>

<style scoped>
.science-hero {
  padding: clamp(26px, 4vw, 42px) 26px;
  background: var(--purple);
  border: 3px solid var(--charcoal);
  border-radius: var(--radius-large);
  box-shadow: var(--shadow-medium);
  text-align: center;
}
.science-eyebrow {
  display: inline-block;
  margin: 0 0 12px;
  padding: 7px 14px;
  background: var(--yellow);
  color: var(--charcoal);
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
}
.science-hero h1 { margin: 0 0 12px; color: white; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.08; }
.science-intro { max-width: 650px; margin: 0 auto; color: white; font-size: 1.05rem; line-height: 1.55; }
.science-explorer { padding: 8px 0 30px; }
.science-explorer-heading { margin-bottom: 18px; text-align: center; }
.science-explorer-heading h2 { margin: 0; font-size: clamp(1.3rem, 5vw, 1.7rem); }
.science-object-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; max-width: 720px; margin: 0 auto; }
.science-object-card {
  --padding: 14px;
  --background: var(--paper);
  --color: var(--text);
  --border-radius: var(--radius-medium);
  --background-hover: var(--soft-yellow);
  --translate-amount-hover: -4px;
  --box-shadow-hover: var(--shadow-medium);
  --background-active: var(--mint);
  --translate-amount-active: 4px;
}
.science-object-card.selected { --background: var(--soft-green); }
.science-object-image {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  margin-bottom: 12px;
  background: var(--soft-yellow);
  border-radius: var(--radius-small);
  overflow: hidden;
}
.science-object-image img { width: 100%; height: 100%; object-fit: contain; }
.science-object-card span { display: block; font-size: 1rem; font-weight: 700; }
.science-content-panel { display: grid; gap: 20px; margin-top: 28px; scroll-margin-top: 100px; }
.science-section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding: 12px;
  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-medium);
}
.science-section-nav a {
  flex: 1 1 auto;
  padding: 10px 12px;
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  background: var(--soft-purple);
  color: var(--charcoal);
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  font-size: .9rem;
}
.science-section-nav a:hover { background: var(--soft-green); }
.science-stage { min-width: 0; }
.science-content-section { background: var(--paper); }
.science-content-heading { margin-bottom: 24px; text-align: center; }
.science-content-heading h2 { margin: 0; font-size: 1.7rem; }
.science-back-link {
  justify-self: start;
  display: inline-flex;
  padding: 12px 18px;
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  color: var(--charcoal);
  background: var(--soft-yellow);
  font-weight: 800;
  text-decoration: none;
}
.science-back-link:hover { background: var(--yellow); }
/* The child components already provide their own section boxes and spacing. */
.science-stage :deep(.gtac-section) { margin-bottom: 0; }
@media (max-width: 650px) {
  .science-hero { padding: 30px 18px; }
  .science-object-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
  .science-object-card { --padding: 9px; }
  .science-object-card span { font-size: .88rem; }
  .science-content-section, .science-stage :deep(.gtac-section) { padding: 16px; }
  .science-section-nav a { flex-basis: calc(50% - 5px); font-size: .83rem; padding: 10px 8px; }
}
@media (max-width: 380px) {
  .science-object-grid { grid-template-columns: 1fr; }
  .science-object-card { max-width: 220px; width: 100%; margin: 0 auto; }
}
</style>
