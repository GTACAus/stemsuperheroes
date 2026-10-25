<script setup>
import { computed, nextTick, ref, useTemplateRef } from 'vue';
import ExpertCard from '../components/ExpertCard.vue';
import ExpertProfile from '../components/ExpertProfile.vue';
import ThingLinkEmbed from '../components/ThingLinkEmbed.vue';
import { experts } from '../data/experts.js';
import { expertProfiles } from '../data/expert-profiles.js';

const cardRefs = useTemplateRef('cards');

const activeId = ref(null);
const flippedId = ref(null);
// The shared panel renders after the last card in the active card's grid row.
const panelAfterIndex = ref(-1);

const activeExpert = computed(() => experts.find((e) => e.id === activeId.value));
const activeProfile = computed(() => expertProfiles[activeExpert.value?.profileId]);

function lastIndexInRow(index) {
  const els = cardRefs.value.map((c) => c.$el);
  let last = index;
  els.forEach((el, i) => {
    if (el.offsetTop === els[index].offsetTop) last = Math.max(last, i);
  });
  return last;
}

function close(restoreFocus = true) {
  const index = experts.findIndex((e) => e.id === activeId.value);
  activeId.value = null;
  flippedId.value = null;
  panelAfterIndex.value = -1;
  if (restoreFocus && index >= 0) cardRefs.value[index].$el.focus({ preventScroll: true });
}

async function open(index) {
  const expert = experts[index];
  if (activeId.value === expert.id) return close(false);
  if (!expert.profileId && !expert.thinglinkUrl) {
    console.warn(`${expert.name} needs a profileId or thinglinkUrl.`);
    return;
  }
  panelAfterIndex.value = lastIndexInRow(index);
  activeId.value = expert.id;
  await nextTick();
  document.getElementById('expert-details-panel')?.scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  });
}

function activate(index, { source }) {
  const expert = experts[index];
  const hasHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  // On touch: first tap flips; second tap opens. Desktop and keyboard open directly.
  if (source === 'pointer' && !hasHover && flippedId.value !== expert.id) {
    flippedId.value = expert.id;
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
        <template v-for="(expert, i) in experts" :key="expert.id">
          <ExpertCard
            ref="cards"
            :expert="expert"
            :flipped="flippedId === expert.id"
            :expanded="activeId === expert.id"
            @activate="activate(i, $event)"
          />
          <section
            v-if="activeExpert && panelAfterIndex === i"
            id="expert-details-panel"
            class="expert-profile-panel"
            :aria-labelledby="activeProfile ? 'active-expert-name' : undefined"
          >
            <ExpertProfile v-if="activeProfile" :expert="activeProfile" @close="close()" />
            <ThingLinkEmbed v-else :url="activeExpert.thinglinkUrl" :name="activeExpert.name" @close="close()" />
          </section>
        </template>
      </div>
    </section>
  </main>
</template>
