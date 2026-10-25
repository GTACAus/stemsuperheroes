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
