<script setup>
import ProfileToolbar from './ProfileToolbar.vue';

defineProps({
  url: { type: String, required: true },
  name: { type: String, required: true },
});
defineEmits(['close']);
</script>

<template>
  <ProfileToolbar @close="$emit('close')">
    <strong>{{ name }}’s STEM profile</strong>
  </ProfileToolbar>
  <div class="thinglink-embed">
    <iframe class="thinglink-frame" :title="`${name} ThingLink profile`" :src="url" loading="lazy" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.thinglink-embed {
  width: 100%;
  max-width: 840px;
  margin: auto;
}
.thinglink-frame {
  display: block;
  width: 100%;
  height: 950px;
  border: 0;
}

@media (max-width: 650px) {
  .thinglink-frame { height: 750px; }
}
</style>
