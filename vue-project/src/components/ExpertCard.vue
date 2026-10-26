<script setup>
defineProps({
  expert: { type: Object, required: true },
  flipped: Boolean,
  expanded: Boolean,
});
defineEmits(['activate']);

const rows = [
  { key: 'superpower', icon: '⚛', label: 'STEM superpower', tone: 'dark' },
  { key: 'coolFact', icon: '💡', label: 'Cool fact', tone: 'light' },
  { key: 'impact', icon: '✨', label: 'Impact', tone: 'dark' },
  { key: 'lesson', icon: '💬', label: 'Lesson', tone: 'light' },
];
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
          <p class="expert-field">{{ expert.role }}</p>
          <h3>{{ expert.name }}</h3>
          <p class="expert-role">{{ expert.subtitle ?? expert.organisation }}</p>
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
              <strong>{{ expert.name }}</strong><span>{{ expert.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.expert-flip-card {
  aspect-ratio: 5 / 7;
  perspective: 1000px;
  cursor: pointer;
  min-width: 0;
  border-radius: var(--radius-medium);
}
.expert-flip-card:focus-visible { outline: 4px solid var(--purple); outline-offset: 5px; }
.expert-flip-card[aria-expanded="true"] { outline: 4px solid var(--green); outline-offset: 5px; }
.expert-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform .6s ease;
  transform-style: preserve-3d;
}
@media (hover: hover) and (pointer: fine) {
  .expert-flip-card:hover .expert-flip-inner,
  .expert-flip-card:focus-visible .expert-flip-inner { transform: rotateY(180deg); }
}
.expert-flip-card.is-flipped .expert-flip-inner { transform: rotateY(180deg); }
.expert-card-face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--paper);
  border: 3px solid var(--charcoal);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.expert-card-front { display: flex; flex-direction: column; }
.expert-image { aspect-ratio: 1 / 1; overflow: hidden; }
.expert-image img { width: 100%; height: 100%; object-fit: cover; }
.expert-card-content { padding: 20px; }
.expert-card-front h3 { margin: 0 0 6px; font-size: 1.4rem; }
.expert-field {
  width: fit-content;
  margin: 0 0 10px;
  padding: 5px 10px;
  background: var(--soft-purple);
  color: var(--purple);
  border-radius: 999px;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
}
.expert-role { margin: 0; color: var(--muted); font-weight: 700; }

.expert-card-back { padding: 12px; background: #b9d88c; transform: rotateY(180deg); }
.expert-detail-stack { display: grid; gap: 10px; }
.expert-detail-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  align-items: start;
  gap: 10px;
  padding: 12px;
  border-radius: 18px;
}
.expert-detail-row--dark { background: var(--charcoal); color: white; }
.expert-detail-row--light { background: var(--soft-yellow); color: var(--charcoal); }
.expert-detail-icon {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 50%;
  font-size: .9rem;
}
.expert-detail-row strong { display: block; margin-bottom: 3px; font-size: .85rem; }
.expert-detail-row p { margin: 0; font-size: .78rem; line-height: 1.3; }
.expert-profile-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: #dfff9f;
  border-radius: 999px;
}
.expert-profile-chip img { width: 42px; height: 42px; object-fit: cover; border: 2px solid white; border-radius: 50%; }
.expert-profile-chip strong, .expert-profile-chip span { display: block; }
.expert-profile-chip strong { font-size: .9rem; }
.expert-profile-chip span { font-size: .75rem; }

@media (prefers-reduced-motion: reduce) {
  .expert-flip-inner { transition: none; }
}
</style>
