/* =========================================================
   GTAC STEM SUPERHERO - SHARED EXPERT PROFILE

   One reusable renderer for every expert.

   Profile sections:
   1. Introduction and STEM superpower
   2. Clickable timeline
   3. Hobbies (single photo or optional carousel)
   4. Research impact
   5. OPTIONAL selected-photo collage
   6. Optional video
   7. Advice

   All content comes from expert-data.js.
   ========================================================= */

import { initTimeline } from "../activities/timeline.js";

/* ---------------------------------------------------------
   HELPER: DISPLAY TEXT SAFELY IN HTML
   --------------------------------------------------------- */
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

/* ---------------------------------------------------------
   RESEARCH IMPACT: IMAGE OR VIDEO

   Keeps support for an .mp4 in expert.impact.image.
   --------------------------------------------------------- */
function createExpertMedia(expert) {
  const e = escapeHTML;
  const src = String(expert.impact.image ?? "");
  const isVideo = /\.(mp4|webm|ogg|mov|m4v)([?#].*)?$/i.test(src);

  return isVideo
    ? `<video src="${e(src)}" controls playsinline preload="metadata"></video>`
    : `<img src="${e(src)}" alt="${e(expert.impact.imageAlt || "")}" loading="lazy">`;
}

/* ---------------------------------------------------------
   HOBBY PHOTOS - SEPARATE FROM THE EXTRA GALLERY

   Most experts have hobbies.image: ONE photograph.
   Paddy and Meagan also have hobbies.photos: MULTIPLE.

   - 1 photo  => normal static image (the existing layout)
   - 2+ photos => optional left/right carousel
   - No photos => no hobby image

   This DOES NOT select any photos for expert.gallery.
   --------------------------------------------------------- */
function getHobbyPhotos(expert) {
  const hobbies = expert.hobbies || {};

  if (Array.isArray(hobbies.photos)) {
    const photos = hobbies.photos.filter(photo => photo && photo.image);
    if (photos.length > 0) return photos;
  }

  return hobbies.image
    ? [{ image: hobbies.image, imageAlt: hobbies.imageAlt || "" }]
    : [];
}

function renderHobbyMedia(expert, hobbyPhotos) {
  const e = escapeHTML;

  if (hobbyPhotos.length === 0) return "";

  // Keep the original single-image layout for most experts.
  if (hobbyPhotos.length === 1) {
    const photo = hobbyPhotos[0];
    return `<img src="${e(photo.image)}"
                 alt="${e(photo.imageAlt || `Photo of ${expert.name}`)}"
                 loading="lazy">`;
  }

  // Two or more hobbies photos: insert the carousel structure.
  return `
    <div class="image-carousel" role="region"
         aria-label="${e(expert.name)}'s hobbies photographs">
      <button class="image-carousel-prev" type="button"
              aria-label="Previous photograph">&#10094;</button>
      <div class="image-carousel-track"></div>
      <button class="image-carousel-next" type="button"
              aria-label="Next photograph">&#10095;</button>
    </div>
  `;
}

/* ---------------------------------------------------------
   HOBBIES CAROUSEL: BUTTONS AND PHOTO POSITIONS

   Uses the pre-existing .image-carousel CSS classes.
   Runs ONLY when the expert has 2+ hobbies.photos.
   Searches WITHIN the current panel (not the whole page).
   --------------------------------------------------------- */
function createImageCarousel(carousel, carouselImages, expertName) {
  if (!carousel || carouselImages.length < 2) return;

  const track = carousel.querySelector(".image-carousel-track");
  const previousButton = carousel.querySelector(".image-carousel-prev");
  const nextButton = carousel.querySelector(".image-carousel-next");
  let currentIndex = 0;

  const imageElements = carouselImages.map((item, index) => {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.imageAlt || `Photo of ${expertName}`;
    img.className = "image-carousel-item";
    img.loading = "lazy";
    img.draggable = false;
    track.appendChild(img);

    // Clicking a neighbouring photo also moves to that photo.
    img.addEventListener("click", () => {
      if (index !== currentIndex) showImage(index);
    });
    return img;
  });

  function showImage(index) {
    currentIndex = Math.max(0, Math.min(index, imageElements.length - 1));

    imageElements.forEach((img, i) => {
      const offset = i - currentIndex;
      img.classList.toggle("is-current", offset === 0);
      img.classList.toggle("is-previous", offset === -1);
      img.classList.toggle("is-next", offset === 1);
      img.classList.toggle("is-hidden", Math.abs(offset) > 1);
      img.setAttribute("aria-hidden", String(Math.abs(offset) > 1));
    });

    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === imageElements.length - 1;
  }

  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));

  showImage(0);
}

/* ---------------------------------------------------------
   OPTIONAL EXTRA PHOTO GALLERY (SEPARATE FEATURE)

   ONLY uses expert.gallery in expert-data.js.
   It NEVER scans the folder or automatically uses hobbies.

   - Zero selected: NO gallery section
   - One to five: responsive photo collage
   - More than five: show ONLY the first five
   - Optional captions
   --------------------------------------------------------- */
function renderExpertGallery(expert) {
  const e = escapeHTML;
  const photos = Array.isArray(expert.gallery)
    ? expert.gallery.filter(photo => photo && photo.image).slice(0, 5)
    : [];

  if (photos.length === 0) return "";

  return `
    <section class="profile-section profile-gallery">
      <h3 class="profile-section-heading">More moments with ${e(expert.name)}</h3>
      <div class="profile-gallery-grid${photos.length === 1 ? " profile-gallery-grid--single" : ""}">
        ${photos.map(photo => `
          <figure class="profile-gallery-item">
            <img src="${e(photo.image)}"
                 alt="${e(photo.imageAlt || photo.caption || `Photo of ${expert.name}`)}"
                 loading="lazy">
            ${photo.caption ? `<figcaption>${e(photo.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

/* =========================================================
   MAIN FUNCTION: RENDER ONE EXPERT PROFILE

   IMPORTANT: There must be exactly ONE such function.
   ========================================================= */
export function renderExpertProfile(panel, expert, onClose) {
  const e = escapeHTML;
  const hobbyPhotos = getHobbyPhotos(expert);

  panel.setAttribute("aria-labelledby", "active-expert-name");
  panel.innerHTML = `
    <!-- A. TOP TOOLBAR / CLOSE BUTTON -->
    <div class="profile-toolbar">
      <span class="profile-eyebrow">Meet a STEM Superhero</span>
      <button class="profile-close" type="button"
              aria-label="Close this expert profile">✕ Close</button>
    </div>

    <!-- B. EXPERT INTRODUCTION -->
    <div class="profile-intro">
      <img class="profile-portrait" src="${e(expert.portrait)}"
           alt="Portrait of ${e(expert.name)}">
      <div class="profile-intro-text">
        <h2 id="active-expert-name">${e(expert.name)}</h2>
        <p class="profile-meta">💼 <span>${e(expert.role)}</span></p>
        <p class="profile-meta">📍 <span>${e(expert.organisation)}</span></p>
        <div class="profile-superpower">
          <strong>⚡ STEM Superpower</strong>
          <p>${e(expert.superpower)}</p>
        </div>
      </div>
    </div>

    <!-- C. CLICKABLE STORY TIMELINE -->
    <section class="profile-section" aria-label="${e(expert.name)}'s story">
      <h3 class="profile-section-heading">${e(expert.name)}’s Story</h3>
      <div class="profile-timeline"></div>
    </section>

    <!-- D. HOBBIES AND RESEARCH IMPACT: TWO COLUMNS -->
    <div class="profile-info-grid">
      <section class="profile-section profile-hobbies">
        <h3 class="profile-section-heading">${e(expert.hobbies.heading)}</h3>
        <p>${e(expert.hobbies.text)}</p>
        ${renderHobbyMedia(expert, hobbyPhotos)}
      </section>
      <section class="profile-section profile-impact">
        <h3 class="profile-section-heading">${e(expert.impact.heading)}</h3>
        <div class="profile-impact-layout">
          <ul class="profile-impact-list">
            ${expert.impact.points.map((point, i) => `
              <li>
                <span class="impact-icon impact-icon-${i % 3}" aria-hidden="true">
                  ${["🔎", "♡", "✿"][i % 3]}
                </span>
                <span>${e(point)}</span>
              </li>
            `).join("")}
          </ul>
          ${createExpertMedia(expert)}
        </div>
      </section>
    </div>

    <!-- E. OPTIONAL COLLAGE: ONLY PHOTOS YOU SELECT IN expert.gallery -->
    ${renderExpertGallery(expert)}

    <!-- F. OPTIONAL STANDALONE VIDEO -->
    ${expert.video ? `
      <section class="profile-section profile-video">
        <h3 class="profile-section-heading">${e(expert.video.heading)}</h3>
        <p>${e(expert.video.description)}</p>
        <video controls playsinline preload="metadata"
               ${expert.video.poster ? `poster="${e(expert.video.poster)}"` : ""}>
          <source src="${e(expert.video.src)}" type="video/mp4">
          Your browser does not support this video.
        </video>
        <p class="profile-video-caption">${e(expert.video.caption)}</p>
      </section>
    ` : ""}

    <!-- G. ADVICE -->
    <section class="profile-section profile-advice">
      <h3 class="profile-section-heading">${e(expert.adviceHeading || "Advice")}</h3>
      <ul>${expert.advice.map(item => `<li>${e(item)}</li>`).join("")}</ul>
    </section>
  `;

  // Close button (scoped to the current profile panel).
  panel.querySelector(".profile-close").addEventListener("click", onClose);

  // Only initialise the hobbies carousel when there are multiple hobby photos.
  if (hobbyPhotos.length > 1) {
    createImageCarousel(panel.querySelector(".image-carousel"), hobbyPhotos, expert.name);
  }

  /* ---------------------------------------------------------
     TIMELINE INITIAL STATE: SHOW INSTRUCTIONS UNTIL FIRST CLICK
     --------------------------------------------------------- */
  const timeline = panel.querySelector(".profile-timeline");
  initTimeline(timeline, expert.timeline);

  const display = timeline.querySelector(".timeline-display");
  if (display) {
    display.hidden = true;

    const hint = document.createElement("p");
    hint.className = "timeline-prompt";
    hint.textContent = `↑ Choose a coloured pin above to explore ${expert.name}'s story!`;
    display.before(hint);

    timeline.querySelectorAll(".timeline-step").forEach(step => {
      step.classList.remove("is-active");
      step.setAttribute("aria-pressed", "false");
    });

    const revealStory = event => {
      if (!event.target.closest(".timeline-step")) return;
      display.hidden = false;
      hint.remove();
      timeline.removeEventListener("click", revealStory, true);
    };
    timeline.addEventListener("click", revealStory, true);
  }
}

/* ---------------------------------------------------------
   LEGACY THINGLINK PROFILES: UNCHANGED BEHAVIOUR
   --------------------------------------------------------- */
export function renderLegacyThingLink(panel, url, name, onClose) {
  const e = escapeHTML;
  panel.removeAttribute("aria-labelledby");
  panel.innerHTML = `
    <div class="profile-toolbar">
      <strong>${e(name)}’s STEM profile</strong>
      <button class="profile-close" type="button"
              aria-label="Close this expert profile">✕ Close</button>
    </div>
    <div class="thinglink-embed">
      <iframe class="thinglink-frame" title="${e(name)} ThingLink profile"
              src="${e(url)}" loading="lazy" allowfullscreen></iframe>
    </div>
  `;
  panel.querySelector(".profile-close").addEventListener("click", onClose);
}
