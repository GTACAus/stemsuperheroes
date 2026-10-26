/* =========================================================
   EXPERT CONTENT (DATA ONLY)
   Add future experts as new entries in this array. Each entry drives
   both the card on the Local STEM Experts page and the profile panel.

   Every expert needs: id, name, role, portrait, portraitAlt, back.
   Optional: organisation, subtitle (shown on the card instead of
   organisation).
   Then EITHER a full profile (timeline, hobbies, impact, advice)
   OR `thinglinkUrl` to open a legacy ThingLink embed instead.
   ========================================================= */

const base = `${ import.meta.env.BASE_URL }assets/images/experts`;
const paddyImages = `${base}/paddy/`;
const keziaImages = `${base}/kezia/`;

export const expertProfiles = [
    {
        name: "Paddy",
        role: "Neuro-oncologist",
        subtitle: "STEM Coach",
        portrait: `${paddyImages}paddy.jpg`,
        portraitAlt: "Paddy, a neuro-oncologist",
        thinglinkUrl: "https://www.thinglink.com/view/scene/2110566100411351717",
        back: {
            superpower: "Understanding childhood cancer by creating models of the brain in the lab",
            coolFact: "Paddy studied Neuroscience because he loves Philosophy",
            impact: "His work helps researchers test ideas for treating brain cancers in safer lab models.",
            lesson: "Follow your nose"
        }
    },
    {
        name: "Kezia",
        role: "Infectious Disease Expert",
        organisation: "Peter Doherty Institute for Infection and Immunity",
        subtitle: "Peter Doherty Institute",
        portrait: `${keziaImages}portrait.jpg`,
        portraitAlt: "Kezia, an infectious disease researcher",
        back: {
            superpower: "Studying immune cells that recognise and clear HIV-infected cells",
            coolFact: "She loves cooking and running",
            impact: "Her research helps us understand how the body fights viruses.",
            lesson: "Stay curious!"
        },

        // The first and fourth stages use information visible in your Canva image.
        // The other stages are honest placeholders: replace their text and photos
        // with Kezia's real interview content before publishing to students.
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${keziaImages}poster.jpg`,
                imageAlt: "Kezia presenting a research poster",
                imageFit: "contain",
                points: [
                    "First in her family to pursue science.",
                    "Her family was very supportive.",
                    "Her school science teacher inspired her to pursue science.",
                    "She has always been curious about how things work."
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${keziaImages}school-placeholder.svg`,
                imageAlt: "Placeholder for a photo from Kezia's school years",
                points: ["Add Kezia's real school experiences here."],
                draft: true
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${keziaImages}path-placeholder.svg`,
                imageAlt: "Placeholder for a photo of Kezia's pathway into science",
                points: ["Add the real story of how Kezia found her STEM pathway here."],
                draft: true
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${keziaImages}research.jpg`,
                imageAlt: "Kezia working in a laboratory",
                points: [
                    "Investigates how the body fights viruses.",
                    "Studies immune cells that can recognise and clear HIV-infected cells.",
                    "This research could help scientists develop treatments for diseases like HIV."
                ]
            },
            {
                title: "Future plans",
                colour: "#00A7B8",
                image: `${keziaImages}future-placeholder.svg`,
                imageAlt: "Placeholder for an image about Kezia's future plans",
                points: ["Add Kezia's own future plans here."],
                draft: true
            }
        ],

        hobbies: {
            heading: "Hobbies and interests",
            text: "Kezia loves to cook and run.",
            image: `${keziaImages}running.jpg`,
            imageAlt: "Kezia at a running event"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${keziaImages}research.jpg`,
            imageAlt: "Kezia working in a laboratory",
            points: [
                "Investigates how the body fights viruses",
                "Can lead to new treatments for diseases like HIV",
                "Helps keep people healthy and saves lives"
            ]
        },
        advice: [
            "Stay curious! There are no stupid questions!",
            "Engage with your peers because science is never meant to be done in isolation."
        ],
        question: "What kind of questions would you ask Kezia?"
    }
];
