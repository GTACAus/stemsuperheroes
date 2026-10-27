<script setup>
import { computed, nextTick, ref, useTemplateRef } from 'vue';
import ExpertCard from '../components/experts/ExpertCard.vue';
import ExpertProfile from '../components/experts/ExpertProfile.vue';
import ThingLinkEmbed from '../components/experts/ThingLinkEmbed.vue';
import { expertProfiles } from '../data/expert-profiles.js';

const cardRefs = useTemplateRef('cards');

const activeId = ref(null);
const flippedId = ref(null);
// The shared panel renders after the last card in the active card's grid row.
const panelAfterIndex = ref(-1);

const activeExpert = computed(() => expertProfiles.find((e) => e.name === activeId.value));

function lastIndexInRow(index) {
  const els = cardRefs.value.map((c) => c.$el);
  let last = index;
  els.forEach((el, i) => {
    if (el.offsetTop === els[index].offsetTop) last = Math.max(last, i);
  });
  return last;
}

function close(restoreFocus = true) {
  const index = expertProfiles.findIndex((e) => e.name === activeId.value);
  activeId.value = null;
  flippedId.value = null;
  panelAfterIndex.value = -1;
  if (restoreFocus && index >= 0) cardRefs.value[index].$el.focus({ preventScroll: true });
}

async function open(index) {
  const expert = expertProfiles[index];
  if (activeId.value === expert.name) return close(false);
  if (!expert.timeline && !expert.thinglinkUrl) {
    console.warn(`${expert.name} needs a full profile or a thinglinkUrl.`);
    return;
  }
  panelAfterIndex.value = lastIndexInRow(index);
  activeId.value = expert.name;
  await nextTick();
  document.getElementById('expert-details-panel')?.scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  });
}

function activate(index, { source }) {
  const expert = expertProfiles[index];
  const hasHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  // On touch: first tap flips; second tap opens. Desktop and keyboard open directly.
  if (source === 'pointer' && !hasHover && flippedId.value !== expert.name) {
    flippedId.value = expert.name;
    return;
  }
  open(index);
}
</script>

<template>
  <main class="page">
    <section class="experts-hero">
      <p class="experts-eyebrow">Meet local STEM people</p>
      <h1>Local STEM Experts</h1>
      <p class="experts-intro">
        Discover people working in science, technology, engineering and
        mathematics, and learn about the pathways that brought them there.
      </p>
    </section>

    <section class="experts-content" aria-labelledby="experts-heading">
      <div class="experts-section-heading">
        <h2 id="experts-heading">Meet the experts</h2>
        <p>Explore the profiles below to learn about different STEM careers and experiences.</p>
        <p class="experts-tap-hint">On a touchscreen, tap once to flip a card and again to open the profile.</p>
      </div>

      <div class="experts-grid">
        <template v-for="(expert, i) in expertProfiles" :key="expert.name">
          <ExpertCard
            ref="cards"
            :expert="expert"
            :flipped="flippedId === expert.name"
            :expanded="activeId === expert.name"
            @activate="activate(i, $event)"
          />
          <section
            v-if="activeExpert && panelAfterIndex === i"
            id="expert-details-panel"
            class="expert-profile-panel"
            :aria-labelledby="activeExpert.thinglinkUrl ? undefined : 'active-expert-name'"
          >
            <ThingLinkEmbed
              v-if="activeExpert.thinglinkUrl"
              :url="activeExpert.thinglinkUrl"
              :name="activeExpert.name"
              @close="close()"
            />
            <ExpertProfile v-else :expert="activeExpert" @close="close()" />
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
