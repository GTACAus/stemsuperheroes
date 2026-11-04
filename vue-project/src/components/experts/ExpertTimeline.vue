<script setup>
import { computed, ref } from 'vue';

// Reusable for any ordered sequence of stages:
// { title, colour, points, image, imageAlt, imageFit?, draft? }
const props = defineProps({
  stages: { type: Array, required: true },
  // Shown in place of the story until a pin is clicked.
  prompt: { type: String, default: '↑ Choose a coloured pin above to explore the story!' },
});

const selected = ref(null);
const stage = computed(() => (selected.value === null ? null : props.stages[selected.value]));
</script>

<template>
  <div v-if="stages.length">
    <div class="timeline-scroller" aria-label="Scroll to see every story stage">
      <div class="timeline-track" role="group" aria-label="Choose a stage of the story">
        <button
          v-for="(s, i) in stages"
          :key="s.title"
          type="button"
          class="timeline-step"
          :class="{ 'is-active': i === selected }"
          :style="{ '--stage-colour': s.colour || '#4e32e8' }"
          :aria-pressed="String(i === selected)"
          @click="selected = i"
        >
          <span class="timeline-pin" aria-hidden="true"></span>
          <span class="timeline-label">{{ s.title }}</span>
        </button>
      </div>
    </div>
    <p class="timeline-swipe-hint">Swipe the timeline sideways to see all {{ stages.length }} stages →</p>
    <p v-if="!stage" class="timeline-prompt">{{ prompt }}</p>
    <div v-else class="timeline-display">
      <div class="timeline-story" :class="{ 'is-draft': stage.draft }" aria-live="polite" aria-atomic="true">
        <h4 class="timeline-story-heading">{{ stage.title }}</h4>
        <ul class="timeline-story-points">
          <li v-for="point in stage.points" :key="point">{{ point }}</li>
        </ul>
      </div>
      <figure class="timeline-photo-wrap">
        <img
          class="timeline-photo"
          :src="stage.image"
          :alt="stage.imageAlt || stage.title"
          :style="{ objectFit: stage.imageFit || 'cover' }"
        />
      </figure>
    </div>
  </div>
</template>

<style scoped>
.timeline-scroller { overflow-x: auto; padding: 4px 0 10px; }
.timeline-swipe-hint { display: none; }
.timeline-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 4px;
  min-width: 570px;
  padding: 0 4px;
}
/* Connects each pin to the next, so it works for any number of stages. */
.timeline-step:not(:last-child)::before {
  content: "";
  position: absolute;
  top: 19px;
  left: calc(50% + 25px);
  width: calc(100% + 4px - 50px);
  height: 7px;
  background: #37275c;
  border-radius: 999px;
  pointer-events: none;
  z-index: -1;
}
.timeline-step {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  min-width: 0;
  padding: 0 3px 6px;
  background: transparent;
  border: 0;
  border-radius: 10px;
  color: var(--charcoal);
  cursor: pointer;
  font: inherit;
}
.timeline-step:focus-visible { outline: 3px solid var(--purple); outline-offset: 2px; }
.timeline-pin {
  display: block;
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50% 50% 50% 0;
  background: var(--stage-colour);
  border: 3px solid white;
  transform: rotate(-45deg);
  box-shadow: 0 2px 2px rgba(0, 0, 0, .17);
  transition: transform .18s ease;
}
.timeline-pin::after {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: white;
}
.timeline-step:hover .timeline-pin,
.timeline-step.is-active .timeline-pin { transform: rotate(-45deg) scale(1.12); }
.timeline-label { font-size: .86rem; font-weight: 650; line-height: 1.24; text-align: center; }
.timeline-step.is-active .timeline-label { color: var(--purple); font-weight: 800; }
.timeline-display {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(175px, .78fr);
  gap: 16px;
  align-items: stretch;
  margin-top: 17px;
}
.timeline-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  margin: 17px 0 0;
  padding: 24px;
  background: #c9f4df;
  border: 2px dashed #69ddb4;
  border-radius: 15px;
  color: #37275c;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.5;
  text-align: center;
}
.timeline-story {
  min-height: 245px;
  padding: 19px 20px;
  background: #c9f4df;
  border-radius: 15px;
}
.timeline-story.is-draft { background: #f4f0db; }
.timeline-story-heading { margin: 0 0 12px; font-size: 1.1rem; }
.timeline-story-points { margin: 0; padding-left: 22px; line-height: 1.58; }
.timeline-story-points li + li { margin-top: 8px; }
/* The story text sets the section height; the photo fills the space so tall or short images can't distort the layout. */
.timeline-photo-wrap { position: relative; min-width: 0; min-height: 245px; margin: 0; background: #f5f4ee; border-radius: 15px; overflow: hidden; }
.timeline-photo { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }

@media (max-width: 650px) {
  .timeline-swipe-hint { display: block; margin: 0 0 8px; color: var(--muted); font-size: .75rem; font-weight: 700; text-align: center; }
  .timeline-display { grid-template-columns: minmax(0, 1fr); }
  .timeline-story { min-height: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .timeline-pin { transition: none; }
}
</style>
