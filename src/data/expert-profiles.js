/* =========================================================
   EXPERT CONTENT (DATA ONLY)

   Each expert has their own image folder.
   To add another expert, duplicate the profile and
   change their information and imageFolder.

   Vue components handle layout and the interactive timeline.

   OPTIONAL PHOTO GALLERY:
   - Add a "gallery" array to ONLY those profiles where you
     have deliberately selected extra photographs.
   - Do not add it (or use gallery: []) to hide the section.
   - ExpertProfile.vue displays at most 5 selected photos.
   - Photo selection is NEVER automatic from the folder.
   ========================================================= */

// Image and video paths are resolved against the site's base URL
// ("/" in dev, "/stemsuperheroes/" when built for GitHub Pages).
const base = `${import.meta.env.BASE_URL}assets/images/experts`;
const videos = `${import.meta.env.BASE_URL}assets/videos`;

export const expertProfiles = {
  /* =====================================================
       KEZIA
       ===================================================== */

  kezia: (() => {
    const imageFolder = `${base}/kezia/`;

    return {
      name: "Kezia",
      role: "Infectious Disease Researcher",
      organisation:
        "Postdoctoral researcher in Seattle, USA (previously at the Peter Doherty Institute, Melbourne)",
      portrait: `${imageFolder}portrait.jpg`,
      superpower:
        "Discovering how immune cells respond to infections such as HIV and tuberculosis (TB)",
      imageFolder,

      timeline: [
        {
          title: "Curious beginnings",
          colour: "#F43559",
          image: `${imageFolder}chairs.jpg`,
          imageAlt:
            "Portrait of Kezia today; an early-years photograph is not yet available",
          points: [
            "Kezia was the first person in her family to pursue science.",
            "Her family supported her, and a school science teacher encouraged her interest.",
            "She was curious about how things work.",
          ],
        },
        {
          title: "Challenges in school",
          colour: "#E9B400",
          image: `${imageFolder}mathematics.jpg`,
          imageAlt:
            "Illustration of a school notebook, representing Kezia's school years",
          points: [
            "Kezia enjoyed music back in school, learning piano back when she was 4 years old.",
            "Kezia enjoyed science and was good at maths, but physics was challenging.",
            "She also found sport difficult.",
          ],
        },
        {
          title: "Finding her path",
          colour: "#50B96D",
          image: `${imageFolder}bacteria-dish.jpg`,
          imageAlt:
            "Illustration of a winding path, representing Kezia's journey into science",
          points: [
            "At first, she considered fashion design or a career that used maths.",
            "After high school, she moved to Australia.",
            "She studied biomedicine, then immunology (the study of the immune system), and went on to complete a PhD.",
            "She chose science because it was what genuinely interested her.",
          ],
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
            "This research could help scientists investigate future treatments for HIV.",
          ],
        },
        {
          title: "Seattle and beyond",
          colour: "#00A7B8",
          image: `${imageFolder}seattle.jpeg`,
          imageAlt:
            "Illustration of Seattle and a microscope, representing Kezia's new research chapter",
          points: [
            "At a science meeting, she shared her PhD research and received a job offer from a professor in Seattle, USA.",
            "She became a postdoctoral researcher — a scientist who does research after completing a PhD.",
            "Now she studies tuberculosis (TB), an infection caused by bacteria, and whether different immune cells could help improve future vaccines.",
            "She is learning new skills and exploring where her science career might take her next.",
          ],
        },
      ],

      hobbies: {
        heading: "Hobbies and interests",
        text: "Sport was tough at school, but now Kezia enjoys running! She learned to cook during COVID lockdowns and used to play piano and sing in a choir.",
        // Add more DISTINCT hobby photos here if you want a carousel.
        images: [
          {
            image: `${imageFolder}running.jpg`,
            imageAlt: "Kezia at a running event",
          },
        ],
      },

      impact: {
        heading: "Why does her research matter?",
        image: `${imageFolder}research.jpg`,
        imageAlt: "Kezia working in a laboratory",
        points: [
          "HIV: exploring how immune cells might help us develop new treatments",
          "TB: studying immune cells that could be targets for future vaccines",
          "Both projects help scientists understand how our immune system fights disease",
        ],
      },

      advice: [
        "Stay curious! There are no stupid questions.",
        "Share ideas with your peers. Science isn't meant to be done alone.",
        "Be creative with the tools and ideas you already have.",
      ],
    };
  })(),

  /* =====================================================
       PADDY
       ===================================================== */

  paddy: (() => {
    const imageFolder = `${base}/paddy/`;

    return {
      name: "Paddy",
      role: "Childhood Brain Cancer Researcher",
      organisation: "Neuroscience research focused on childhood brain cancer",
      portrait: `${imageFolder}portrait.jpg`,
      superpower:
        "Growing tiny brain-like models from stem cells to investigate childhood brain cancer",
      imageFolder,

      timeline: [
        {
          title: "Creative beginnings",
          colour: "#F43559",
          image: `${imageFolder}dictionary.jpg`,
          imageAlt: "Portrait of Paddy today",
          points: [
            "Paddy loved learning about philosophy, literature, cinema and the arts.",
            "At school, he loved studying English literature, chemistry and biology.",
            "He found maths very difficult.",
          ],
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
          ],
        },
        {
          title: "Journeys in Neuroscience",
          colour: "#50B96D",
          image: `${imageFolder}brain-imaging.jpg`,
          imageAlt:
            "Illustration showing a pathway from the arts into neuroscience",
          points: [
            "Paddy's interest in Neuroscience came from his love of Philosophy.",
            "He read a book about neuroplasticity - the brain's ability to change and adapt.",
            "This inspired him to study the brain more deeply, majoring in Neuroscience.",
            "He is currently doing his doctorate in Neuroscience.",
          ],
        },
        {
          title: "Future Plans",
          colour: "#4F71CB",
          image: `${imageFolder}future.jpeg`,
          imageAlt: "Colourful microscope image of a lab-grown brain organoid",
          points: [
            "Paddy aims to continue to pursue neuroscience in the future.",
            "He hopes to keep doing what he loves, like hiking and travelling.",
          ],
        },
      ],

      hobbies: {
        heading: "Hobbies and interests",
        text: "Paddy loves to read about philosophy, watch cinema, run, and hike. Paddy also does futsal with his colleagues at MCRI.",
        images: [
          {
            image: `${imageFolder}hiking.jpeg`,
            imageAlt: "Paddy hiking outdoors",
            caption: "Hiking",
          },
          
          {
            image: `${imageFolder}running.png`,
            imageAlt: "Paddy at a running event",
            caption: "Running",
          }, /* This is the carousel photo, not the gallery photo. */
        ],
      },

      // Only show a separate More moments gallery for additional, distinct photos.
      // Hiking and running already appear in Paddy's hobby carousel.
      gallery: [],

      impact: {
        heading: "Why does his research matter?",
        // The reusable impact panel already supports .mp4 video, as with Juliana.
        // This keeps the short organoid clip beside the research points.
        image: `${videos}/paddy-brain-organoid.mp4`,
        poster: `${imageFolder}organoid-still.jpg`,
        imageAlt: "Paddy's microscope video of a lab-grown brain organoid, not human brain tissue",
        points: [
          "Helps scientists understand how childhood brain cancer develops.",
          "Paddy grows tiny brain-like models called organoids in a dish. He uses them to study how brain cells grow and communicate.",
          "May help scientists improve future treatments for children and families.",
        ],
      },

      // No separate video section needed: the same clip is in impact above.
      // The generic expert.video feature is unchanged for any other profile.

      adviceHeading: "Paddy's Advice",
      advice: ["Follow your nose."],
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
    const imageFolder = `${base}/muna/`;
    return {
      /* ================================================
            A. BASIC INFORMATION
            ================================================ */

      name: "Muna",
      role: "Microbiology Researcher",
      organisation:
        "Melbourne, Australia - University tutor and GTAC STEM Coach",
      portrait: `${imageFolder}portrait.jpg`,
      superpower:
        "Studying bacteria that cause infections and investigating antibiotic resistance",
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
            "Muna grew up in Pakistan and was always curious about biology and how living things work.",
            "When she was younger, she dreamed of becoming a doctor.",
            "She became the first woman in her extended family to attend university and later study overseas!",
          ],
        },

        // STAGE 2: DREAM OCCUPATION

        {
          title: "Dreams",
          colour: "#E9B400",
          image: `${imageFolder}uvas2.png`,
          imageAlt: "Image representing Muna's school experiences",
          points: [
            "She wanted to be a doctor, but getting into public medical school in Pakistan was very competitive.",
            "She received an offer from a private medical university, but the cost was too high for her to pursue it.",
            "She had to change her plans, but she knew she still wanted a future in science.",
          ],
        },

        // STAGE 3: LEARNING ABOUT TINY LIVING THINGS

        {
          title: "Learning About Tiny Living Things",
          colour: "#50B96D",
          image: `${imageFolder}travel.jpeg`,
          imageAlt: "Image representing Muna's university studies",
          points: [
            "Muna discovered a love for microbiology, the study of tiny living things such as bacteria.",
            "She completed her undergraduate and master's degrees in microbiology in Pakistan.",
            "What started as a different path from medicine became a subject she was passionate about.",
            "She then received a full scholarship to pursue her PhD in Australia.",
            "Along the way, she realised that she loved both research and teaching.",
          ],
        },

        // STAGE 4: STUDYING BACTERIA

        {
          title: "Studying Bacteria",
          colour: "#4F71CB",
          image: `${imageFolder}bacteria.jpg`,
          imageAlt: "Image representing E. coli bacteria",
          points: [
            "Muna studies E. coli, a type of bacteria that can cause urinary tract infections (UTIs).",
            "She studies the genome (DNA) of the bacteria to understand how different bacteria are related to each other and how they change over time.",
            "Her research explores how some bacteria survive antibiotics, medicines designed to kill them; this is called antibiotic resistance.",
            "Her research can help scientists better understand antibiotic-resistant bacteria and find better ways to prevent or treat infections.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",
          image: `${imageFolder}poster.jpeg`,
          imageAlt: "Image representing Muna's future in science",
          points: [
            "Muna wants to continue contributing to research that can improve human health.",
            "She is interested in exploring opportunities in research, teaching and public health.",
            "She hopes to use both her research and communication skills to make science accessible to others.",
            "She would also like to inspire young people to stay curious and explore where STEM can take them.",
          ],
        },
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
        images: [
          { image: `${imageFolder}coffee.jpeg`, imageAlt: "Coffee at a café" },
        ],
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
          "Could contribute to better ways of treating bacterial infections in the future",
        ],
      },

      /* ================================================
            E. ADVICE FOR STUDENTS

            The heading can be customised for each expert.
            These points are paraphrased from Muna's interview.
            ================================================ */

      adviceHeading: "Muna's advice",
      advice: [
        "Explore different interests and discover what excites you.",
        "Your journey into science doesn't have to follow the path you first imagined. Sometimes a different path can lead to opportunities you never expected.",
        "Don't be afraid to change direction. Stay curious, keep learning and be open to where your journey takes you.",
      ],

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

    const imageFolder = `${base}/millicent/`;

    const stagePhoto = `${imageFolder}portrait.jpg`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Millicent",

      role: "Neuroscientist",

      organisation:
        "PhD research at The Florey and the University of Melbourne",

      portrait: stagePhoto,

      imageFolder,

      superpower:
        "Investigating how the tiny microbes living in our gut may affect the brain and Huntington's disease",

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

          image: `${imageFolder}nigeria.jpg`,
          imageAlt: "Millicent performing on stage as an adult",

          points: [
            "Millicent grew up in Nigeria, where girls in her culture were expected to grow up and marry.",
            "Her dad did not support her going into science, but she wanted 'to be more than what my culture programmed me to be'.",
            "Millicent stepped out of her comfort zone and pursued science.",
          ],
        },

        // STAGE 2: CHALLENGES AND CHOICES

        {
          title: "Choosing Between Arts and Science",
          colour: "#E9B400",

          image: `${imageFolder}paths.jpg`,
          imageAlt:
            "Illustration representing different pathways through science and the arts",

          points: [
            "She loved acting and was part of a theatre group back in school.",
            "She realised she didn't have to choose between arts and science, you can do both.",
            "She applied to study medicine but did not get a place.",
            "She continued studying science and discovered new interests.",
            "During her Master's degree, she had less time for acting and radio, but her creative interests stayed.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}brain.jpg`,
          imageAlt:
            "Illustration of Millicent's journey from Nigeria to the USA and Australia",

          points: [
            "Millicent studied in Nigeria before moving to the USA for her Master's.",
            "For her Masters, she worked on brain research at Brigham and Women's Hospital, linked to Harvard Medical School.",
            "After learning about the connection between gut microbes and the brain, she came to Melbourne for her Doctorate research.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}prebiotics.jpg`,
          imageAlt:
            "Diagram representing the connection between gut microbes and the brain",
          imageFit: "contain",

          points: [
            "Millicent investigates Huntington's disease, an inherited condition that affects the brain, movement and thinking.",
            "She studies how bacteria living in the gut communicate with the brain.",
            "In her research, her team found that prebiotics, food for some gut bacteria, can improve gut health, movement and thinking-related performance in mice.",
            "These results were found in mice. Scientists still need to test whether they apply to people.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}lab.jpg`,
          imageAlt: "Illustration representing future clinical research",

          points: [
            "In July 2026, Millicent submitted her Doctorate thesis about the gut and Huntington's disease.",
            "She looks forward to working in clinical research.",
            "Her dream is to contribute to improving patients' lives.",
            "Millicent is a scientist that loves storytelling, acting and presenting.",
          ],
        },
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

        images: [
          {
            image: `${imageFolder}radio.jpg`,
            imageAlt: "Millicent performing on stage",
          },
        ],
      },

      /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three points appear with coloured icons.
           The image appears next to the information.
           ================================================ */

      impact: {
        heading: "Why does her research matter?",

        image: `${imageFolder}microbiome.jpg`,
        imageAlt: "Diagram showing gut microbes and a brain",

        points: [
          "Explores connections between the gut microbiome and brain health.",
          "Tests whether changing gut microbes can help with problems linked to Huntington's disease in mice.",
          "May help guide future research for people, but the findings are not a cure or a proven treatment.",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Millicent's interview.
           ================================================ */

      adviceHeading: "Millicent's advice",

      advice: [
        "Find what excites you and pursue it!",
        "You do not have to choose between science and the arts - you can enjoy both.",
        "Trying something outside your comfort zone can open new doors.",
      ],

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

    const imageFolder = `${base}/michael/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Michael",

      role: "Biomedical Engineer and Provisional Psychologist",

      organisation: "Gene Technology Access Centre (GTAC), Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Using mathematics, engineering and an understanding of people to design better tools for healthcare",

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
            "Michael grew up in Indonesia and struggled with maths in high school.",
            "He loved books and literature.",
            "He became interested in how science can help us understand people and solve problems.",
            "He studied a Bachelor of Arts in psychology and economics at the University of Melbourne.",
            "Psychology is the study of how people think, feel and behave.",
          ],
        },

        // STAGE 2: EXPLORING ENGINEERING

        {
          title: "Exploring Engineering",
          colour: "#E9B400",

          image: `${imageFolder}medical-testing.svg`,
          imageAlt:
            "Illustration of psychology and engineering as connected fields",
          imageFit: "contain",

          points: [
            "After finishing his Bachelor of Arts, Michael explored Biomedical Engineering by doing a Masters degree.",
            "Biomedical Engineering combines Biology, Maths and Technology to solve health problems.",
            "The first year of Masters was challenging because he had to relearn Maths and Biology.",
            "Here, he discovered a love for Linear Algebra and Maths.",
          ],
        },

        // STAGE 3: MEDICAL RESEARCH

        {
          title: "Medical Research",
          colour: "#50B96D",

          image: `${imageFolder}medical-testing.jpg`,
          imageAlt:
            "Illustration representing laboratory research during Michael's PhD in Taiwan",

          points: [
            "He then moved to Taiwan to do his doctorate, learn Mandarin Chinese, and reconnect with his East Asian cultural roots.",
            "He worked with doctors and other engineers to design medical testing tools that people can use at home.",
          ],
        },

        // STAGE 4: LIFE AS A CONSULTANT

        {
          title: "Life as a Consultant",
          colour: "#4F71CB",

          image: `${imageFolder}consulting.jpg`,
          imageAlt:
            "Illustration of paper-based screening and infection testing tools",

          points: [
            "After finishing his PhD, Michael did consulting at a Big 3 consulting firm in Taiwan.",
            "He used his knowledge of engineering to work with clients on product design and manufacturing.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Future in Psychology",
          colour: "#00A7B8",

          image: `${imageFolder}future.jpg`,
          imageAlt:
            "Illustration of science education and understanding how people learn",

          points: [
            "After returning to Australia, Michael went back to study Psychology.",
            "He wanted to work with young people to help them navigate life's biggest challenges.",
            "He works at GTAC because he wants young people to know that they can be whatever they want to be.",
          ],
        },
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

        images: [
          {
            image: `${imageFolder}hobbies.jpg`,
            imageAlt: "Illustration of reading, climbing and other hobbies",
          },
        ],
      },

      /* ================================================
           E. WHY HIS WORK MATTERS

           Three bullet points with coloured icons.
           One accompanying image.
           ================================================ */

      impact: {
        heading: "Why does his work matter?",

        image: `${imageFolder}medical-testing.svg`,
        imageAlt:
          "Illustration of tools used to investigate practical medical tests",

        points: [
          "Investigates ways to make medical testing more practical and accessible",
          "Shows how biology, engineering and psychology can connect",
          "Helps young people see that STEM is about improving people's lives",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           The first point is from the existing GTAC profile.
           The other points are educational takeaways.
           ================================================ */

      adviceHeading: "Michael's Advice",

      advice: [
        "The mind is as important as the machine.",
        "Don't be afraid to explore and change to a different direction. It is worth it.",
      ],

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

    const imageFolder = `${base}/laura/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Laura",

      role: "Immunologist",

      organisation: "Immunology researcher and GTAC STEM Coach, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Being a cell detective - investigating how immune cells communicate and sometimes steal tiny pieces from other cells",

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

          image: `${imageFolder}library.jpg`,
          imageAlt: "Portrait of Laura today",

          points: [
            "Laura grew up in Spain, in a family without a background in science.",
            "As a child, she always asked 'Why?'. She always wanted to understand the reasons behind things.",
            "She loved books so much that she dreamed of becoming a librarian!",
            "Her curiosity is what lead her to her love of science.",
          ],
        },

        // STAGE 2: CHALLENGES IN SCHOOL

        {
          title: "Challenges in school",
          colour: "#E9B400",

          image: `${imageFolder}piano.jpg`,
          imageAlt: "Image representing Laura's school years",

          points: [
            "Laura enjoyed many school subjects, including Maths, but Biology was her favourite.",
            "She played the piano and enjoyed learning new things.",
            "Sometimes she found it difficult to fit in with her group of friends.",
            "At university, she met people who shared her interests and enjoyed talking about similar ideas.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}paths.jpg`,
          imageAlt: "Image representing Laura's studies in science",

          points: [
            "Laura considered several careers.",
            "She wanted to be a Botanist. A Botanist studies plants.",
            "One of her family member had cancer. This made Laura want to understand the science behind cancer.",
            "She did a Bachelor of Science and majored in Biochemistry.",
            "She then finished a Master's Degree in Immunology. Immunology is the study of the immune system.",
            "She came to Australia on a 6-month university exchange, and later continued her Immunology research.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}cell.jpg`,
          imageAlt: "Microscope image representing immune cell interactions",

          points: [
            "Laura investigates how immune cells interact with each other.",
            "Some cells take tiny pieces of material from other cells, like a robber stealing from a neighbour!",
            "She uses powerful microscopes to look at this behaviour of the immune cells.",
            "This helps us learn more about our immune system.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}immuno.jpg`,
          imageAlt: "Image representing future cancer immunotherapy research",

          points: [
            "Laura hopes to return to cancer research in the future.",
            "She is interested in research of Cancer Immunotherapy. This is the study of how our immune system fight cancer.",
            "She wants to contribute to research that improves cancer treatments.",
          ],
        },
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

        images: [
          {
            image: `${imageFolder}skating.jpg`,
            imageAlt: "Image representing Laura's interest in ice skating",
          },
        ],
      },

      /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three points displayed with coloured icons.
           The image appears beside the information.
           ================================================ */

      impact: {
        heading: "Why does her research matter?",

        image: `${imageFolder}future.jpg`,
        imageAlt: "Microscope image representing immune cells",

        points: [
          "Investigates how immune cells interact and communicate with each other",
          "Helps scientists understand how immune cells exchange or take material from other cells",
          "Improves our understanding of immune responses, which is important for studying health and disease",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Laura's interview and original
           GTAC STEM Superheroes profile.
           ================================================ */

      adviceHeading: "Laura's advice",

      advice: [
        "Don't be discouraged when things don't work the first time!",
        "Science involves trying, failing, learning from mistakes and trying again.",
        "Keep asking questions. The world makes more sense when you ask the right questions!",
      ],

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

    const imageFolder = `${base}/kevin/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Kevin",

      role: "Stem Cell Researcher",

      organisation: "University of Melbourne PhD graduate and GTAC STEM Coach",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Growing T cells, a type of immune cell, from stem cells in the lab to explore future medical treatments",

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

          image: `${imageFolder}indonesia.jpg`,
          imageAlt: "Portrait of Kevin today",

          points: [
            "Kevin grew up in Indonesia. Science and technology were part of his family life.",
            "His family was big on curiosity and logical thinking.",
            "At school, he enjoyed science.",
            "Science helped him understand and explain how the world works.",
            "He dreamed of becoming a Palaeontologist, a scientist who studies ancient life and fossils!",
          ],
        },

        // STAGE 2: CHALLENGES AND CHOICES

        {
          title: "Challenges and choices",
          colour: "#E9B400",

          image: `${imageFolder}paths.jpg`,
          imageAlt: "Image representing Kevin's early career choices",

          points: [
            "Kevin studied medicine in Indonesia, because of his family's expectations.",
            "He enjoyed learning about science and the human body.",
            "After finishing his medical degree, he faced a difficult decision: continue along the medical pathway, or try something different.",
            "Kevin chose research over treating patients directly.",
          ],
        },

        // STAGE 3: FINDING HIS PATH

        {
          title: "Finding his path",
          colour: "#50B96D",

          image: `${imageFolder}scholar.jpg`,
          imageAlt: "Image representing Kevin's journey into research",

          points: [
            "Kevin received a scholarship to complete a Master's degree overseas.",
            "He then worked as a research assistant in Hong Kong, gaining experience in the laboratory.",
            "He then continued his studies in Australia, where he pursued his Doctorate Degree.",
            "His journey took him from medicine into stem cell and immunology research.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}cell.jpg`,
          imageAlt: "Image representing T cells and stem cell research",

          points: [
            "Kevin investigates how to grow T-cells, a type of immune cell, from stem cells in the laboratory.",
            "Stem cells are special because they can develop into different types of cells.",
            "Some T-cells can recognise and destroy dangerous cells, including certain cancer cells.",
            "His research helps us understand our immune system and may support future cancer treatment research.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}future.jpg`,
          imageAlt:
            "Image representing Kevin's future in research and teaching",

          points: [
            "Kevin completed his Doctorate Degree at the University of Melbourne in 2026.",
            "He hopes to continue his research in stem cells and the immune system.",
            "He also loves teaching. He is passionate about helping students learn science at different levels.",
            "His future plan is to look for an academic career that combines research and education.",
          ],
        },
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

        images: [
          {
            image: `${imageFolder}travel.jpg`,
            imageAlt: "Image representing Kevin's hobbies",
          },
        ],
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
          "Could contribute to future research into treatments for cancer, infections and other diseases",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Kevin's interview.
           ================================================ */

      adviceHeading: "Kevin's advice",

      advice: [
        "Don't be afraid to make mistakes. That's how we learn!",
        "It's okay to change direction when you discover something new.",
        "Take your time! Try to approach unfamiliar subjects with curiosity and humility.",
      ],

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

    const imageFolder = `${base}/maria/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Maria",
      role: "Malaria Immunologist",
      organisation:
        "The Peter Doherty Institute for Infection and Immunity, and the University of Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower:
        "Help our body recognise and remove malaria-infected red blood cells",
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
          image: `${imageFolder}Pakistan.jpg`,
          imageAlt: "Portrait of Maria today",
          points: [
            "Maria grew up in Pakistan. Her father is a doctor, and this inspired her interest in science.",
            "She was curious about how things worked, and enjoyed learning about the human body.",
            "She wanted to become a doctor or a scientist. Her family encouraged to keep studying.",
          ],
        },

        // STAGE 2: CHALLENGES IN SCHOOL
        {
          title: "Challenges in school",
          colour: "#E9B400",
          image: `${imageFolder}school.jpg`,
          imageAlt: "Image representing Maria's school years",
          points: [
            "Maria enjoyed trying small science experiments in high school.",
            "She was scared of Maths, but she slowly overcame that fear.",
            "She found it difficult to make big decisions, and she put pressure on herself to do well.",
            "She learned that challenges do not have to stop you from exploring science.",
          ],
        },

        // STAGE 3: FINDING HER PATH
        {
          title: "Finding her path",
          colour: "#50B96D",
          image: `${imageFolder}gold.jpg`,
          imageAlt:
            "Image representing Maria's study journey from Pakistan to Australia",
          points: [
            "In Pakistan, Maria studied Biosciences at university and got a gold medal for her studies.",
            "She then completed a Master's degree in Microbiology and Immunology. This is the study of microbes and the immune system.",
            "She came to Australia to pursue Doctorate research into malaria and how the body fights infection.",
            "Her science journey opened opportunities to meet researchers from around the world.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT
        {
          title: "Research with an impact",
          colour: "#4F71CB",
          image: `${imageFolder}lab.png`,
          imageAlt: "Image representing malaria parasites and immune cells",
          points: [
            "Malaria is caused by parasites that can infect our red blood cells.",
            "Maria investigates how our body can recognise and remove red blood cells that are infected by malaria.",
            "Her published research identified an important receptor that helps neutrophils carry out this job.",
            "Understanding these immune defences may help scientists design better malaria vaccines in the future.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE
        {
          title: "Looking to the Future",
          colour: "#00A7B8",
          image: `${imageFolder}presentation.jpg`,
          imageAlt:
            "Image representing Maria's future opportunities in science and teaching",
          points: [
            "Maria has shared her work at science conferences and connected with researchers internationally.",
            "She is keeping her career options open and is interested in opportunities to teach and share science.",
            "She wants young people to know that where they grow up does not have to limit what they can achieve.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS
           One photo by default. For multiple photos,
           add a photos array like Paddy's profile.
           ================================================ */

      hobbies: {
        heading: "Hobbies and interests",
        text: "Maria enjoys reading fiction and drama, and she used to love drawing and painting. She also likes looking after a neighbour's cat!",
        images: [
          {
            image: `${imageFolder}travel.jpg`,
            imageAlt: "Image representing Maria's love of reading",
          },
        ],
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
          "Could help guide research towards more effective malaria vaccines",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS
           Drawn from her interview and the GTAC showcase.
           ================================================ */

      adviceHeading: "Maria's advice",
      advice: [
        "Don't feel limited by where you come from - there are opportunities to explore.",
        "Keep asking questions, even when a subject seems difficult at first.",
        "Curiosity can grow into work that saves lives.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO
           No video is included for Maria.
           If she provides one later, add a video property
           using Paddy's profile as an example.
           ================================================ */
    };
  })(),

  /* =====================================================
     PAUL ORIH - CANCER BIOLOGY RESEARCHER

     Readability: written for Years 5-7.
     Photos: one per timeline stage, with no repeated portrait.
     If a suggested image has not been added yet, the
     shared ExpertTimeline.vue hides the missing image.

     PLACEHOLDER IMAGES TO DOWNLOAD AS .jpg:
     nigeria-landscape.jpg, leaf-microscope.jpg,
     globe-books.jpg, fruit-fly.jpg

     EXISTING PHOTOS USED:
     portrait.jpg, lab.jpg, soccerfield.jpg
     portrait2 is intentionally unused for now.
     ===================================================== */
  paul: (() => {
    const imageFolder = `${base}/paul/`;

    return {
      name: "Paul",
      role: "Cancer Biology Researcher",
      organisation: "Peter MacCallum Cancer Centre, Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower: "Using fruit flies to explore why brain tumours grow.",
      imageFolder,

      // Five short stages. Image paths are placeholders until the files exist.
      timeline: [
        {
          title: "Growing up with big ideas",
          colour: "#F43559",
          image: `${imageFolder}nigeria-landscape.jpg`,
          imageAlt: "A landscape in northern Nigeria, representing the region where Paul grew up",
          points: [
            "Paul grew up in northern Nigeria, where science was not always easy to study.",
            "His parents taught him that learning could open new doors.",
            "He was curious about new inventions and how things worked.",
            "Paul hoped to use science to help people and solve real problems.",
          ],
        },
        {
          title: "A love for biology",
          colour: "#E9B400",
          image: `${imageFolder}leaf-microscope.jpg`,
          imageAlt: "A leaf being studied with a microscope, representing Paul's love of biology",
          points: [
            "Paul loved biology because it helped explain how living things work.",
            "Maths was also one of his favourite subjects.",
            "His school had little lab equipment, so he could not carry out many science experiments.",
            "Even so, he kept asking questions and wanted to learn more.",
          ],
        },
        {
          title: "Science around the world",
          colour: "#50B96D",
          image: `${imageFolder}globe-books.jpg`,
          imageAlt: "Books and a globe, representing Paul's studies in three countries",
          points: [
            "Paul first wanted to become a doctor.",
            "When that path was hard to enter, he chose to study science in Nigeria.",
            "He later moved to Israel to study developmental biology, or how living things grow.",
            "Then he came to Australia to study cancer.",
            "Each move gave him new things to learn.",
          ],
        },
        {
          title: "Inside Paul's lab",
          colour: "#4F71CB",
          image: `${imageFolder}lab.jpg`,
          imageAlt: "Paul working in a research laboratory",
          points: [
            "Today, Paul is a cancer biology researcher at Peter Mac in Melbourne.",
            "He wants to know why some brain cells grow too fast.",
            "He uses fruit flies to test how changes in genes affect the growth of cells.",
            "He also studies how oxygen reaches tumours and may help them grow.",
          ],
        },
        {
          title: "Small flies, big questions",
          colour: "#00A7B8",
          image: `${imageFolder}fruit-fly.jpg`,
          imageAlt: "Close-up of a fruit fly, an animal used in scientific research",
          points: [
            "A fruit fly is small, but it can help answer big questions.",
            "Paul hopes his tests will give scientists new clues about brain cancer.",
            "This work is still in the lab. It is not a treatment for patients yet.",
            "When an experiment does not go as expected, Paul asks what he can learn from it.",
          ],
        },
      ],

      // One real hobby photograph. No repeated portrait.
      hobbies: {
        heading: "Hobbies and interests",
        text: "When Paul is not in the lab, he enjoys playing soccer. He sometimes plays with other researchers at work.",
        image: `${imageFolder}soccerfield.jpg`,
        imageAlt: "A soccer field under lights",
      },

      // Separate optional photo gallery. Add photos only if selected.
      gallery: [],

      // No impact image yet: the Vue renderer displays text only.
      impact: {
        heading: "Why does his work matter?",
        points: [
          "Studies what makes some brain cells grow too fast.",
          "Uses fruit flies to learn how genes and oxygen affect tumour growth.",
          "May help scientists find new ways to study brain cancer.",
        ],
      },

      adviceHeading: "Paul's advice",
      advice: [
        "Be curious about how the world works.",
        "If your plan changes, look for another way forward.",
        "Keep asking questions, even when a test does not work.",
        "If you want to make a change, be part of the solution.",
      ],
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

    const imageFolder = `${base}/juliana/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Juliana",

      role: "Vascular Biology Researcher",

      organisation:
        "Vascular biology research at Peter MacCallum Cancer Centre, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower: "Using zebrafish to study possible treatments for blood vessel problems!",


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

          image: `${imageFolder}farm.jpg`,
          imageAlt: "Juliana on the farm",

          points: [
            "Juliana grew up in a small farming community in Brazil with around 3,000 people.",
            "She was the first person in her family to attend university.",
            "Her interest in science grew from seeing how it could help people and connect to farming and everyday life.",
          ],
        },

        // STAGE 2: CHALLENGES IN SCHOOL

        {
          title: "Challenges in school",
          colour: "#E9B400",

          image: `${imageFolder}english.jpg`,
          imageAlt: "Image representing Juliana's school experiences in Brazil",

          points: [
            "Juliana loved learning. She found maths difficult at school.",
            "Coming from a rural community, she had to adapt as she studied in larger cities.",
            "She worked hard on her English, because scientists from different countries always share discoveries in English.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}path.jpg`,
          imageAlt:
            "Image representing Juliana's journey from Brazil to Australia",

          points: [
            "Juliana studied Biotechnology, and completed a Master's degree in Molecular Biology in São Paulo, Brazil.",
            "She was offered a scholarship to continue her study at the University of Melbourne.",
            "She joined a team studying blood vessels at Peter MacCallum Cancer Centre.",
            "Moving to Australia during the COVID-19 pandemic was stressful, but she did not give up. She continued her research.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}research.png`,
          imageAlt: "Zebrafish used to study how blood vessels develop",

                points: [
                    "Juliana studies vascular malformation. This means blood vessels that do not develop properly. This happens sometimes because of mutation in DNA.",
                    "She uses zebrafish to investigate how different treatments affect their blood vessel development.",
                    "This research may help scientists find new medicines for people with blood vessel problems.",
                    "Results in zebrafish are an early step. Treatments must still be tested for safety and effectiveness in people."
                ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}future.jpg`,
          imageAlt:
            "Image representing the future of biomedical research and medicine development",

          points: [
            "Juliana is interested in working in the pharmaceutical industry.",
            "She wants to learn more about turning scientific discoveries into useful medicines and products.",
            "Her journey shows that being open to new experiences can create opportunities you never expected.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS

           Shows one picture by default.
           Add a photos array for a gallery, like Paddy.
           ================================================ */

      hobbies: {
        heading: "Hobbies and interests",

        text: "Juliana loves dancing, spending time with friends and discovering good food, especially chicken parma! She enjoys fantasy books and watching dramas, and she has been keen to try salsa classes and learn new languages.",

        images: [
          {
            image: `${imageFolder}travel.jpeg`,
            imageAlt: "Image representing Juliana's love of dancing",
          },
        ],
      },

      /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three impact points with an accompanying image.
           ================================================ */

      impact: {
        heading: "Why does her research matter?",

        image: `${imageFolder}zebrafish.mp4`,
        imageAlt: "Zebrafish used in vascular biology research",

        points: [
          "Investigates how changes in DNA can affect blood vessel development",
          "Uses zebrafish to find new medicines to treat people with abnormal blood vessel growth",
          "Could help researchers identify new treatment options for people with vascular malformations",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on her interview and old GTAC profile.
           ================================================ */

      adviceHeading: "Juliana's advice",

      advice: [
        "Education opens doors! Keep going, even if it's hard.",
        "Go try new things and make your own choices.",
        "Your background does not limit where science takes you.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video added yet. If Juliana shares a zebrafish
           clip, you can add a video property like Paddy's.
           ================================================ */
    };
  })(),

  /* =====================================================
     ASHA (NIRASHAA BOUND) - CANCER RESEARCHER

     Student-friendly profile (about Years 5-7).
     Only the five selected timeline files will be shown.
     Missing timeline images stay hidden until added.
     ===================================================== */

  asha: (() => {
    const imageFolder = `${base}/asha/`;

    return {
      name: "Asha",
      role: "Cancer Researcher",
      organisation: "Cancer research at WEHI and RMIT University, Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower: "Looking for clues in DNA and cancer cells to learn why treatments work differently for different people.",
      imageFolder,

      /* Five career stages. Save the matching photos into Asha's folder.
         Stage 2 uses an image you already have (drawing).
         Other images are placeholders for Pexels photographs. */
      timeline: [
        {
          title: "Growing up curious",
          colour: "#F43559",
          image: `${imageFolder}singapore-gardens.jpg`,
          imageAlt: "A green garden in Singapore, where Asha grew up",
          points: [
            "Asha grew up in Singapore and later moved to Australia.",
            "They were curious about why things happen and how living things work.",
            "Their mum encouraged them to explore science."
          ]
        },
        {
          title: "Biology and the stage",
          colour: "#E9B400",
          image: `${imageFolder}drawing.jpg`,
          imageAlt: "A drawing of a costumed character, showing a creative interest",
          points: [
            "Biology was one of Asha's favourite subjects at school.",
            "They also loved theatre and helped backstage in school plays.",
            "Asha was not sure what job they wanted. They kept trying new things."
          ]
        },
        {
          title: "An unexpected start",
          colour: "#50B96D",
          image: `${imageFolder}research-lab.jpg`,
          imageAlt: "A researcher working with equipment in a science lab",
          points: [
            "Asha studied science at university and completed an honours project.",
            "They also worked as a cleaner at WEHI, a medical research centre.",
            "Later, they became a research assistant at the same centre.",
            "Asha went on to study for a PhD, which is a major research project."
          ]
        },
        {
          title: "Clues about cancer",
          colour: "#4F71CB",
          image: `${imageFolder}tissue-slide.jpg`,
          imageAlt: "A scientist holding a glass slide used to study tissue samples",
          points: [
            "Asha helped study ovarian cancer using samples from 114 women.",
            "Their team looked for changes in DNA and signs of immune cells.",
            "They wanted to know why some cancer medicines help some people more than others.",
            "This work may help guide better treatments in the future."
          ]
        },
        {
          title: "Science that helps people",
          colour: "#00A7B8",
          image: `${imageFolder}clinical-team.jpg`,
          imageAlt: "Healthcare researchers working together on a study",
          points: [
            "Asha hopes to help with clinical trials in the future.",
            "These are studies that test how safe and useful treatments are.",
            "They want to use what they have learned to help patients.",
            "For Asha, science is also about finding ways to make a real difference."
          ]
        }
      ],

      /* HOBBIES: three selected images already in Asha's folder.
         Photos appear in order; they are NOT pulled in automatically. */
      hobbies: {
        heading: "Hobbies and interests",
        text: "Asha loves making chainmail jewellery by linking tiny metal rings. They also enjoy creative projects and used to help backstage in school plays.",
        images: [
          {
            image: `${imageFolder}chainmail.jpg`,
            imageAlt: "A piece of handmade chainmail",
            caption: "Chainmail"
          },
          {
            image: `${imageFolder}pottery.jpg`,
            imageAlt: "A pottery photo shared for Asha's profile",
            caption: "Pottery"
          },
          {
            image: `${imageFolder}pottery2.jpg`,
            imageAlt: "Several small pottery pieces on a table",
            caption: "Pottery pieces"
          }
        ]
      },

      /* Extra collage: deliberately empty. Only explicitly added photos show. */
      gallery: [],

      /* No impact image yet: avoids repeating Asha's portrait. */
      impact: {
        heading: "Why does their research matter?",
        points: [
          "Looks for clues about why cancer treatments work differently for different people.",
          "Helps researchers learn more about changes in DNA and the body's immune system.",
          "May help improve treatment choices in the future."
        ]
      },

      adviceHeading: "Asha's advice",
      advice: [
        "Follow what you enjoy, even if you are not sure where it will lead.",
        "Try new things. You might discover a skill you never knew you had!",
        "Ask how things work. That is a great place to start.",
        "Your path can change as you learn more about yourself."
      ]
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
    const imageFolder = `${base}/meagan/`;

    return {
      name: "Meagan",
      role: "Marsupial Biology Researcher",
      organisation: "Genetics, immunology and marsupial research in Melbourne",

      // Her portrait has not arrived. The card and profile show a neat
      // "Photo coming soon" placeholder if portrait.jpg does not exist.
      // Add portrait.jpg later and it appears automatically after refresh.
      portrait: `${imageFolder}portrait.jpg`,
      superpower:
        "Using genetics and immune-system science to understand marsupials and help protect wildlife",
      imageFolder,

      /* Five short story stages, based on Meagan's GTAC interview.
         All five use distinct illustrative images, NOT a portrait. */
      timeline: [
        {
          title: "Science kits and questions",
          colour: "#F43559",
          image: `${imageFolder}science-kit.jpg`,
          imageAlt: "A child exploring a colourful science activity, representing Meagan's childhood curiosity",
          points: [
            "Meagan grew up in Minnesota, in the United States.",
            "Her dad was an engineer who encouraged her to explore science and maths.",
            "She loved using science kits at home to find out how things worked."
          ],
        },
        {
          title: "A genetics puzzle",
          colour: "#E9B400",
          image: `${imageFolder}genetics-peas.jpg`,
          imageAlt: "Green peas in a pod, illustrating how scientists explore inherited traits",
          points: [
            "Meagan enjoyed biology and maths at school.",
            "In Year 10, she used Punnett squares to predict how traits pass from parents to their young.",
            "The project made her want to study genetics.",
            "Moving schools sometimes made it hard to find friends."
          ],
        },
        {
          title: "A big move",
          colour: "#50B96D",
          image: `${imageFolder}melbourne.jpg`,
          imageAlt: "The city of Melbourne, where Meagan moved to study",
          points: [
            "Meagan moved to Australia to study biomedical science at the University of Melbourne.",
            "She focused on genetics, then explored immunology - how the immune system works.",
            "She began asking questions about the biology of Australian animals."
          ],
        },
        {
          title: "Tiny marsupials, big questions",
          colour: "#4F71CB",
          image: `${imageFolder}marsupial-joey.jpg`,
          imageAlt: "A kangaroo joey peeking from its mother's pouch, illustrating marsupial development",
          points: [
            "Meagan studies fat-tailed dunnarts, small Australian marsupials.",
            "Marsupial babies are born tiny and keep developing after birth, often in a pouch.",
            "Dunnarts are relatives of the extinct thylacine, or Tasmanian tiger.",
            "Studying living marsupials may help scientists develop future conservation tools."
          ],
        },
        {
          title: "Science for wildlife",
          colour: "#00A7B8",
          image: `${imageFolder}bat-wildlife.jpg`,
          imageAlt: "A bat in its natural habitat, representing Meagan's conservation goals",
          points: [
            "Meagan hopes to help protect animals such as bats and bears in the United States.",
            "She also wants to support more Native American students to study at university.",
            "For her, science is a way to help wildlife and communities."
          ],
        },
      ],

      hobbies: {
        heading: "Hobbies and interests",
        text: "Meagan enjoys acrobatics and circus sports! She has also tried soccer, athletics, ice hockey, and speech and debate.",
        // Optional hobby carousel: add the photographs when available.
        // These are NOT automatically duplicated in More moments.
        images: [
          {
            image: `${imageFolder}acrobatics.jpg`,
            imageAlt: "Acrobatics, one of Meagan's hobbies",
            caption: "Acrobatics",
          },
          {
            image: `${imageFolder}ice-hockey.jpg`,
            imageAlt: "Ice hockey, a sport Meagan has played",
            caption: "Ice hockey",
          },
        ],
      },

      // Only use this for extra, distinct work images (such as dunnart research).
      // A blank gallery means no redundant More moments section.
      gallery: [],

      // Text only for now; no repeated dunnart photograph.
      impact: {
        heading: "Why does her research matter?",
        points: [
          "Explores how tiny marsupials grow and how their immune systems develop",
          "Builds knowledge about dunnarts, living relatives of the extinct thylacine",
          "May support future wildlife conservation and research into threatened species",
        ],
      },

      adviceHeading: "Meagan's advice",
      advice: [
        "Science is all around you. Start by asking questions about things that interest you!",
        "Try a small investigation at home, such as changing how much water a plant receives.",
        "Don't just watch what happens - ask why it happens.",
        "If you cannot find an answer, that might be something you can investigate!",
      ],

      // Optional expert.video remains available for Meagan and every other expert.
    };
  })(),

  /* =====================================================
   MEGAN MUNSIE - BIOETHICIST / STEM EXPERT

   Sources:
   - Interview: 10 March 2026
   - Original GTAC STEM Superheroes Showcase
   - Murdoch Children's Research Institute profile
   - University of Melbourne research information

   NOTE: Megan is a STEM EXPERT, not a STEM Coach.

   All images are stored locally.
   Uses the existing reusable profile and timeline code.
   ===================================================== */

  megan: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Megan's images are stored here.
       ================================================ */

    const imageFolder = `${base}/megan/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Megan",

      role: "Bioethicist and Stem Cell Researcher",

      organisation:
        "Murdoch Children's Research Institute and the University of Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Connecting scientists, patients, policymakers and communities to make responsible decisions about new medical technologies",

      imageFolder,

      /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.

           Each stage contains:
           - Title
           - Colour
           - Image
           - Story points

           timeline.js handles the interactions.
           ================================================ */

      timeline: [
        // STAGE 1: CURIOUS BEGINNINGS

        {
          title: "Curious beginnings",
          colour: "#F43559",

          image: `${imageFolder}book.jpg`,
          imageAlt: "Portrait of Megan today",

          points: [
            "Megan loved biology at school, but she also enjoyed English, history and the humanities.",
            "She was fascinated by DNA, inheritance and how living things work.",
            "At school, she felt she had to choose between science and the humanities.",
            "Later, she discovered that she could combine both interests in her career!",
          ],
        },

        // STAGE 2: SCIENCE MEETS PEOPLE

        {
          title: "Science meets people",
          colour: "#E9B400",

          image: `${imageFolder}ivf.png`,
          imageAlt: "Image representing a clinical embryology laboratory",

          points: [
            "After completing a science degree, Megan began working as a clinical embryologist in IVF laboratories.",
            "IVF is a medical treatment that can help people have babies.",
            "Megan saw how scientific discoveries and new technologies could change people's lives.",
            "She also realised that these technologies raised important questions about science, society and what is right or fair.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}study.png`,
          imageAlt: "Image representing Megan's university research",

          points: [
            "Megan returned to university to study reproductive science, completing her master's degree part-time.",
            "She then completed a PhD investigating stem cells and how cells can be changed to develop in different ways.",
            "Her research introduced her to important ethical and legal questions about new technologies.",
            "Megan discovered bioethics - exploring what is right, fair and responsible in science and medicine.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}conference.jpg`,
          imageAlt: "Image representing stem cells and medical research",

          points: [
            "Today, Megan investigates the ethical and social questions surrounding stem-cell research and new medical technologies.",
            "Stem cells are special cells that can make more cells, and some can develop into different types of cells.",
            "She explores questions about patient safety, scientific evidence, informed consent and fairness.",
            "Her work helps scientists and doctors consider how to develop and use new treatments responsibly.",
          ],
        },

        // STAGE 5: CONNECTING SCIENCE AND SOCIETY

        {
          title: "Connecting science and society",
          colour: "#00A7B8",

          image: `${imageFolder}community.jpg`,
          imageAlt:
            "Image representing scientists and communities sharing ideas",

          points: [
            "Megan works with scientists, doctors, patients, communities and policymakers to discuss new scientific discoveries.",
            "She helps people understand the difference between promising research and treatments that have been proven to work.",
            "In 2026, her team began a project exploring how children and young people should have a voice in decisions about their donated cells being used for research.",
            "Her career shows that you can make a difference in STEM by helping people understand science and make informed decisions.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS

           Uses Megan's existing travel photograph.

           To display multiple photos later,
           add a "photos" array like Paddy's profile.
           ================================================ */

      hobbies: {
        heading: "Hobbies and interests",

        text: "Megan enjoys cooking, trying new foods and discovering different cuisines when she travels! Her science career also takes her to conferences around the world.",

        images: [
          {
            image: `${imageFolder}travel.jpeg`,
            imageAlt: "Megan visiting a historic site during her travels",
          },
        ],
      },

      /* ================================================
           E. WHY HER WORK MATTERS

           Three points displayed with coloured icons.
           One accompanying image.
           ================================================ */

      impact: {
        heading: "Why does her work matter?",

        image: `${imageFolder}boston.jpg`,
        imageAlt: "Image representing stem-cell research and ethical questions",

        points: [
          "Helps patients and families understand the difference between promising research and proven treatments",
          "Encourages scientists to consider safety, consent and fairness when developing new medical technologies",
          "Connects scientists with the community so decisions are based on evidence and different perspectives",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Megan's interview and old GTAC profile.
           ================================================ */

      adviceHeading: "Megan's advice",

      advice: [
        "Follow your curiosity! Your interests might lead you somewhere unexpected.",
        "You do not have to choose between science and the humanities - both are important.",
        "There is a lot of misinformation in science and it is our job to discover the truth.",
        "Ask questions, look for evidence and listen to different points of view.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video has been added yet.

           GTAC already has educational videos featuring
           Megan discussing stem cells and ethics.

           A video can be added in the future using the
           existing video property, like Paddy's profile.
           ================================================ */
    };
  })(),

  /* =====================================================
   MISTY JENKINS - BRAIN CANCER IMMUNOLOGIST

   STEM EXPERT - NOT A GTAC STEM COACH

   Sources:
   - Interview: 22 April 2026
   - Original GTAC STEM Superheroes Showcase
   - WEHI Brain Cancer Immunotherapy Laboratory
   - The Brain Cancer Centre

   All images are stored locally.
   Uses the existing reusable profile and timeline.
   ===================================================== */

  misty: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Misty's images are stored here.
       ================================================ */

    const imageFolder = `${base}/misty/`;

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Misty",

      role: "Brain Cancer Immunologist",

      organisation:
        "Professor and Laboratory Head at WEHI and The Brain Cancer Centre, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Creates immune cells to recognise and attack brain cancer cells. Her team wants to find better treatments for children and adults.",

      imageFolder,

      /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.

           Each stage has:
           - Title
           - Colour
           - Image
           - Bullet points

           timeline.js handles the interactions.
           ================================================ */

      timeline: [
        // STAGE 1: CURIOUS BEGINNINGS

        {
          title: "Curious beginnings",
          colour: "#F43559",

          image: `${imageFolder}ballarat.jpg`,
          imageAlt: "Portrait of Misty today",

          points: [
            "Misty grew up in Ballarat, Victoria. She was the first person in her family to attend university.",
            "As a teenager, she was fascinated by the human body, anatomy and diseases.",
            "She was always curious and wanted to understand how things worked.",
            "Her teachers encouraged her to be curious, and determined.",
          ],
        },

        // STAGE 2: EXPLORING HER INTERESTS

        {
          title: "Exploring her interests",
          colour: "#E9B400",

          image: `${imageFolder}paramedic.jpg`,
          imageAlt:
            "Image representing first aid and St John Ambulance volunteering",

          points: [
            "When she was 11 years old, Misty began volunteering with St John Ambulance. She used to take part in first aid competitions!",
            "At school, she enjoyed Maths, Physics, Chemistry. She did not take biology.",
            "She also loved drama, theatre and performing on stage.",
            "Performing helped her become confident speaking to large audiences. This is an important skill for a scientist.",
            "She worked part-time jobs while studying and learned valuable communication and teamwork skills.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}cambridge.jpg`,
          imageAlt:
            "Image representing Misty's research journey and university studies",

          points: [
            "Misty studied science at the University of Melbourne, specialising in Biotechnology and Immunology.",
            "For her doctorate, she contacted Peter Doherty, a scientist who had won a Nobel Prize, and was surprised when he called her back!",
            "They met for coffee, and he offered her an opportunity to join his research laboratory.",
            "After her studies, she worked as a researcher at the Universities of Oxford and Cambridge in the UK.",
            "She later returned to Australia and continued her research at Peter MacCallum Cancer Centre before joining WEHI.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}microscope.jpg`,
          imageAlt: "Image representing immune T cells attacking cancer cells",

          points: [
            "Misty leads a research team looking for new ways to treat brain cancer, including cancers affecting children.",
            "Her team studies T-cells, which are immune cells that help protect our bodies from disease.",
            "They are making cells to recognise and attack certain cancer cells. These are called CAR T-cells.",
            "They also use powerful microscopes to study how these cells communicate and interact with brain tumours.",
            "These treatments are still being tested for brain cancer. Scientists must carefully test their safety and effectiveness.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}conference.jpg`,
          imageAlt:
            "Image representing future advances in brain cancer treatment",

          points: [
            "Misty wants to lead her own research team so she could explore new ideas and make a difference.",
            "Building a research program was challenging. In her first year, she submitted 21 applications for research funding!",
            "She works with other scientists, doctors, and charities.",
            "Her long-term goal is to help develop better treatments for people with brain cancer, particularly children.",
            "Misty believes science is a creative activity where determination, teamwork and new ideas can help solve difficult problems.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS

           One image is displayed by default.

           To display multiple photographs,
           add a "photos" array like Paddy's profile.
           ================================================ */

      hobbies: {
        heading: "Hobbies and interests",

        text: "Misty loves theatre, musicals, performing and karaoke! She has been involved in community theatre and enjoys spending time on stage. She believes that these experiences helped her develop the confidence to communicate science to large audiences.",

        images: [
          {
            image: `${imageFolder}threatre.jpg`,
            imageAlt:
              "Image representing Misty's interest in theatre and performing",
          },
        ],
      },






      /* ================================================
           E. WHY HER RESEARCH MATTERS

           Three points with coloured icons.
           One accompanying image.
           ================================================ */

      impact: {
        heading: "Why does her research matter?",

        image: `${imageFolder}genes.jpg`,
        imageAlt: "Image representing T cells and brain cancer immunotherapy",

        points: [
          "Making special cells to recognise and attack brain cancer cells",
          "Helps us understand why some brain tumours are more difficult for our immune system to fight",
          "Could contribute to safer and more effective brain cancer treatments in the future",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Misty's interview and GTAC showcase.
           ================================================ */

      adviceHeading: "Misty's advice",

      advice: [
        "Have a vision to help people. It gives your work more meaning!",
        "Science is creative! You need to think outside the box, not just get good grades.",
        "Develop life skills through jobs, hobbies and activities. Communication and teamwork are important in science.",
        "Find mentors who encourage you and help you grow.",
        "Follow your interests, stay determined and don't be afraid to try something new.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video has been added yet.

           If Misty provides a science video,
           add a "video" property like Paddy's profile.

           The existing expert-profile.js already
           supports this feature.
           ================================================ */
    };
  })(),

  /* =====================================================
     SUE FAWCETT - GENETIC COUNSELLOR

     STEM EXPERT (not a GTAC STEM Coach)
     Reading level: Years 5-7; around 220 timeline words.
     Sources: GTAC interview, 30 October 2026; existing Sue profile.

     Only known personal photos: portrait.jpg and bootscoot.jpg.
     Each timeline photo uses a distinct, illustrative placeholder.
     Add the JPGs named in SUE-IMAGE-GUIDE.txt to the sue folder.
     Missing photos are automatically hidden by ExpertTimeline.vue.
     ===================================================== */

  sue: (() => {
    const imageFolder = `${base}/sue/`;

    return {
      name: "Sue",
      role: "Genetic Counsellor and Genetic Services Manager",
      organisation: "The Royal Women's Hospital, Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower: "Helping people understand their genes and make choices about their health.",
      imageFolder,

      /* Sue's story, told in five short stages.
         These stock-photo placeholders are NOT photos of Sue.
         portrait.jpg is used ONLY in the profile introduction. */
      timeline: [
        {
          title: "A spark in Year 11",
          colour: "#F43559",
          image: `${imageFolder}leaf-microscope.jpg`,
          imageAlt: "A leaf being studied under a microscope, like the one that inspired Sue",
          points: [
            "Sue and her brother were the first in their family to go to university.",
            "In Year 11, a teacher named Greg Hunt helped her enjoy biology.",
            "Looking at a leaf through a microscope made her wonder about tiny parts of living things.",
            "She wanted to learn more.",
          ],
        },
        {
          title: "A change of plans",
          colour: "#E9B400",
          image: `${imageFolder}biology-studies.jpg`,
          imageAlt: "Students studying in a library, representing Sue's time at university",
          points: [
            "Sue liked biology, English and history, but maths was hard for her.",
            "She wanted to become a physiotherapist, who helps people move and recover.",
            "Her school results were not high enough for that course.",
            "Instead, she studied biology at La Trobe University and grew to love genes.",
          ],
        },
        {
          title: "Finding a new path",
          colour: "#50B96D",
          image: `${imageFolder}cancer-lab.jpg`,
          imageAlt: "Researchers working in a laboratory, representing Sue's early cancer research work",
          points: [
            "Sue first worked in cancer research and later sold science tools.",
            "She liked science, but she wanted to help people face-to-face.",
            "In 1996, she moved to Newcastle to study genetic counselling.",
            "She worked in Bathurst before joining the Royal Women's Hospital.",
          ],
        },
        {
          title: "Science meets people",
          colour: "#4F71CB",
          image: `${imageFolder}genetic-counselling.jpg`,
          imageAlt: "A healthcare worker listening during a consultation, illustrating genetic counselling",
          points: [
            "Genes are parts of DNA that carry instructions for our bodies.",
            "Some changes in genes can affect our health.",
            "Sue explains what genetic tests can and cannot tell people.",
            "She listens to their worries and helps them think about their choices.",
          ],
        },
        {
          title: "Leading and learning",
          colour: "#00A7B8",
          image: `${imageFolder}team-discussion.jpg`,
          imageAlt: "A group of healthcare colleagues talking, representing Sue's team",
          points: [
            "Today, Sue leads a team of genetic counsellors at the Royal Women's Hospital.",
            "They use science to help people with questions about their health.",
            "Some talks are hard, so the team also looks after each other.",
            "Sue keeps learning as scientists make new discoveries about genes.",
          ],
        },
      ],

      /* Sue's own bootscooting photo is available now.
         An optional book-club stock image can be added later.
         With one photo the viewer is still; with two it is a carousel.
         Never claim an illustrative stock photo shows Sue. */
      hobbies: {
        heading: "Hobbies and interests",
        text: "Sue has been part of a monthly book club for over 10 years. She also loves bootscooting (line dancing)! She used to dance ballet and still enjoys watching it.",
        images: [
          {
            image: `${imageFolder}bootscoot.jpg`,
            imageAlt: "Sue enjoying bootscooting",
            caption: "Bootscooting",
          },
          {
            image: `${imageFolder}book-club.jpg`,
            imageAlt: "Books and a cup of tea, representing Sue's book club hobby",
            caption: "Book club",
          },
        ],
      },

      /* Only photos explicitly added here appear in the optional gallery. */
      gallery: [],

      /* No suitable work photo has been provided; keep this text-only.
         Do not repeat Sue's portrait in the impact panel. */
      impact: {
        heading: "Why does her work matter?",
        points: [
          "Helps people understand what genetic tests can and cannot tell them.",
          "Supports families as they make their own health choices.",
          "Shows that listening and kindness matter in science too.",
        ],
      },

      // Paraphrased from the interview, not direct quotations.
      adviceHeading: "Sue's advice",
      advice: [
        "You do not have to love every school subject to work in science.",
        "Your first plan can change. That is OK!",
        "Talk to people about their jobs to see what you might enjoy.",
        "Practise listening. Science needs that skill too!",
      ],

      // No optional video until a real video is supplied.
    };
  })(),

  /* =====================================================
     VIJAY RAJAGOPAL - COMPUTATIONAL PHYSIOLOGIST

     Short, student-friendly profile for Years 5-7.
     Sources: GTAC interview, 24 March 2026; existing profile.

     Timeline images are deliberate local placeholders.
     Save matching .jpg files in public/assets/images/experts/vijay/.
     Until they are saved, the timeline hides missing images.
     ===================================================== */

  vijay: (() => {
    const imageFolder = `${base}/vijay/`;

    return {
      name: "Vijay",
      role: "Computational Physiologist",
      organisation: "University of Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower: "Using computers, maths and physics to explore how our hearts and blood vessels work.",
      imageFolder,

      /* Five stages. Each photo has its own meaningful subject.
         See VIJAY-IMAGE-GUIDE.txt for Pexels suggestions. */
      timeline: [
        {
          title: "From India to New Zealand",
          colour: "#F43559",
          image: `${imageFolder}south-india.jpg`,
          imageAlt: "Landscape in southern India, representing Vijay's childhood",
          points: [
            "Vijay grew up in southern India.",
            "His dad worked as a chemical engineer.",
            "As a teen, Vijay moved to New Zealand and started a new school.",
            "He did not yet know that his future job would mix maths with medicine.",
          ],
        },
        {
          title: "Dreams of flying",
          colour: "#E9B400",
          image: `${imageFolder}airplane-cockpit.jpg`,
          imageAlt: "Inside an aircraft cockpit, representing Vijay's early interest in flying",
          points: [
            "Vijay once dreamed of becoming a pilot.",
            "He also liked the idea of building clever machines.",
            "Maths was not always easy, so he took his time to learn it.",
            "His interest in how things work drew him towards engineering.",
          ],
        },
        {
          title: "Engineering opens a door",
          colour: "#50B96D",
          image: `${imageFolder}computer-code.jpg`,
          imageAlt: "Computer code, representing Vijay's engineering studies",
          points: [
            "At university in New Zealand, Vijay studied Engineering Science.",
            "He learned to use maths, physics and computer code to solve problems.",
            "Then he saw how these tools could help explain the human body.",
            "He completed a PhD and went on to work as a researcher.",
          ],
        },
        {
          title: "What makes a heart beat?",
          colour: "#4F71CB",
          image: `${imageFolder}heart-model.jpg`,
          imageAlt: "An anatomical model of a human heart",
          points: [
            "Vijay studies how heart cells move and grow.",
            "He uses computer models to explore what happens inside these cells.",
            "One focus is calcium, which helps tell heart muscle cells when to squeeze.",
            "His team uses these models to ask new questions about the heart.",
          ],
        },
        {
          title: "A closer look at blood",
          colour: "#00A7B8",
          image: `${imageFolder}red-blood-cells.jpg`,
          imageAlt: "Red blood cells, representing Vijay's research on blood flow",
          points: [
            "Vijay also studies how red blood cells move through tiny blood vessels.",
            "His team uses computers to explore how blood flows through these narrow paths.",
            "The results may help scientists learn more about health and disease.",
            "Today, Vijay leads research at the University of Melbourne.",
          ],
        },
      ],

      /* Hobbies are NOT photographs of Vijay; these are illustrative.
         Missing hobby photos are hidden until you add them to the folder. */
      hobbies: {
        heading: "Hobbies and interests",
        text: "Vijay enjoys a good coffee and playing flight simulator games on his sofa. He even tried stand-up comedy while doing his PhD!",
        images: [
          {
            image: `${imageFolder}coffee.jpg`,
            imageAlt: "A cup of coffee, one of Vijay's interests",
            caption: "Coffee breaks",
          },
          {
            image: `${imageFolder}flight-simulator.jpg`,
            imageAlt: "A flight simulator setup, representing Vijay's favourite game",
            caption: "Flight simulator games",
          },
        ],
      },

      // Only manually selected extra photographs appear in this gallery.
      gallery: [],

      /* No research photo yet - leave this section text-only.
         Add a real research image here later if Vijay supplies one. */
      impact: {
        heading: "Why does his work matter?",
        points: [
          "Helps scientists explore how heart cells work.",
          "Shows how red blood cells move through tiny blood vessels.",
          "May help researchers understand what changes when people get sick.",
        ],
      },

      adviceHeading: "Vijay's advice",
      advice: [
        "You do not have to be good at something straight away.",
        "Take your time to learn the basics. Keep practising!",
        "Different people have different talents. Yours may surprise you.",
        "Follow the ideas that interest you, even if your plans change.",
      ],
    };
  })(),

  /* =====================================================
   CHRIS FREELANCE - EVOLUTIONARY BIOLOGIST

   Reading level: upper primary / early secondary.
   Based on Chris's interview and public research work.

   Known local files:
   - portrait.jpg  (profile introduction only)
   - dragons.jpeg (one selected astronomy hobby photo)
   - comedy.jpeg  (not used until its content is checked)

   Timeline and impact intentionally omit images for now.
   The shared Vue components will show text-only sections
   instead of repeating a portrait or showing broken files.
   ===================================================== */

  chris: (() => {
    const imageFolder = `${base}/chris/`;

    return {
      name: "Chris",
      role: "Evolutionary Biologist",
      organisation: "University of Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower: "Finding out why animals have different eyes, antennae and other body parts.",
      imageFolder,

      /* Five stages. Each photo path points to a locally saved stock image.
         See CHRIS-IMAGE-GUIDE.txt for search terms and exact filenames. */
      timeline: [
        {
          title: "A country kid who loved science",
          colour: "#F43559",
          image: `${imageFolder}country-road.jpg`,
          imageAlt: "A tree-lined country road in Victoria",
          points: [
            "Chris grew up in the Macedon Ranges, not far from Melbourne.",
            "Science became one of his favourite subjects at high school.",
            "He tried working in a medical lab during work experience.",
            "He was the first person in his family to go to university.",
          ],
        },
        {
          title: "Maths was tough",
          colour: "#E9B400",
          image: `${imageFolder}maths-notebook.jpg`,
          imageAlt: "Maths problems being worked out in a notebook",
          points: [
            "Chris enjoyed science, but Maths Methods was hard for him.",
            "He found questions about chance and data tricky, so he got extra help.",
            "Physics at university was hard too.",
            "He learned that one tough subject does not stop you from becoming a scientist.",
          ],
        },
        {
          title: "A new direction",
          colour: "#50B96D",
          image: `${imageFolder}wildlife-observation.jpg`,
          imageAlt: "A person watching wildlife through binoculars",
          points: [
            "At first, Chris thought he might become a doctor.",
            "He studied how the brain works at university.",
            "Then he became more interested in how animals behave and sense the world.",
            "He changed his plans and began to study animals instead.",
          ],
        },
        {
          title: "What can insects sense?",
          colour: "#4F71CB",
          image: `${imageFolder}stick-insect.jpg`,
          imageAlt: "A stick insect on a leaf, illustrating how insects sense their world",
          imageFit: "contain",
          points: [
            "Chris studies how animals use their eyes, antennae and other senses.",
            "He compared wild Lord Howe Island stick insects with ones raised in care.",
            "Some of the insects raised in care had smaller eyes and fewer parts on their antennae that help them smell.",
            "These changes could make life harder when the insects return to the wild.",
          ],
        },
        {
          title: "Sharing what he learns",
          colour: "#00A7B8",
          image: `${imageFolder}podcast.jpg`,
          imageAlt: "Microphone and headphones used to record a podcast",
          points: [
            "Today, Chris works at the University of Melbourne.",
            "He helps scientists use microscopes to study tiny parts of living things.",
            "He also shares science through talks, comedy and his podcast, Divergent in STEMM.",
            "He wants more people to feel welcome in science.",
          ],
        },
      ],

      /* HOBBIES: Two real, selected photos.
         The carousel appears when images contains 2 or more photos.
         Keep this as 'images' and do not add a separate 'photos' array. */
      hobbies: {
        heading: "Hobbies and interests",
        text: "Chris takes photos of the night sky. He has also tried stand-up comedy!",
        images: [
          {
            image: `${imageFolder}comedy.jpeg`,
            imageAlt: "Chris's comedy photograph",
            caption: "Stand-up comedy",
          },
          {
            image: `${imageFolder}dragons.jpeg`,
            imageAlt: "Chris's photo of the night sky",
            caption: "Night-sky photography",
          },
        ],
      },

      /* Extra gallery is separate from hobbies: nothing selected yet. */
      gallery: [],

      impact: {
        heading: "Why does his work matter?",
        points: [
          "Shows how animals use their senses to find food and stay safe.",
          "Helps scientists compare wild animals with those raised in care.",
          "May help people find better ways to protect rare insects.",
        ],
      },

      adviceHeading: "Chris's advice",
      advice: [
        "You don't need perfect marks to work in science.",
        "Ask for help when a subject feels hard.",
        "Try new things. It's OK if your plans change.",
        "Keep going with the things that matter to you.",
      ],
    };
  })(),

  /* =====================================================
   MAJA DIVJAK - BIOMEDICAL ANIMATOR

   STEM EXPERT - NOT A GTAC STEM COACH

   Sources:
   - Interview: 10 February 2026
   - Original GTAC STEM Superheroes Showcase
   - Peter MacCallum Cancer Centre
   - GTAC Biomedical Animation Gallery

   All images are stored locally.
   Uses the existing reusable profile and timeline code.
   ===================================================== */

  maja: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Maja's images are stored here.
       ================================================ */

    const imageFolder = `${base}/maja/`;

    return {
      /* ================================================
           B. BASIC INFORMATION

           Name, role, workplace, portrait and superpower.
           ================================================ */

      name: "Maja",

      role: "Biomedical Animator",

      organisation:
        "Peter MacCallum Cancer Centre, Melbourne (previously at GTAC)",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Turning invisible molecules, cells and biological processes into 3D animations that make complex science easier to understand",

      imageFolder,

      /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.

           Each stage includes:
           - Title
           - Colour
           - Image
           - Story points

           timeline.js handles the interactions.
           ================================================ */

      timeline: [
        // STAGE 1: CURIOUS BEGINNINGS

        {
          title: "Curious beginnings",
          colour: "#F43559",

          image: `${imageFolder}nature.jpg`,
          imageAlt: "Portrait of Maja today",

          points: [
            "At school, Maja enjoyed both creative and scientific subjects, including fine art, biology, chemistry and French.",
            "She loved learning about the natural world, and enjoyed nature documentaries.",
            "She admired how people like David Attenborough could make science fascinating.",
            "She wanted to be a veterinarian.",
            "Although she loved science and art, she never imagined that she could combine them in her career!",
          ],
        },

        // STAGE 2: CHALLENGES AND CHOICES

        {
          title: "Challenges and choices",
          colour: "#E9B400",

          image: `${imageFolder}maja2.jpeg`,
          imageAlt:
            "Illustration representing Maja's interests in science and art",

          points: [
            "Maja enjoyed biology and chemistry, but found Physics and Maths challenging.",
            "She went on to study Biomedical Science and completed a Doctorate in Molecular Biology at Monash University.",
            "After her studies, Maja worked in scientific sales, but she missed the creative side of her life.",
            "She realised that neither laboratory research nor scientific sales was the career she wanted.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}future.jpg`,
          imageAlt:
            "Image representing Maja's journey from molecular biology to 3D animation",

          points: [
            "While working in scientific sales, Maja met Drew Berry, a biomedical animator who created amazing animations of the tiny world inside our cells.",
            "Seeing his work made her realise that science and art could be combined into one career.",
            "She decided to go back to study.",
            "She studied Multimedia and Design at Swinburne University, and 3D Animation at the Australian Film Television and Radio School.",
            "Maja later received a research fellowship to learn from Drew Berry.",
            "She now found a career where she can use her scientific knowledge and creativity.",
          ],
        },

        // STAGE 4: MAKING THE INVISIBLE VISIBLE

        {
          title: "Making the invisible visible",
          colour: "#4F71CB",

          image: `${imageFolder}animation.jpg`,
          imageAlt: "3D scientific illustration of molecules or proteins",

          points: [
            "Maja creates animations of cells, proteins and molecules - structures that are often too small to see directly.",
            "She works with scientists to understand their research and carefully plans how to explain it through a story.",
            "She uses storyboards, scripts, scientific information and 3D animation software to bring that story to life.",
            "Some animations use information about protein structures from scientific databases and computer predictions.",
            "Maja adds colours and movement to make the science easier to understand. The molecules don't actually have those bright colours!",
            "While working at GTAC, she created animations explaining infections such as whooping cough and tetanus.",
          ],
        },

        // STAGE 5: BRINGING SCIENCE TO LIFE

        {
          title: "Bringing science to life",
          colour: "#00A7B8",

          image: `${imageFolder}career.jpg`,
          imageAlt:
            "Biomedical animation representing cancer cells and their interactions",

          points: [
            "After working as a science animator at GTAC, Maja joined the Peter MacCallum Cancer Centre.",
            "There, she creates 3D animations explaining what happens inside cells during cancer and how some treatments work.",
            "For example, her animations can help people visualise how specially engineered immune cells recognise cancer cells.",
            "Her work helps scientists communicate discoveries and makes complicated biology easier for students, patients and the public to understand.",
            "Maja's career shows that science needs storytellers and artists, not just people working in laboratories.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS

           One photograph is displayed by default.

           To display multiple photographs,
           add a "photos" array like Paddy's profile.
           ================================================ */
 hobbies: {
        heading: "Hobbies and interests",
        text: "Maja loves flamenco dancing! She has practised flamenco for many years, takes classes with friends and has travelled to Spain to learn more.",
        images: [
          {
            image: `${imageFolder}flamenco2.jpg`,
            imageAlt: "Maja dancing flamenco",
            caption: "Maja dancing flamenco",
          },
          
          {
            image: `${imageFolder}flamenco.png`,
            imageAlt: "Maja dancing flamenco",
            caption: "Maja dancing flamenco",
          }, /* This is the carousel photo, not the gallery photo. */
        ],
      },




      /* ================================================
           E. WHY HER WORK MATTERS

           Three points displayed with coloured icons.
           One accompanying image.

           Maja communicates scientific discoveries
           through visual storytelling.
           ================================================ */

      impact: {
        heading: "Why do her animations matter?",

        image: `${imageFolder}molecule-animation.jpg`,
        imageAlt: "Colourful 3D representation of a biological molecule",

        points: [
          "Makes tiny structures and processes inside our cells easier to see and understand",
          "Helps researchers explain complex ideas about diseases, biology and medical treatments",
          "Combines science, technology and art to make discoveries accessible to more people",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Maja's interview and original
           GTAC STEM Superheroes profile.
           ================================================ */

      adviceHeading: "Maja's advice",

      advice: [
        "Putting creativity and science together can make complex ideas powerful and clear.",
        "Stay curious! Ask questions such as 'What if?' and 'How does this work?'",
        "Don't be afraid to learn new skills or explore a completely different career.",
        "Science is full of fascinating things waiting to be discovered and shared!",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video property is included yet.

           Maja has created GTAC animations about:
           - Whooping cough
           - Tetanus

           To include an approved video later,
           add a "video" property using Paddy's
           existing video feature.

           No other JavaScript functions are needed.
           ================================================ */
    };
  })(),


/* =====================================================
   KIARA SIMONIS - AVIAN SPECIALIST VETERINARIAN

   STEM EXPERT (not a GTAC STEM Coach)
   Based on existing GTAC interview/profile information.

   IMAGE PLAN:
   - The portrait stays in the introduction only.
   - Four timeline photos and one hobby photo are Pexels
     placeholders, with direct links in KIARA-IMAGE-GUIDE.txt.
   - The existing surgery photo appears in timeline stage 5.
   - The existing reptile and chicken scans appear ONLY in
     Kiara's optional extra gallery, not in multiple sections.
   - The impact section deliberately has no extra image.
   - No separate video is included unless Kiara sends one.

   Check the exact extensions of existing images with
   File Explorer > View > Show > File name extensions.
   We reference aligator.jpg (one 'l', per folder screenshot),
   chicken.jpg, surgery.jpg and portrait.jpeg.
   ===================================================== */

kiara: (() => {
  const imageFolder = `${base}/kiara/`;

  return {
    name: "Kiara",
    role: "Avian Specialist Veterinarian",
    organisation: "The Unusual Pet Vets, Flemington, Melbourne",
    portrait: `${imageFolder}portrait.jpeg`,
    superpower:
      "Using biology and veterinary medicine to help birds, reptiles and other unusual pets feel better.",
    imageFolder,

    /* A. FIVE CLICKABLE STORY STAGES
       Download and save the four new timeline JPGs.
       The final stage uses Kiara's existing surgery photo. */
    timeline: [
      {
        title: "A love for animals",
        colour: "#F43559",
        image: `${imageFolder}cockatiel.jpg`,
        imageAlt: "A cockatiel, the kind of pet bird that inspired Kiara as a child",
        points: [
          "As a child, Kiara loved watching the TV vet Dr Harry with her grandmother.",
          "When she was about 10, she got a pet cockatiel named Tinkerbell.",
          "Tinkerbell inspired her dream of becoming a vet who helps birds."
        ]
      },
      {
        title: "A challenge at school",
        colour: "#E9B400",
        image: `${imageFolder}school-study.jpg`,
        imageAlt: "Student writing notes in a notebook, representing school challenges",
        points: [
          "Kiara enjoyed Biology and Chemistry, but found some maths subjects hard.",
          "A teacher even told her she was not good enough to become a vet.",
          "Her final school score was lower than she had hoped. She was disappointed, but didn't give up."
        ]
      },
      {
        title: "Another way into science",
        colour: "#50B96D",
        image: `${imageFolder}unimelb-arches.jpg`,
        imageAlt: "Gothic arches at the University of Melbourne campus",
        points: [
          "Kiara couldn't enter veterinary medicine straight after school, so she started with another university course.",
          "She kept studying science and later earned a place in veterinary medicine at the University of Melbourne.",
          "She became a vet in 2018."
        ]
      },
      {
        title: "Learning from unusual pets",
        colour: "#4F71CB",
        image: `${imageFolder}raptor-care.jpg`,
        imageAlt: "A rescued bird of prey receiving care, illustrating avian veterinary work",
        points: [
          "While training, Kiara looked for chances to care for unusual animals.",
          "She learnt at bird rescue centres, specialist clinics and Healesville Sanctuary.",
          "She also visited an exotic animal hospital in Hong Kong."
        ]
      },
      {
        title: "Becoming a bird specialist",
        colour: "#00A7B8",
        image: `${imageFolder}surgery.jpg`,
        imageAlt: "Veterinary surgery under way, from Kiara's existing photo collection",
        points: [
          "In 2021, Kiara began extra training to become a bird specialist.",
          "She learnt from specialists, including during a visit to a falcon hospital in Dubai.",
          "In 2025, she passed her specialist exams.",
          "Today she helps unusual pets using medical scans and, when needed, surgery."
        ]
      }
    ],

    /* B. HOBBIES
       Stock birdwatching photo is an illustration of her hobby;
       it is not a photograph of Kiara. */
    hobbies: {
      heading: "Hobbies and interests",
      text:
        "Away from the clinic, Kiara enjoys birdwatching, plants, time outdoors and watching AFL with her family. Her pets include birds, a dog, a snake and frogs!",
      image: `${imageFolder}birdwatching.jpg`,
      imageAlt: "Person birdwatching with binoculars beside a lake"
    },

    /* C. OPTIONAL EXTRA GALLERY
       These are Kiara's TWO existing medical scan images.
       Keep both distinct from the timeline and hobbies.
       imageFit: 'contain' means the X-rays are NOT cropped.
       'aligator' deliberately has one 'l', per the screenshot. */
    gallery: [
      {
        image: `${imageFolder}aligator.jpg`,
        imageAlt: "Veterinary X-ray showing the bones of a reptile",
        caption: "Reptile X-ray",
        imageFit: "contain"
      },
      {
        image: `${imageFolder}chicken.jpg`,
        imageAlt: "3D medical scan of a chicken's head and skull",
        caption: "Chicken CT scan",
        imageFit: "contain"
      }
    ],

    /* D. WHY HER WORK MATTERS
       Text-only by design: no duplicated scans or photos. */
    impact: {
      heading: "Why does her work matter?",
      points: [
        "Helps birds, reptiles and unusual pets get care suited to their special needs.",
        "Uses scans and other tests to find out what is making an animal sick.",
        "Helps pet owners understand how to keep their animals healthy."
      ]
    },

    /* E. ADVICE FROM KIARA'S STORY */
    adviceHeading: "Kiara's advice",
    advice: [
      "One exam score does not decide your future.",
      "There is more than one pathway to the job you want.",
      "Keep trying, and learn from people who work in a field you love."
    ]

    /* OPTIONAL VIDEO: No video has been supplied for Kiara.
       The shared profile component already supports expert.video. */
  };
})(),



};
