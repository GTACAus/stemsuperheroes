/* =========================================================
   REUSABLE TIMELINE
   initTimeline(container, stages)
   Each stage: { title, colour, points, image, imageAlt, imageFit?, draft? }
   Works for ANY expert, experiment, historical sequence, etc.
   ========================================================= */

export function initTimeline(container, stages) {
    if (!container || !Array.isArray(stages) || !stages.length) return;

    container.innerHTML = `
        <div class="timeline-scroller" aria-label="Scroll to see every story stage">
            <div class="timeline-track" role="group" aria-label="Choose a stage of the story"></div>
        </div>
        <p class="timeline-swipe-hint">Swipe the timeline sideways to see all five stages →</p>
        <div class="timeline-display">
            <div class="timeline-story" aria-live="polite" aria-atomic="true">
                <h4 class="timeline-story-heading"></h4>
                <ul class="timeline-story-points"></ul>
            </div>
            <figure class="timeline-photo-wrap">
                <img class="timeline-photo" alt="">
            </figure>
        </div>
    `;

    const track = container.querySelector(".timeline-track");
    const heading = container.querySelector(".timeline-story-heading");
    const pointsList = container.querySelector(".timeline-story-points");
    const photo = container.querySelector(".timeline-photo");

    const buttons = stages.map((stage, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "timeline-step";
        button.style.setProperty("--stage-colour", stage.colour || "#4e32e8");
        button.setAttribute("aria-pressed", "false");

        const pin = document.createElement("span");
        pin.className = "timeline-pin";
        pin.setAttribute("aria-hidden", "true");

        const label = document.createElement("span");
        label.className = "timeline-label";
        label.textContent = stage.title;

        button.append(pin, label);
        button.addEventListener("click", () => selectStage(index));
        track.appendChild(button);
        return button;
    });

    function selectStage(index) {
        const stage = stages[index];
        buttons.forEach((button, i) => {
            const selected = i === index;
            button.classList.toggle("is-active", selected);
            button.setAttribute("aria-pressed", String(selected));
        });

        heading.textContent = stage.title;
        pointsList.replaceChildren();
        for (const point of stage.points || []) {
            const item = document.createElement("li");
            item.textContent = point;
            pointsList.appendChild(item);
        }

        photo.src = stage.image || "";
        photo.alt = stage.imageAlt || stage.title;
        photo.style.objectFit = stage.imageFit || "cover";
        container.querySelector(".timeline-story").classList.toggle("is-draft", !!stage.draft);
    }

    selectStage(0);
}
