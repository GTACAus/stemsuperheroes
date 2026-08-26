/* ==================================================
   SCIENCE PAGE INITIALISATION
   ================================================== */
const dev = true;
document.addEventListener("DOMContentLoaded", () => {
    setupScienceObjectSelector();
    setupScienceStudentEntries();
    initTrueFalse();
});

/* ==================================================
   SCIENCE OBJECT SELECTOR
   ================================================== */

function setupScienceObjectSelector() {
    const objectCards = document.querySelectorAll(".science-object-card");
    const contentPanels = document.querySelectorAll(".science-content-panel");
    if (dev) {
        contentPanels[0].hidden = false;
    }

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

function initTrueFalse() {
    document.querySelectorAll('.tf-options').forEach((group) => {
        const options = group.querySelectorAll('.tf-option');
        const section = group.closest('.gtac-section');
        const checkButton = section.querySelector('.tf-check');
        const feedback = section.querySelector('.tf-feedback');
        const correctValue = group.dataset.correct;

        options.forEach((option) => {
            option.addEventListener('click', () => {
                options.forEach((o) => o.setAttribute('aria-checked', 'false'));
                option.setAttribute('aria-checked', 'true');

                checkButton.disabled = false;

                feedback.hidden = true;
                feedback.classList.remove('tf-feedback--correct', 'tf-feedback--incorrect');
            });
        });

        checkButton.addEventListener('click', () => {
            const selected = group.querySelector('.tf-option[aria-checked="true"]');
            if (!selected) return;

            const isCorrect = selected.dataset.value === correctValue;

            feedback.hidden = false;
            feedback.textContent = isCorrect
                ? 'Correct! An unstrapped helmet can slip off right when you need it most.'
                : "Not quite — an unstrapped helmet can slip or fly off, so it won't protect your head when you need it.";

            feedback.classList.toggle('tf-feedback--correct', isCorrect);
            feedback.classList.toggle('tf-feedback--incorrect', !isCorrect);
        });
    });
}

function initThingLink() {}