<script setup>
defineProps({
  expert: { type: Object, required: true },
  flipped: Boolean,
  expanded: Boolean,
})
defineEmits(['activate'])

const rows = [
  { key: 'superpower', icon: '⚛', label: 'STEM superpower', tone: 'dark' },
  { key: 'coolFact', icon: '💡', label: 'Cool fact', tone: 'light' },
  { key: 'impact', icon: '✨', label: 'Impact', tone: 'dark' },
  { key: 'lesson', icon: '💬', label: 'Lesson', tone: 'light' },
]
</script>

<template>
  <article
    class="expert-flip-card"
    :class="{ 'is-flipped': flipped }"
    role="button"
    tabindex="0"
    :aria-label="`Open ${expert.name}'s STEM profile`"
    aria-controls="expert-details-panel"
    :aria-expanded="String(expanded)"
    @click="$emit('activate', { source: 'pointer' })"
    @keydown.enter.space.prevent="$emit('activate', { source: 'keyboard' })"
  >
    <div class="expert-flip-inner">
      <div class="expert-card-face expert-card-front">
        <div class="expert-image">
          <img :src="expert.portrait" :alt="expert.portraitAlt" />
        </div>
        <div class="expert-card-content">
          <p class="expert-field">{{ expert.field }}</p>
          <h3>{{ expert.name }}</h3>
          <p class="expert-role">{{ expert.role }}</p>
        </div>
      </div>
      <div class="expert-card-face expert-card-back">
        <div class="expert-detail-stack">
          <div
            v-for="row in rows"
            :key="row.key"
            class="expert-detail-row"
            :class="`expert-detail-row--${row.tone}`"
          >
            <span class="expert-detail-icon" aria-hidden="true">{{ row.icon }}</span>
            <div>
              <strong>{{ row.label }}</strong>
              <p>{{ expert.back[row.key] }}</p>
            </div>
          </div>
          <div class="expert-profile-chip">
            <img :src="expert.portrait" alt="" />
            <div>
              <strong>{{ expert.name }}</strong><span>{{ expert.field }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
