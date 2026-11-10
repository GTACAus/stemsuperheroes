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
        image: `${imageFolder}running.jpg`,
        imageAlt: "Kezia at a running event",
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
    const imageFolder = "assets/images/experts/paddy/";

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
            "Paddy loved learning about philosophy, literature, cinema, and the art",
            "At school, he loved studying English literature, Chemistry and Biology",
            "He was terrible at Maths.",
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
            "He aims to do so while doing the things that he love most - hiking and traveling.",
          ],
        },
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
            caption: "Hiking",
          },
          {
            image: `${imageFolder}running.png`,
            imageAlt: "Paddy at a running event",
            caption: "Running",
          },
        ],
      },

      impact: {
        heading: "Why does his research matter?",
        image: `${imageFolder}organoid-still.jpg`,
        imageAlt: "Fluorescent microscope image of a brain organoid",
        points: [
          "Helps scientists understand how childhood brain cancer develops.",
          "Paddy grows human brains in a dish, and he uses this to study how neurons grow and communicate.",
          "May help scientists improve future treatments for children and families.",
        ],
      },

      video: {
        heading: "See a brain organoid under the microscope!",
        src: "assets/videos/paddy-brain-organoid.mp4",
        poster: `${imageFolder}organoid-still.jpg`,
        description:
          "This 10-second video shared by Paddy shows a fluorescent microscope scan of a brain organoid — a tiny lab-grown model of brain tissue. The microscope records views at different depths, a bit like looking through many thin layers.",
        caption:
          "These are microscope images of a lab-grown model, not slices taken from a person's brain.",
      },

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
    const imageFolder = "assets/images/experts/muna/";
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
          image: `${imageFolder}muna-university.jpg`,
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
        image: `${imageFolder}coffee.jpeg`,
        imageAlt: "Coffee at a café",
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

    const imageFolder = "assets/images/experts/millicent/";

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
            "The research was done on mice. It could have similar effects on people.",
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
            "She look foward to working in clinical research.",
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

        image: `${imageFolder}radio.jpg`,
        imageAlt: "Millicent performing on stage",
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

    const imageFolder = "assets/images/experts/michael/";

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
            "Michael grew up in Indonesia, struggled with mathematics back in high school.",
            "He loved books and literature.",
            "He was interested in how science, because science help us understand people and solve problems.",
            "He studied a Bachelor of Arts majored in Psychology and Economics at the University of Melbourne.",
            "Psychology is the study of how people think, feel and behave.",
          ],
        },

        // STAGE 2: EXPLORING ENGINEERING

        {
          title: "Exploring Engineering",
          colour: "#E9B400",

          image: `${imageFolder}engineer`,
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

        image: `${imageFolder}hobbies.jpg`,
        imageAlt: "Illustration of reading, climbing and other hobbies",
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

    const imageFolder = "assets/images/experts/laura/";

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
            "Her wants to contribute to research that improves cancer treatments.",
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

        image: `${imageFolder}skating.jpg`,
        imageAlt: "Image representing Laura's interest in ice skating",
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

    const imageFolder = "assets/images/experts/kevin/";

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
            "His research help us understand our immune system. This is crucial for the development of future cancer treatments.",
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

        image: `${imageFolder}travel.jpg`,
        imageAlt: "Image representing Kevin's hobbies",
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

    const imageFolder = "assets/images/experts/maria/";

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Maria",
      role: "Malaria Immunologist",
      organisation:
        "The Peter Doherty Institute for Infection and Immunity, University of Melbourne",
      portrait: `${imageFolder}portrait.jpg`,
      superpower:
        "Investigating how antibodies help immune cells recognise and remove malaria-infected red blood cells",
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
          image: `${imageFolder}malaria.jpg`,
          imageAlt: "Image representing malaria parasites and immune cells",
          points: [
            "Malaria is caused by parasites that can infect our red blood cells.",
            "Maria investigates how our body can recognise and remove red blood cells that are infected by malaria.",
            "Her published research identified an important receptor that helps neutrophils carry out this job.",
            "Understanding these immune defences help scientists design better malaria vaccines in the future.",
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
        image: `${imageFolder}travel.jpg`,
        imageAlt: "Image representing Maria's love of reading",
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

      organisation:
        "Cancer biology research at Peter MacCallum Cancer Centre, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Investigating how genes and oxygen supply influence brain tumour growth using fruit-fly models",

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
            "Paul wanted to use science to help solve problems and make a difference in the world.",
          ],
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
            "Despite these challenges, Paul remained interested in science and the discoveries scientists could make.",
          ],
        },

        // STAGE 3: FINDING HIS PATH

        {
          title: "Finding his path",
          colour: "#50B96D",

          image: `${imageFolder}journey.jpg`,
          imageAlt:
            "Image representing Paul's science journey from Nigeria to Israel and Australia",

          points: [
            "Paul originally wanted to become a medical doctor, but entering that career pathway was difficult.",
            "He decided to pursue science so he could still contribute to solving important problems.",
            "After completing his undergraduate studies in Nigeria, he moved to Israel for a master's degree in developmental biology.",
            "He then came to Australia to pursue a PhD in cancer biology and experience research in a new environment.",
            "Studying in different countries helped Paul grow as both a scientist and a person.",
          ],
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
            "By understanding what makes tumours grow, scientists may discover new ways to investigate and eventually treat brain cancers.",
          ],
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
            "He believes that asking new questions, learning from setbacks and continuing to explore are important parts of science.",
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

        text: "Outside the laboratory, Paul enjoys playing soccer, including games with people at his research institute!",

        image: `${imageFolder}soccer.jpg`,
        imageAlt: "Image representing Paul's interest in soccer",
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
          "Could help scientists identify new ways to investigate and slow brain cancers in the future",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Paul's interview and GTAC showcase.
           ================================================ */

      adviceHeading: "Paul's advice",

      advice: [
        "If you want change, be part of the solution.",
        "Don't give up when an experiment doesn't work. Unexpected results can help you learn!",
        "Keep asking questions. Science teaches you to be curious, persistent and resilient.",
      ],

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

      organisation:
        "Vascular biology research at Peter MacCallum Cancer Centre, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Using zebrafish to study abnormal blood vessels and test potential medicines for vascular malformations",

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
            "Juliana loved learning. She find Maths difficult at school.",
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

          image: `${imageFolder}zebrafish.mp4`,
          imageAlt: "Zebrafish used to study how blood vessels develop",

          points: [
            "Juliana studies vascular malformations. This means blood vessels that form or develop abnormally. This happens sometimes because of defective changes in DNA.",
            "She uses zebrafish to understand how different treatments affect their blood vessel development.",
            "This help us find new medicines to treat people with problems in blood vessel development.",
            "Findings in zebrafish are an early step in finding medicine that will work on people.",
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

        image: `${imageFolder}travel.jpeg`,
        imageAlt: "Image representing Juliana's love of dancing",
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
          "Could help researchers identify new treatment options for people with vascular malformations",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on her interview and old GTAC profile.
           ================================================ */

      adviceHeading: "Juliana's advice",

      advice: [
        "Education opens doors - keep going, even if it's hard.",
        "Try new things and make choices based on your own experiences.",
        "Your background does not have to limit where science can take you.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video added yet. If Juliana shares a zebrafish
           clip, you can add a video property like Paddy's.
           ================================================ */
    };
  })(),

  /* =====================================================
   ASHA (NIRASHAA BOUND) - CANCER GENOMICS RESEARCHER

   Sources:
   - Interview: 24 March 2026
   - GTAC STEM Superheroes Showcase
   - Published ovarian cancer research (2025)

   All images are stored locally.
   The existing timeline and profile functions are reused.
   ===================================================== */

  asha: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Asha's photographs are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/asha/";

    return {
      /* ================================================
           B. BASIC INFORMATION
           ================================================ */

      name: "Asha",

      role: "Cancer Genomics Researcher",

      organisation: "Cancer research at WEHI and RMIT University, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Studying DNA, RNA and immune cells to understand why ovarian cancer patients respond differently to treatments",

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

          image: `${imageFolder}portrait.jpg`,
          imageAlt: "Portrait of Asha today",

          points: [
            "Asha was born in Singapore and moved to Melbourne, Australia, in Year 8.",
            "Growing up in a Singaporean-Indian family, Asha experienced different cultures and communities.",
            "Asha identifies as biracial and non-binary, showing that scientists come from many different backgrounds.",
            "They enjoyed understanding how things worked and developed an interest in biology.",
          ],
        },

        // STAGE 2: DISCOVERING SCIENCE

        {
          title: "Discovering science",
          colour: "#E9B400",

          image: `${imageFolder}theatre.jpg`,
          imageAlt: "Image representing Asha's interest in theatre",

          points: [
            "Asha enjoyed biology at school because they liked learning how living things work.",
            "They also loved theatre and volunteered backstage during school productions.",
            "For a long time, Asha was unsure what career they wanted.",
            "They discovered that enjoying creative activities and being interested in science did not have to be separate things.",
          ],
        },

        // STAGE 3: FINDING THEIR PATH

        {
          title: "Finding their path",
          colour: "#50B96D",

          image: `${imageFolder}laboratory.jpg`,
          imageAlt: "Image representing laboratory research at WEHI",

          points: [
            "While studying at university, Asha worked as a cleaner at WEHI, a medical research institute in Melbourne.",
            "They became interested in the science happening around them and later gained experience as a research assistant.",
            "Asha completed honours research and went on to pursue a PhD.",
            "Their journey shows that opportunities in science can come from unexpected places!",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}ovarian-cancer.jpg`,
          imageAlt: "Image representing cancer cells and genetic research",

          points: [
            "Asha researched ovarian cancer, a disease in which abnormal cells grow in the ovaries.",
            "They contributed to a clinical trial study involving 114 women receiving different combinations of cancer medicines.",
            "Asha investigated tumour samples, including DNA changes and immune activity, to help understand differences between patients.",
            "The research could help scientists identify which treatments might work best for different people.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}clinical-trials.jpg`,
          imageAlt:
            "Image representing clinical trials and healthcare research",

          points: [
            "Asha is interested in moving from laboratory research into roles that support clinical trials.",
            "Clinical trials are studies that investigate how safe and effective medical treatments are for people.",
            "They hope to use their experience with scientific research and data to support work that could help patients.",
            "Asha's story shows that STEM offers many different careers, including important roles outside the laboratory.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS

           One image is displayed by default.

           For multiple pictures, add a "photos"
           array like Paddy's profile.
           ================================================ */

      hobbies: {
        heading: "Hobbies and interests",

        text: "Outside science, Asha loves making chainmail jewellery and crafts by connecting lots of small metal rings! They also enjoyed theatre and helping backstage during school productions.",

        image: `${imageFolder}chainmail.jpg`,
        imageAlt:
          "Handmade chainmail jewellery created by connecting metal rings",
      },

      /* ================================================
           E. WHY THEIR RESEARCH MATTERS

           Three points displayed with coloured icons.
           The image appears beside the information.
           ================================================ */

      impact: {
        heading: "Why does their research matter?",

        image: `${imageFolder}ovarian-cancer.jpg`,
        imageAlt: "Image representing DNA and ovarian cancer research",

        points: [
          "Investigates genetic changes and immune activity in ovarian cancer",
          "Helps scientists understand why different patients respond differently to cancer medicines",
          "Could guide more personalised treatment decisions in the future, although further research is needed",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Asha's interview and original
           GTAC STEM Superheroes profile.
           ================================================ */

      adviceHeading: "Asha's advice",

      advice: [
        "Follow what you're genuinely interested in, even if it takes you in an unexpected direction.",
        "Do not be afraid to try different things and discover what you enjoy!",
        "Understanding how something works is the first step to fixing it.",
        "You don't have to follow exactly the same path as everyone else.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Asha.

           If Asha provides a research video,
           add a "video" property here like Paddy's.
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

      superpower:
        "Using genetics and immunology to understand how marsupials develop and how science might help protect wildlife",

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
            "She was naturally curious and wanted to understand the world around her.",
          ],
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
            "She also found making friends challenging at times, especially because her family moved several times.",
          ],
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
            "Her interests eventually brought her towards the biology of Australian marsupials.",
          ],
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
            "Dunnarts are also closely related to the extinct thylacine, or Tasmanian tiger. Research on living marsupials could help scientists develop future conservation technologies.",
          ],
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
            "Her goal is to use science to help both wildlife and the communities she cares about.",
          ],
        },
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
            caption: "Acrobatics",
          },
          {
            image: `${imageFolder}ice-hockey.jpg`,
            imageAlt: "Ice hockey activity",
            caption: "Ice hockey",
          },
        ],
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
          "Research on living relatives of the thylacine could help scientists develop technologies for conservation and possible future de-extinction research",
        ],
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
        "If you cannot find an answer, that might be the perfect opportunity to investigate.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video is currently included.

           If Meagan provides a video of dunnarts or
           her research, add a video property here
           like Paddy's profile.
           ================================================ */
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

    const imageFolder = "assets/images/experts/megan/";

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

        image: `${imageFolder}travel.jpeg`,
        imageAlt: "Megan visiting a historic site during her travels",
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

    const imageFolder = "assets/images/experts/misty/";

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
        "Engineering immune cells to recognise and attack brain cancer cells, to investigate better treatments for children and adults",

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
            "Misty grew up in Ballarat, Victoria, and was the first person in her family to attend university.",
            "As a teenager, she was fascinated by the human body, anatomy and diseases.",
            "She was always curious and wanted to understand how things worked.",
            "Her teachers encouraged her curiosity, determination and interest in learning.",
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
            "At just 11 years old, Misty began volunteering with St John Ambulance and even took part in first aid competitions!",
            "At school, she enjoyed maths and studied physics, chemistry and mathematics, but did not take biology.",
            "She also loved drama, theatre and performing on stage.",
            "Misty believes that performing helped her become confident speaking to large audiences - an important skill for a scientist.",
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
            "Misty studied science at the University of Melbourne, specialising in biotechnology and immunology - the study of the immune system.",
            "For her PhD, she contacted Peter Doherty, a scientist who had won a Nobel Prize, and was surprised when he called her back!",
            "They met for coffee, and he offered her an opportunity to join his research laboratory.",
            "After her PhD, she worked as a researcher at the universities of Oxford and Cambridge in the UK.",
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
            "Misty leads a research team investigating new ways to treat brain cancer, including cancers affecting children.",
            "Her team studies T cells, which are immune cells that help protect our bodies from disease.",
            "They are developing CAR T cells - immune cells specially engineered to recognise and attack certain cancer cells.",
            "Researchers also use powerful microscopes to study how immune cells interact with brain tumours.",
            "These treatments are still being investigated for brain cancer. Scientists must carefully test their safety and effectiveness.",
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
            "Misty wanted to lead her own research team so she could explore new ideas and make a meaningful difference.",
            "Building a research program was challenging. In her first year, she submitted 21 applications for research funding!",
            "She works with other scientists, doctors, charities and supporters through initiatives including The Brain Cancer Centre.",
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

        image: `${imageFolder}theater.jpg`,
        imageAlt:
          "Image representing Misty's interest in theatre and performing",
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
          "Develops specialised immune cells that may be able to recognise and attack brain cancer cells",
          "Helps scientists understand why some brain tumours are difficult for the immune system to fight",
          "Could contribute to safer and more effective brain cancer treatments in the future",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Misty's interview and GTAC showcase.
           ================================================ */

      adviceHeading: "Misty's advice",

      advice: [
        "Have a purpose and a vision to help people. It makes your work more meaningful!",
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

   STEM EXPERT - NOT A GTAC STEM COACH

   Sources:
   - Interview: 30 October 2026
   - The Royal Women's Hospital, Clinical Genetics Service

   All images are stored locally.
   Uses the existing reusable profile and timeline code.
   ===================================================== */

  sue: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Sue's images are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/sue/";

    return {
      /* ================================================
           B. BASIC INFORMATION

           Name, role, workplace, portrait and superpower.
           ================================================ */

      name: "Sue",

      role: "Genetic Counsellor and Genetic Services Manager",

      organisation: "The Royal Women's Hospital, Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Combining genetics, empathy and communication to help people understand their genes and make informed decisions about their health",

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

          image: `${imageFolder}portrait.jpg`,
          imageAlt: "Portrait of Sue today",

          points: [
            "Sue grew up in a family where studying science at university was unusual.",
            "Sue and her brother were the first in their family to attend university.",
            "In Year 11, an inspiring biology teacher named Greg Hunt helped her discover how exciting science could be.",
            "Looking through microscopes at things like the structure of a leaf showed her how amazing and complex living things are.",
            "This curiosity eventually led her towards genetics - the study of genes and how traits are passed on.",
          ],
        },

        // STAGE 2: CHALLENGES AND CHOICES

        {
          title: "Challenges and choices",
          colour: "#E9B400",

          image: `${imageFolder}biology.jpg`,
          imageAlt:
            "Image representing biology and observing leaves through a microscope",

          points: [
            "Sue loved biology, English, languages and history, but she found mathematics difficult and didn't enjoy it.",
            "At first, she wanted to become a physiotherapist, someone who helps people improve their movement and physical health.",
            "She didn't receive the VCE score she needed for physiotherapy, so she explored another pathway.",
            "Sue began studying biological sciences at La Trobe University.",
            "She studied plants, animals and genetics, eventually becoming particularly interested in human genetics.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}pathway.jpg`,
          imageAlt:
            "Image representing Sue's journey through laboratory science and genetic counselling",

          points: [
            "After university, Sue worked as a research assistant at Peter MacCallum Cancer Centre.",
            "She then spent around three years working at a biotechnology company.",
            "Although she loved genetics, she realised that she didn't want to spend her entire career working in a laboratory or in business.",
            "She discovered genetic counselling, a career combining genetics with helping people.",
            "In 1996, she moved to Newcastle to study a postgraduate diploma in genetic counselling.",
            "Her first genetic counselling job took her to Bathurst, before she began working at The Royal Women's Hospital.",
          ],
        },

        // STAGE 4: SCIENCE MEETS PEOPLE

        {
          title: "Science meets people",
          colour: "#4F71CB",

          image: `${imageFolder}counselling.jpg`,
          imageAlt:
            "Image representing a genetic counsellor helping someone understand health information",

          points: [
            "A genetic counsellor helps people understand how genes can affect their health and their families.",
            "Genes are sections of DNA that carry instructions for how our bodies develop and function.",
            "At The Royal Women's Hospital, Sue's team helps people understand genetic conditions and testing options, including during pregnancy or when planning a family.",
            "Genetic counsellors explain complicated science in ways that people can understand.",
            "They listen carefully, answer questions and support people to make their own informed decisions.",
            "Sue loves that her job combines her interest in science with making people's experiences a little easier.",
          ],
        },

        // STAGE 5: LEADING WITH EMPATHY

        {
          title: "Leading with empathy",
          colour: "#00A7B8",

          image: `${imageFolder}leadership.jpg`,
          imageAlt: "Image representing leadership, teamwork and healthcare",

          points: [
            "Today, Sue is a Genetic Services Manager, helping lead a team of genetic counselling professionals.",
            "She continues to learn about new discoveries because the science of genetics is always changing.",
            "She believes that listening, empathy and communication are just as important as understanding scientific information.",
            "Genetic counselling can involve difficult conversations, so supporting the wellbeing of healthcare workers is important too.",
            "Sue encourages students interested in healthcare to develop people skills through volunteering, part-time jobs and community activities.",
            "Her journey shows that science can lead to a meaningful career helping people, even outside the laboratory.",
          ],
        },
      ],

      /* ================================================
           D. HOBBIES AND INTERESTS

           Displays one photograph by default.

           To display multiple photos later,
           add a "photos" array like Paddy's profile.
           ================================================ */

      hobbies: {
        heading: "Hobbies and interests",

        text: "Sue loves reading and has been part of a monthly book club with her friends for more than 10 years! She has also started bootscooting (line dancing). When she was younger, she enjoyed ballet, and she still likes watching performances.",

        image: `${imageFolder}book-club.jpg`,
        imageAlt: "Image representing Sue's love of reading and book clubs",
      },

      /* ================================================
           E. WHY HER WORK MATTERS

           Three points displayed with coloured icons.
           One accompanying photograph.

           Unlike laboratory researchers, Sue's impact
           comes largely from her work with people.
           ================================================ */

      impact: {
        heading: "Why does her work matter?",

        image: `${imageFolder}counselling.jpg`,
        imageAlt:
          "Image representing genetic counselling and personalised healthcare",

        points: [
          "Helps individuals and families understand genetic conditions and what test results might mean",
          "Supports people to make informed choices about genetic testing, health and family planning",
          "Combines scientific knowledge with listening, empathy and communication to provide person-centred care",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Educational takeaways based on Sue's interview.

           These are paraphrases, not direct quotations.
           ================================================ */

      adviceHeading: "Sue's advice",

      advice: [
        "You don't have to love every subject to find a career you enjoy in science.",
        "Follow your interests. Sometimes a different pathway can lead you somewhere wonderful!",
        "Learn how to communicate, listen and work with people. These skills matter in STEM too.",
        "Try volunteering, joining activities or gaining work experience to develop life skills.",
        "If you're interested in a career, talk to someone who already does that job and find out what it's really like.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Sue.

           If Sue provides a video about genetic
           counselling, add a "video" property here.

           Your existing expert-profile.js already
           supports this optional feature.
           ================================================ */
    };
  })(),

  /* =====================================================
   VIJAY RAJAGOPAL - COMPUTATIONAL PHYSIOLOGIST

   STEM EXPERT - NOT A GTAC STEM COACH

   Sources:
   - Interview: 24 March 2026
   - Original GTAC STEM Superheroes Showcase
   - University of Melbourne research information

   All images are stored locally.
   Uses the existing reusable profile and timeline code.
   ===================================================== */

  vijay: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Vijay's images are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/vijay/";

    return {
      /* ================================================
           B. BASIC INFORMATION

           Name, role, workplace, portrait and superpower.
           ================================================ */

      name: "Vijay",

      role: "Computational Physiologist",

      organisation:
        "Associate Professor, Department of Biomedical Engineering, University of Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Using mathematics, physics and computer simulations to understand how our heart, blood vessels and cells work",

      imageFolder,

      /* ================================================
           C. INTERACTIVE TIMELINE

           Five clickable stages.

           Each stage has:
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

          image: `${imageFolder}portrait.jpg`,
          imageAlt: "Portrait of Vijay today",

          points: [
            "Vijay was born in southern India, where he grew up with his family.",
            "His father was a chemical engineer and his grandfather worked at the Reserve Bank of India.",
            "Although his family had some experience with engineering, Vijay did not grow up expecting to become a scientist.",
            "When he was in secondary school, he moved from India to New Zealand.",
            "His journey would eventually lead him to discover how engineering and mathematics could help us understand the human body.",
          ],
        },

        // STAGE 2: CHALLENGES IN SCHOOL

        {
          title: "Challenges in school",
          colour: "#E9B400",

          image: `${imageFolder}school.jpg`,
          imageAlt: "Image representing Vijay's school experiences",

          points: [
            "Vijay did not find mathematics particularly easy when he was younger.",
            "He learned that sometimes he needed to slow down, practise and give himself more time to understand difficult ideas.",
            "He originally imagined becoming a pilot or a mechatronics engineer, someone who combines mechanical engineering, electronics and computing.",
            "He did not plan to become a scientist or study medicine.",
            "His experience taught him that finding a subject difficult does not mean you cannot succeed in it.",
          ],
        },

        // STAGE 3: FINDING HIS PATH

        {
          title: "Finding his path",
          colour: "#50B96D",

          image: `${imageFolder}journey.jpg`,
          imageAlt:
            "Image representing Vijay's studies in engineering and biomedical science",

          points: [
            "Vijay studied Engineering Science at university in New Zealand.",
            "He learned how mathematics, physics and computer programming could be used to solve real-world problems.",
            "He discovered that these tools could also help scientists understand the human body.",
            "Although he initially considered working in industry, he became interested in continuing his studies through a PhD.",
            "His research journey took him into biomedical engineering, where engineers use technology and scientific knowledge to investigate problems in medicine.",
            "After his PhD and further research experience, he eventually established his own research group at the University of Melbourne.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}heart-model.jpg`,
          imageAlt:
            "Computer model representing heart cells and their activity",

          points: [
            "Vijay uses mathematics, physics and computers to create models of how cells and organs work.",
            "A computer model is like a digital experiment that helps scientists explore what might happen inside the body.",
            "His team investigates how calcium signals help heart muscle cells contract and grow.",
            "They also study how red blood cells move through tiny blood vessels called capillaries.",
            "These models help scientists understand what happens in healthy bodies and what might change during diseases such as heart disease.",
          ],
        },

        // STAGE 5: LOOKING TO THE FUTURE

        {
          title: "Looking to the Future",
          colour: "#00A7B8",

          image: `${imageFolder}future.jpg`,
          imageAlt:
            "Illustration representing digital models of the human heart",

          points: [
            "Vijay's research team is developing increasingly detailed computer models of living cells and organs.",
            "Scientists sometimes call these models digital twins because they represent parts of the real world inside a computer.",
            "Researchers hope these models will help them better understand heart disease and investigate possible treatments.",
            "Computer simulations may also help scientists decide which ideas are worth testing in the laboratory.",
            "Vijay continues exploring how mathematics, computing and biology can work together to improve healthcare.",
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

        text: "Outside science, Vijay enjoys a good cup of coffee and playing flight simulator games from the comfort of his sofa! He also once tried performing stand-up comedy. Science and humour can go hand in hand!",

        image: `${imageFolder}hobbies.jpg`,
        imageAlt:
          "Image representing Vijay's interests in flight simulators, coffee and comedy",
      },

      /* ================================================
           E. WHY HIS RESEARCH MATTERS

           Three points displayed with coloured icons.
           One accompanying image.

           Vijay's work uses computational models
           rather than relying only on laboratory
           experiments.
           ================================================ */

      impact: {
        heading: "Why does his research matter?",

        image: `${imageFolder}heart-model.jpg`,
        imageAlt: "Computer model representing the human heart and its cells",

        points: [
          "Helps scientists understand how heart cells grow, contract and respond to different signals",
          "Uses computer simulations to investigate how blood cells move through tiny blood vessels",
          "Could help scientists investigate new ways to understand, prevent and treat diseases in the future",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Vijay's interview and existing
           GTAC STEM Superheroes profile.

           Advice is paraphrased for primary students,
           except for the first point, which preserves
           the lesson from the original GTAC showcase.
           ================================================ */

      adviceHeading: "Vijay's advice",

      advice: [
        "Just because you find something hard, doesn't mean you are bad at it. It just means you need more time.",
        "Everyone has different talents. You might discover what you are good at later than you expect!",
        "Focus on understanding the fundamentals and give yourself time to learn.",
        "Don't be discouraged if you don't understand something straight away.",
        "Explore different interests. You never know where your curiosity might take you!",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video has been added for Vijay.

           If Vijay provides a computer simulation of
           heart cells, blood vessels or calcium signals,
           add a "video" property here like Paddy's.

           The existing expert-profile.js already
           supports this optional feature.
           ================================================ */
    };
  })(),

  /* =====================================================
   CHRIS FREELANCE - EVOLUTIONARY BIOLOGIST

   STEM EXPERT - NOT A GTAC STEM COACH

   Sources:
   - Interview: 18 March 2026
   - Original GTAC STEM Superheroes Showcase
   - University of Melbourne researcher information
   - Ecological Society of Australia research article

   All images are stored locally.
   Uses the existing reusable profile and timeline code.
   ===================================================== */

  chris: (() => {
    /* ================================================
       A. IMAGE FOLDER

       All Chris's images are stored here.
       ================================================ */

    const imageFolder = "assets/images/experts/chris/";

    return {
      /* ================================================
           B. BASIC INFORMATION

           Name, role, workplace, portrait and superpower.
           ================================================ */

      name: "Chris",

      role: "Evolutionary Biologist",

      organisation:
        "Senior Lecturer and Melbourne Histology Platform Manager, University of Melbourne",

      portrait: `${imageFolder}portrait.jpg`,

      superpower:
        "Investigating why animals have different body structures and sensory organs, and how these help them survive in their environments",

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

          image: `${imageFolder}portrait.jpg`,
          imageAlt: "Portrait of Chris today",

          points: [
            "Chris grew up in regional Victoria, in the Macedon Ranges.",
            "He was the first person in his family to attend university.",
            "At primary school, he didn't have separate science classes, but he enjoyed learning and exploring different subjects.",
            "In high school, science became one of his favourite subjects.",
            "He also completed work experience in a medical science laboratory, giving him an early introduction to research.",
          ],
        },

        // STAGE 2: CHALLENGES IN SCHOOL

        {
          title: "Challenges in school",
          colour: "#E9B400",

          image: `${imageFolder}maths.jpg`,
          imageAlt: "Image representing school mathematics and learning",

          points: [
            "Chris enjoyed science, but he didn't always find mathematics easy.",
            "In Year 11, he struggled with Maths Methods, particularly probability and statistics.",
            "He received extra help and learned that sometimes understanding something takes more time and practice.",
            "Even at university, he found some physics subjects challenging.",
            "Chris discovered that grades don't always reflect what someone is capable of achieving.",
            "He encourages students to be persistent and not give up just because a subject feels difficult.",
          ],
        },

        // STAGE 3: FINDING HIS PATH

        {
          title: "Finding his path",
          colour: "#50B96D",

          image: `${imageFolder}university.jpg`,
          imageAlt:
            "Image representing Chris's journey through university and scientific research",

          points: [
            "Chris originally considered becoming a medical doctor, but eventually realised medicine wasn't the right pathway for him.",
            "He began studying neuroscience, the science of the brain and nervous system.",
            "He was also fascinated by animals, their behaviour and how they experience the world.",
            "His interests led him towards zoology, ecology and evolutionary biology.",
            "During university, he gained experience working as a research assistant.",
            "For his PhD, he investigated how the environment can influence the evolution of animals' sensory organs.",
            "Chris's career shows that discovering new interests can change where your science journey takes you.",
          ],
        },

        // STAGE 4: RESEARCH WITH AN IMPACT

        {
          title: "Research with an impact",
          colour: "#4F71CB",

          image: `${imageFolder}stick-insect.jpg`,
          imageAlt:
            "Lord Howe Island stick insect studied in conservation research",

          points: [
            "Chris studies evolutionary biology and sensory ecology - how animals' senses help them interact with their environments.",
            "Animals may have eyes, antennae and other sensory organs that look different, even when they perform similar jobs.",
            "He investigated Lord Howe Island stick insects, comparing insects living in the wild with those bred in captivity.",
            "He found that captive-bred insects had smaller compound eyes and fewer scent-detecting receptors on their antennae.",
            "These differences might affect how well insects find food, locate mates or detect danger after being returned to the wild.",
            "His discoveries help scientists consider how to improve conservation programs for threatened species.",
          ],
        },

        // STAGE 5: SCIENCE AND COMMUNICATION

        {
          title: "Science and communication",
          colour: "#00A7B8",

          image: `${imageFolder}microscope.jpg`,
          imageAlt:
            "Image representing microscopy and scientific research at the University of Melbourne",

          points: [
            "Today, Chris works at the University of Melbourne as a Senior Lecturer and manager of the Melbourne Histology Platform.",
            "Histology involves studying thin sections of biological material, often using microscopes.",
            "He helps researchers use microscopes and other techniques to investigate cells, tissues and living things.",
            "Chris is also passionate about making science understandable and accessible to everyone.",
            "He hosts a podcast called 'Divergent in STEMM', where scientists and other STEM professionals share their experiences of thinking and learning differently.",
            "Through research, education and communication, Chris helps people discover that there are many different ways to succeed in science.",
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

        text: "Chris loves astrophotography - taking photographs of stars and the night sky! He also enjoys science communication and hosts his own podcast, Divergent in STEMM, where he talks with people about their experiences working in science.",

        image: `${imageFolder}astrophotography.jpg`,
        imageAlt:
          "Photograph of stars in the night sky, representing Chris's interest in astrophotography",
      },

      /* ================================================
           E. WHY HIS RESEARCH MATTERS

           Three impact points displayed with icons.
           One accompanying image.

           Focuses on the connection between sensory
           ecology, evolution and conservation.
           ================================================ */

      impact: {
        heading: "Why does his research matter?",

        image: `${imageFolder}stick-insect.jpg`,
        imageAlt: "Lord Howe Island stick insect",

        points: [
          "Helps explain why animals have different sensory organs and how these structures help them survive",
          "Investigates differences between wild animals and animals raised in captivity",
          "Provides knowledge that could help conservation scientists protect threatened species and plan wildlife reintroductions",
        ],
      },

      /* ================================================
           F. ADVICE FOR STUDENTS

           Based on Chris's interview and the original
           GTAC STEM Superheroes Showcase.

           The advice is adapted for primary students.
           ================================================ */

      adviceHeading: "Chris's advice",

      advice: [
        "You don't have to be fantastic at maths to become a successful scientist!",
        "If something is difficult, don't give up. Ask for help, practise and keep trying.",
        "Grades don't define everything you're capable of achieving.",
        "Follow what interests you. Your career might take you somewhere you never expected!",
        "Be persistent and fight for what you want.",
      ],

      /* ================================================
           G. OPTIONAL VIDEO

           No video is currently added for Chris.

           You could later include:
           - A research video showing insect sensory organs
           - A microscopy demonstration
           - A short introduction to his podcast

           Add a "video" property here using Paddy's
           existing video feature as a template.
           ================================================ */
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

    const imageFolder = "assets/images/experts/maja/";

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
        "Turning invisible molecules, cells and biological processes into scientifically accurate 3D animations that make complex science easier to understand",

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

          image: `${imageFolder}portrait.jpg`,
          imageAlt: "Portrait of Maja today",

          points: [
            "At school, Maja enjoyed both creative and scientific subjects, including fine art, biology, chemistry and French.",
            "She loved learning about the natural world and originally imagined becoming a veterinarian.",
            "She enjoyed nature documentaries and admired how people like David Attenborough could make science fascinating.",
            "Although she loved both science and art, she never imagined that one day she could combine them in a single career!",
          ],
        },

        // STAGE 2: CHALLENGES AND CHOICES

        {
          title: "Challenges and choices",
          colour: "#E9B400",

          image: `${imageFolder}school.jpg`,
          imageAlt:
            "Illustration representing Maja's interests in science and art",

          points: [
            "Maja enjoyed biology and chemistry, but found physics and mathematics challenging.",
            "She went on to study biomedical science and completed a PhD in molecular biology at Monash University.",
            "A PhD involves investigating a research question and making new discoveries.",
            "After her PhD, Maja worked in scientific sales, but she began to miss the creative side of her life.",
            "She realised that neither laboratory research nor scientific sales was quite the career she wanted.",
          ],
        },

        // STAGE 3: FINDING HER PATH

        {
          title: "Finding her path",
          colour: "#50B96D",

          image: `${imageFolder}career-path.jpg`,
          imageAlt:
            "Image representing Maja's journey from molecular biology to 3D animation",

          points: [
            "While working in scientific sales, Maja met Drew Berry, a biomedical animator who created amazing animations of the tiny world inside our cells.",
            "Seeing his work made her realise that science and art could be combined into one career.",
            "She decided to learn new skills, studying multimedia and design at Swinburne University and 3D animation at the Australian Film Television and Radio School.",
            "Maja later received a research fellowship to learn from Drew Berry at the Walter and Eliza Hall Institute.",
            "She had found a career where her scientific knowledge and creativity were equally important!",
          ],
        },

        // STAGE 4: MAKING THE INVISIBLE VISIBLE

        {
          title: "Making the invisible visible",
          colour: "#4F71CB",

          image: `${imageFolder}molecule-animation.jpg`,
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

          image: `${imageFolder}cancer-animation.jpg`,
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

        text: "Maja loves flamenco dancing! She has practised flamenco for many years, takes classes with friends and has travelled to Spain to learn more. She also enjoys nature and the way documentaries bring the natural world to life.",

        image: `${imageFolder}flamenco.jpg`,
        imageAlt: "Image representing Maja's interest in flamenco dancing",
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
        "Creativity and science together can make complex ideas powerful and clear.",
        "Stay curious! Ask questions such as 'What if?' and 'How does this work?'",
        "You don't have to choose between being creative and enjoying science.",
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
};
