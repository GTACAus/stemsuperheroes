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
const munaImages = `${base}/muna/`;
const millicentImages = `${base}/millicent/`;

export const expertProfiles = [
    {
        name: "Paddy",
        role: "Childhood Brain Cancer Researcher",
        subtitle: "STEM Coach",
        organisation: "Neuroscience research focused on childhood brain cancer",
        portrait: `${paddyImages}portrait.jpg`,
        portraitAlt: "Paddy, a neuro-oncologist",
        // thinglinkUrl: "https://www.thinglink.com/view/scene/2110566100411351717",
        back: {
            superpower: "Understanding childhood cancer by creating models of the brain in the lab",
            coolFact: "Paddy studied Neuroscience because he loves Philosophy",
            impact: "His work helps researchers test ideas for treating brain cancers in safer lab models.",
            lesson: "Follow your nose"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${paddyImages}portrait.jpg`,
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
                image: `${paddyImages}dictionary.jpg`,
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
                image: `${paddyImages}path-placeholder.svg`,
                imageAlt: "Illustration showing a pathway from the arts into neuroscience",
                imageFit: "contain",
                points: [
                    "Paddy started a Bachelor of Arts before in philosophy changing to a Bachelor of Science.",
                    "His interest in philosophy helped spark an interest in neuroscience.",
                    "He read The Brain That Changes Itself, a book about neuroplasticity — how the brain can change over time."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${paddyImages}brain-imaging.jpg`,
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
                image: `${paddyImages}genes.jpg`,
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
            image: `${paddyImages}hiking.jpeg`,
            imageAlt: "Paddy hiking outdoors",
            photos: [
                {
                    image: `${paddyImages}hiking.jpeg`,
                    imageAlt: "Paddy hiking outdoors",
                    caption: "Hiking"
                },
                {
                    image: `${paddyImages}running.png`,
                    imageAlt: "Paddy at a running event",
                    caption: "Running"
                }
            ]
        },
        impact: {
            heading: "Why does his research matter?",
            image: `${paddyImages}organoid-still.jpg`,
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
            poster: `${paddyImages}organoid-still.jpg`,
            description: "This 10-second video shared by Paddy shows a fluorescent microscope scan of a brain organoid — a tiny lab-grown model of brain tissue. The microscope records views at different depths, a bit like looking through many thin layers.",
            caption: "These are microscope images of a lab-grown model, not slices taken from a person's brain."
        },
        adviceHeading: "What can we learn from Paddy?",
        advice: [
            "It's okay to change direction when you discover a new interest.",
            "Finding maths difficult at school does not mean you cannot learn it later.",
            "Arts, philosophy and science can connect in unexpected ways."
        ]
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
    },
    {
        name: "Muna",
        role: "Microbiology Researcher",
        organisation: "Melbourne, Australia - University tutor and GTAC STEM Coach",
        portrait: `${munaImages}portrait.jpg`,
        back: {
            coolFact: "She loves cooking and running",
            impact: "Her research helps us understand how the body fights viruses.",
            lesson: "Stay curious!",
            superpower: "Studying bacteria that cause infections and investigating antibiotic resistance",
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${munaImages}portrait.jpg`,
                imageAlt: "Portrait of Muna",
                points: [
                    "Muna grew up in Pakistan and always loved biology.",
                    "When she was younger, she dreamed of becoming a doctor.",
                    "She became the first woman in her extended family to attend university and later study overseas!"
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${munaImages}school.jpg`,
                imageAlt: "Image representing Muna's school experiences",
                points: [
                    "Muna loved biology, but she found chemistry challenging.",
                    "She wanted to study medicine, but getting into medical school in Pakistan was very competitive.",
                    "She received an offer from a private medical university, but the fees were too expensive.",
                    "Her original plan had to change, but she continued exploring science."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${munaImages}study.jpg`,
                imageAlt: "Image representing Muna's university studies",
                points: [
                    "Muna discovered microbiology - the study of tiny living things, such as bacteria.",
                    "She completed university degrees in microbiology in Pakistan.",
                    "She then came to Australia to pursue a PhD, supported by a scholarship.",
                    "She realised that she loved both scientific research and teaching."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${munaImages}bacteria.jpg`,
                imageAlt: "Image representing E. coli bacteria",
                points: [
                    "Muna studies bacteria, including E. coli, which can cause urinary tract infections (UTIs).",
                    "She has worked with samples from real patients to investigate these bacteria.",
                    "Her research explores antibiotic resistance - when bacteria can survive medicines designed to kill them.",
                    "Understanding these bacteria could help scientists investigate better ways to treat infections."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${munaImages}future.jpg`,
                imageAlt: "Image representing Muna's future in science",
                points: [
                    "Muna is exploring opportunities to continue her research as a postdoctoral researcher.",
                    "She is also interested in teaching, public health and other science careers.",
                    "As a GTAC STEM Coach, she has learned to explain science without complicated scientific words.",
                    "Working with students has helped her become a more confident science communicator."
                ]
            }

        ],

        hobbies: {
            heading: "Hobbies and interests",
            text: "Outside science, Muna enjoys exploring different cafés and trying new coffees. She loves discovering interesting coffee spots around Melbourne!",
            image: `${munaImages}coffee.jpeg`,
            imageAlt: "Coffee at a café"
        },

        impact: {
            heading: "Why does her research matter?",
            image: `${munaImages}bacteria.jpg`,
            imageAlt: "Image representing bacteria studied in microbiology",
            points: [
                "Investigates bacteria that can cause infections, including UTIs",
                "Helps scientists understand antibiotic resistance",
                "Could contribute to better ways of treating bacterial infections in the future"
            ]
        },

        adviceHeading: "Muna's advice",
        advice: [
            "Explore different interests and discover what you enjoy!",
            "Your journey into science doesn't have to follow a straight path.",
            "If something isn't right for you, it's okay to change direction and try something else."
        ]
    },
    {
        name: "Millicent",
        role: "Neuroscientist",
        organisation: "PhD research at The Florey and the University of Melbourne",
        portrait: `${millicentImages}portrait.jpg`,
        back: {
            coolFact: "She loves cooking and running",
            impact: "Her research helps us understand how the body fights viruses.",
            lesson: "Stay curious!",
            superpower: "Investigating how the tiny microbes living in our gut may affect the brain and Huntington's disease",
        },

        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: `${millicentImages}portrait.jpg`,
                imageAlt: "Millicent performing on stage as an adult",

                points: [
                    "Millicent grew up in Nigeria and loved reading, writing and acting from a young age.",
                    "She dreamed of becoming a news presenter and enjoyed performing in school theatre.",
                    "Her mum supported her ambition to keep studying, including overseas.",
                    "Even though her family had different hopes for her career, she wanted to follow her own interests."
                ]
            },
            {
                title: "Challenges and choices",
                colour: "#E9B400",

                image: ``,
                imageAlt: "Illustration representing different pathways through science and the arts",
                imageFit: "contain",

                points: [
                    "Millicent originally applied to study medicine but did not get a place.",
                    "Instead, she continued studying science and discovered new interests along the way.",
                    "During her master's degree, she had less time for acting and radio, but her creative interests never disappeared."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",

                image: ``,
                imageAlt: "Illustration of Millicent's journey from Nigeria to the USA and Australia",
                imageFit: "contain",

                points: [
                    "Millicent studied in Nigeria before moving to the USA for her master's degree.",
                    "She worked on brain research at Brigham and Women's Hospital, linked to Harvard Medical School.",
                    "After learning about the connection between gut microbes and the brain, she came to Melbourne for PhD research."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: ``,
                imageAlt: "Diagram representing the connection between gut microbes and the brain",
                imageFit: "contain",

                points: [
                    "Millicent investigates Huntington's disease, an inherited condition that affects the brain, movement and thinking.",
                    "She studies how bacteria living in the gut may communicate with the brain.",
                    "In mouse research, her team found that prebiotics, which help feed some gut bacteria, improved certain measures of gut health, movement and thinking-related performance.",
                    "These results are from mice, not proven treatments for people."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: ``,
                imageAlt: "Illustration representing future clinical research",
                imageFit: "contain",

                points: [
                    "In July 2026, Millicent submitted her PhD thesis about the gut and Huntington's disease.",
                    "She hopes to work in clinical research, including studies that could improve patients' lives.",
                    "She also shows us that a scientist can still love storytelling, acting and presenting."
                ]
            }

        ],
        hobbies: {
            heading: "Hobbies and interests",

            text: "Millicent loves acting, reading, writing and presenting! She performed in theatre at school, hosted events and had her own radio show in Nigeria. She still enjoys the idea of broadcasting alongside science.",

            image: `${millicentImages}portrait.jpg`,
            imageAlt: "Millicent performing on stage"
        },
        impact: {
            heading: "Why does her research matter?",

            image: ``,
            imageAlt: "Diagram showing gut microbes and a brain",

            points: [
                "Explores connections between the gut microbiome and brain health.",
                "Tests whether changing gut microbes can help with problems linked to Huntington's disease in mice.",
                "May help guide future research for people, but the findings are not a cure or a proven treatment."
            ]
        },
        adviceHeading: "Millicent's advice",

        advice: [
            "Find what excites you and pursue it!",
            "You do not have to choose between science and the arts - you can enjoy both.",
            "Trying something outside your comfort zone can open new doors."
        ]
    }
];
