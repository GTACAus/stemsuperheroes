<script setup>
import { computed, ref, watch } from "vue";
import ExpertTimeline from "./ExpertTimeline.vue";
import ProfileToolbar from "./ProfileToolbar.vue";

const props = defineProps({
  // One entry from data/expert-profiles.js
  expert: { type: Object, required: true },
});
defineEmits(["close"]);

const impactIcons = ["🔎", "♡", "✿"];

// Research impact media: an .mp4 (etc.) plays as a video, anything else is an image.
const impactIsVideo = computed(() =>
  /\.(mp4|webm|ogg|mov|m4v)([?#].*)?$/i.test(String(props.expert.impact.image ?? "")),
);

// Hobby photos: hobbies.photos or hobbies.images (array), else hobbies.image (one).
// 1 photo shows a plain image; 2+ photos show the carousel.
const hobbyPhotos = computed(() => {
  const hobbies = props.expert.hobbies || {};
  const list = Array.isArray(hobbies.photos)
    ? hobbies.photos
    : Array.isArray(hobbies.images)
      ? hobbies.images
      : [];
  const photos = list
    .map((p) => (typeof p === "string" ? { image: p } : p))
    .filter((p) => p && p.image);
  if (photos.length) return photos;
  return hobbies.image ? [{ image: hobbies.image, imageAlt: hobbies.imageAlt }] : [];
});
// A simple photo viewer replaces the old layered/3D hobby carousel.
// Keep one selected photo in view; reset when switching experts.
const carouselIndex = ref(0);
watch(() => props.expert, () => { carouselIndex.value = 0; });
const currentHobbyPhoto = computed(() =>
  hobbyPhotos.value[carouselIndex.value] || hobbyPhotos.value[0] || null,
);

// Optional extra photo collage: only photos listed in expert.gallery, at most 5.
const galleryPhotos = computed(() =>
  Array.isArray(props.expert.gallery)
    ? props.expert.gallery.filter((p) => p && p.image).slice(0, 5)
    : [],
);
</script>

<template>
  <ProfileToolbar @close="$emit('close')">
    <span class="profile-eyebrow">Meet a STEM Superhero</span>
  </ProfileToolbar>

  <div class="profile-intro">
    <img
      class="profile-portrait"
      :src="expert.portrait"
      :alt="`Portrait of ${expert.name}`"
    />
    <div class="profile-intro-text">
      <h2 id="active-expert-name">{{ expert.name }}</h2>
      <p class="profile-meta">
        💼 <span>{{ expert.role }}</span>
      </p>
      <p class="profile-meta">
        📍 <span>{{ expert.organisation }}</span>
      </p>
      <div class="profile-superpower">
        <strong>⚡ STEM Superpower</strong>
        <p>{{ expert.superpower }}</p>
      </div>
    </div>
  </div>

  <section class="profile-section" :aria-label="`${expert.name}'s story`">
    <h3 class="profile-section-heading">{{ expert.name }}’s Story</h3>
    <div class="profile-timeline">
      <ExpertTimeline
        :stages="expert.timeline"
        :prompt="`↑ Choose a coloured pin above to explore ${expert.name}’s story!`"
      />
    </div>
  </section>

  <div class="profile-info-grid">
    <section class="profile-section profile-hobbies">
      <h3 class="profile-section-heading">{{ expert.hobbies.heading }}</h3>
      <p>{{ expert.hobbies.text }}</p>
      <!-- Simple hobby photo viewer: no overlapping cards or 3D perspective. -->
      <div
        v-if="currentHobbyPhoto"
        class="hobby-photo-viewer"
        role="group"
        :aria-label="`${expert.name}'s hobby photos`"
      >
        <!-- The photograph sets its OWN size, preserving portrait/landscape proportions. -->
        <div class="hobby-photo-stage">
          <img
            :key="currentHobbyPhoto.image"
            :src="currentHobbyPhoto.image"
            :alt="currentHobbyPhoto.imageAlt || `Photo of ${expert.name}`"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Navigation lives BELOW the photo, never on top of it. -->
        <div
          v-if="hobbyPhotos.length > 1 || currentHobbyPhoto.caption"
          class="hobby-photo-footer"
          :class="{ 'hobby-photo-footer--single': hobbyPhotos.length === 1 }"
        >
          <button
            v-if="hobbyPhotos.length > 1"
            class="hobby-photo-arrow"
            type="button"
            :disabled="carouselIndex === 0"
            :aria-label="`Previous photo of ${expert.name}`"
            @click="carouselIndex--"
          >&#10094;</button>
          <span class="hobby-photo-description" aria-live="polite">
            <span v-if="hobbyPhotos.length > 1" class="hobby-photo-count">
              {{ carouselIndex + 1 }} / {{ hobbyPhotos.length }}
            </span>
            <span v-if="currentHobbyPhoto.caption" class="hobby-photo-caption">
              {{ currentHobbyPhoto.caption }}
            </span>
          </span>
          <button
            v-if="hobbyPhotos.length > 1"
            class="hobby-photo-arrow"
            type="button"
            :disabled="carouselIndex === hobbyPhotos.length - 1"
            :aria-label="`Next photo of ${expert.name}`"
            @click="carouselIndex++"
          >&#10095;</button>
        </div>
      </div>
    </section>
    <section class="profile-section profile-impact">
      <h3 class="profile-section-heading">{{ expert.impact.heading }}</h3>
      <div class="profile-impact-layout">
        <ul class="profile-impact-list">
          <li v-for="(point, i) in expert.impact.points" :key="point">
            <span
              :class="`impact-icon impact-icon-${i % 3}`"
              aria-hidden="true"
              >{{ impactIcons[i % 3] }}</span
            >
            <span>{{ point }}</span>
          </li>
        </ul>
        <video
          v-if="impactIsVideo"
          :src="expert.impact.image"
          controls
          playsinline
          preload="metadata"
        ></video>
        <img
          v-else
          :src="expert.impact.image"
          :alt="expert.impact.imageAlt || ''"
          loading="lazy"
        />
      </div>
    </section>
  </div>

  <section v-if="galleryPhotos.length" class="profile-section profile-gallery">
    <h3 class="profile-section-heading">More moments with {{ expert.name }}</h3>
    <div
      class="profile-gallery-grid"
      :class="{ 'profile-gallery-grid--single': galleryPhotos.length === 1 }"
    >
      <figure v-for="(photo, i) in galleryPhotos" :key="i" class="profile-gallery-item">
        <img
          :src="photo.image"
          :alt="photo.imageAlt || photo.caption || `Photo of ${expert.name}`"
          loading="lazy"
        />
        <figcaption v-if="photo.caption">{{ photo.caption }}</figcaption>
      </figure>
    </div>
  </section>

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
      <source :src="expert.video.src" type="video/mp4" />
      Your browser does not support this video.
    </video>

    <p class="profile-video-caption">
      {{ expert.video.caption }}
    </p>
  </section>

  <section class="profile-section profile-advice">
    <h3 class="profile-section-heading">{{ expert.adviceHeading || "Advice" }}</h3>
    <ul>
      <li v-for="item in expert.advice" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<style scoped>
.profile-eyebrow {
  color: var(--purple);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.07em;
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
.profile-intro-text {
  min-width: 0;
}
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
.profile-superpower strong {
  color: #37275c;
  font-size: 1.1rem;
}
.profile-superpower p {
  margin: 6px 0 0;
  font-weight: 600;
  line-height: 1.5;
}

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
.profile-timeline {
  min-width: 0;
}
.profile-info-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.25fr);
  gap: 16px;
  margin-top: 16px;
}
.profile-hobbies p {
  margin: 0 0 12px;
  font-weight: 600;
}
.profile-impact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(112px, 36%);
  align-items: stretch;
  gap: 14px;
}
.profile-impact-layout > img,
.profile-impact-layout > video {
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  border-radius: 12px;
}
.profile-impact-list {
  display: grid;
  align-content: center;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.profile-impact-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 650;
}
.impact-icon {
  flex: 0 0 39px;
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  font-size: 1.2rem;
}
.impact-icon-0 {
  background: #74a5ff;
}
.impact-icon-1 {
  background: #ff875a;
}
.impact-icon-2 {
  background: #67e5c1;
}
.profile-advice {
  margin-top: 16px;
}
.profile-advice ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.6;
  font-weight: 600;
}

@media (max-width: 850px) {
  .profile-info-grid {
    grid-template-columns: 1fr;
  }
  .profile-impact-layout {
    grid-template-columns: minmax(0, 1fr) minmax(125px, 30%);
  }
}
@media (max-width: 650px) {
  .profile-intro {
    grid-template-columns: 125px minmax(0, 1fr);
  }
  .profile-portrait {
    min-height: 155px;
    max-height: 230px;
  }
  .profile-intro-text h2 {
    font-size: 2rem;
  }
  .profile-meta {
    font-size: 0.88rem;
  }
}
@media (max-width: 460px) {
  .profile-intro {
    grid-template-columns: 1fr;
  }
  .profile-portrait {
    width: min(100%, 230px);
    height: 210px;
  }
  .profile-superpower {
    margin-top: 13px;
  }
  .profile-impact-layout {
    grid-template-columns: 1fr;
  }
  .profile-impact-layout > img,
  .profile-impact-layout > video {
    max-height: 240px;
  }
}

/* =========================================================
   OPTIONAL EXPERT PHOTO GALLERY (1-5 selected photos)
   ========================================================= */
.profile-gallery {
  margin-top: 16px;
}
.profile-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 14px;
}
.profile-gallery-grid--single {
  max-width: 520px;
}
.profile-gallery-item {
  min-width: 0;
  margin: 0;
}
.profile-gallery-item img {
  display: block;
  width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
}
.profile-gallery-item figcaption {
  margin-top: 7px;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.4;
  text-align: center;
}
@media (max-width: 600px) {
  .profile-gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
  }
  .profile-gallery-item img {
    height: 180px;
  }
}

/* =========================================================
   HOBBIES PHOTO VIEWER - ADAPTIVE IMAGE SIZING

   - Each photo keeps its natural portrait/landscape shape.
   - NO fixed-height background or empty side panels.
   - Photos stay fully visible (no cropping).
   - Arrows and caption are BELOW the image.
   - Unrelated optional expert.gallery remains unchanged.
   ========================================================= */
.hobby-photo-viewer {
  width: 100%;
  margin: 16px auto 4px;
}
.hobby-photo-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
}
.hobby-photo-stage > img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 385px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.09);
}
.hobby-photo-footer {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 36px;
  align-items: center;
  gap: 10px;
  margin-top: 9px;
  color: var(--muted, #626262);
  font-size: 0.85rem;
  line-height: 1.35;
  text-align: center;
}
.hobby-photo-footer--single {
  display: block;
}
.hobby-photo-description {
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
}
.hobby-photo-arrow {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1.5px solid var(--charcoal, #323330);
  border-radius: 50%;
  background: #fff;
  color: var(--charcoal, #323330);
  font-size: 1.05rem;
  cursor: pointer;
}
.hobby-photo-arrow:not(:disabled):hover {
  background: var(--soft-yellow, #ffcc33);
}
.hobby-photo-arrow:disabled {
  opacity: 0.28;
  cursor: default;
}
.hobby-photo-arrow:focus-visible {
  outline: 3px solid #4e31db;
  outline-offset: 3px;
}
.hobby-photo-count {
  font-weight: 750;
  font-variant-numeric: tabular-nums;
}
@media (max-width: 600px) {
  .hobby-photo-stage > img {
    max-height: 315px;
  }
  .hobby-photo-footer {
    grid-template-columns: 34px minmax(0, 1fr) 34px;
    gap: 6px;
  }
  .hobby-photo-arrow {
    width: 34px;
    height: 34px;
  }
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
