<script setup>
defineProps({
  url: { type: String, required: true },
  name: { type: String, required: true },
})
defineEmits(['close'])
</script>

<template>
  <div class="profile-toolbar">
    <strong>{{ name }}’s STEM profile</strong>
    <button class="profile-close" type="button" aria-label="Close this expert profile" @click="$emit('close')">
      ✕ Close
    </button>
  </div>
  <div class="thinglink-embed">
    <iframe class="thinglink-frame" :title="`${name} ThingLink profile`" :src="url" loading="lazy" allowfullscreen></iframe>
  </div>
</template>
