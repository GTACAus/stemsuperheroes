<script setup>
import { computed, ref } from 'vue';

// Reusable for any ordered sequence of stages:
// { title, colour, points, image, imageAlt, imageFit?, draft? }
const props = defineProps({
  stages: { type: Array, required: true },
});

const selected = ref(0);
const stage = computed(() => props.stages[selected.value]);
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
    <div class="timeline-display">
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
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 4px;
  min-width: 570px;
  padding: 0 4px;
}
.timeline-track::before {
  content: "";
  position: absolute;
  left: 10%;
  right: 10%;
  top: 19px;
  height: 7px;
  background: #37275c;
  border-radius: 999px;
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
.timeline-photo-wrap { margin: 0; min-width: 0; background: #f5f4ee; border-radius: 15px; overflow: hidden; }
.timeline-photo { display: block; width: 100%; height: 100%; min-height: 245px; max-height: 330px; object-fit: cover; }

@media (max-width: 650px) {
  .timeline-swipe-hint { display: block; margin: 0 0 8px; color: var(--muted); font-size: .75rem; font-weight: 700; text-align: center; }
  .timeline-display { grid-template-columns: minmax(0, 1fr); }
  .timeline-story { min-height: 0; }
  .timeline-photo { max-height: 270px; }
}
@media (prefers-reduced-motion: reduce) {
  .timeline-pin { transition: none; }
}
</style>
