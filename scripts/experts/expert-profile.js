
/* =========================================================
   EXPERT PROFILE TEMPLATE

   Builds all the sections of a STEM Superhero profile.

   Features:
   1. Expert introduction and STEM superpower
   2. Interactive timeline
   3. Hobbies and research impact
   4. OPTIONAL PHOTO GALLERY (NEW)
   5. Optional video
   6. Advice

   The timeline is handled by activities/timeline.js.
   Profile content is stored in expert-data.js.
   ========================================================= */

import { initTimeline } from "../activities/timeline.js";


/* =========================================================
   HELPER: ESCAPE HTML

   Prevents special characters in profile content
   from being interpreted as HTML code.
   ========================================================= */

function escapeHTML(value) {
    return String(value ?? "").replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]
    );
}


/* =========================================================
   HELPER: RESEARCH IMPACT IMAGE OR VIDEO

   Displays the expert's research impact media.

   Automatically detects whether the file is:
   - An image (jpg, png, etc.)
   - A video (mp4, webm, etc.)

   This is separate from the photo gallery.
   ========================================================= */

function createExpertMedia(expert) {
    const e = escapeHTML;

    const src = String(expert.impact.image ?? "");

    const isVideo = /\.(mp4|webm|ogg|mov|m4v)([?#].*)?$/i.test(src);

    return isVideo
        ? `<video src="${e(src)}" controls playsinline preload="metadata"></video>`
        : `<img src="${e(src)}" alt="${e(expert.impact.imageAlt || "")}" loading="lazy">`;
}

function createImageCarousel(carousel, carouselImages) {
  const track = carousel.querySelector(".image-carousel-track");
  const previousButton = carousel.querySelector(".image-carousel-prev");
  const nextButton = carousel.querySelector(".image-carousel-next");

  let currentIndex = 0;

  // Create image elements
  const imageElements = carouselImages.map((item, index) => {
    const img = document.createElement("img");

    img.src = item.image;
    img.alt = item.imageAlt;
    img.classList.add("image-carousel-item");
    img.draggable = false;

    track.appendChild(img);

    img.addEventListener("click", () => {
      if (index !== currentIndex) {
        showImage(index);
      }
    });

    return img;
  });

  function showImage(index) {
    currentIndex = Math.max(0, Math.min(index, carouselImages.length - 1));

    imageElements.forEach((img, i) => {
      const offset = i - currentIndex;

      img.classList.toggle("is-current", offset === 0);
      img.classList.toggle("is-previous", offset === -1);
      img.classList.toggle("is-next", offset === 1);
      img.classList.toggle("is-hidden", Math.abs(offset) > 1);

      img.setAttribute("aria-hidden", String(Math.abs(offset) > 1));
    });

    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === carouselImages.length - 1;
  }

  previousButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  // Initialise
  showImage(0);
}
// <img src="${e(expert.hobbies.image)}" alt="${e(expert.hobbies.imageAlt)}" loading="lazy">

export function renderExpertProfile(panel, expert, onClose) {
  const e = escapeHTML;
  panel.setAttribute("aria-labelledby", "active-expert-name");

/* =========================================================
   NEW FEATURE: OPTIONAL PHOTO GALLERY

   Only uses photographs explicitly selected in:
       expert.gallery

   Rules:
   - Does NOT scan the expert's image folder
   - Does NOT automatically use hobby photographs
   - Maximum 5 photographs
   - No photos = no gallery section
   - Optional captions underneath photographs

   To add images, edit expert-data.js ONLY.
   ========================================================= */

function renderExpertGallery(expert) {
    const e = escapeHTML;

    // Get only the photographs selected for this gallery.
    const galleryPhotos = Array.isArray(expert.gallery)
        ? expert.gallery.filter(photo => photo && photo.image).slice(0, 5)
        : [];

    // No selected photos? Don't create the gallery at all.
    if (galleryPhotos.length === 0) {
        return "";
    }

    // Build the gallery using the selected photographs.
    return `
        <section class="profile-section profile-gallery">

            <h3 class="profile-section-heading">
                More moments with ${e(expert.name)}
            </h3>

            <div class="profile-gallery-grid
                ${galleryPhotos.length === 1 ? "profile-gallery-grid--single" : ""}">

                ${galleryPhotos.map(photo => `
                    <figure class="profile-gallery-item">

                        <img
                            src="${e(photo.image)}"
                            alt="${e(photo.imageAlt || photo.caption || `Photo of ${expert.name}`)}"
                            loading="lazy"
                        >

                        ${photo.caption ? `
                            <figcaption>
                                ${e(photo.caption)}
                            </figcaption>
                        ` : ""}

                    </figure>
                `).join("")}

            </div>
        </section>
    `;
}


/* =========================================================
   MAIN FUNCTION: RENDER EXPERT PROFILE

   Builds the complete profile when an expert card
   is selected.

   The same function works for every STEM Superhero.
   ========================================================= */

export function renderExpertProfile(panel, expert, onClose) {
    const e = escapeHTML;

    panel.setAttribute("aria-labelledby", "active-expert-name");

    panel.innerHTML = `

        <!-- =========================================
             A. PROFILE TOOLBAR AND CLOSE BUTTON
             ========================================= -->

        <div class="profile-toolbar">
            <span class="profile-eyebrow">Meet a STEM Superhero</span>
            <button class="profile-close" type="button"
                aria-label="Close this expert profile">
                ✕ Close
            </button>
        </div>


        <!-- =========================================
             B. EXPERT INTRODUCTION
             Portrait, career, organisation, superpower
             ========================================= -->

        <div class="profile-intro">

            <img
                class="profile-portrait"
                src="${e(expert.portrait)}"
                alt="Portrait of ${e(expert.name)}"
            >

            <div class="profile-intro-text">

                <h2 id="active-expert-name">
                    ${e(expert.name)}
                </h2>

                <p class="profile-meta">
                    💼 <span>${e(expert.role)}</span>
                </p>

                <p class="profile-meta">
                    📍 <span>${e(expert.organisation)}</span>
                </p>

                <div class="profile-superpower">
                    <strong>⚡ STEM Superpower</strong>
                    <p>${e(expert.superpower)}</p>
                </div>

            </div>
        </div>

        <section class="profile-section" aria-label="${e(expert.name)}'s story">
            <h3 class="profile-section-heading">${e(expert.name)}’s Story</h3>
            <div class="profile-timeline"></div>
        </section>

        <div class="profile-info-grid">
            <section class="profile-section profile-hobbies">
                <h3 class="profile-section-heading">${e(expert.hobbies.heading)}</h3>
                <p>${e(expert.hobbies.text)}</p>
                <div class="image-carousel">
                    <button class="image-carousel-prev" aria-label="Previous image">
                        &#10094;
                    </button>

                    <div class="image-carousel-track"></div>

                    <button class="image-carousel-next" aria-label="Next image">
                        &#10095;
                    </button>
                </div>
            </section>
            <section class="profile-section profile-impact">
                <h3 class="profile-section-heading">${e(expert.impact.heading)}</h3>
                <div class="profile-impact-layout">
                    <ul class="profile-impact-list">
                        ${expert.impact.points
                          .map(
                            (point, i) => `
                            <li><span class="impact-icon impact-icon-${i % 3}" aria-hidden="true">${["🔎", "♡", "✿"][i % 3]}</span>
                                <span>${e(point)}</span></li>
                        `,
                          )
                          .join("")}
                    </ul>
                    ${createExpertMedia(expert)}
                </div>
            </section>
        </div>

        <!-- =========================================
             C. INTERACTIVE TIMELINE

             Created by activities/timeline.js.
             ========================================= -->

        <section class="profile-section"
            aria-label="${e(expert.name)}'s story">

            <h3 class="profile-section-heading">
                ${e(expert.name)}’s Story
            </h3>

            <div class="profile-timeline"></div>

        </section>


        <!-- =========================================
             D. HOBBIES AND RESEARCH IMPACT

             These appear side by side on desktop.
             ========================================= -->

        <div class="profile-info-grid">

            <!-- HOBBIES AND INTERESTS -->

            <section class="profile-section profile-hobbies">

                <h3 class="profile-section-heading">
                    ${e(expert.hobbies.heading)}
                </h3>

                <p>${e(expert.hobbies.text)}</p>

                <img
                    src="${e(expert.hobbies.image)}"
                    alt="${e(expert.hobbies.imageAlt)}"
                    loading="lazy"
                >

            </section>


            <!-- RESEARCH IMPACT -->

            <section class="profile-section profile-impact">

                <h3 class="profile-section-heading">
                    ${e(expert.impact.heading)}
                </h3>

                <div class="profile-impact-layout">

                    <ul class="profile-impact-list">

                        ${expert.impact.points.map((point, i) => `
                            <li>
                                <span
                                    class="impact-icon impact-icon-${i % 3}"
                                    aria-hidden="true"
                                >
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


        <!-- =========================================
             E. OPTIONAL PHOTO GALLERY (NEW)

             Calls the reusable gallery function.

             If expert.gallery is missing or empty,
             this section is not created.
             ========================================= -->

        ${renderExpertGallery(expert)}


        <!-- =========================================
             F. OPTIONAL VIDEO FEATURE

             Only displayed when expert.video exists.
             Works independently of the gallery.
             ========================================= -->

        ${expert.video ? `
            <section class="profile-section profile-video">

                <h3 class="profile-section-heading">
                    ${e(expert.video.heading)}
                </h3>

                <p>${e(expert.video.description)}</p>

                <video
                    controls
                    playsinline
                    preload="metadata"
                    poster="${e(expert.video.poster)}"
                >
                    <source
                        src="${e(expert.video.src)}"
                        type="video/mp4"
                    >
                    Your browser does not support this video.
                </video>

                <p class="profile-video-caption">
                    ${e(expert.video.caption)}
                </p>

            </section>
        ` : ""}


        <!-- =========================================
             G. ADVICE FOR STUDENTS

             Appears after the optional extras.
             ========================================= -->

        <section class="profile-section profile-advice">

            <h3 class="profile-section-heading">
                ${e(expert.adviceHeading || "Advice")}
            </h3>

            <ul>
                ${expert.advice.map(item => `
                    <li>${e(item)}</li>
                `).join("")}
            </ul>

        </section>

    `;
  // Create the carousel
  createImageCarousel(
    document.querySelector(".image-carousel"),
    expert.hobbies.images,
  );


    /* =====================================================
       CLOSE PROFILE BUTTON
       ===================================================== */

    panel.querySelector(".profile-close")
        .addEventListener("click", onClose);


    /* =====================================================
       TIMELINE: SHOW INSTRUCTIONS BEFORE FIRST CLICK

       When an expert profile first opens:
       - Hide the automatically displayed first story.
       - Show an instruction encouraging students to click.
       - Reveal the story when any timeline pin is clicked.

       Works automatically for EVERY expert.
       ===================================================== */

    const timeline = panel.querySelector(".profile-timeline");

    // Build the timeline using the existing function.
    initTimeline(timeline, expert.timeline);

    const display = timeline.querySelector(".timeline-display");

    if (display) {

        // 1. Initially hide the story and photograph.
        display.hidden = true;

        // 2. Create the instruction box.
        const hint = document.createElement("p");

        hint.className = "timeline-prompt";

        hint.textContent =
            `↑ Choose a coloured pin above to explore ${expert.name}'s story!`;

        display.before(hint);

        // 3. Remove the initial selected-pin appearance.
        timeline.querySelectorAll(".timeline-step").forEach(step => {
            step.classList.remove("is-active");
            step.setAttribute("aria-pressed", "false");
        });

        // 4. Reveal the story when a timeline pin is clicked.
        const revealStory = event => {

            if (!event.target.closest(".timeline-step")) return;

            display.hidden = false;
            hint.remove();

            // Remove listener once the story has been revealed.
            timeline.removeEventListener("click", revealStory, true);
        };

        timeline.addEventListener("click", revealStory, true);
    }
}


/* =========================================================
   LEGACY THINGLINK PROFILE

   Kept for backward compatibility with old profiles.

   New coded profiles use renderExpertProfile instead.
   ========================================================= */

export function renderLegacyThingLink(panel, url, name, onClose) {
    const e = escapeHTML;

    panel.removeAttribute("aria-labelledby");

    panel.innerHTML = `
        <div class="profile-toolbar">

            <strong>${e(name)}’s STEM profile</strong>

            <button
                class="profile-close"
                type="button"
                aria-label="Close this expert profile"
            >
                ✕ Close
            </button>

        </div>

        <div class="thinglink-embed">

            <iframe
                class="thinglink-frame"
                title="${e(name)} ThingLink profile"
                src="${e(url)}"
                loading="lazy"
                allowfullscreen
            ></iframe>

        </div>
    `;

    panel.querySelector(".profile-close")
        .addEventListener("click", onClose);
}
