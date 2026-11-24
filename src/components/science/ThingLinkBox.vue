<script setup>
/* =========================================================
   THINGLINK EMBED
   Keep the label above the iframe, never on top of hotspots.
   The ThingLink can be replaced with native content later.
   ========================================================= */
defineProps({
  title: { type: String, required: true },
  src: { type: String, required: true },
  wide: Boolean,
});
</script>

<template>
  <div class="thinglink-box" :class="{ 'thinglink-box--wide': wide }">
    <h3 class="thinglink-caption">{{ title }}</h3>
    <iframe
      :src="src"
      :title="title"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>
</template>

<style scoped>
.thinglink-box { width: min(100%, 820px); margin: 12px auto; }
.thinglink-caption {
  margin: 0 0 12px;
  padding: 10px 14px;
  background: var(--soft-yellow);
  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
  font-size: clamp(.95rem, 1.5vw, 1.1rem);
  line-height: 1.4;
  text-align: center;
}
.thinglink-box iframe {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 2px solid var(--charcoal);
  border-radius: 10px;
  background: white;
}
.thinglink-box--wide iframe { aspect-ratio: 16 / 9; }
@media (max-width: 650px) {
  .thinglink-box { width: 100%; }
  .thinglink-caption { padding: 9px 10px; }
}
</style>
