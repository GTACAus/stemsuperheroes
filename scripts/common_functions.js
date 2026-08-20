/* ==================================================
   INTERNAL PAGE LINKS
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    setupInternalLinks();
});

function setupInternalLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

/* ==================================================
   CLASSROOM LANGUAGE FILTER
   ================================================== */

let profanityList = [];
let profanityReady = false;
let profanityLoadingPromise = null;

function getClassroomLanguageFilePath() {
    const commonScript = Array.from(
        document.querySelectorAll("script[src]")
    ).find(script => {
        return script.src.includes("common_functions.js");
    });

    if (!commonScript) {
        return "cypher.txt";
    }

    return new URL(
        "../cypher.txt",
        commonScript.src
    ).href;
}

function caesarCipher(text, shift) {
    return text
        .split("")
        .map(character => {
            if (!/[a-z]/i.test(character)) {
                return character;
            }

            const code = character.charCodeAt(0);

            const base =
                code >= 65 && code <= 90
                    ? 65
                    : 97;

            return String.fromCharCode(
                (
                    code -
                    base +
                    shift +
                    26
                ) % 26 + base
            );
        })
        .join("");
}

function normaliseForProfanityCheck(text) {
    return String(text)
        .toLowerCase()
        .replace(/[@4]/g, "a")
        .replace(/[3]/g, "e")
        .replace(/[1!|]/g, "i")
        .replace(/[0]/g, "o")
        .replace(/[$5]/g, "s")
        .replace(/[7]/g, "t")
        .replace(/[^a-z0-9\s'-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

async function initialiseClassroomLanguageFilter() {
    if (profanityLoadingPromise) {
        return profanityLoadingPromise;
    }

    profanityLoadingPromise = loadClassroomLanguageFilter();

    return profanityLoadingPromise;
}

async function loadClassroomLanguageFilter() {
    const profanityFilePath =
        getClassroomLanguageFilePath();

    setStudentTextFieldsLoading(true);

    try {
        const response =
            await fetch(profanityFilePath);

        if (!response.ok) {
            throw new Error(
                "Could not fetch " +
                profanityFilePath +
                ". HTTP status: " +
                response.status
            );
        }

        const encodedText =
            await response.text();

        const decodedText =
            caesarCipher(encodedText, -3);

        profanityList = decodedText
            .split(/\r?\n/)
            .map(entry => {
                const trimmedEntry = entry.trim();

                const hasWildcard =
                    trimmedEntry.endsWith("*");

                const entryWithoutWildcard =
                    hasWildcard
                        ? trimmedEntry.slice(0, -1)
                        : trimmedEntry;

                const cleanedEntry =
                    normaliseForProfanityCheck(
                        entryWithoutWildcard
                    );

                return hasWildcard
                    ? cleanedEntry + "*"
                    : cleanedEntry;
            })
            .filter(Boolean);

        profanityReady = true;

    } catch (error) {
        profanityReady = false;

        console.error(
            "Classroom language filter failed to load:",
            error
        );

    } finally {
        setStudentTextFieldsLoading(false);
    }
}

function setStudentTextFieldsLoading(isLoading) {
    const fields =
        document.querySelectorAll(
            [
                'input[type="text"]:not([data-language-filter="off"])',
                'textarea:not([data-language-filter="off"])'
            ].join(",")
        );

    fields.forEach(field => {
        if (isLoading) {
            if (!field.disabled) {
                field.dataset.languageFilterDisabled =
                    "true";

                field.disabled = true;
            }

            field.setAttribute(
                "aria-busy",
                "true"
            );

            return;
        }

        if (
            field.dataset.languageFilterDisabled ===
            "true"
        ) {
            field.disabled = false;

            delete field.dataset
                .languageFilterDisabled;
        }

        field.removeAttribute("aria-busy");
    });
}

function containsProfanity(text) {
    if (!profanityReady) {
        return false;
    }

    const normalisedText =
        normaliseForProfanityCheck(text);

    if (normalisedText === "") {
        return false;
    }

    const words =
        normalisedText
            .split(/\s+/)
            .filter(Boolean);

    return profanityList.some(blockedEntry => {
        if (blockedEntry.endsWith("*")) {
            const blockedStart =
                blockedEntry.slice(0, -1);

            return words.some(word => {
                return word.startsWith(blockedStart);
            });
        }

        if (blockedEntry.includes(" ")) {
            return normalisedText.includes(
                blockedEntry
            );
        }

        return words.includes(
            blockedEntry
        );
    });
}

function showBlockedLanguageFeedback(input) {
    input.value = "";

    input.setCustomValidity(
        "Please use appropriate classroom language."
    );

    input.reportValidity();
    input.focus();

    window.setTimeout(() => {
        input.setCustomValidity("");
    }, 2000);
}

function getValidStudentInput(input) {
    if (!input) {
        return null;
    }

    const value = input.value.trim();

    if (value === "") {
        input.focus();
        return null;
    }

    if (!profanityReady) {
        input.focus();
        return null;
    }

    if (containsProfanity(value)) {
        showBlockedLanguageFeedback(input);
        return null;
    }

    return value;
}

/* ==================================================
   STUDENT ANSWER HELPERS
   ================================================== */

function connectEnterAndBlurSave(input, saveFunction) {
    let isSubmitting = false;

    function saveInput() {
        if (
            isSubmitting ||
            !input.isConnected ||
            input.value.trim() === ""
        ) {
            return;
        }

        isSubmitting = true;

        saveFunction();

        if (input.isConnected) {
            isSubmitting = false;
        }
    }

    input.addEventListener("keydown", event => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        saveInput();
    });

    input.addEventListener("blur", saveInput);
}

function createDeleteAnswerButton(
    ariaLabel,
    deleteFunction
) {
    const deleteButton =
        document.createElement("button");

    deleteButton.type = "button";
    deleteButton.className = "delete-answer";
    deleteButton.textContent = "×";

    deleteButton.setAttribute(
        "aria-label",
        ariaLabel
    );

    deleteButton.addEventListener(
        "click",
        deleteFunction
    );

    return deleteButton;
}

function setupStudentEntryArea(entryArea) {
    const input =
        entryArea.querySelector(".student-entry-input");

    const list =
        entryArea.querySelector(".student-entry-list");

    if (!input || !list) {
        return;
    }

    function saveEntry() {
        const value =
            getValidStudentInput(input);

        if (value === null) {
            return;
        }

        const listItem =
            document.createElement("li");

        const answerText =
            document.createElement("span");

        answerText.textContent = value;

        const deleteButton =
            createDeleteAnswerButton(
                "Delete " + value,
                function() {
                    listItem.remove();
                }
            );

        listItem.appendChild(answerText);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);

        input.value = "";
    }

    connectEnterAndBlurSave(
        input,
        saveEntry
    );
}

/* ==================================================
   INITIALISE CLASSROOM LANGUAGE FILTER
   ================================================== */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initialiseClassroomLanguageFilter,
        { once: true }
    );
} else {
    initialiseClassroomLanguageFilter();
}