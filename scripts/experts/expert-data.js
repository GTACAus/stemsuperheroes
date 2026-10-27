
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
                        "Kezia enjoyed music back in school, learning piano back when she was 4 years old.",
                        "Kezia enjoyed science and was good at maths, but physics was challenging.",
                        "She also found sport difficult.",
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
                        "Kezia investigated how different immune cells fight infections.",
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
                    title: "Creative beginnings",
                    colour: "#F43559",
                    image: `${imageFolder}dictionary.jpg`,
                    imageAlt: "Portrait of Paddy today",
                    points: [
                        "Paddy loved learning about philosophy, literature, cinema, and the art",
"At school, he loved studyng English literature, Chemistry and Biology",
"He was terrible at Maths.",
                    ]
                },
                {
                    title: "Changing Pathways",
                    colour: "#E9B400",
                    image: `${imageFolder}paths.jpg`,
                    imageAlt: "Illustration representing Paddy's school experience",
                    points: [
                        "Paddy continued to pursue arts and humanities by enrolling in a Bachelor of Arts degree at the University of Melbourne.",
"Paddy discovered that he wanted to study Science instead, but his knowledge of Maths wasn't enough to get him in.",
"Paddy completed a Maths bridging course at university, and eventually got into Science.",
"We can enter science through many different pathways!",
                    ]
                },
                {
                    title: "Journeys in Neuroscience",
                    colour: "#50B96D",
                    image: `${imageFolder}brain-imaging.jpg`,
                    imageAlt: "Illustration showing a pathway from the arts into neuroscience",
                    imageFit: "contain",
                    points: [
                        "Paddy's interest in Neuroscience came from his love of Philosophy.",
"He read a book about neuroplasticity - the brain's ability to change and adapt.",
"This inspired him to study the brain more deeply, majoring in Neuroscience.",
"He is currently doing his doctorate in Neuroscience.",
                    ]
                },
                {
                    title: "Future Plans",
                    colour: "#4F71CB",
                    image: `${imageFolder}future.jpg`,
                    imageAlt: "Colourful microscope image of a lab-grown brain organoid",
                    points: [
                        "Paddy's interest in Neuroscience came from his love of Philosophy.",
                        "He read a book about neuroplasticity - the brain's ability to change and adapt.",
                        "This inspired him to study the brain more deeply, majoring in Neuroscience.",
                        "He is currently doing his doctorate in Neuroscience."
                    ]
                },
                {
                    title: "DELETE THIS",
                    colour: "#00A7B8",
                    image: `${imageFolder}genes.jpg`,
                    imageAlt: "Image of genes",
                    points: [
                        ""
                    ]
                }
            ],

            hobbies: {
                heading: "Hobbies and interests",
                text: "Paddy loves to read about philosophy, watch cinema, run, and hike. Paddy also does futsal with his colleagues at MCRI.",
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
                    "Helps scientists understand how childhood brain cancer develops.",
                    "Paddy grows human brains in a dish, and he uses this to study how neurons grow and communicate.",
                    "May help scientists improve future treatments for children and families."
                ]
            },

            video: {
                heading: "See a brain organoid under the microscope!",
                src: "assets/videos/paddy-brain-organoid.mp4",
                poster: `${imageFolder}organoid-still.jpg`,
                description: "This 10-second video shared by Paddy shows a fluorescent microscope scan of a brain organoid — a tiny lab-grown model of brain tissue. The microscope records views at different depths, a bit like looking through many thin layers.",
                caption: "These are microscope images of a lab-grown model, not slices taken from a person's brain."
            },

            adviceHeading: "Paddy's Advice",
            advice: [
                "Follow your nose."
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
                    image: `${imageFolder}pakistan.jpg`,
                    imageAlt: "Muna's Home",
                    points: [
                        "Muna grew up in Pakistan and always loved biology.",
                        "When she was younger, she dreamed of becoming a doctor.",
                        "She became the first woman in her extended family to attend university and later study overseas!"
                    ]
                },


                // STAGE 2: DREAM OCCUPATION

                {
                    title: "Dreams",
                    colour: "#E9B400",
                    image: `${imageFolder}muna-university.jpg`,
                    imageAlt: "Image representing Muna's school experiences",
                    points: [
                        // "Muna loved biology, but she found chemistry challenging.",
                        "She wanted to be a doctor, but getting into medical school in Pakistan was very competitive.",
                        "She received an offer from a private medical university, but it was too expensive.",
                        "She changed her plans, but she knew she wanted to be in science."
                    ]
                },


                // STAGE 3: LEARNING ABOUT TINY LIVING THINGS

                {
                    title: "Learning About Tiny Living Things",
                    colour: "#50B96D",
                    image: `${imageFolder}travel.jpeg`,
                    imageAlt: "Image representing Muna's university studies",
                    points: [
                        "Muna discovered a love for microbiology, the study of tiny living things, such as bacteria.",
                        "She completed her undergraduate and masters in microbiology in Pakistan.",
                        "She then got a full scholarship to do a PhD in Australia.",
                        "She realised that she loved both research and teaching."
                    ]
                },


                // STAGE 4: STUDYING BACTERIA

                {
                    title: "Studying Bacteria",
                    colour: "#4F71CB",
                    image: `${imageFolder}bacteria.jpg`,
                    imageAlt: "Image representing E. coli bacteria",
                    points: [
                        "Muna studies the bacteria E. coli, which can cause urinary tract infections (UTIs).",
                        "She works with atient samples from hospitals.",
                        "Her research explores how some bacteria can survive medicines designed to kill them. This is called antibiotic resistance",
                        "This will help scientists develop better ways to treat infections."
                    ]
                },


                // STAGE 5: LOOKING TO THE FUTURE

                {
                    title: "Looking to the Future",
                    colour: "#00A7B8",
                    image: `${imageFolder}poster.jpeg`,
                    imageAlt: "Image representing Muna's future in science",
                    points: [
                        "Muna wants to continue working as a researcher.",
                        "She is also interested in teaching, public health and other careers in science.",
                        "As a GTAC STEM Coach, she has learned to explain science to kids and young people.",
                        "Working with students has helped her become a confident science communicator."
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
                image: `${imageFolder}lab.jpg`,
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
                title: "Breaking Barriers",
                colour: "#F43559",

                image: stagePhoto,
                imageAlt: "Millicent performing on stage as an adult",

                points: [
                    "Millicent grew up in Nigeria, where girls in her culture were expected to grow up and marry.",
"Her dad did not support her going into science, but she wanted 'to be more than what my culture programmed me to be'.",
"Millicent stepped out of her comfort zone and pursued science."
                ]
            },


            // STAGE 2: CHALLENGES AND CHOICES

            {
                title: "Choosing Between Arts and Science",
                colour: "#E9B400",

                image: `${imageFolder}paths.jpg`,
                imageAlt: "Illustration representing different pathways through science and the arts",
                imageFit: "contain",

                points: [
                    "She loved acting and was part of a theatre group back in school.",
                    "She realised she didn't have to choose between arts and science, she chose to do both.",
"She applied to study medicine but did not get a place.",
                    "She continued studying science and discovered new interests along the way.",
                    "During her master's degree, she had less time for acting and radio, but her creative interests stayed."
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
                    "For her Masters, she worked on brain research at Brigham and Women's Hospital, linked to Harvard Medical School.",
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

                image: `${imageFolder}lab.jpg`,
                imageAlt: "Illustration representing future clinical research",

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

            image: `${imageFolder}radio.jpg`,
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

})(),


/* =====================================================
   MICHAEL - BIOMEDICAL ENGINEER / GTAC EDUCATOR

   Based on:
   - Existing GTAC STEM Superheroes profile
   - Biomedical engineering research
   - Education and career background

   All images are stored locally.
   ===================================================== */

michael: (() => {

    /* ================================================
       A. IMAGE FOLDER

       All Michael's images are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/michael/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Michael",

        role: "Biomedical Engineer",

        organisation: "Gene Technology Access Centre (GTAC), Melbourne",

        portrait: `${imageFolder}portrait.jpg`,

        superpower: "Using mathematics, engineering and an understanding of people to design better tools for healthcare",

        imageFolder,


        /* ================================================
           C. INTERACTIVE TIMELINE

           Each stage has:
           - A title
           - A colour
           - An image
           - Bullet points

           The reusable timeline.js handles the clicks.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: `${imageFolder}books.jpg`,
                imageAlt: "Portrait of Michael today",

                points: [
                    "Michael grew up in Indonesia, struggled with mathematics back in high school, but loved books and literature.",
                    "He studied psychology at the University of Melbourne, the study of how people think, feel and behave.",
                    "He became interested in how science can help us understand people and solve problems."
                ]
            },


            // STAGE 2: EXPLORING ENGINEERING

            {
                title: "Exploring Engineering",
                colour: "#E9B400",

                image: `${imageFolder}choices.svg`,
                imageAlt: "Illustration of psychology and engineering as connected fields",
                imageFit: "contain",

                points: [
                    "After studying psychology, Michael chose to explore biomedical engineering.",
                    "Biomedical engineering combines biology, maths and technology to solve health problems.",
                    "Here, he discovered a love for mathematics."
                ]
            },


            // STAGE 3: MEDICAL RESEARCH

            {
                title: "Medical Research",
                colour: "#50B96D",

                image: `${imageFolder}medical-testing.jpg`,
                imageAlt: "Illustration representing laboratory research during Michael's PhD in Taiwan",

                points: [
                    "He then moved to Taiwan to do a PhD, learn Mandarin Chinese, and reconnect with his East Asian cultural roots.",
                    "He worked with doctors and other engineers to design medical testing tools that people can use at home."
                ]
            },


            // STAGE 4: LIFE AS A CONSULTANT

            {
                title: "Life as a Consultant",
                colour: "#4F71CB",

                image: `${imageFolder}consulting.jpg`,
                imageAlt: "Illustration of paper-based screening and infection testing tools",

                points: [
                    "After finishing his PhD, Michael did consulting at a Big 3 consulting firm.",
                    "He used his knowledge of engineering to work with clients on product design and manufacturing."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Future in Psychology",
                colour: "#00A7B8",

                image: `${imageFolder}education.svg`,
                imageAlt: "Illustration of science education and understanding how people learn",

                points: [
                    "After returning to Australia, Michael went back to study Psychology.",
                    "He wanted to work with young people to help them navigate life's biggest challenges.",
                    "He works at GTAC because he wants young people to know that they can be whatever they want to be."
                    
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           Currently one image.

           To display multiple photographs, add a
           "photos" array like Paddy's profile.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Outside work, Michael enjoys reading, cooking, swimming and bouldering (a type of climbing).",

            image: `${imageFolder}hobbies.jpg`,
            imageAlt: "Illustration of reading, climbing and other hobbies"
        },


        /* ================================================
           E. WHY HIS WORK MATTERS

           Three bullet points with coloured icons.
           One accompanying image.
           ================================================ */

        impact: {
            heading: "Why does his work matter?",

            image: `${imageFolder}medical-testing.svg`,
            imageAlt: "Illustration of tools used to investigate practical medical tests",

            points: [
                "Investigates ways to make medical testing more practical and accessible",
                "Shows how biology, engineering and psychology can connect",
                "Helps young people see that STEM is about improving people's lives"
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           The first point is from the existing GTAC profile.
           The other points are educational takeaways.
           ================================================ */

        adviceHeading: "Michael's Advice",

        advice: [
            "The mind is as important as the machine.",
            "Don't be afraid to explore and change to a different direction. It is worth it."
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video is currently added.

           If you want a video later, add a
           "video" property like Paddy's profile.
           ================================================ */

    };

})(),


/* =====================================================
   LAURA - IMMUNOLOGIST

   Interview: 10 March 2026
   Additional reference: GTAC STEM Superheroes Showcase

   All images are stored locally.
   The existing profile and timeline functions
   will display this content automatically.
   ===================================================== */

laura: (() => {

    /* ================================================
       A. IMAGE FOLDER

       All Laura's photographs are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/laura/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Laura",

        role: "Immunologist",

        organisation: "Immunology researcher and GTAC STEM Coach, Melbourne",

        portrait: `${imageFolder}portrait.jpg`,

        superpower: "Being a cell detective - investigating how immune cells communicate and sometimes steal tiny pieces from other cells",

        imageFolder,


        /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.
           Each stage has its own image, colour and story.

           timeline.js manages the interactions.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Creative beginnings",
                colour: "#F43559",

                image: `${imageFolder}portrait.jpg`,
                imageAlt: "Portrait of Laura today",

                points: [
                    "Laura grew up in Spain, in a family without a background in science.",
                    "As a child, she always asked 'Why?' and wanted to understand the reasons behind things.",
                    "She loved books so much that she once dreamed of becoming a librarian!",
                    "Her curiosity eventually helped her discover a love of science."
                ]
            },


            // STAGE 2: CHALLENGES IN SCHOOL

            {
                title: "Challenges in school",
                colour: "#E9B400",

                image: `${imageFolder}school.jpg`,
                imageAlt: "Image representing Laura's school years",

                points: [
                    "Laura enjoyed many school subjects, including maths, but biology was her favourite.",
                    "She also played piano and enjoyed learning new things.",
                    "Sometimes she found it difficult to fit in with her group of friends.",
                    "At university, she met people who shared her interests and enjoyed discussing the same ideas."
                ]
            },


            // STAGE 3: FINDING HER PATH

            {
                title: "Finding her path",
                colour: "#50B96D",

                image: `${imageFolder}studies.jpg`,
                imageAlt: "Image representing Laura's studies in science",

                points: [
                    "Laura considered several careers, including becoming a gardener or botanist - someone who studies plants.",
                    "A family experience with cancer inspired her interest in understanding the disease.",
                    "She studied biochemistry, followed by a master's degree in immunology - the study of the immune system.",
                    "She came to Australia on a six-month university exchange and later continued her journey in immunology research."
                ]
            },


            // STAGE 4: RESEARCH WITH AN IMPACT

            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: `${imageFolder}research.jpg`,
                imageAlt: "Microscope image representing immune cell interactions",

                points: [
                    "Laura investigates how immune cells interact with each other.",
                    "Some cells can take tiny pieces of material from other cells - almost like a robber stealing something!",
                    "She uses powerful microscopes to investigate these interactions and how cells behave.",
                    "Understanding these interactions helps scientists learn more about how our immune system works."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: `${imageFolder}future.jpg`,
                imageAlt: "Image representing future cancer immunotherapy research",

                points: [
                    "Laura hopes to return to cancer research in the future.",
                    "She is especially interested in cancer immunotherapy - helping the body's immune system recognise and fight cancer.",
                    "She is considering research opportunities in both universities and the science industry.",
                    "Her goal is to contribute to research that could help improve cancer treatments."
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           One image is displayed by default.

           To display multiple photos, add a "photos"
           array like Paddy's profile.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Laura enjoys ice skating and loves books! When she was at school, she also tried archery and played the piano.",

            image: `${imageFolder}skating.jpg`,
            imageAlt: "Image representing Laura's interest in ice skating"
        },


        /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three points displayed with coloured icons.
           The image appears beside the information.
           ================================================ */

        impact: {
            heading: "Why does her research matter?",

            image: `${imageFolder}research.jpg`,
            imageAlt: "Microscope image representing immune cells",

            points: [
                "Investigates how immune cells interact and communicate with each other",
                "Helps scientists understand how immune cells exchange or take material from other cells",
                "Improves our understanding of immune responses, which is important for studying health and disease"
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Laura's interview and original
           GTAC STEM Superheroes profile.
           ================================================ */

        adviceHeading: "Laura's advice",

        advice: [
            "Don't be discouraged when things don't work the first time!",
            "Science involves trying experiments, learning from mistakes and trying again.",
            "Keep asking questions. The world makes more sense when you ask the right questions!"
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Laura.

           If she provides a video in the future,
           add a "video" property like Paddy's.
           ================================================ */

    };

})(),


/* =====================================================
   KEVIN - STEM CELL RESEARCHER

   Interview: 11 March 2026
   Additional references:
   - GTAC STEM Superheroes Showcase
   - University of Melbourne PhD announcement

   All images are stored locally.
   The existing profile and timeline functions
   will display this content automatically.
   ===================================================== */

kevin: (() => {

    /* ================================================
       A. IMAGE FOLDER

       All Kevin's photographs are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/kevin/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Kevin",

        role: "Stem Cell Researcher",

        organisation: "University of Melbourne PhD graduate and GTAC STEM Coach",

        portrait: `${imageFolder}portrait.jpg`,

        superpower: "Growing T cells, a type of immune cell, from stem cells in the lab to explore future medical treatments",

        imageFolder,


        /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.
           Each stage has its own image, colour and story.

           timeline.js manages the interactions.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: `${imageFolder}portrait.jpg`,
                imageAlt: "Portrait of Kevin today",

                points: [
                    "Kevin grew up in Indonesia in a family where science and technology were part of everyday life.",
                    "His family encouraged curiosity and logical thinking.",
                    "At school, he enjoyed science because it helped him understand and explain how the world works.",
                    "He even dreamed of becoming a palaeontologist - a scientist who studies ancient life and fossils!"
                ]
            },


            // STAGE 2: CHALLENGES AND CHOICES

            {
                title: "Challenges and choices",
                colour: "#E9B400",

                image: `${imageFolder}school.jpg`,
                imageAlt: "Image representing Kevin's early career choices",

                points: [
                    "Kevin studied medicine in Indonesia, partly because of his family's expectations.",
                    "He enjoyed learning about science and the human body, but realised he preferred research over treating patients directly.",
                    "He faced a difficult decision: continue along the medical pathway or try something different.",
                    "Kevin chose to explore research, even though he wasn't completely sure where it would lead."
                ]
            },


            // STAGE 3: FINDING HIS PATH

            {
                title: "Finding his path",
                colour: "#50B96D",

                image: `${imageFolder}pathway.jpg`,
                imageAlt: "Image representing Kevin's journey into research",

                points: [
                    "Kevin received a scholarship to complete a master's degree overseas.",
                    "He then worked as a research assistant in Hong Kong, gaining experience in laboratory science.",
                    "He chose to continue his studies in Australia, where he pursued a PhD.",
                    "His journey took him from medicine into stem cell and immunology research."
                ]
            },


            // STAGE 4: RESEARCH WITH AN IMPACT

            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: `${imageFolder}t-cells.jpg`,
                imageAlt: "Image representing T cells and stem cell research",

                points: [
                    "Kevin investigates how to grow T cells, a type of immune cell, from stem cells in the laboratory.",
                    "Stem cells are special because they can develop into different types of cells.",
                    "Some T cells can recognise and destroy dangerous cells, including certain cancer cells.",
                    "By learning how to make T cells in the lab, scientists hope to improve our understanding of the immune system and explore future treatments."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: `${imageFolder}future.jpg`,
                imageAlt: "Image representing Kevin's future in research and teaching",

                points: [
                    "Kevin completed his PhD at the University of Melbourne in 2026.",
                    "He hopes to continue research and investigate new ideas about stem cells and the immune system.",
                    "He also loves teaching and is interested in helping students learn science at different levels.",
                    "In the future, he may explore an academic career that combines research and education."
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           One image is displayed by default.

           To display multiple photos, add a "photos"
           array like Paddy's profile.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Kevin enjoys playing video games, including Pokémon and Dynasty Warriors! He also likes history-themed games, reading non-fiction books about science and philosophy, and taking photographs while hiking.",

            image: `${imageFolder}hobbies.jpg`,
            imageAlt: "Image representing Kevin's hobbies"
        },


        /* ================================================
           E. WHY HIS RESEARCH MATTERS

           Three points displayed with coloured icons.
           The image appears beside the information.
           ================================================ */

        impact: {
            heading: "Why does his research matter?",

            image: `${imageFolder}t-cells.jpg`,
            imageAlt: "Image representing T cells made from stem cells",

            points: [
                "Investigates how stem cells can develop into T cells, an important part of our immune system",
                "Helps scientists understand how immune cells develop and function",
                "Could contribute to future research into treatments for cancer, infections and other diseases"
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Kevin's interview.
           ================================================ */

        adviceHeading: "Kevin's advice",

        advice: [
            "Don't be afraid to make mistakes. That's how we learn!",
            "It's okay to change direction when you discover something new.",
            "Take your time and approach unfamiliar subjects with curiosity and humility."
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Kevin.

           If he provides a video in the future,
           add a "video" property like Paddy's.
           ================================================ */

    };

})(),


/* =====================================================
   MARIA - MALARIA IMMUNOLOGIST

   Sources:
   - Interview: 18 March 2026
   - GTAC STEM Superheroes Showcase
   - Maria's published malaria immunity research (2026)

   All images are stored locally.
   The existing timeline and profile functions are reused.
   ===================================================== */

maria: (() => {

    /* ================================================
       A. IMAGE FOLDER
       Change this once if Maria's image folder moves.
       ================================================ */

    const imageFolder = "assets/images/experts/maria/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Maria",
        role: "Malaria Immunologist",
        organisation: "The Peter Doherty Institute for Infection and Immunity, University of Melbourne",
        portrait: `${imageFolder}portrait.jpg`,
        superpower: "Investigating how antibodies help immune cells recognise and remove malaria-infected red blood cells",
        imageFolder,

        /* ================================================
           C. INTERACTIVE TIMELINE
           Each stage has a title, colour, image and story.
           The shared timeline.js handles the clicks.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${imageFolder}portrait.jpg`,
                imageAlt: "Portrait of Maria today",
                points: [
                    "Maria grew up in Pakistan, where her father worked as a doctor and inspired her interest in science.",
                    "She was curious about how things worked and enjoyed learning about the human body.",
                    "She wanted to become a doctor or a scientist, and her family encouraged her education."
                ]
            },

            // STAGE 2: CHALLENGES IN SCHOOL
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${imageFolder}school.jpg`,
                imageAlt: "Image representing Maria's school years",
                points: [
                    "Maria enjoyed trying small science experiments in high school.",
                    "She used to feel afraid of mathematics, but gradually overcame that fear.",
                    "She sometimes found big decisions difficult and put pressure on herself to do well.",
                    "She learned that challenges do not have to stop you from exploring science."
                ]
            },

            // STAGE 3: FINDING HER PATH
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${imageFolder}journey.jpg`,
                imageAlt: "Image representing Maria's study journey from Pakistan to Australia",
                points: [
                    "In Pakistan, Maria studied biosciences at university and received a gold medal for her academic results.",
                    "She then completed a master's degree in microbiology and immunology - the study of microbes and the immune system.",
                    "She came to Australia to pursue PhD research into malaria and how the body fights infection.",
                    "Her science journey opened opportunities to meet researchers from around the world."
                ]
            },

            // STAGE 4: RESEARCH WITH AN IMPACT
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${imageFolder}malaria.jpg`,
                imageAlt: "Image representing malaria parasites and immune cells",
                points: [
                    "Malaria is caused by parasites that can infect our red blood cells.",
                    "Maria investigates how antibodies help mark infected cells so immune cells called neutrophils can recognise and remove them.",
                    "Her published research identified an important receptor that helps neutrophils carry out this job.",
                    "Understanding these immune defences may help scientists design better malaria vaccines in the future."
                ]
            },

            // STAGE 5: LOOKING TO THE FUTURE
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${imageFolder}future.jpg`,
                imageAlt: "Image representing Maria's future opportunities in science and teaching",
                points: [
                    "Maria has shared her work at science conferences and connected with researchers internationally.",
                    "She is keeping her career options open and is interested in opportunities to teach and share science.",
                    "She wants young people to know that where they grow up does not have to limit what they can achieve."
                ]
            }
        ],

        /* ================================================
           D. HOBBIES AND INTERESTS
           One photo by default. For multiple photos,
           add a photos array like Paddy's profile.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",
            text: "Maria enjoys reading fiction and drama, and she used to love drawing and painting. She also likes looking after a neighbour's cat!",
            image: `${imageFolder}reading.jpg`,
            imageAlt: "Image representing Maria's love of reading"
        },

        /* ================================================
           E. WHY HER RESEARCH MATTERS
           Three icon-led bullet points and one image.
           ================================================ */

        impact: {
            heading: "Why does her research matter?",
            image: `${imageFolder}malaria.jpg`,
            imageAlt: "Image representing malaria parasites and immune responses",
            points: [
                "Helps explain how antibodies and immune cells work together to fight malaria",
                "Identifies how immune cells recognise malaria-infected red blood cells",
                "Could help guide research towards more effective malaria vaccines"
            ]
        },

        /* ================================================
           F. ADVICE FOR STUDENTS
           Drawn from her interview and the GTAC showcase.
           ================================================ */

        adviceHeading: "Maria's advice",
        advice: [
            "Don't feel limited by where you come from - there are opportunities to explore.",
            "Keep asking questions, even when a subject seems difficult at first.",
            "Curiosity can grow into work that saves lives."
        ]

        /* ================================================
           G. OPTIONAL VIDEO
           No video is included for Maria.
           If she provides one later, add a video property
           using Paddy's profile as an example.
           ================================================ */

    };

})(),


/* =====================================================
   PAUL - CANCER BIOLOGY RESEARCHER

   Sources:
   - Interview: 25 March 2026
   - GTAC STEM Superheroes Showcase
   - Brain tumour research using fruit-fly models

   All images are stored locally.
   The existing timeline and profile functions are reused.
   ===================================================== */

paul: (() => {

    /* ================================================
       A. IMAGE FOLDER

       All Paul's photographs are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/paul/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Paul",

        role: "Cancer Biology Researcher",

        organisation: "Cancer biology research at Peter MacCallum Cancer Centre, Melbourne",

        portrait: `${imageFolder}portrait.jpg`,

        superpower: "Investigating how genes and oxygen supply influence brain tumour growth using fruit-fly models",

        imageFolder,


        /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.
           Each stage has its own image, colour and story.

           The shared timeline.js handles the clicks.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: `${imageFolder}portrait.jpg`,
                imageAlt: "Portrait of Paul today",

                points: [
                    "Paul grew up in northern Nigeria, where opportunities to study science were not always easy to find.",
                    "His parents encouraged him to value education because it could open doors to new opportunities.",
                    "He became fascinated by scientific discoveries and inventions.",
                    "Paul wanted to use science to help solve problems and make a difference in the world."
                ]
            },


            // STAGE 2: CHALLENGES IN SCHOOL

            {
                title: "Challenges in school",
                colour: "#E9B400",

                image: `${imageFolder}school.jpg`,
                imageAlt: "Image representing Paul's school experiences",

                points: [
                    "Paul enjoyed biology because it helped him understand nature and how living things work.",
                    "Maths was one of his strongest subjects, but he found physics difficult because it seemed too abstract.",
                    "His school had very limited laboratory equipment, so students had fewer chances to try practical experiments.",
                    "Despite these challenges, Paul remained interested in science and the discoveries scientists could make."
                ]
            },


            // STAGE 3: FINDING HIS PATH

            {
                title: "Finding his path",
                colour: "#50B96D",

                image: `${imageFolder}journey.jpg`,
                imageAlt: "Image representing Paul's science journey from Nigeria to Israel and Australia",

                points: [
                    "Paul originally wanted to become a medical doctor, but entering that career pathway was difficult.",
                    "He decided to pursue science so he could still contribute to solving important problems.",
                    "After completing his undergraduate studies in Nigeria, he moved to Israel for a master's degree in developmental biology.",
                    "He then came to Australia to pursue a PhD in cancer biology and experience research in a new environment.",
                    "Studying in different countries helped Paul grow as both a scientist and a person."
                ]
            },


            // STAGE 4: RESEARCH WITH AN IMPACT

            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: `${imageFolder}fruit-fly.jpg`,
                imageAlt: "Image of a fruit fly used in scientific research",

                points: [
                    "Paul studies how brain tumours develop and grow.",
                    "He uses fruit flies as models because scientists can change certain genes and observe how those changes affect cells in the brain.",
                    "Paul investigates how oxygen reaches growing tumours and how changes to this supply might influence their growth.",
                    "By understanding what makes tumours grow, scientists may discover new ways to investigate and eventually treat brain cancers."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: `${imageFolder}future.jpg`,
                imageAlt: "Image representing future discoveries in cancer research",

                points: [
                    "Scientists hope research like Paul's will reveal new ways to slow the growth of brain tumours.",
                    "These discoveries are still being investigated in laboratory models and are not yet treatments for patients.",
                    "Paul knows that experiments do not always produce the results scientists expect.",
                    "He believes that asking new questions, learning from setbacks and continuing to explore are important parts of science."
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           One image is displayed by default.

           To display multiple photos, add a "photos"
           array like Paddy's profile.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Outside the laboratory, Paul enjoys playing soccer, including games with people at his research institute!",

            image: `${imageFolder}soccer.jpg`,
            imageAlt: "Image representing Paul's interest in soccer"
        },


        /* ================================================
           E. WHY HIS RESEARCH MATTERS

           Three points displayed with coloured icons.
           The image appears beside the information.
           ================================================ */

        impact: {
            heading: "Why does his research matter?",

            image: `${imageFolder}fruit-fly.jpg`,
            imageAlt: "Fruit fly used as a model organism in cancer research",

            points: [
                "Uses fruit flies to investigate how genetic changes can cause brain cells to grow uncontrollably",
                "Explores how oxygen supply and surrounding cells affect brain tumour growth",
                "Could help scientists identify new ways to investigate and slow brain cancers in the future"
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Paul's interview and GTAC showcase.
           ================================================ */

        adviceHeading: "Paul's advice",

        advice: [
            "If you want change, be part of the solution.",
            "Don't give up when an experiment doesn't work. Unexpected results can help you learn!",
            "Keep asking questions. Science teaches you to be curious, persistent and resilient."
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Paul.

           If he provides a video in the future,
           add a "video" property like Paddy's.
           ================================================ */

    };

})(),


/* =====================================================
   JULIANA - VASCULAR BIOLOGY RESEARCHER

   Sources:
   - Interview: 22 April 2026
   - GTAC STEM Superheroes Showcase

   Uses the existing reusable profile and timeline code.
   All images are stored locally.
   ===================================================== */

juliana: (() => {

    /* ================================================
       A. IMAGE FOLDER
       Change this once if you relocate Juliana's images.
       ================================================ */

    const imageFolder = "assets/images/experts/juliana/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Juliana",

        role: "Vascular Biology Researcher",

        organisation: "Vascular biology research at Peter MacCallum Cancer Centre, Melbourne",

        portrait: `${imageFolder}portrait.jpg`,

        superpower: "Using zebrafish to study abnormal blood vessels and test potential medicines for vascular malformations",

        imageFolder,


        /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages with different text/images.
           Your existing timeline.js handles the clicks.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: `${imageFolder}portrait.jpg`,
                imageAlt: "Portrait of Juliana today",

                points: [
                    "Juliana grew up in a small farming community in Brazil with around 3,000 people.",
                    "She was the first person in her family to attend university.",
                    "Her interest in science grew from seeing how it could help people and connect to farming and everyday life."
                ]
            },


            // STAGE 2: CHALLENGES IN SCHOOL

            {
                title: "Challenges in school",
                colour: "#E9B400",

                image: `${imageFolder}school.jpg`,
                imageAlt: "Image representing Juliana's school experiences in Brazil",

                points: [
                    "Juliana loved learning, but she did not find maths easy at school.",
                    "Coming from a rural community, she had to adapt as she pursued studies in larger cities.",
                    "She also worked on her English because scientists from different countries often share their discoveries in English."
                ]
            },


            // STAGE 3: FINDING HER PATH

            {
                title: "Finding her path",
                colour: "#50B96D",

                image: `${imageFolder}journey.jpg`,
                imageAlt: "Image representing Juliana's journey from Brazil to Australia",

                points: [
                    "Juliana studied biotechnology and later completed a master's degree in molecular biology in São Paulo, Brazil.",
                    "She was offered a scholarship to continue researching at the University of Melbourne.",
                    "She joined a team studying blood vessels at Peter MacCallum Cancer Centre.",
                    "Moving to Australia during the COVID-19 pandemic was stressful, but she continued pursuing science."
                ]
            },


            // STAGE 4: RESEARCH WITH AN IMPACT

            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: `${imageFolder}zebrafish.jpg`,
                imageAlt: "Zebrafish used to study how blood vessels develop",

                points: [
                    "Juliana studies vascular malformations - blood vessels that form or develop abnormally, sometimes because of changes in DNA.",
                    "She uses zebrafish to investigate blood vessel development and test potential medicines.",
                    "By observing how the fish respond, researchers can identify promising ideas for further study.",
                    "Findings in zebrafish are an early step and do not automatically mean a medicine will work in people."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: `${imageFolder}future.jpg`,
                imageAlt: "Image representing the future of biomedical research and medicine development",

                points: [
                    "Juliana is interested in working in the pharmaceutical industry.",
                    "She wants to learn more about turning scientific discoveries into useful medicines and products.",
                    "Her journey shows that being open to new experiences can create opportunities you never expected."
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           Shows one picture by default.
           Add a photos array for a gallery, like Paddy.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Juliana loves dancing, spending time with friends and discovering good food, especially chicken parma! She enjoys fantasy books and watching dramas, and she has been keen to try salsa classes and learn new languages.",

            image: `${imageFolder}dancing.jpg`,
            imageAlt: "Image representing Juliana's love of dancing"
        },


        /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three impact points with an accompanying image.
           ================================================ */

        impact: {
            heading: "Why does her research matter?",

            image: `${imageFolder}zebrafish.jpg`,
            imageAlt: "Zebrafish used in vascular biology research",

            points: [
                "Investigates how genetic changes can affect the way blood vessels develop",
                "Uses zebrafish to test whether potential medicines change abnormal blood vessel growth",
                "Could help researchers identify new treatment options for people with vascular malformations"
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           Based on her interview and old GTAC profile.
           ================================================ */

        adviceHeading: "Juliana's advice",

        advice: [
            "Education opens doors - keep going, even if it's hard.",
            "Try new things and make choices based on your own experiences.",
            "Your background does not have to limit where science can take you."
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video added yet. If Juliana shares a zebrafish
           clip, you can add a video property like Paddy's.
           ================================================ */

    };

})(),


/* =====================================================
   MEAGAN - MARSUPIAL BIOLOGY RESEARCHER

   Sources:
   - GTAC STEM Superheroes interview notes
   - University of Melbourne marsupial research

   All images are stored locally.
   Uses the existing reusable timeline and profile code.
   ===================================================== */

meagan: (() => {

    /* ================================================
       A. IMAGE FOLDER

       All Meagan's images are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/meagan/";

    return {

        /* ================================================
           B. BASIC INFORMATION
           ================================================ */

        name: "Meagan",

        role: "Marsupial Biology Researcher",

        organisation: "Genetics, immunology and marsupial research in Melbourne",

        portrait: `${imageFolder}portrait.jpg`,

        superpower: "Using genetics and immunology to understand how marsupials develop and how science might help protect wildlife",

        imageFolder,


        /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.
           Each stage includes a title, colour,
           image and story.

           timeline.js handles the interactions.
           ================================================ */

        timeline: [

            // STAGE 1: CURIOUS BEGINNINGS

            {
                title: "Curious beginnings",
                colour: "#F43559",

                image: `${imageFolder}portrait.jpg`,
                imageAlt: "Portrait of Meagan today",

                points: [
                    "Meagan grew up in Minnesota, USA, and enjoyed exploring science from a young age.",
                    "Her father was an engineer who encouraged her interest in science, technology and mathematics.",
                    "As a child, she loved experimenting with science kits and discovering how things worked.",
                    "She was naturally curious and wanted to understand the world around her."
                ]
            },


            // STAGE 2: CHALLENGES IN SCHOOL

            {
                title: "Challenges in school",
                colour: "#E9B400",

                image: `${imageFolder}genetics.jpg`,
                imageAlt: "Image representing genetics and Punnett squares",

                points: [
                    "Meagan enjoyed biology and maths at school.",
                    "In Year 10, she completed a genetics project using Punnett squares, which help predict how traits can be inherited.",
                    "This project sparked her interest in genetics and helped her decide what she wanted to study.",
                    "She also found making friends challenging at times, especially because her family moved several times."
                ]
            },


            // STAGE 3: FINDING HER PATH

            {
                title: "Finding her path",
                colour: "#50B96D",

                image: `${imageFolder}university.jpg`,
                imageAlt: "Image representing Meagan's studies in Australia",

                points: [
                    "Meagan moved from the USA to Australia to study biomedical science at the University of Melbourne.",
                    "She focused on genetics, the study of DNA and how traits are passed from parents to offspring.",
                    "She continued into research, developing knowledge of immunology - the study of the immune system.",
                    "Her interests eventually brought her towards the biology of Australian marsupials."
                ]
            },


            // STAGE 4: RESEARCH WITH AN IMPACT

            {
                title: "Research with an impact",
                colour: "#4F71CB",

                image: `${imageFolder}dunnart.jpg`,
                imageAlt: "Fat-tailed dunnart, a small Australian marsupial",

                points: [
                    "Meagan is interested in the biology and immune systems of marsupials, including the fat-tailed dunnart.",
                    "Marsupials give birth to very tiny young that continue much of their development after birth, often in a pouch.",
                    "Scientists study dunnarts to better understand how marsupials grow and develop.",
                    "Dunnarts are also closely related to the extinct thylacine, or Tasmanian tiger. Research on living marsupials could help scientists develop future conservation technologies."
                ]
            },


            // STAGE 5: LOOKING TO THE FUTURE

            {
                title: "Looking to the Future",
                colour: "#00A7B8",

                image: `${imageFolder}conservation.jpg`,
                imageAlt: "Image representing wildlife conservation",

                points: [
                    "Meagan hopes to return to the USA and use her scientific knowledge to help protect wildlife.",
                    "She is particularly interested in conservation within her Native American community, including animals such as bats and bears.",
                    "She also wants to support education and create more opportunities for Native American students.",
                    "Her goal is to use science to help both wildlife and the communities she cares about."
                ]
            }

        ],


        /* ================================================
           D. HOBBIES AND INTERESTS

           Meagan has two hobby photos.

           If your renderer supports the "photos" array,
           both photos appear in a gallery.

           Otherwise, the single "image" is displayed.
           ================================================ */

        hobbies: {
            heading: "Hobbies and interests",

            text: "Meagan enjoys acrobatics and circus sports! She has also tried soccer, athletics, basketball, ice hockey, and speech and debate.",

            // Single-image fallback
            image: `${imageFolder}acrobatics.jpg`,
            imageAlt: "Image representing Meagan's interest in acrobatics",

            // Multiple-photo gallery
            photos: [
                {
                    image: `${imageFolder}acrobatics.jpg`,
                    imageAlt: "Acrobatics activity",
                    caption: "Acrobatics"
                },
                {
                    image: `${imageFolder}ice-hockey.jpg`,
                    imageAlt: "Ice hockey activity",
                    caption: "Ice hockey"
                }
            ]
        },


        /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three impact points and one accompanying image.
           ================================================ */

        impact: {
            heading: "Why does her research matter?",

            image: `${imageFolder}dunnart.jpg`,
            imageAlt: "Fat-tailed dunnart used in marsupial research",

            points: [
                "Helps scientists understand how tiny marsupials grow and how their bodies develop",
                "Supports research into the biology of Australian marsupials and ways to conserve them",
                "Research on living relatives of the thylacine could help scientists develop technologies for conservation and possible future de-extinction research"
            ]
        },


        /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Meagan's interview.
           ================================================ */

        adviceHeading: "Meagan's advice",

        advice: [
            "Science is all around you! Start by asking questions about things you find interesting.",
            "Try small investigations at home, such as exploring how different conditions affect a growing plant.",
            "Don't just watch what happens - try to understand why it happens!",
            "If you cannot find an answer, that might be the perfect opportunity to investigate."
        ]

        /* ================================================
           G. OPTIONAL VIDEO

           No video is currently included.

           If Meagan provides a video of dunnarts or
           her research, add a video property here
           like Paddy's profile.
           ================================================ */

    };

})()




};
