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
// Missing files are hidden automatically so you can add photos over time.
const failedHobbyImages = ref([]);
const missingPortrait = ref(false);
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
    .filter((p) => p && p.image && !failedHobbyImages.value.includes(p.image));
  if (photos.length) return photos;
  return hobbies.image ? [{ image: hobbies.image, imageAlt: hobbies.imageAlt }] : [];
});
// Hobbies viewer: one fixed square frame for every photo.
// The optional cropPosition in expert-profiles.js controls what stays visible.
// Clicking the photo opens its complete, uncropped original in a modal.
const carouselIndex = ref(0);
const hobbyPhotoDialog = ref(null);

watch(() => props.expert, () => {
  carouselIndex.value = 0;
  failedHobbyImages.value = [];
  missingPortrait.value = false;
  if (hobbyPhotoDialog.value?.open) hobbyPhotoDialog.value.close();
});

const currentHobbyPhoto = computed(() =>
  hobbyPhotos.value[carouselIndex.value] || hobbyPhotos.value[0] || null,
);

// Example photo entry: { image: '...', cropPosition: '50% 30%' }
// 50% 50% = centred; smaller second percentage = higher in image.
const hobbyPhotoImageStyle = computed(() => ({
  objectPosition: currentHobbyPhoto.value?.cropPosition || '50% 50%',
}));

// A photo that has not been saved yet should not leave a broken image.
// When it is added later, reloading the profile will show it automatically.
function onHobbyPhotoError(src) {
  if (!src || failedHobbyImages.value.includes(src)) return;
  failedHobbyImages.value = [...failedHobbyImages.value, src];
  carouselIndex.value = 0;
}

function openFullHobbyPhoto() {
  const dialog = hobbyPhotoDialog.value;
  if (dialog && !dialog.open) dialog.showModal();
}

function closeFullHobbyPhoto() {
  if (hobbyPhotoDialog.value?.open) hobbyPhotoDialog.value.close();
}

function onHobbyDialogClick(event) {
  // Clicking outside the image closes the preview, as does Escape.
  if (event.target === hobbyPhotoDialog.value) closeFullHobbyPhoto();
}

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
      v-if="expert.portrait && !missingPortrait"
      class="profile-portrait"
      :src="expert.portrait"
      :alt="`Portrait of ${expert.name}`"
      @error="missingPortrait = true"
    />
    <div v-else class="profile-portrait profile-portrait-placeholder" role="img" :aria-label="`Portrait of ${expert.name} coming soon`">
      <span aria-hidden="true">{{ expert.name.slice(0, 1) }}</span>
      <small>Photo coming soon</small>
    </div>
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
      <!-- Consistent square photo frame with optional crop positioning. -->
      <div
        v-if="currentHobbyPhoto"
        class="hobby-photo-viewer"
        role="group"
        :aria-label="`${expert.name}'s hobby photos`"
      >
        <div class="hobby-photo-stage">
          <Transition name="hobby-photo-swap" mode="out-in">
            <button
              :key="`${carouselIndex}-${currentHobbyPhoto.image}`"
              type="button"
              class="hobby-photo-open"
              :aria-label="`View full photo of ${expert.name}`"
              title="View full photograph"
              @click="openFullHobbyPhoto"
            >
              <img
                :src="currentHobbyPhoto.image"
                :alt="currentHobbyPhoto.imageAlt || `Photo of ${expert.name}`"
                :style="hobbyPhotoImageStyle"
                loading="lazy"
                decoding="async"
                @error="onHobbyPhotoError(currentHobbyPhoto.image)"
              />
              <span class="hobby-photo-expand" aria-hidden="true">⤢</span>
            </button>
          </Transition>
        </div>

        <!-- Arrows and count sit directly below the image. -->
        <div v-if="hobbyPhotos.length > 1 || currentHobbyPhoto.caption" class="hobby-photo-footer">
          <div v-if="hobbyPhotos.length > 1" class="hobby-photo-controls">
            <button
              class="hobby-photo-arrow"
              type="button"
              :disabled="carouselIndex === 0"
              :aria-label="`Previous photo of ${expert.name}`"
              @click="carouselIndex--"
            >&#10094;</button>
            <span class="hobby-photo-count" aria-live="polite">
              {{ carouselIndex + 1 }} / {{ hobbyPhotos.length }}
            </span>
            <button
              class="hobby-photo-arrow"
              type="button"
              :disabled="carouselIndex === hobbyPhotos.length - 1"
              :aria-label="`Next photo of ${expert.name}`"
              @click="carouselIndex++"
            >&#10095;</button>
          </div>
          <p v-if="currentHobbyPhoto.caption" class="hobby-photo-caption">
            {{ currentHobbyPhoto.caption }}
          </p>
        </div>
      </div>
      <!-- Built-in dialog: show the original entire photo without cropping. -->
      <dialog
        ref="hobbyPhotoDialog"
        class="hobby-photo-dialog"
        :aria-label="`Full photo of ${expert.name}`"
        @click="onHobbyDialogClick"
      >
        <button
          type="button"
          class="hobby-photo-close"
          aria-label="Close full photograph"
          @click="closeFullHobbyPhoto"
        >✕ Close</button>
        <img
          v-if="currentHobbyPhoto"
          :src="currentHobbyPhoto.image"
          :alt="currentHobbyPhoto.imageAlt || `Photo of ${expert.name}`"
        />
        <p v-if="currentHobbyPhoto?.caption" class="hobby-photo-dialog-caption">
          {{ currentHobbyPhoto.caption }}
        </p>
      </dialog>
    </section>
    <section class="profile-section profile-impact">
      <h3 class="profile-section-heading">{{ expert.impact.heading }}</h3>
      <div class="profile-impact-layout" :class="{ 'is-text-only': !expert.impact?.image }">
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
          :poster="expert.impact.poster || undefined"
          :aria-label="expert.impact.imageAlt || `Research video from ${expert.name}`"
          controls
          playsinline
          preload="metadata"
        ></video>
        <img
          v-else-if="expert.impact.image"
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
          :style="photo.imageFit === 'contain' ? { objectFit: 'contain', backgroundColor: '#131b22' } : undefined"
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
.profile-portrait-placeholder {
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 5px;
  background: #e1e9df;
  color: #37275c;
}
.profile-portrait-placeholder > span { font-size: 3.25rem; font-weight: 800; line-height: 1; }
.profile-portrait-placeholder small { font-size: .75rem; font-weight: 700; }
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
/* When a photo is not supplied, the impact points use the entire card. */
.profile-impact-layout.is-text-only { grid-template-columns: minmax(0, 1fr); }
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
   HOBBIES PHOTO VIEWER - SQUARE CROP + FULL PHOTO PREVIEW

   - All photos use the same 1:1 frame to avoid uneven card heights.
   - object-fit: cover fills the square without stretching.
   - cropPosition on an individual photo adjusts where it crops.
   - Click or tap a photo to see the complete original in a dialog.
   - The selected-photo gallery is unaffected.
   ========================================================= */
.hobby-photo-viewer {
  width: 100%;
  margin: 14px auto 4px;
}
.hobby-photo-stage {
  position: relative;
  width: min(100%, 340px);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  background: #f7f5f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
.hobby-photo-open {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  border-radius: inherit;
  background: transparent;
  cursor: zoom-in;
  overflow: hidden;
}
.hobby-photo-open img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hobby-photo-open:focus-visible {
  outline: 4px solid #4e31db;
  outline-offset: -5px;
}
.hobby-photo-expand {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  color: #292929;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.14);
  font-size: 1.25rem;
  line-height: 1;
  pointer-events: none;
}
.hobby-photo-swap-enter-active,
.hobby-photo-swap-leave-active {
  transition: opacity 160ms ease;
}
.hobby-photo-swap-enter-from,
.hobby-photo-swap-leave-to {
  opacity: 0;
}
.hobby-photo-footer {
  width: min(100%, 340px);
  margin: 9px auto 0;
  color: var(--muted, #626262);
  font-size: 0.85rem;
  line-height: 1.35;
  text-align: center;
}
.hobby-photo-controls {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 34px;
  align-items: center;
  gap: 9px;
  width: min(100%, 210px);
  margin: 0 auto;
}
.hobby-photo-arrow {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
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
.hobby-photo-caption {
  margin: 5px 0 0;
  text-align: center;
  overflow-wrap: anywhere;
}
/* Full-size preview opens only when the user clicks the photo. */
.hobby-photo-dialog {
  box-sizing: border-box;
  width: fit-content;
  max-width: min(94vw, 1000px);
  max-height: 92dvh;
  padding: 12px;
  overflow: auto;
  border: 2px solid var(--charcoal, #323330);
  border-radius: 14px;
  background: white;
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.25);
}
.hobby-photo-dialog::backdrop {
  background: rgba(14, 18, 24, 0.7);
}
.hobby-photo-dialog[open] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hobby-photo-dialog img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(92dvh - 95px);
  object-fit: contain;
  border-radius: 7px;
}
.hobby-photo-close {
  align-self: flex-end;
  padding: 6px 11px;
  border: 1.5px solid var(--charcoal, #323330);
  border-radius: 9px;
  background: #fff;
  color: #292929;
  font-weight: 750;
  cursor: pointer;
}
.hobby-photo-close:hover {
  background: #ffcc33;
}
.hobby-photo-close:focus-visible {
  outline: 3px solid #4e31db;
  outline-offset: 2px;
}
.hobby-photo-dialog-caption {
  margin: 0;
  color: #3d3d3d;
  text-align: center;
}
@media (max-width: 600px) {
  .hobby-photo-stage,
  .hobby-photo-footer {
    width: min(100%, 310px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .hobby-photo-swap-enter-active,
  .hobby-photo-swap-leave-active {
    transition: none;
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
