<script setup>
import ExpertTimeline from './ExpertTimeline.vue'

defineProps({ expert: { type: Object, required: true } })
defineEmits(['close'])

const impactIcons = ['🔎', '♡', '✿']
</script>

<template>
  <div class="profile-toolbar">
    <span class="profile-eyebrow">Meet a STEM Superhero</span>
    <button class="profile-close" type="button" aria-label="Close this expert profile" @click="$emit('close')">
      ✕ Close
    </button>
  </div>

  <div class="profile-intro">
    <img class="profile-portrait" :src="expert.portrait" :alt="`Portrait of ${expert.name}`" />
    <div class="profile-intro-text">
      <h2 id="active-expert-name">{{ expert.name }}</h2>
      <p class="profile-meta">💼 <span>{{ expert.role }}</span></p>
      <p class="profile-meta">📍 <span>{{ expert.organisation }}</span></p>
      <div class="profile-superpower">
        <strong>⚡ STEM Superpower</strong>
        <p>{{ expert.superpower }}</p>
      </div>
    </div>
  </div>

  <section class="profile-section" :aria-label="`${expert.name}'s story`">
    <h3 class="profile-section-heading">{{ expert.name }}’s Story</h3>
    <div class="profile-timeline">
      <ExpertTimeline :stages="expert.timeline" />
    </div>
  </section>

  <div class="profile-info-grid">
    <section class="profile-section profile-hobbies">
      <h3 class="profile-section-heading">{{ expert.hobbies.heading }}</h3>
      <p>{{ expert.hobbies.text }}</p>
      <img :src="expert.hobbies.image" :alt="expert.hobbies.imageAlt" loading="lazy" />
    </section>
    <section class="profile-section profile-impact">
      <h3 class="profile-section-heading">{{ expert.impact.heading }}</h3>
      <div class="profile-impact-layout">
        <ul class="profile-impact-list">
          <li v-for="(point, i) in expert.impact.points" :key="point">
            <span :class="`impact-icon impact-icon-${i % 3}`" aria-hidden="true">{{ impactIcons[i % 3] }}</span>
            <span>{{ point }}</span>
          </li>
        </ul>
        <img :src="expert.impact.image" :alt="expert.impact.imageAlt" loading="lazy" />
      </div>
    </section>
  </div>

  <section class="profile-section profile-advice">
    <h3 class="profile-section-heading">Advice</h3>
    <ul>
      <li v-for="item in expert.advice" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
