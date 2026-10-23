/* =========================================================
   EXPERT CARDS (DATA ONLY)
   One entry per card on the Local STEM Experts page.
   - `profileId` matches a key in expert-profiles.js (full coded profile), or
   - `thinglinkUrl` opens a legacy ThingLink embed instead.
   ========================================================= */

export const experts = [
    {
        id: "paddy",
        name: "Paddy",
        field: "Neuro-oncologist",
        role: "STEM Coach",
        portrait: "/assets/images/paddy.jpg",
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
        id: "kezia",
        name: "Kezia",
        field: "Infectious Disease Expert",
        role: "Peter Doherty Institute",
        portrait: "/assets/images/experts/kezia/portrait.jpg",
        portraitAlt: "Kezia, an infectious disease researcher",
        profileId: "kezia",
        back: {
            superpower: "Studying immune cells that recognise and clear HIV-infected cells",
            coolFact: "She loves cooking and running",
            impact: "Her research helps us understand how the body fights viruses.",
            lesson: "Stay curious!"
        }
    }
];
