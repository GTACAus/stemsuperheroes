<script setup>
defineEmits(['close'])
</script>

<template>
  <div class="profile-toolbar">
    <slot />
    <button class="profile-close" type="button" aria-label="Close this expert profile" @click="$emit('close')">
      ✕ Close
    </button>
  </div>
</template>

<style scoped>
.profile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.profile-close {
  padding: 7px 13px;
  background: var(--paper);
  color: var(--charcoal);
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
}
.profile-close:hover,
.profile-close:focus-visible {
  background: var(--soft-yellow);
}
</style>
