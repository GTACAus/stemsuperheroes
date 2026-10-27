<script setup>
import { ref } from 'vue';

// A ThingLink scene with a caption that fades while the pointer is over it,
// so the caption never hides the hotspots underneath.
defineProps({
  title: { type: String, required: true },
  src: { type: String, required: true },
  wide: Boolean,
});

const hovered = ref(false);
</script>

<template>
  <div
    class="thinglink-box"
    :class="{ 'thinglink-box--wide': wide }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <h3 :class="{ transparent: hovered }">{{ title }}</h3>
    <iframe :src="src" :title="title" scrolling="no" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
.thinglink-box {
  position: relative;
  width: 80%;

  margin: 10px auto;
}

.thinglink-box h3 {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  max-width: 80%;

  margin: 0;
  padding: 10px 16px;

  background: var(--paper);

  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  font-size: clamp(15px, 1.5vw, 20px);
  text-align: center;

  z-index: 2;

  transition: opacity 0.1s ease-out;
}

.thinglink-box h3.transparent {
  opacity: 0.3;
}

.thinglink-box iframe {
  width: 100%;
  aspect-ratio: 1 / 1;

  border: 2px solid var(--charcoal);
  border-radius: 10px;

  z-index: 1;
}

.thinglink-box--wide iframe {
  aspect-ratio: 16 / 9;
}

@media (max-width: 650px) {
  .thinglink-box h3 {
    padding: 8px 12px;
  }
}
</style>
