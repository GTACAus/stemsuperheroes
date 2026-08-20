/* ==================================================
   SCIENCE PAGE INITIALISATION
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    setupScienceObjectSelector();
    setupScienceStudentEntries();
});

/* ==================================================
   SCIENCE OBJECT SELECTOR
   ================================================== */

function setupScienceObjectSelector() {
    const objectCards = document.querySelectorAll(".science-object-card");
    const contentPanels = document.querySelectorAll(".science-content-panel");

    objectCards.forEach(card => {
        card.addEventListener("click", () => {
            const selectedObject = card.dataset.object;

            objectCards.forEach(otherCard => {
                otherCard.classList.remove("selected");
            });

            contentPanels.forEach(panel => {
                panel.hidden = true;
            });

            card.classList.add("selected");

            const matchingPanel = document.querySelector(
                `[data-content="${selectedObject}"]`
            );

            if (matchingPanel) {
                matchingPanel.hidden = false;

            }
        });
    });
}

/* ==================================================
   SCIENCE STUDENT ENTRIES
   ================================================== */

function setupScienceStudentEntries() {
    document
        .querySelectorAll(".student-entry-area")
        .forEach(entryArea => {
            setupStudentEntryArea(entryArea);
        });
}