
/* =========================================================
   EXPERT CONTENT (DATA ONLY)

   Each expert has their own image folder.
   To add another expert, duplicate the profile and
   change their information and imageFolder.

   Layout and timeline functions stay unchanged.
   ========================================================= */

export const expertProfiles = {

    /* =====================================================
       KEZIA
       ===================================================== */

    kezia: (() => {

        const imageFolder = "assets/images/experts/kezia/";

        return {
            name: "Kezia",
            role: "Infectious Disease Researcher",
            organisation: "Postdoctoral researcher in Seattle, USA (previously at the Peter Doherty Institute, Melbourne)",
            portrait: `${imageFolder}portrait.jpg`,
            superpower: "Discovering how immune cells respond to infections such as HIV and tuberculosis (TB)",
            imageFolder,

            timeline: [
                {
                    title: "Curious beginnings",
                    colour: "#F43559",
                    image: `${imageFolder}portrait.jpg`,
                    imageAlt: "Portrait of Kezia today; an early-years photograph is not yet available",
                    points: [
                        "Kezia was the first person in her family to pursue science.",
                        "Her family supported her, and a school science teacher encouraged her interest.",
                        "She was curious about how things work."
                    ]
                },
                {
                    title: "Challenges in school",
                    colour: "#E9B400",
                    image: `${imageFolder}tennis.jpg`,
                    imageAlt: "Illustration of a school notebook, representing Kezia's school years",
                    points: [
                        "Kezia enjoyed science and was good at maths, but physics was challenging.",
                        "She also found sport difficult at school.",
                        "Stereotypes sometimes made science feel discouraging, but she kept exploring her interests."
                    ]
                },
                {
                    title: "Finding her path",
                    colour: "#50B96D",
                    image: `${imageFolder}bacteria-dish.jpg`,
                    imageAlt: "Illustration of a winding path, representing Kezia's journey into science",
                    points: [
                        "At first, she considered fashion design or a career that used maths.",
                        "After high school, she moved to Australia.",
                        "She studied biomedicine, then immunology (the study of the immune system), and went on to complete a PhD.",
                        "She chose science because it was what genuinely interested her."
                    ]
                },
                {
                    title: "Research with an impact",
                    colour: "#4F71CB",
                    image: `${imageFolder}poster.jpg`,
                    imageAlt: "Kezia explaining her research beside a scientific poster",
                    imageFit: "cover",
                    points: [
                        "In Australia, Kezia investigated how different immune cells fight infections.",
                        "She explored whether immune cells from healthy people could recognise and remove cells infected with HIV, a virus.",
                        "This research could help scientists investigate future treatments for HIV."
                    ]
                },
                {
                    title: "Seattle and beyond",
                    colour: "#00A7B8",
                    image: `${imageFolder}seattle.jpeg`,
                    imageAlt: "Illustration of Seattle and a microscope, representing Kezia's new research chapter",
                    points: [
                        "At a science meeting, she shared her PhD research and received a job offer from a professor in Seattle, USA.",
                        "She became a postdoctoral researcher — a scientist who does research after completing a PhD.",
                        "Now she studies tuberculosis (TB), an infection caused by bacteria, and whether different immune cells could help improve future vaccines.",
                        "She is learning new skills and exploring where her science career might take her next."
                    ]
                }
            ],

            hobbies: {
                heading: "Hobbies and interests",
                text: "Sport was tough at school, but now Kezia enjoys running! She learned to cook during COVID lockdowns and used to play piano and sing in a choir.",
                image: `${imageFolder}running.jpg`,
                imageAlt: "Kezia at a running event"
            },

            impact: {
                heading: "Why does her research matter?",
                image: `${imageFolder}research.jpg`,
                imageAlt: "Kezia working in a laboratory",
                points: [
                    "HIV: exploring how immune cells might help us develop new treatments",
                    "TB: studying immune cells that could be targets for future vaccines",
                    "Both projects help scientists understand how our immune system fights disease"
                ]
            },

            advice: [
                "Stay curious! There are no stupid questions.",
                "Share ideas with your peers. Science isn't meant to be done alone.",
                "Be creative with the tools and ideas you already have."
            ]
        };

    })(),


    /* =====================================================
       PADDY
       ===================================================== */

    paddy: (() => {

        const imageFolder = "assets/images/experts/paddy/";

        return {
            name: "Paddy",
            role: "Childhood Brain Cancer Researcher",
            organisation: "Neuroscience research focused on childhood brain cancer",
            portrait: `${imageFolder}portrait.jpg`,
            superpower: "Growing tiny brain-like models from stem cells to investigate childhood brain cancer",
            imageFolder,

            timeline: [
                {
                    title: "Curious beginnings",
                    colour: "#F43559",
                    image: `${imageFolder}portrait.jpg`,
                    imageAlt: "Portrait of Paddy today",
                    points: [
                        "At school, Paddy was drawn to English literature, the arts and philosophy.",
                        "He enjoyed asking big questions about people and how we think.",
                        "His interest in philosophy later helped lead him towards neuroscience — the study of the brain and nervous system."
                    ]
                },
                {
                    title: "Challenges in school",
                    colour: "#E9B400",
                    image: `${imageFolder}dictionary.jpg`,
                    imageAlt: "Illustration representing Paddy's school experience",
                    points: [
                        "Paddy found maths difficult at school.",
                        "He was more interested in subjects such as English and the humanities.",
                        "When he later moved into science, he took a maths bridging course to develop the skills he needed."
                    ]
                },
                {
                    title: "Finding his path",
                    colour: "#50B96D",
                    image: `${imageFolder}path-placeholder.svg`,
                    imageAlt: "Illustration showing a pathway from the arts into neuroscience",
                    imageFit: "contain",
                    points: [
                        "Paddy started a Bachelor of Arts before changing to a Bachelor of Science.",
                        "His interest in philosophy helped spark an interest in neuroscience.",
                        "He read The Brain That Changes Itself, a book about neuroplasticity — how the brain can change over time."
                    ]
                },
                {
                    title: "Research with an impact",
                    colour: "#4F71CB",
                    image: `${imageFolder}brain-imaging.jpg`,
                    imageAlt: "Colourful microscope image of a lab-grown brain organoid",
                    points: [
                        "Paddy studies childhood brain cancer using organoids — tiny, lab-grown models of brain tissue made from human stem cells.",
                        "Scientists can introduce genetic changes, called mutations, to investigate how brain cancer develops.",
                        "These models help researchers study what happens to brain cells when cancer-related changes occur."
                    ]
                },
                {
                    title: "Looking to the Future",
                    colour: "#00A7B8",
                    image: `${imageFolder}genes.jpg`,
                    imageAlt: "Image of genes",
                    points: [
                        "Paddy's research investigates how childhood brain cancers develop.",
                        "By studying tiny brain models, scientists can explore how genetic changes affect brain cells.",
                        "In the future, these discoveries could help scientists develop better treatments for children with brain cancer."
                    ]
                }
            ],

            hobbies: {
                heading: "Hobbies and interests",
                text: "Outside the lab, Paddy enjoys hiking, running, reading about the humanities and going to the cinema. He has also gone on overnight hikes in New Zealand.",
                image: `${imageFolder}hiking.jpeg`,
                imageAlt: "Paddy hiking outdoors",

                photos: [
                    {
                        image: `${imageFolder}hiking.jpeg`,
                        imageAlt: "Paddy hiking outdoors",
                        caption: "Hiking"
                    },
                    {
                        image: `${imageFolder}running.png`,
                        imageAlt: "Paddy at a running event",
                        caption: "Running"
                    }
                ]
            },

            impact: {
                heading: "Why does his research matter?",
                image: `${imageFolder}organoid-still.jpg`,
                imageAlt: "Fluorescent microscope image of a brain organoid",
                points: [
                    "Brain organoids let scientists investigate childhood brain cancers using models grown in the lab.",
                    "Studying cancer-related mutations helps researchers understand how these cancers might develop.",
                    "Microscopes and 3D imaging show details too small to see with our eyes."
                ]
            },

            video: {
                heading: "See a brain organoid under the microscope!",
                src: "assets/videos/paddy-brain-organoid.mp4",
                poster: `${imageFolder}organoid-still.jpg`,
                description: "This 10-second video shared by Paddy shows a fluorescent microscope scan of a brain organoid — a tiny lab-grown model of brain tissue. The microscope records views at different depths, a bit like looking through many thin layers.",
                caption: "These are microscope images of a lab-grown model, not slices taken from a person's brain."
            },

            adviceHeading: "What can we learn from Paddy?",
            advice: [
                "It's okay to change direction when you discover a new interest.",
                "Finding maths difficult at school does not mean you cannot learn it later.",
                "Arts, philosophy and science can connect in unexpected ways."
            ]
        };

    })()


};
