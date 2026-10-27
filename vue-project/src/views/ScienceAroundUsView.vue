<script setup>
import { ref } from 'vue';
import HelmetDetails from '../components/science/HelmetDetails.vue';
import StwSection from '../components/science/StwSection.vue';
import { scienceObjects } from '../data/science-objects.js';
import LearningOverview from '../components/science/LearningOverview.vue';
import Button from '../components/Button.vue';

// Extra content shown below an object's See / Think / Wonder, keyed by object id.
const extras = { helmet: HelmetDetails };

const selectedId = ref(null);
</script>

<template>
  <main class="page">
    <!-- Science is all around us header section-->
    <section class="science-hero">
      <p class="science-eyebrow">Science is everywhere</p>
      <h1>Science is All Around Us</h1>

      <p class="science-intro">Explore how science and STEM are part of the world around you.</p>
    </section>

    <!-- Learning Overview -->
    <LearningOverview 
      learningObjective="Explore how STEM is used to solve problems and create or improve everyday objects"
      :successCriteria="[
        'I can explain what problem an everyday object is designed to solve',
        'I can identify how science, technology, engineering, or mathematics is used in an everyday object',
        'I can describe how STEM Experts use their knowledge and skills to design, test or improve everyday objects'
      ]"
    />

    <!-- Choose something to explore -->
    <section class="science-explorer">
      <div class="science-explorer-heading">
        <h2>Choose something to explore</h2>
        <p>Select an object to discover the science and STEM behind it.</p>
      </div>

      <div class="science-object-grid">
        <Button
          v-for="object in scienceObjects"
          :key="object.id"
          class="science-object-card"
          :class="{ selected: selectedId === object.id }"
          :aria-pressed="String(selectedId === object.id)"
          type="button"
          @click="selectedId = object.id"
        >
          <div class="science-object-image">
            <img :src="object.image" :alt="object.imageAlt" />
          </div>

          <span>{{ object.name }}</span>
        </Button>
      </div>
    </section>

    <!-- One panel per object. v-show (not v-if) keeps students' typed answers when they switch objects. -->
    <section
      v-for="object in scienceObjects"
      v-show="selectedId === object.id"
      :key="object.id"
      class="science-content-panel"
    >
      <section class="gtac-section science-content-section">
        <div class="science-content-heading">
          <h2>See / Think / Wonder</h2>
        </div>

        <StwSection
          type="see"
          :images="object.observationImages"
          :placeholder="object.placeholders.see"
          :aria-label="`Add an observation about the ${object.name.toLowerCase()} images`"
        />
        <StwSection
          type="think"
          :placeholder="object.placeholders.think"
          :aria-label="`Add a thought about the ${object.name.toLowerCase()} images`"
        />
        <StwSection
          type="wonder"
          :placeholder="object.placeholders.wonder"
          :aria-label="`Add a question about the ${object.name.toLowerCase()} images`"
        />
      </section>

      <component :is="extras[object.id]" v-if="extras[object.id]" />
    </section>
  </main>
</template>

<style scoped>
/* ---------- Hero ---------- */
.science-hero {
  padding: 50px 30px;

  background: var(--purple);

  border: 3px solid var(--charcoal);
  border-radius: var(--radius-large);

  box-shadow: var(--shadow-medium);

  text-align: center;
}

.science-eyebrow {
  width: fit-content;
  margin: 0 auto 12px;
  padding: 7px 14px;

  background: var(--yellow);
  color: var(--charcoal);

  border: 2px solid var(--charcoal);
  border-radius: 999px;

  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.science-hero h1 {
  margin: 0 0 14px;

  color: white;

  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.05;
}

.science-intro {
  max-width: 650px;
  margin: 0 auto 32px;

  color: white;

  font-size: 1.1rem;
  line-height: 1.6;
}

/* ---------- Object selector ---------- */
.science-explorer {
  padding: 8px 0 30px;
}

.science-explorer-heading {
  margin-bottom: 24px;
  text-align: center;
}

.science-explorer-heading h2 {
  margin: 0 0 8px;
  font-size: clamp(1.3rem, 5vw, 1.7rem);
}

.science-explorer-heading p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.science-object-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  max-width: 700px;
  margin: 0 auto;
}

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

.science-object-image {
  display: grid;
  place-items: center;

  aspect-ratio: 1;

  margin-bottom: 12px;

  background: var(--soft-yellow);
  border-radius: var(--radius-small);

  overflow: hidden;
}

.science-object-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}

.science-object-card span {
  display: block;

  font-size: 1rem;
  font-weight: 700;
}

/* ---------- Content panel (groups everything for one object; no visible box) ---------- */
.science-content-panel {
  display: grid;
  gap: 26px;

  margin-top: 32px;
}

.science-content-section {
  background: var(--paper);
}

/* Avoid double spacing between sections inside the panel */
.science-content-panel > :deep(.gtac-section) {
  margin-bottom: 0;
}

.science-content-heading {
  margin-bottom: 28px;
  text-align: center;
}

.science-content-heading h2 {
  margin: 0;

  font-size: 1.7rem;
}

@media (max-width: 650px) {
  .science-hero {
    padding: 35px 18px;
  }

  .science-explorer {
    padding: 24px 18px;
  }

  .science-object-grid {
    grid-template-columns: 1fr;
  }

  .science-object-card {
    max-width: 260px;
    width: 100%;
    margin: 0 auto;
  }

  .science-content-section,
  .science-content-panel :deep(.gtac-section) {
    padding: 18px;
  }
}
</style>
