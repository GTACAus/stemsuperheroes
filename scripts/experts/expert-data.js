
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
                        "Paddy started a Bachelor of Arts before in philosophy changing to a Bachelor of Science.",
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

    })(),


    /* =====================================================
    MUNA - MICROBIOLOGY RESEARCHER

    Interview: 16 October 2026

    Add or change Muna's information here.
    The same reusable layout used by Kezia and Paddy
    will automatically display this content.
    ===================================================== */

    muna: (() => {
        // IMAGE FOLDER
        // All Muna's images are stored here.
        const imageFolder = "assets/images/experts/muna/";
        return {

            /* ================================================
            A. BASIC INFORMATION
            ================================================ */

            name: "Muna",
            role: "Microbiology Researcher",
            organisation: "Melbourne, Australia - University tutor and GTAC STEM Coach",
            portrait: `${imageFolder}portrait.jpg`,
            superpower: "Studying bacteria that cause infections and investigating antibiotic resistance",
            imageFolder,


            /* ================================================
            B. INTERACTIVE TIMELINE

            Each stage has:
            - A title
            - A colour for its timeline marker
            - A photograph or illustration
            - Bullet points describing the story

            The reusable timeline.js handles the clicks.
            ================================================ */

            timeline: [

                // STAGE 1: CURIOUS BEGINNINGS

                {
                    title: "Curious beginnings",
                    colour: "#F43559",
                    image: `${imageFolder}portrait.jpg`,
                    imageAlt: "Portrait of Muna",
                    points: [
                        "Muna grew up in Pakistan and always loved biology.",
                        "When she was younger, she dreamed of becoming a doctor.",
                        "She became the first woman in her extended family to attend university and later study overseas!"
                    ]
                },


                // STAGE 2: CHALLENGES IN SCHOOL

                {
                    title: "Challenges in school",
                    colour: "#E9B400",
                    image: `${imageFolder}school.jpg`,
                    imageAlt: "Image representing Muna's school experiences",
                    points: [
                        "Muna loved biology, but she found chemistry challenging.",
                        "She wanted to study medicine, but getting into medical school in Pakistan was very competitive.",
                        "She received an offer from a private medical university, but the fees were too expensive.",
                        "Her original plan had to change, but she continued exploring science."
                    ]
                },


                // STAGE 3: FINDING HER PATH

                {
                    title: "Finding her path",
                    colour: "#50B96D",
                    image: `${imageFolder}study.jpg`,
                    imageAlt: "Image representing Muna's university studies",
                    points: [
                        "Muna discovered microbiology - the study of tiny living things, such as bacteria.",
                        "She completed university degrees in microbiology in Pakistan.",
                        "She then came to Australia to pursue a PhD, supported by a scholarship.",
                        "She realised that she loved both scientific research and teaching."
                    ]
                },


                // STAGE 4: RESEARCH WITH AN IMPACT

                {
                    title: "Research with an impact",
                    colour: "#4F71CB",
                    image: `${imageFolder}bacteria.jpg`,
                    imageAlt: "Image representing E. coli bacteria",
                    points: [
                        "Muna studies bacteria, including E. coli, which can cause urinary tract infections (UTIs).",
                        "She has worked with samples from real patients to investigate these bacteria.",
                        "Her research explores antibiotic resistance - when bacteria can survive medicines designed to kill them.",
                        "Understanding these bacteria could help scientists investigate better ways to treat infections."
                    ]
                },


                // STAGE 5: LOOKING TO THE FUTURE

                {
                    title: "Looking to the Future",
                    colour: "#00A7B8",
                    image: `${imageFolder}future.jpg`,
                    imageAlt: "Image representing Muna's future in science",
                    points: [
                        "Muna is exploring opportunities to continue her research as a postdoctoral researcher.",
                        "She is also interested in teaching, public health and other science careers.",
                        "As a GTAC STEM Coach, she has learned to explain science without complicated scientific words.",
                        "Working with students has helped her become a more confident science communicator."
                    ]
                }

            ],


            /* ================================================
            C. HOBBIES AND INTERESTS

            One image: use "image".
            Multiple images: add a "photos" array,
            just like Paddy's profile.
            ================================================ */

            hobbies: {
                heading: "Hobbies and interests",
                text: "Outside science, Muna enjoys exploring different cafés and trying new coffees. She loves discovering interesting coffee spots around Melbourne!",
                image: `${imageFolder}coffee.jpeg`,
                imageAlt: "Coffee at a café"
            },


            /* ================================================
            D. WHY HER RESEARCH MATTERS

            Text appears as bullet points with icons.
            Image appears beside the bullet points.
            ================================================ */

            impact: {
                heading: "Why does her research matter?",
                image: `${imageFolder}bacteria.jpg`,
                imageAlt: "Image representing bacteria studied in microbiology",
                points: [
                    "Investigates bacteria that can cause infections, including UTIs",
                    "Helps scientists understand antibiotic resistance",
                    "Could contribute to better ways of treating bacterial infections in the future"
                ]
            },


            /* ================================================
            E. ADVICE FOR STUDENTS

            The heading can be customised for each expert.
            These points are paraphrased from Muna's interview.
            ================================================ */

            adviceHeading: "Muna's advice",
            advice: [
                "Explore different interests and discover what you enjoy!",
                "Your journey into science doesn't have to follow a straight path.",
                "If something isn't right for you, it's okay to change direction and try something else."
            ]

            /* ================================================
            F. OPTIONAL EXTRAS

            No video has been added for Muna.

            If she provides a video in the future,
            we can add a "video" property like Paddy's.

            The existing renderer already supports it.
            ================================================ */

        };

    })(),


/* =====================================================
   MILLICENT - NEUROSCIENTIST

   Interview: 11 March 2026

   Edit this section to change Millicent's content.
   The reusable profile layout remains unchanged.
   ===================================================== */

millicent: (() => {

    /* ================================================
       A. IMAGE LOCATIONS

        MILLICENT'S IMAGE FOLDER AND PORTRAIT

        All images are stored locally.
        ===================================================== */

        const imageFolder = "assets/images/experts/millicent/";

        const stagePhoto = `${imageFolder}portrait.jpg`;

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Millicent",

        role: "Neuroscientist",

        organisation: "PhD research at The Florey and the University of Melbourne",

        portrait: stagePhoto,

        imageFolder,

        superpower: "Investigating how the tiny microbes living in our gut may affect the brain and Huntington's disease",


        /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.
           Each stage has its own image, colour and story.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: stagePhoto,
                imageAlt: "Millicent performing on stage as an adult",

                points: [
                    "Millicent grew up in Nigeria and loved reading, writing and acting from a young age.",
                    "She dreamed of becoming a news presenter and enjoyed performing in school theatre.",
                    "Her mum supported her ambition to keep studying, including overseas.",
                    "Even though her family had different hopes for her career, she wanted to follow her own interests."
                ]
            },


            // STAGE 2: CHALLENGES AND CHOICES

            {
                title: "Challenges and choices",
                colour: "#E9B400",

                image: `${imageFolder}school.svg`,
                imageAlt: "Illustration representing different pathways through science and the arts",
                imageFit: "contain",

                points: [
                    "Millicent originally applied to study medicine but did not get a place.",
                    "Instead, she continued studying science and discovered new interests along the way.",
                    "During her master's degree, she had less time for acting and radio, but her creative interests never disappeared."
                ]
            },


            // STAGE 3: FINDING HER PATH

            {
                title: "Finding her path",
                colour: "#50B96D",

                image: `${imageFolder}journey.svg`,
                imageAlt: "Illustration of Millicent's journey from Nigeria to the USA and Australia",
                imageFit: "contain",

                points: [
                    "Millicent studied in Nigeria before moving to the USA for her master's degree.",
                    "She worked on brain research at Brigham and Women's Hospital, linked to Harvard Medical School.",
                    "After learning about the connection between gut microbes and the brain, she came to Melbourne for PhD research."
                ]
            },


            // STAGE 4: RESEARCH WITH AN IMPACT

            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: `${imageFolder}gut-brain.svg`,
                imageAlt: "Diagram representing the connection between gut microbes and the brain",
                imageFit: "contain",

                points: [
                    "Millicent investigates Huntington's disease, an inherited condition that affects the brain, movement and thinking.",
                    "She studies how bacteria living in the gut may communicate with the brain.",
                    "In mouse research, her team found that prebiotics, which help feed some gut bacteria, improved certain measures of gut health, movement and thinking-related performance.",
                    "These results are from mice, not proven treatments for people."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: `${imageFolder}future.svg`,
                imageAlt: "Illustration representing future clinical research",
                imageFit: "contain",

                points: [
                    "In July 2026, Millicent submitted her PhD thesis about the gut and Huntington's disease.",
                    "She hopes to work in clinical research, including studies that could improve patients' lives.",
                    "She also shows us that a scientist can still love storytelling, acting and presenting."
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           Currently one photograph.

           If more images become available, add a
           "photos" array like Paddy's profile.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Millicent loves acting, reading, writing and presenting! She performed in theatre at school, hosted events and had her own radio show in Nigeria. She still enjoys the idea of broadcasting alongside science.",

            image: stagePhoto,
            imageAlt: "Millicent performing on stage"
        },


        /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three points appear with coloured icons.
           The image appears next to the information.
           ================================================ */

        impact: {
            heading: "Why does her research matter?",

            image: `${imageFolder}gut-brain.svg`,
            imageAlt: "Diagram showing gut microbes and a brain",

            points: [
                "Explores connections between the gut microbiome and brain health.",
                "Tests whether changing gut microbes can help with problems linked to Huntington's disease in mice.",
                "May help guide future research for people, but the findings are not a cure or a proven treatment."
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Millicent's interview.
           ================================================ */

        adviceHeading: "Millicent's advice",

        advice: [
            "Find what excites you and pursue it!",
            "You do not have to choose between science and the arts - you can enjoy both.",
            "Trying something outside your comfort zone can open new doors."
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Millicent.

           Add a video property here later if she
           provides one.
           ================================================ */

    };

})()




};
