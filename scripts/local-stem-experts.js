/* =========================================================
   LOCAL STEM EXPERTS PAGE
   Just manages card selection and the one shared panel.
   Profile layout, expert data and timeline live elsewhere.
   ========================================================= */

import { expertProfiles } from "./experts/expert-data.js";
import { renderExpertProfile, renderLegacyThingLink } from "./experts/expert-profile.js";

const cards = [...document.querySelectorAll(".expert-flip-card")];
const panel = document.querySelector("#expert-details-panel");
let activeCard = null;

// Put the panel after the last card in the selected card's grid row.
function getCardsInSameRow(selected) {
    return cards.filter(card => card.offsetTop === selected.offsetTop);
}

function closeProfile(restoreFocus = true) {
    panel.hidden = true;
    panel.replaceChildren();
    cards.forEach(card => {
        card.setAttribute("aria-expanded", "false");
        card.classList.remove("is-flipped");
    });
    if (restoreFocus && activeCard) activeCard.focus({ preventScroll: true });
    activeCard = null;
}

function toggleProfile(card) {
    if (activeCard === card && !panel.hidden) {
        closeProfile(false);
        return;
    }

    const expertId = card.dataset.expertId;
    const expert = expertProfiles[expertId];
    const legacyUrl = card.dataset.thinglinkUrl;

    if (!expert && !legacyUrl) {
        console.warn("This card needs a valid data-expert-id or data-thinglink-url.");
        return;
    }

    const rowCards = getCardsInSameRow(card);
    rowCards[rowCards.length - 1].insertAdjacentElement("afterend", panel);

    if (expert) {
        renderExpertProfile(panel, expert, () => closeProfile());
    } else {
        const name = card.querySelector(".expert-card-front h3")?.textContent.trim() || "Expert";
        renderLegacyThingLink(panel, legacyUrl, name, () => closeProfile());
    }

    activeCard = card;
    panel.hidden = false;
    cards.forEach(item => item.setAttribute("aria-expanded", String(item === card)));

    requestAnimationFrame(() => {
        if (activeCard === card) {
            panel.scrollIntoView({
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
                block: "start"
            });
        }
    });
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        const hasHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

        // On touch: first tap flips; second tap opens. Desktop opens on click.
        if (!hasHover && !card.classList.contains("is-flipped")) {
            cards.forEach(item => item.classList.remove("is-flipped"));
            card.classList.add("is-flipped");
            return;
        }
        toggleProfile(card);
    });

    card.addEventListener("keydown", event => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        toggleProfile(card); // Keyboard users don't need an extra flip.
    });
});
