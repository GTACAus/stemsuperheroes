/* =========================================================
   EXPERT PROFILE TEMPLATE
   Builds all the boxes for one expert. The timeline is a
   separate reusable activity (activities/timeline.js).
   ========================================================= */

import { initTimeline } from "../activities/timeline.js";

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
}

export function renderExpertProfile(panel, expert, onClose) {
    const e = escapeHTML;
    panel.setAttribute("aria-labelledby", "active-expert-name");

    panel.innerHTML = `
        <div class="profile-toolbar">
            <span class="profile-eyebrow">Meet a STEM Superhero</span>
            <button class="profile-close" type="button" aria-label="Close this expert profile">✕ Close</button>
        </div>

        <div class="profile-intro">
            <img class="profile-portrait" src="${e(expert.portrait)}" alt="Portrait of ${e(expert.name)}">
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

        <section class="profile-section" aria-label="${e(expert.name)}'s story">
            <h3 class="profile-section-heading">${e(expert.name)}’s Story</h3>
            <div class="profile-timeline"></div>
        </section>

        <div class="profile-info-grid">
            <section class="profile-section profile-hobbies">
                <h3 class="profile-section-heading">${e(expert.hobbies.heading)}</h3>
                <p>${e(expert.hobbies.text)}</p>
                <img src="${e(expert.hobbies.image)}" alt="${e(expert.hobbies.imageAlt)}" loading="lazy">
            </section>
            <section class="profile-section profile-impact">
                <h3 class="profile-section-heading">${e(expert.impact.heading)}</h3>
                <div class="profile-impact-layout">
                    <ul class="profile-impact-list">
                        ${expert.impact.points.map((point, i) => `
                            <li><span class="impact-icon impact-icon-${i % 3}" aria-hidden="true">${["🔎", "♡", "✿"][i % 3]}</span>
                                <span>${e(point)}</span></li>
                        `).join("")}
                    </ul>
                    <img src="${e(expert.impact.image)}" alt="${e(expert.impact.imageAlt)}" loading="lazy">
                </div>
            </section>
        </div>

        <!-- =========================================
            VIDEO FEATURE
            Only displayed if the expert has a video
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

        <section class="profile-section profile-advice">
            <h3 class="profile-section-heading">
                ${e(expert.adviceHeading || "Advice")}
            </h3>
            <ul>${expert.advice.map(item => `<li>${e(item)}</li>`).join("")}</ul>
        </section>

    `;

    panel.querySelector(".profile-close").addEventListener("click", onClose);

    /* =========================================================
    TIMELINE: SHOW INSTRUCTIONS BEFORE FIRST CLICK

    When an expert profile first opens:
    - Hide the automatically displayed first story.
    - Show an instruction encouraging students to click.
    - Reveal the story when any timeline pin is clicked.

    Works automatically for EVERY expert.
    ========================================================= */

    const timeline = panel.querySelector(".profile-timeline");

    // Build the timeline using our existing function.
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

        // 4. When a pin is clicked, reveal its story.
        const revealStory = (event) => {
            if (!event.target.closest(".timeline-step")) return;

            display.hidden = false;
            hint.remove();

            // Instructions are no longer needed after first click.
            timeline.removeEventListener("click", revealStory, true);
        };

        timeline.addEventListener("click", revealStory, true);
    }


}

export function renderLegacyThingLink(panel, url, name, onClose) {
    const e = escapeHTML;
    panel.removeAttribute("aria-labelledby");
    panel.innerHTML = `
        <div class="profile-toolbar">
            <strong>${e(name)}’s STEM profile</strong>
            <button class="profile-close" type="button" aria-label="Close this expert profile">✕ Close</button>
        </div>
        <div class="thinglink-embed">
            <iframe class="thinglink-frame" title="${e(name)} ThingLink profile"
                    src="${e(url)}" loading="lazy" allowfullscreen></iframe>
        </div>
    `;
    panel.querySelector(".profile-close").addEventListener("click", onClose);
}
