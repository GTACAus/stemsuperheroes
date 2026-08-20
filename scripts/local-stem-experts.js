/* ==================================================
   LOCAL STEM EXPERTS PAGE INITIALISATION
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    setupExpertCards();
});


/* ==================================================
   EXPERT FLIP CARDS
   ================================================== */

function setupExpertCards() {
    const expertCards =
        document.querySelectorAll(".expert-flip-card");

    const usesHover =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

    expertCards.forEach(card => {
        card.addEventListener("click", () => {
            const thingLinkUrl =
                card.dataset.thinglinkUrl;

            /*
                Desktop / mouse:
                hover already handles the flip,
                so clicking opens the profile.
            */
            if (usesHover) {
                openExpertThingLink(
                    card,
                    thingLinkUrl
                );
                return;
            }

            /*
                Touch device:
                first tap flips the card.
            */
            if (!card.classList.contains("is-flipped")) {
                card.classList.add("is-flipped");
                return;
            }

            /*
                Second tap opens the profile.
            */
            openExpertThingLink(
                card,
                thingLinkUrl
            );
        });

        card.addEventListener("keydown", event => {
            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }

            event.preventDefault();

            const thingLinkUrl =
                card.dataset.thinglinkUrl;

            openExpertThingLink(
                card,
                thingLinkUrl
            );
        });
    });
}


/* ==================================================
   OPEN EXPERT THINGLINK
   ================================================== */

   function openExpertThingLink(
    card,
    thingLinkUrl
) {
    if (!thingLinkUrl) {
        console.warn(
            "No ThingLink URL has been added for this expert."
        );

        return;
    }

    const panel =
        document.querySelector(".thinglink-panel");

    const frame =
        document.querySelector(".thinglink-frame");

    if (!panel || !frame) {
        return;
    }

    const rowCards =
        getCardsInSameRow(card);

    const lastCardInRow =
        rowCards[rowCards.length - 1];

    lastCardInRow.insertAdjacentElement(
        "afterend",
        panel
    );

    frame.src = thingLinkUrl;

    panel.hidden = false;
}

/* ==================================================
   THINGLINK HELPER FUNCTIONS
   ================================================== */

function getCardsInSameRow(selectedCard) {
    const expertCards =
        Array.from(
            document.querySelectorAll(
                ".expert-flip-card"
            )
        );

    const selectedTop =
        selectedCard.offsetTop;

    return expertCards.filter(card => {
        return card.offsetTop === selectedTop;
    });
}