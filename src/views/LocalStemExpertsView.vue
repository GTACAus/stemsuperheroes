<script setup>
/* =========================================================
   STEM EXPERT CARDS
   Show all experts in their original order.
   The open profile appears beneath the selected card's row.
   ========================================================= */
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import ExpertCard from '../components/experts/ExpertCard.vue';
import ExpertProfile from '../components/experts/ExpertProfile.vue';
import ThingLinkEmbed from '../components/experts/ThingLinkEmbed.vue';
import { expertCards } from '../data/expert-cards.js';
import { expertProfiles } from '../data/expert-profiles.js';

const activeId = ref(null);
const flippedId = ref(null);
const panelAfterIndex = ref(-1);
const activeCard = computed(() => expertCards.find((c) => c.id === activeId.value));
const activeProfile = computed(() => activeCard.value && expertProfiles[activeCard.value.id]);
// Keep DOM elements by expert id for reliable focus restoration.
const cardElements = new Map();
function setCardElement(id, instance) {
  if (instance?.$el) cardElements.set(id, instance.$el);
  else cardElements.delete(id);
}

function lastIndexInRow(index) {
  const columns = window.matchMedia('(max-width: 600px)').matches
    ? 1
    : window.matchMedia('(max-width: 850px)').matches ? 2 : 3;
  const last = Math.floor(index / columns) * columns + columns - 1;
  return Math.min(expertCards.length - 1, last);
}
function updatePanelPosition() {
  const index = expertCards.findIndex((c) => c.id === activeId.value);
  if (index >= 0) panelAfterIndex.value = lastIndexInRow(index);
}
onMounted(() => window.addEventListener('resize', updatePanelPosition));
onUnmounted(() => window.removeEventListener('resize', updatePanelPosition));

function close(restoreFocus = true) {
  const closingId = activeId.value;
  activeId.value = null;
  flippedId.value = null;
  panelAfterIndex.value = -1;
  if (restoreFocus && closingId) {
    nextTick(() => cardElements.get(closingId)?.focus({ preventScroll: true }));
  }
}

async function open(index) {
  const card = expertCards[index];
  if (!card) return;
  if (activeId.value === card.id) return close(false);
  if (!expertProfiles[card.id] && !card.thinglinkUrl) {
    console.warn(`Card "${card.id}" has no profile or ThingLink.`);
    return;
  }
  panelAfterIndex.value = lastIndexInRow(index);
  activeId.value = card.id;
  await nextTick();
  document.getElementById('expert-details-panel')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  });
}
function activate(index, { source }) {
  const card = expertCards[index];
  if (!card) return;
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  // Keep the familiar first-tap flip, second-tap open interaction on touch.
  if (source === 'pointer' && !hasHover && flippedId.value !== card.id) {
    flippedId.value = card.id;
    return;
  }
  open(index);
}
</script>

<template>
  <main id="main-content" class="page">
    <section class="experts-hero" aria-labelledby="experts-page-title">
      <p class="experts-eyebrow">Meet local STEM people</p>
      <h1 id="experts-page-title">Local STEM Experts</h1>
      <p class="experts-intro">
        Meet people working in STEM. Explore their stories, careers and paths.
      </p>
    </section>

    <section class="experts-content" aria-labelledby="experts-heading">
      <div class="experts-section-heading">
        <h2 id="experts-heading">Meet the experts</h2>
        <p class="experts-tap-hint">On a touchscreen, tap once to flip a card, then again to open.</p>
      </div>

      <div class="experts-grid">
        <template v-for="(card, i) in expertCards" :key="card.id">
          <ExpertCard
            :ref="instance => setCardElement(card.id, instance)"
            :expert="card"
            :flipped="flippedId === card.id"
            :expanded="activeId === card.id"
            @activate="activate(i, $event)"
          />
          <section
            v-if="activeCard && panelAfterIndex === i"
            id="expert-details-panel"
            class="expert-profile-panel"
            :aria-labelledby="activeProfile ? 'active-expert-name' : undefined"
          >
            <ExpertProfile v-if="activeProfile" :key="activeCard.id" :expert="activeProfile" @close="close()" />
            <ThingLinkEmbed v-else :url="activeCard.thinglinkUrl" :name="activeCard.name" @close="close()" />
          </section>
        </template>
      </div>
    </section>
  </main>
</template>
<style scoped>
.experts-hero {
  padding: 50px 30px;
  background: var(--green);
  border: 3px solid var(--charcoal);
  border-radius: var(--radius-large);
  box-shadow: var(--shadow-medium);
  text-align: center;
}
.experts-eyebrow {
  width: fit-content;
  margin: 0 auto 12px;
  padding: 7px 14px;
  background: var(--yellow);
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
}
.experts-hero h1 {
  margin: 0 0 14px;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.05;
}
.experts-intro {
  max-width: 700px;
  margin: auto;
  font-size: 1.1rem;
  line-height: 1.6;
}
.experts-content { margin-top: 32px; }
.experts-section-heading { margin-bottom: 22px; }
.experts-section-heading h2 { margin: 0 0 8px; font-size: 1.8rem; }
.experts-section-heading p { margin: 0; color: var(--muted); line-height: 1.6; }
.experts-section-heading .experts-tap-hint { margin-top: 6px; font-size: .85rem; }
.experts-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }

.expert-profile-panel {
  grid-column: 1 / -1;
  min-width: 0;
  width: 100%;
  padding: clamp(14px, 3vw, 26px);
  margin-top: 4px;
  background: #fff4d9;
  border: 3px solid var(--charcoal);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-medium);
  scroll-margin-top: 100px;
}

@media (max-width: 850px) {
  .experts-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 600px) {
  .experts-hero { padding: 35px 18px; }
  .experts-grid { grid-template-columns: minmax(0, 1fr); }
  /* ExpertCard's root element receives this view's scope, so it can be sized from here. */
  .expert-flip-card { width: min(100%, 380px); justify-self: center; }
}
</style>
