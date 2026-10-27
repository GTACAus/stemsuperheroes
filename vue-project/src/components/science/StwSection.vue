<script setup>
import { computed } from 'vue';
import StudentEntry from './StudentEntry.vue';

// One box of the See / Think / Wonder routine.
// `images` is only used by the SEE box: [{ src, alt }]
const props = defineProps({
  type: { type: String, required: true, validator: (v) => ['see', 'think', 'wonder'].includes(v) },
  images: { type: Array, default: () => [] },
  placeholder: String,
  ariaLabel: String,
});

const content = {
  see: { title: 'SEE', lead: 'Look at the images below.', question: 'What do you see?' },
  think: { title: 'THINK', lead: 'What do you think is going on?', question: 'What makes you think that?' },
  wonder: {
    title: 'WONDER',
    lead: 'What does this make you wonder?',
    question: 'What questions would you like to ask?',
  },
};

const text = computed(() => content[props.type]);
</script>

<template>
  <section class="gtac-section" :class="`gtac-section--${type}`">
    <div class="box-title">
      <span class="gtac-svg-icon" :class="`gtac-svg-icon--${type}`" aria-hidden="true">
        <svg v-if="type === 'see'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"
            stroke="white"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="white" stroke-width="1.7" />
        </svg>

        <svg v-else-if="type === 'think'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 2
               C 14 2.2 16.5 4 17.7 7.2
               C 18.3 8.8 19.3 10 20.6 11.3
               C 21 11.7 20.8 12.3 20.2 12.4
               C 19 12.6 18.1 13.1 17.7 14
               C 17.5 14.5 17.8 14.9 18.3 15
               C 18.9 15.1 19 15.7 18.5 16
               C 17.7 16.5 17 17.1 16.6 17.9
               C 16.3 18.5 15.6 18.7 15 18.5
               C 14.5 18.3 14.1 18.6 14.1 19.2
               L 14.1 21.3
               C 14.1 21.9 13.6 22.3 13 22.3
               L 7.7 22.3
               C 7.1 22.3 6.6 21.9 6.6 21.3
               L 6.6 17.5
               C 6.6 16.8 6.3 16.2 5.8 15.7
               C 4 14 3 11.8 3 9.3
               C 3 5.2 6.6 2 11 2
               Z"
            fill="var(--yellow)"
            stroke="white"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 9a3 3 0 1 1 4.5 2.6c-.9.5-1.5 1-1.5 2.2v.7"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="17.5" r="1" fill="white" />
        </svg>
      </span>

      <h3>{{ text.title }}</h3>
    </div>

    <p class="stw-prompt">
      {{ text.lead }}<br />
      <strong>{{ text.question }}</strong>
    </p>

    <div v-if="images.length" class="stw-image-grid">
      <img v-for="image in images" :key="image.src" :src="image.src" :alt="image.alt" loading="lazy" />
    </div>

    <StudentEntry :placeholder="placeholder" :aria-label="ariaLabel" />
  </section>
</template>

<style scoped>
.gtac-svg-icon--see { background: var(--orange); }
.gtac-svg-icon--think { background: var(--yellow); }
.gtac-svg-icon--wonder { background: var(--green); }

.gtac-section--see { background: var(--soft-orange); }
.gtac-section--think { background: var(--soft-yellow); }
.gtac-section--wonder { background: var(--soft-green); }

.stw-prompt {
  text-align: center;
  font-size: 1.1rem;
}

.stw-image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  margin-top: 18px;
}

.stw-image-grid img {
  width: 100%;
  aspect-ratio: 4 / 3;

  object-fit: cover;

  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

@media (max-width: 650px) {
  .stw-image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
