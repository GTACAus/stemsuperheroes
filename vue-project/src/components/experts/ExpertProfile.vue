<script setup>
import ExpertTimeline from './ExpertTimeline.vue';
import ProfileToolbar from './ProfileToolbar.vue';

defineProps({ expert: { type: Object, required: true } });
defineEmits(['close']);

const impactIcons = ['🔎', '♡', '✿'];
</script>

<template>
  <ProfileToolbar @close="$emit('close')">
    <span class="profile-eyebrow">Meet a STEM Superhero</span>
  </ProfileToolbar>

  <div class="profile-intro">
    <img class="profile-portrait" :src="expert.portrait" :alt="`Portrait of ${expert.name}`" />
    <div class="profile-intro-text">
      <h2 id="active-expert-name">{{ expert.name }}</h2>
      <p class="profile-meta">💼 <span>{{ expert.role }}</span></p>
      <p class="profile-meta">📍 <span>{{ expert.organisation }}</span></p>
      <div class="profile-superpower">
        <strong>⚡ STEM Superpower</strong>
        <p>{{ expert.back.superpower }}</p>
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

  <section v-if="expert.video" class="profile-section profile-video">
    <h3 class="profile-section-heading">
      {{ expert.video.heading }}
    </h3>

    <p>{{ expert.video.description }}</p>

    <video
      controls
      playsinline
      preload="metadata"
      :poster="expert.video.poster"
    >
      <source
        :src="expert.video.src"
        type="video/mp4"
      >
        Your browser does not support this video.
    </video>

    <p class="profile-video-caption">
      {{ expert.video.caption }}
    </p>
  </section>

  <section class="profile-section profile-advice">
    <h3 class="profile-section-heading">Advice</h3>
    <ul>
      <li v-for="item in expert.advice" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<style scoped>
.profile-eyebrow {
  color: var(--purple);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .07em;
  text-transform: uppercase;
}

/* ---------- Portrait, name and STEM superpower ---------- */
.profile-intro {
  display: grid;
  grid-template-columns: minmax(160px, 220px) minmax(0, 1fr);
  align-items: stretch;
  gap: clamp(14px, 2.5vw, 24px);
  margin-bottom: 20px;
}
.profile-portrait {
  width: 100%;
  height: 100%;
  min-height: 230px;
  max-height: 285px;
  object-fit: cover;
  border: 3px solid var(--charcoal);
  border-radius: 16px;
}
.profile-intro-text { min-width: 0; }
.profile-intro-text h2 {
  margin: 0 0 12px;
  color: #37275c;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
}
.profile-meta {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 0 0 7px;
  font-size: 1rem;
  line-height: 1.35;
}
.profile-superpower {
  margin-top: 17px;
  padding: 15px 17px;
  background: var(--mint);
  border-radius: 13px;
}
.profile-superpower strong { color: #37275c; font-size: 1.1rem; }
.profile-superpower p { margin: 6px 0 0; font-weight: 600; line-height: 1.5; }

/* ---------- Sections ---------- */
.profile-section {
  min-width: 0;
  padding: clamp(14px, 2vw, 20px);
  background: #fff;
  border: 3px solid var(--charcoal);
  border-radius: 16px;
}
.profile-section-heading {
  width: 100%;
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 2px dashed var(--mint);
  color: #37275c;
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  line-height: 1.25;
}
.profile-timeline { min-width: 0; }
.profile-info-grid {
  display: grid;
  grid-template-columns: minmax(0, .95fr) minmax(0, 1.25fr);
  gap: 16px;
  margin-top: 16px;
}
.profile-hobbies p { margin: 0 0 12px; font-weight: 600; }
.profile-hobbies img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 12px;
}
.profile-impact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(112px, 36%);
  align-items: stretch;
  gap: 14px;
}
.profile-impact-layout > img {
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  border-radius: 12px;
}
.profile-impact-list { display: grid; align-content: center; gap: 14px; margin: 0; padding: 0; list-style: none; }
.profile-impact-list li { display: flex; align-items: center; gap: 10px; font-size: .95rem; line-height: 1.4; font-weight: 650; }
.impact-icon {
  flex: 0 0 39px;
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  font-size: 1.2rem;
}
.impact-icon-0 { background: #74a5ff; }
.impact-icon-1 { background: #ff875a; }
.impact-icon-2 { background: #67e5c1; }
.profile-advice { margin-top: 16px; }
.profile-advice ul { margin: 0; padding-left: 20px; line-height: 1.6; font-weight: 600; }

@media (max-width: 850px) {
  .profile-info-grid { grid-template-columns: 1fr; }
  .profile-impact-layout { grid-template-columns: minmax(0, 1fr) minmax(125px, 30%); }
}
@media (max-width: 650px) {
  .profile-intro { grid-template-columns: 125px minmax(0, 1fr); }
  .profile-portrait { min-height: 155px; max-height: 230px; }
  .profile-intro-text h2 { font-size: 2rem; }
  .profile-meta { font-size: .88rem; }
}
@media (max-width: 460px) {
  .profile-intro { grid-template-columns: 1fr; }
  .profile-portrait { width: min(100%, 230px); height: 210px; }
  .profile-superpower { margin-top: 13px; }
  .profile-impact-layout { grid-template-columns: 1fr; }
  .profile-impact-layout > img { max-height: 240px; }
}

/* =========================================================
   OPTIONAL VIDEO FEATURE

   Controls video size, spacing and appearance.
   Keeps videos responsive on desktop and mobile.
   ========================================================= */

.profile-video {
    margin-top: 16px;
    min-width: 0;
}

/* ---------- Video player ---------- */

.profile-video video {
    display: block;

    width: 100%;
    max-width: 760px;

    aspect-ratio: 16 / 9;
    height: auto;

    object-fit: contain;

    margin: 16px auto;
    background: #111;

    border-radius: 12px;
}

/* ---------- Video caption ---------- */

.profile-video-caption {
    margin: 12px 0 0;

    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.5;
}
</style>
