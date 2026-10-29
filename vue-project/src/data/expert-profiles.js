/* =========================================================
   EXPERT CONTENT (DATA ONLY)
   Add future experts as new entries in this array. Each entry drives
   both the card on the Local STEM Experts page and the profile panel.

   Every expert needs: name, role, portrait, portraitAlt, back
   (superpower, coolFact, impact, lesson).
   Optional: organisation, subtitle (shown on the card instead of
   organisation), video, adviceHeading, question.
   Then EITHER a full profile (timeline, hobbies, impact, advice)
   OR `thinglinkUrl` to open a legacy ThingLink embed instead.
   ========================================================= */

const base = `${import.meta.env.BASE_URL}assets/images/experts`;
const videos = `${import.meta.env.BASE_URL}assets/videos`;

export const expertProfiles = [
    {
        name: "Paddy",
        role: "Childhood Brain Cancer Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Neuroscience research focused on childhood brain cancer",
        portrait: `${base}/paddy/portrait.jpg`,
        portraitAlt: "Paddy, a neuro-oncologist",
        back: {
            superpower: "Understanding childhood cancer by creating models of the brain in the lab",
            coolFact: "Paddy studied Neuroscience because he loves Philosophy",
            impact: "His work helps researchers test ideas for treating brain cancers in safer lab models.",
            lesson: "Follow your nose"
        },
        timeline: [
            {
                title: "Creative beginnings",
                colour: "#F43559",
                image: `${base}/paddy/dictionary.jpg`,
                imageAlt: "Portrait of Paddy today",
                points: [
                    "Paddy loved learning about philosophy, literature, cinema, and the art",
                    "At school, he loved studying English literature, Chemistry and Biology",
                    "He was terrible at Maths."
                ]
            },
            {
                title: "Changing Pathways",
                colour: "#E9B400",
                image: `${base}/paddy/paths.jpg`,
                imageAlt: "Illustration representing Paddy's school experience",
                points: [
                    "Paddy continued to pursue arts and humanities by enrolling in a Bachelor of Arts degree at the University of Melbourne.",
                    "Paddy discovered that he wanted to study Science instead, but his knowledge of Maths wasn't enough to get him in.",
                    "Paddy completed a Maths bridging course at university, and eventually got into Science.",
                    "We can enter science through many different pathways!"
                ]
            },
            {
                title: "Journeys in Neuroscience",
                colour: "#50B96D",
                image: `${base}/paddy/brain-imaging.jpg`,
                imageAlt: "Illustration showing a pathway from the arts into neuroscience",
                points: [
                    "Paddy's interest in Neuroscience came from his love of Philosophy.",
                    "He read a book about neuroplasticity - the brain's ability to change and adapt.",
                    "This inspired him to study the brain more deeply, majoring in Neuroscience.",
                    "He is currently doing his doctorate in Neuroscience."
                ]
            },
            {
                title: "Future Plans",
                colour: "#4F71CB",
                image: `${base}/paddy/future.jpeg`,
                imageAlt: "Colourful microscope image of a lab-grown brain organoid",
                points: [
                    "Paddy aims to continue to pursue neuroscience in the future.",
                    "He aims to do so while doing the things that he love most - hiking and traveling."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Paddy loves to read about philosophy, watch cinema, run, and hike. Paddy also does futsal with his colleagues at MCRI.",
            image: `${base}/paddy/hiking.jpeg`,
            imageAlt: "Paddy hiking outdoors",
            photos: [
                {
                    image: `${base}/paddy/hiking.jpeg`,
                    imageAlt: "Paddy hiking outdoors",
                    caption: "Hiking"
                },
                {
                    image: `${base}/paddy/running.png`,
                    imageAlt: "Paddy at a running event",
                    caption: "Running"
                }
            ]
        },
        impact: {
            heading: "Why does his research matter?",
            image: `${base}/paddy/organoid-still.jpg`,
            imageAlt: "Fluorescent microscope image of a brain organoid",
            points: [
                "Helps scientists understand how childhood brain cancer develops.",
                "Paddy grows human brains in a dish, and he uses this to study how neurons grow and communicate.",
                "May help scientists improve future treatments for children and families."
            ]
        },
        video: {
            heading: "See a brain organoid under the microscope!",
            src: `${videos}/paddy-brain-organoid.mp4`,
            poster: `${base}/paddy/organoid-still.jpg`,
            description: "This 10-second video shared by Paddy shows a fluorescent microscope scan of a brain organoid — a tiny lab-grown model of brain tissue. The microscope records views at different depths, a bit like looking through many thin layers.",
            caption: "These are microscope images of a lab-grown model, not slices taken from a person's brain."
        },
        adviceHeading: "Paddy's Advice",
        advice: [
            "Follow your nose."
        ]
    },
    {
        name: "Kezia",
        role: "Infectious Disease Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Postdoctoral researcher in Seattle, USA (previously at the Peter Doherty Institute, Melbourne)",
        portrait: `${base}/kezia/portrait.jpg`,
        portraitAlt: "Kezia, an infectious disease researcher",
        back: {
            superpower: "Discovering how immune cells respond to infections like HIV and TB",
            coolFact: "She once considered becoming a fashion designer!",
            impact: "Her work explores possible HIV treatments and better TB vaccines.",
            lesson: "Stay curious and learn from others!"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/kezia/chairs.jpg`,
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
                image: `${base}/kezia/mathematics.jpg`,
                imageAlt: "Illustration of a school notebook, representing Kezia's school years",
                points: [
                    "Kezia enjoyed music back in school, learning piano back when she was 4 years old.",
                    "Kezia enjoyed science and was good at maths, but physics was challenging.",
                    "She also found sport difficult."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/kezia/bacteria-dish.jpg`,
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
                image: `${base}/kezia/poster.jpg`,
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
                image: `${base}/kezia/seattle.jpeg`,
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
            image: `${base}/kezia/running.jpg`,
            imageAlt: "Kezia at a running event"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/kezia/research.jpg`,
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
        ],
        question: "What kind of questions would you ask Kezia?"
    },
    {
        name: "Muna",
        role: "Microbiology Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Melbourne, Australia - University tutor and GTAC STEM Coach",
        portrait: `${base}/muna/portrait.jpg`,
        portraitAlt: "Muna, Microbiology Researcher",
        back: {
            superpower: "Investigating bacteria and how they respond to antibiotics",
            coolFact: "Muna was the first woman in her extended family to attend university!",
            impact: "Her research helps scientists understand bacteria that can cause infections.",
            lesson: "Explore different paths. It's okay to change direction!"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/muna/pakistan.jpg`,
                imageAlt: "Muna's Home",
                points: [
                    "Muna grew up in Pakistan and always loved biology.",
                    "When she was younger, she dreamed of becoming a doctor.",
                    "She became the first woman in her extended family to attend university and later study overseas!"
                ]
            },
            {
                title: "Dreams",
                colour: "#E9B400",
                image: `${base}/muna/muna-university.jpg`,
                imageAlt: "Image representing Muna's school experiences",
                points: [
                    "She wanted to be a doctor, but getting into medical school in Pakistan was very competitive.",
                    "She received an offer from a private medical university, but it was too expensive.",
                    "She changed her plans, but she knew she wanted to be in science."
                ]
            },
            {
                title: "Learning About Tiny Living Things",
                colour: "#50B96D",
                image: `${base}/muna/travel.jpeg`,
                imageAlt: "Image representing Muna's university studies",
                points: [
                    "Muna discovered a love for microbiology, the study of tiny living things, such as bacteria.",
                    "She completed her undergraduate and masters in microbiology in Pakistan.",
                    "She then got a full scholarship to do a PhD in Australia.",
                    "She realised that she loved both research and teaching."
                ]
            },
            {
                title: "Studying Bacteria",
                colour: "#4F71CB",
                image: `${base}/muna/bacteria.jpg`,
                imageAlt: "Image representing E. coli bacteria",
                points: [
                    "Muna studies the bacteria E. coli, which can cause urinary tract infections (UTIs).",
                    "She works with atient samples from hospitals.",
                    "Her research explores how some bacteria can survive medicines designed to kill them. This is called antibiotic resistance",
                    "This will help scientists develop better ways to treat infections."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/muna/poster.jpeg`,
                imageAlt: "Image representing Muna's future in science",
                points: [
                    "Muna wants to continue working as a researcher.",
                    "She is also interested in teaching, public health and other careers in science.",
                    "As a GTAC STEM Coach, she has learned to explain science to kids and young people.",
                    "Working with students has helped her become a confident science communicator."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Outside science, Muna enjoys exploring different cafés and trying new coffees. She loves discovering interesting coffee spots around Melbourne!",
            image: `${base}/muna/coffee.jpeg`,
            imageAlt: "Coffee at a café"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/muna/lab.jpg`,
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
        name: "Misty",
        role: "Brain Cancer Immunologist",
        subtitle: "STEM Expert",
        organisation: "Professor and Laboratory Head at WEHI and The Brain Cancer Centre, Melbourne",
        portrait: `${base}/misty/portrait.jpg`,
        portraitAlt: "Portrait of Misty Jenkins",
        back: {
            superpower: "Training immune cells to recognise and attack brain tumours!",
            coolFact: "Misty volunteered with St John Ambulance when she was just 11 years old!",
            impact: "Her research could lead to new treatments for children and adults with brain cancer.",
            lesson: "Have a vision to help people. It makes your work meaningful!"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/misty/ballarat.jpg`,
                imageAlt: "Portrait of Misty today",
                points: [
                    "Misty grew up in Ballarat, Victoria, and was the first person in her family to attend university.",
                    "As a teenager, she was fascinated by the human body, anatomy and diseases.",
                    "She was always curious and wanted to understand how things worked.",
                    "Her teachers encouraged her curiosity, determination and interest in learning."
                ]
            },
            {
                title: "Exploring her interests",
                colour: "#E9B400",
                image: `${base}/misty/paramedic.jpg`,
                imageAlt: "Image representing first aid and St John Ambulance volunteering",
                points: [
                    "At just 11 years old, Misty began volunteering with St John Ambulance and even took part in first aid competitions!",
                    "At school, she enjoyed maths and studied physics, chemistry and mathematics, but did not take biology.",
                    "She also loved drama, theatre and performing on stage.",
                    "Misty believes that performing helped her become confident speaking to large audiences - an important skill for a scientist.",
                    "She worked part-time jobs while studying and learned valuable communication and teamwork skills."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/misty/cambridge.jpg`,
                imageAlt: "Image representing Misty's research journey and university studies",
                points: [
                    "Misty studied science at the University of Melbourne, specialising in biotechnology and immunology - the study of the immune system.",
                    "For her PhD, she contacted Peter Doherty, a scientist who had won a Nobel Prize, and was surprised when he called her back!",
                    "They met for coffee, and he offered her an opportunity to join his research laboratory.",
                    "After her PhD, she worked as a researcher at the universities of Oxford and Cambridge in the UK.",
                    "She later returned to Australia and continued her research at Peter MacCallum Cancer Centre before joining WEHI."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/misty/microscope.jpg`,
                imageAlt: "Image representing immune T cells attacking cancer cells",
                points: [
                    "Misty leads a research team investigating new ways to treat brain cancer, including cancers affecting children.",
                    "Her team studies T cells, which are immune cells that help protect our bodies from disease.",
                    "They are developing CAR T cells - immune cells specially engineered to recognise and attack certain cancer cells.",
                    "Researchers also use powerful microscopes to study how immune cells interact with brain tumours.",
                    "These treatments are still being investigated for brain cancer. Scientists must carefully test their safety and effectiveness."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/misty/conference.jpg`,
                imageAlt: "Image representing future advances in brain cancer treatment",
                points: [
                    "Misty wanted to lead her own research team so she could explore new ideas and make a meaningful difference.",
                    "Building a research program was challenging. In her first year, she submitted 21 applications for research funding!",
                    "She works with other scientists, doctors, charities and supporters through initiatives including The Brain Cancer Centre.",
                    "Her long-term goal is to help develop better treatments for people with brain cancer, particularly children.",
                    "Misty believes science is a creative activity where determination, teamwork and new ideas can help solve difficult problems."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Misty loves theatre, musicals, performing and karaoke! She has been involved in community theatre and enjoys spending time on stage. She believes that these experiences helped her develop the confidence to communicate science to large audiences.",
            image: `${base}/misty/theater.jpg`,
            imageAlt: "Image representing Misty's interest in theatre and performing"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/misty/genes.jpg`,
            imageAlt: "Image representing T cells and brain cancer immunotherapy",
            points: [
                "Develops specialised immune cells that may be able to recognise and attack brain cancer cells",
                "Helps scientists understand why some brain tumours are difficult for the immune system to fight",
                "Could contribute to safer and more effective brain cancer treatments in the future"
            ]
        },
        adviceHeading: "Misty's advice",
        advice: [
            "Have a purpose and a vision to help people. It makes your work more meaningful!",
            "Science is creative! You need to think outside the box, not just get good grades.",
            "Develop life skills through jobs, hobbies and activities. Communication and teamwork are important in science.",
            "Find mentors who encourage you and help you grow.",
            "Follow your interests, stay determined and don't be afraid to try something new."
        ]
    },
    {
        name: "Megan",
        role: "Bioethicist and Stem Cell Researcher",
        subtitle: "STEM Expert",
        organisation: "Murdoch Children's Research Institute and the University of Melbourne",
        portrait: `${base}/megan/portrait.jpg`,
        portraitAlt: "Portrait of Megan Munsie",
        back: {
            superpower: "Connecting science and society to help people make informed decisions!",
            coolFact: "Megan worked in IVF laboratories before becoming a bioethicist!",
            impact: "Her work helps make research safer, fairer and easier for people to understand.",
            lesson: "Ask questions and check the evidence behind scientific claims!"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/megan/book.jpg`,
                imageAlt: "Portrait of Megan today",
                points: [
                    "Megan loved biology at school, but she also enjoyed English, history and the humanities.",
                    "She was fascinated by DNA, inheritance and how living things work.",
                    "At school, she felt she had to choose between science and the humanities.",
                    "Later, she discovered that she could combine both interests in her career!"
                ]
            },
            {
                title: "Science meets people",
                colour: "#E9B400",
                image: `${base}/megan/ivf.png`,
                imageAlt: "Image representing a clinical embryology laboratory",
                points: [
                    "After completing a science degree, Megan began working as a clinical embryologist in IVF laboratories.",
                    "IVF is a medical treatment that can help people have babies.",
                    "Megan saw how scientific discoveries and new technologies could change people's lives.",
                    "She also realised that these technologies raised important questions about science, society and what is right or fair."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/megan/study.png`,
                imageAlt: "Image representing Megan's university research",
                points: [
                    "Megan returned to university to study reproductive science, completing her master's degree part-time.",
                    "She then completed a PhD investigating stem cells and how cells can be changed to develop in different ways.",
                    "Her research introduced her to important ethical and legal questions about new technologies.",
                    "Megan discovered bioethics - exploring what is right, fair and responsible in science and medicine."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/megan/conference.jpg`,
                imageAlt: "Image representing stem cells and medical research",
                points: [
                    "Today, Megan investigates the ethical and social questions surrounding stem-cell research and new medical technologies.",
                    "Stem cells are special cells that can make more cells, and some can develop into different types of cells.",
                    "She explores questions about patient safety, scientific evidence, informed consent and fairness.",
                    "Her work helps scientists and doctors consider how to develop and use new treatments responsibly."
                ]
            },
            {
                title: "Connecting science and society",
                colour: "#00A7B8",
                image: `${base}/megan/community.jpg`,
                imageAlt: "Image representing scientists and communities sharing ideas",
                points: [
                    "Megan works with scientists, doctors, patients, communities and policymakers to discuss new scientific discoveries.",
                    "She helps people understand the difference between promising research and treatments that have been proven to work.",
                    "In 2026, her team began a project exploring how children and young people should have a voice in decisions about their donated cells being used for research.",
                    "Her career shows that you can make a difference in STEM by helping people understand science and make informed decisions."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Megan enjoys cooking, trying new foods and discovering different cuisines when she travels! Her science career also takes her to conferences around the world.",
            image: `${base}/megan/travel.jpeg`,
            imageAlt: "Megan visiting a historic site during her travels"
        },
        impact: {
            heading: "Why does her work matter?",
            image: `${base}/megan/boston.jpg`,
            imageAlt: "Image representing stem-cell research and ethical questions",
            points: [
                "Helps patients and families understand the difference between promising research and proven treatments",
                "Encourages scientists to consider safety, consent and fairness when developing new medical technologies",
                "Connects scientists with the community so decisions are based on evidence and different perspectives"
            ]
        },
        adviceHeading: "Megan's advice",
        advice: [
            "Follow your curiosity! Your interests might lead you somewhere unexpected.",
            "You do not have to choose between science and the humanities - both are important.",
            "There is a lot of misinformation in science and it is our job to discover the truth.",
            "Ask questions, look for evidence and listen to different points of view."
        ]
    },
    {
        name: "Millicent",
        role: "Neuroscientist",
        subtitle: "GTAC STEM Coach",
        organisation: "PhD research at The Florey and the University of Melbourne",
        portrait: `${base}/millicent/portrait.jpg`,
        portraitAlt: "Millicent, Neuroscientist",
        back: {
            superpower: "Exploring how gut microbes and brain health are connected.",
            coolFact: "She loves acting and has hosted radio shows!",
            impact: "Her research could guide future ways to support people with Huntington's disease.",
            lesson: "You can be creative AND love science!"
        },
        timeline: [
            {
                title: "Breaking Barriers",
                colour: "#F43559",
                image: `${base}/millicent/nigeria.jpg`,
                imageAlt: "Millicent performing on stage as an adult",
                points: [
                    "Millicent grew up in Nigeria, where girls in her culture were expected to grow up and marry.",
                    "Her dad did not support her going into science, but she wanted 'to be more than what my culture programmed me to be'.",
                    "Millicent stepped out of her comfort zone and pursued science."
                ]
            },
            {
                title: "Choosing Between Arts and Science",
                colour: "#E9B400",
                image: `${base}/millicent/paths.jpg`,
                imageAlt: "Illustration representing different pathways through science and the arts",
                points: [
                    "She loved acting and was part of a theatre group back in school.",
                    "She realised she didn't have to choose between arts and science, she chose to do both.",
                    "She applied to study medicine but did not get a place.",
                    "She continued studying science and discovered new interests along the way.",
                    "During her master's degree, she had less time for acting and radio, but her creative interests stayed."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/millicent/harvard.jpg`,
                imageAlt: "Illustration of Millicent's journey from Nigeria to the USA and Australia",
                points: [
                    "Millicent studied in Nigeria before moving to the USA for her master's degree.",
                    "For her Masters, she worked on brain research at Brigham and Women's Hospital, linked to Harvard Medical School.",
                    "After learning about the connection between gut microbes and the brain, she came to Melbourne for PhD research."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/millicent/prebiotics.jpg`,
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
                image: `${base}/millicent/lab.jpg`,
                imageAlt: "Illustration representing future clinical research",
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
            image: `${base}/millicent/radio.jpg`,
            imageAlt: "Millicent performing on stage"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/millicent/microbiome.jpg`,
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
    },
    {
        name: "Michael",
        role: "Biomedical Engineer and Provisional Psychologist",
        subtitle: "GTAC STEM Coach",
        organisation: "Gene Technology Access Centre (GTAC), Melbourne",
        portrait: `${base}/michael/portrait.jpg`,
        portraitAlt: "Michael, Biomedical Engineer",
        back: {
            superpower: "Using engineering and biology to make practical tools for healthcare",
            coolFact: "Michael has studied both biomedical engineering and psychology!",
            impact: "His research investigated new ways to screen for bacteria and test for infections.",
            lesson: "The mind is as important as the machine."
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/michael/books.jpg`,
                imageAlt: "Portrait of Michael today",
                points: [
                    "Michael grew up in Indonesia, struggled with mathematics back in high school.",
                    "He loved books and literature.",
                    "He was interested in how science, because science help us understand people and solve problems.",
                    "He studied a Bachelor of Arts majored in Psychology and Economics at the University of Melbourne.",
                    "Psychology is the study of how people think, feel and behave."
                ]
            },
            {
                title: "Exploring Engineering",
                colour: "#E9B400",
                image: `${base}/michael/engineer`,
                imageAlt: "Illustration of psychology and engineering as connected fields",
                imageFit: "contain",
                points: [
                    "After finishing his Bachelor of Arts, Michael explored Biomedical Engineering by doing a Masters degree.",
                    "Biomedical Engineering combines Biology, Maths and Technology to solve health problems.",
                    "The first year of Masters was challenging because he had to relearn Maths and Biology.",
                    "Here, he discovered a love for Linear Algebra and Maths."
                ]
            },
            {
                title: "Medical Research",
                colour: "#50B96D",
                image: `${base}/michael/medical-testing.jpg`,
                imageAlt: "Illustration representing laboratory research during Michael's PhD in Taiwan",
                points: [
                    "He then moved to Taiwan to do his doctorate, learn Mandarin Chinese, and reconnect with his East Asian cultural roots.",
                    "He worked with doctors and other engineers to design medical testing tools that people can use at home."
                ]
            },
            {
                title: "Life as a Consultant",
                colour: "#4F71CB",
                image: `${base}/michael/consulting.jpg`,
                imageAlt: "Illustration of paper-based screening and infection testing tools",
                points: [
                    "After finishing his PhD, Michael did consulting at a Big 3 consulting firm in Taiwan.",
                    "He used his knowledge of engineering to work with clients on product design and manufacturing."
                ]
            },
            {
                title: "Future in Psychology",
                colour: "#00A7B8",
                image: `${base}/michael/future.jpg`,
                imageAlt: "Illustration of science education and understanding how people learn",
                points: [
                    "After returning to Australia, Michael went back to study Psychology.",
                    "He wanted to work with young people to help them navigate life's biggest challenges.",
                    "He works at GTAC because he wants young people to know that they can be whatever they want to be."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Outside work, Michael enjoys reading, cooking, swimming and bouldering (a type of climbing).",
            image: `${base}/michael/hobbies.jpg`,
            imageAlt: "Illustration of reading, climbing and other hobbies"
        },
        impact: {
            heading: "Why does his work matter?",
            image: `${base}/michael/medical-testing.svg`,
            imageAlt: "Illustration of tools used to investigate practical medical tests",
            points: [
                "Investigates ways to make medical testing more practical and accessible",
                "Shows how biology, engineering and psychology can connect",
                "Helps young people see that STEM is about improving people's lives"
            ]
        },
        adviceHeading: "Michael's Advice",
        advice: [
            "The mind is as important as the machine.",
            "Don't be afraid to explore and change to a different direction. It is worth it."
        ]
    },
    {
        name: "Laura",
        role: "Immunologist",
        subtitle: "GTAC STEM Coach",
        organisation: "Immunology researcher and GTAC STEM Coach, Melbourne",
        portrait: `${base}/laura/portrait.jpg`,
        portraitAlt: "Laura, Immunologist",
        back: {
            superpower: "Being a cell detective, investigating how immune cells steal tiny pieces from other cells!",
            coolFact: "As a child, Laura always asked \"Why?\" and wanted to understand the reason behind everything.",
            impact: "Her research helps us understand how immune cells communicate and respond to disease.",
            lesson: "The world makes more sense when you ask the right questions."
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/laura/library.jpg`,
                imageAlt: "Portrait of Laura today",
                points: [
                    "Laura grew up in Spain, in a family without a background in science.",
                    "As a child, she always asked 'Why?' and wanted to understand the reasons behind things.",
                    "She loved books so much that she once dreamed of becoming a librarian!",
                    "Her curiosity is what lead her to her love of science."
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${base}/laura/piano.jpg`,
                imageAlt: "Image representing Laura's school years",
                points: [
                    "Laura enjoyed many school subjects, including maths, but biology was her favourite.",
                    "She also played piano and enjoyed learning new things.",
                    "Sometimes she found it difficult to fit in with her group of friends.",
                    "At university, she met people who shared her interests and enjoyed discussing the same ideas."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/laura/paths.jpg`,
                imageAlt: "Image representing Laura's studies in science",
                points: [
                    "Laura considered several careers.",
                    "She wanted to be a Botanist. A Botanist studies plants.",
                    "One of her family member had cancer. This made Laura want to understand the science behind cancer.",
                    "She did a Bachelor of Science and majored in Biochemistry.",
                    "She then finished a Master's Degree in Immunology. Immunology is the study of the immune system.",
                    "She came to Australia on a 6-month university exchange, and later continued her journey in Immunology research."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/laura/cell.jpg`,
                imageAlt: "Microscope image representing immune cell interactions",
                points: [
                    "Laura investigates how immune cells interact with each other.",
                    "Some cells take tiny pieces of material from other cells, like a robber stealing something!",
                    "She uses powerful microscopes to look at how cells behave.",
                    "This helps scientists learn more about our immune system."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/laura/immuno.jpg`,
                imageAlt: "Image representing future cancer immunotherapy research",
                points: [
                    "Laura hopes to return to cancer research in the future.",
                    "She is interested in research of Cancer Immunotherapy. This is the study of how the immune system fight cancer.",
                    "She wants to do research in universities and the science industry.",
                    "Her goal is to contribute to research that improves cancer treatments."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Laura enjoys ice skating and loves books! When she was at school, she also tried archery and played the piano.",
            image: `${base}/laura/skating.jpg`,
            imageAlt: "Image representing Laura's interest in ice skating"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/laura/future.jpg`,
            imageAlt: "Microscope image representing immune cells",
            points: [
                "Investigates how immune cells interact and communicate with each other",
                "Helps scientists understand how immune cells exchange or take material from other cells",
                "Improves our understanding of immune responses, which is important for studying health and disease"
            ]
        },
        adviceHeading: "Laura's advice",
        advice: [
            "Don't be discouraged when things don't work the first time!",
            "Science involves trying, failing, learning from mistakes and trying again.",
            "Keep asking questions. The world makes more sense when you ask the right questions!"
        ]
    },
    {
        name: "Kevin",
        role: "Stem Cell Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "University of Melbourne PhD graduate and GTAC STEM Coach",
        portrait: `${base}/kevin/portrait.jpg`,
        portraitAlt: "Kevin, Stem Cell Researcher",
        back: {
            superpower: "Growing immune superhero cells from stem cells in the lab!",
            coolFact: "Kevin originally studied medicine before discovering his passion for research!",
            impact: "His research could contribute to future treatments for cancer and other diseases.",
            lesson: "Don't be afraid to make mistakes or change direction!"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/kevin/indonesia.jpg`,
                imageAlt: "Portrait of Kevin today",
                points: [
                    "Kevin grew up in Indonesia. Science and technology were part of his family life.",
                    "His family was big on curiosity and logical thinking.",
                    "At school, he enjoyed science. Science helped him understand and explain how the world works.",
                    "He dreamed of becoming a Palaeontologist, a scientist who studies ancient life and fossils!"
                ]
            },
            {
                title: "Challenges and choices",
                colour: "#E9B400",
                image: `${base}/kevin/medicine.jpg`,
                imageAlt: "Image representing Kevin's early career choices",
                points: [
                    "Kevin studied medicine in Indonesia, because of his family's expectations.",
                    "After He finish his medical degree, he faced a difficult decision: continue along the medical pathway or try something different.",
                    "He enjoyed learning about science and the human body.",
                    "Kevin chose research over treating patients directly, even though he did not know where it would lead."
                ]
            },
            {
                title: "Finding his path",
                colour: "#50B96D",
                image: `${base}/kevin/pathway.jpg`,
                imageAlt: "Image representing Kevin's journey into research",
                points: [
                    "Kevin received a scholarship to complete a Master's degree overseas.",
                    "He then worked as a research assistant in Hong Kong, gaining experience in the laboratory.",
                    "He chose to continue his studies in Australia, where he pursued his Doctorate Degree.",
                    "His journey took him from medicine into stem cell and immunology research."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/kevin/t-cells.jpg`,
                imageAlt: "Image representing T cells and stem cell research",
                points: [
                    "Kevin investigates how to grow T cells, a type of immune cell, from stem cells in the laboratory.",
                    "Stem cells are special because they can develop into different types of cells.",
                    "Some T cells can recognise and destroy dangerous cells, including certain cancer cells.",
                    "By learning how to make T cells in the lab, scientists hope to improve our understanding of the immune system and explore future treatments."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/kevin/future.jpg`,
                imageAlt: "Image representing Kevin's future in research and teaching",
                points: [
                    "Kevin completed his PhD at the University of Melbourne in 2026.",
                    "He hopes to continue research and investigate new ideas about stem cells and the immune system.",
                    "He also loves teaching and is interested in helping students learn science at different levels.",
                    "In the future, he may explore an academic career that combines research and education."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Kevin enjoys playing video games, including Pokémon and Dynasty Warriors! He also likes history-themed games, reading non-fiction books about science and philosophy, and taking photographs while hiking.",
            image: `${base}/kevin/hobbies.jpg`,
            imageAlt: "Image representing Kevin's hobbies"
        },
        impact: {
            heading: "Why does his research matter?",
            image: `${base}/kevin/t-cells.jpg`,
            imageAlt: "Image representing T cells made from stem cells",
            points: [
                "Investigates how stem cells can develop into T cells, an important part of our immune system",
                "Helps scientists understand how immune cells develop and function",
                "Could contribute to future research into treatments for cancer, infections and other diseases"
            ]
        },
        adviceHeading: "Kevin's advice",
        advice: [
            "Don't be afraid to make mistakes. That's how we learn!",
            "It's okay to change direction when you discover something new.",
            "Take your time and approach unfamiliar subjects with curiosity and humility."
        ]
    },
    {
        name: "Maria",
        role: "Malaria Immunologist",
        subtitle: "GTAC STEM Coach",
        organisation: "The Peter Doherty Institute for Infection and Immunity, University of Melbourne",
        portrait: `${base}/maria/portrait.jpg`,
        portraitAlt: "Maria, Malaria Immunologist",
        back: {
            superpower: "Discovering how antibodies and immune cells help fight malaria!",
            coolFact: "Maria earned a gold medal for her university studies in Pakistan!",
            impact: "Her research helps scientists understand protection against malaria and investigate future vaccines.",
            lesson: "Curiosity can grow into work that saves lives."
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/maria/portrait.jpg`,
                imageAlt: "Portrait of Maria today",
                points: [
                    "Maria grew up in Pakistan, where her father worked as a doctor and inspired her interest in science.",
                    "She was curious about how things worked and enjoyed learning about the human body.",
                    "She wanted to become a doctor or a scientist, and her family encouraged her education."
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${base}/maria/school.jpg`,
                imageAlt: "Image representing Maria's school years",
                points: [
                    "Maria enjoyed trying small science experiments in high school.",
                    "She used to feel afraid of mathematics, but gradually overcame that fear.",
                    "She sometimes found big decisions difficult and put pressure on herself to do well.",
                    "She learned that challenges do not have to stop you from exploring science."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/maria/journey.jpg`,
                imageAlt: "Image representing Maria's study journey from Pakistan to Australia",
                points: [
                    "In Pakistan, Maria studied biosciences at university and received a gold medal for her academic results.",
                    "She then completed a master's degree in microbiology and immunology - the study of microbes and the immune system.",
                    "She came to Australia to pursue PhD research into malaria and how the body fights infection.",
                    "Her science journey opened opportunities to meet researchers from around the world."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/maria/malaria.jpg`,
                imageAlt: "Image representing malaria parasites and immune cells",
                points: [
                    "Malaria is caused by parasites that can infect our red blood cells.",
                    "Maria investigates how antibodies help mark infected cells so immune cells called neutrophils can recognise and remove them.",
                    "Her published research identified an important receptor that helps neutrophils carry out this job.",
                    "Understanding these immune defences may help scientists design better malaria vaccines in the future."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/maria/future.jpg`,
                imageAlt: "Image representing Maria's future opportunities in science and teaching",
                points: [
                    "Maria has shared her work at science conferences and connected with researchers internationally.",
                    "She is keeping her career options open and is interested in opportunities to teach and share science.",
                    "She wants young people to know that where they grow up does not have to limit what they can achieve."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Maria enjoys reading fiction and drama, and she used to love drawing and painting. She also likes looking after a neighbour's cat!",
            image: `${base}/maria/reading.jpg`,
            imageAlt: "Image representing Maria's love of reading"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/maria/malaria.jpg`,
            imageAlt: "Image representing malaria parasites and immune responses",
            points: [
                "Helps explain how antibodies and immune cells work together to fight malaria",
                "Identifies how immune cells recognise malaria-infected red blood cells",
                "Could help guide research towards more effective malaria vaccines"
            ]
        },
        adviceHeading: "Maria's advice",
        advice: [
            "Don't feel limited by where you come from - there are opportunities to explore.",
            "Keep asking questions, even when a subject seems difficult at first.",
            "Curiosity can grow into work that saves lives."
        ]
    },
    {
        name: "Paul",
        role: "Cancer Biology Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Cancer biology research at Peter MacCallum Cancer Centre, Melbourne",
        portrait: `${base}/paul/portrait.jpg`,
        portraitAlt: "Paul, Cancer Biology Researcher",
        back: {
            superpower: "Investigating how oxygen and genes influence the growth of brain tumours!",
            coolFact: "Paul has studied science in Nigeria, Israel and Australia!",
            impact: "His research using fruit flies could help scientists discover new ways to slow brain tumours.",
            lesson: "If you want change, be part of the solution."
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/paul/portrait.jpg`,
                imageAlt: "Portrait of Paul today",
                points: [
                    "Paul grew up in northern Nigeria, where opportunities to study science were not always easy to find.",
                    "His parents encouraged him to value education because it could open doors to new opportunities.",
                    "He became fascinated by scientific discoveries and inventions.",
                    "Paul wanted to use science to help solve problems and make a difference in the world."
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${base}/paul/school.jpg`,
                imageAlt: "Image representing Paul's school experiences",
                points: [
                    "Paul enjoyed biology because it helped him understand nature and how living things work.",
                    "Maths was one of his strongest subjects, but he found physics difficult because it seemed too abstract.",
                    "His school had very limited laboratory equipment, so students had fewer chances to try practical experiments.",
                    "Despite these challenges, Paul remained interested in science and the discoveries scientists could make."
                ]
            },
            {
                title: "Finding his path",
                colour: "#50B96D",
                image: `${base}/paul/journey.jpg`,
                imageAlt: "Image representing Paul's science journey from Nigeria to Israel and Australia",
                points: [
                    "Paul originally wanted to become a medical doctor, but entering that career pathway was difficult.",
                    "He decided to pursue science so he could still contribute to solving important problems.",
                    "After completing his undergraduate studies in Nigeria, he moved to Israel for a master's degree in developmental biology.",
                    "He then came to Australia to pursue a PhD in cancer biology and experience research in a new environment.",
                    "Studying in different countries helped Paul grow as both a scientist and a person."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/paul/fruit-fly.jpg`,
                imageAlt: "Image of a fruit fly used in scientific research",
                points: [
                    "Paul studies how brain tumours develop and grow.",
                    "He uses fruit flies as models because scientists can change certain genes and observe how those changes affect cells in the brain.",
                    "Paul investigates how oxygen reaches growing tumours and how changes to this supply might influence their growth.",
                    "By understanding what makes tumours grow, scientists may discover new ways to investigate and eventually treat brain cancers."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/paul/future.jpg`,
                imageAlt: "Image representing future discoveries in cancer research",
                points: [
                    "Scientists hope research like Paul's will reveal new ways to slow the growth of brain tumours.",
                    "These discoveries are still being investigated in laboratory models and are not yet treatments for patients.",
                    "Paul knows that experiments do not always produce the results scientists expect.",
                    "He believes that asking new questions, learning from setbacks and continuing to explore are important parts of science."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Outside the laboratory, Paul enjoys playing soccer, including games with people at his research institute!",
            image: `${base}/paul/soccer.jpg`,
            imageAlt: "Image representing Paul's interest in soccer"
        },
        impact: {
            heading: "Why does his research matter?",
            image: `${base}/paul/fruit-fly.jpg`,
            imageAlt: "Fruit fly used as a model organism in cancer research",
            points: [
                "Uses fruit flies to investigate how genetic changes can cause brain cells to grow uncontrollably",
                "Explores how oxygen supply and surrounding cells affect brain tumour growth",
                "Could help scientists identify new ways to investigate and slow brain cancers in the future"
            ]
        },
        adviceHeading: "Paul's advice",
        advice: [
            "If you want change, be part of the solution.",
            "Don't give up when an experiment doesn't work. Unexpected results can help you learn!",
            "Keep asking questions. Science teaches you to be curious, persistent and resilient."
        ]
    },
    {
        name: "Juliana",
        role: "Vascular Biology Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Vascular biology research at Peter MacCallum Cancer Centre, Melbourne",
        portrait: `${base}/juliana/portrait.jpg`,
        portraitAlt: "Juliana, Vascular Biology Researcher",
        back: {
            superpower: "Using zebrafish to test potential medicines for abnormal blood vessels!",
            coolFact: "Juliana grew up in rural Brazil and was the first in her family to attend university!",
            impact: "Her research could help scientists discover new treatments for blood vessel malformations.",
            lesson: "Education opens doors - keep going, even if it's hard."
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/juliana/portrait.jpg`,
                imageAlt: "Portrait of Juliana today",
                points: [
                    "Juliana grew up in a small farming community in Brazil with around 3,000 people.",
                    "She was the first person in her family to attend university.",
                    "Her interest in science grew from seeing how it could help people and connect to farming and everyday life."
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${base}/juliana/school.jpg`,
                imageAlt: "Image representing Juliana's school experiences in Brazil",
                points: [
                    "Juliana loved learning, but she did not find maths easy at school.",
                    "Coming from a rural community, she had to adapt as she pursued studies in larger cities.",
                    "She also worked on her English because scientists from different countries often share their discoveries in English."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/juliana/journey.jpg`,
                imageAlt: "Image representing Juliana's journey from Brazil to Australia",
                points: [
                    "Juliana studied biotechnology and later completed a master's degree in molecular biology in São Paulo, Brazil.",
                    "She was offered a scholarship to continue researching at the University of Melbourne.",
                    "She joined a team studying blood vessels at Peter MacCallum Cancer Centre.",
                    "Moving to Australia during the COVID-19 pandemic was stressful, but she continued pursuing science."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/juliana/zebrafish.jpg`,
                imageAlt: "Zebrafish used to study how blood vessels develop",
                points: [
                    "Juliana studies vascular malformations - blood vessels that form or develop abnormally, sometimes because of changes in DNA.",
                    "She uses zebrafish to investigate blood vessel development and test potential medicines.",
                    "By observing how the fish respond, researchers can identify promising ideas for further study.",
                    "Findings in zebrafish are an early step and do not automatically mean a medicine will work in people."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/juliana/future.jpg`,
                imageAlt: "Image representing the future of biomedical research and medicine development",
                points: [
                    "Juliana is interested in working in the pharmaceutical industry.",
                    "She wants to learn more about turning scientific discoveries into useful medicines and products.",
                    "Her journey shows that being open to new experiences can create opportunities you never expected."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Juliana loves dancing, spending time with friends and discovering good food, especially chicken parma! She enjoys fantasy books and watching dramas, and she has been keen to try salsa classes and learn new languages.",
            image: `${base}/juliana/dancing.jpg`,
            imageAlt: "Image representing Juliana's love of dancing"
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/juliana/zebrafish.jpg`,
            imageAlt: "Zebrafish used in vascular biology research",
            points: [
                "Investigates how genetic changes can affect the way blood vessels develop",
                "Uses zebrafish to test whether potential medicines change abnormal blood vessel growth",
                "Could help researchers identify new treatment options for people with vascular malformations"
            ]
        },
        adviceHeading: "Juliana's advice",
        advice: [
            "Education opens doors - keep going, even if it's hard.",
            "Try new things and make choices based on your own experiences.",
            "Your background does not have to limit where science can take you."
        ]
    },
    {
        name: "Asha",
        role: "Cancer Genomics Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Cancer research at WEHI and RMIT University, Melbourne",
        portrait: `${base}/asha/portrait.jpg`,
        portraitAlt: "Portrait of Asha",
        back: {
            superpower: "Investigating DNA and immune cells to understand ovarian cancer!",
            coolFact: "Asha once worked as a cleaner at a research institute before becoming a researcher there!",
            impact: "Their research could help doctors choose more suitable cancer treatments for patients.",
            lesson: "Understanding how something works is the first step to fixing it."
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/asha/portrait.jpg`,
                imageAlt: "Portrait of Asha today",
                points: [
                    "Asha was born in Singapore and moved to Melbourne, Australia, in Year 8.",
                    "Growing up in a Singaporean-Indian family, Asha experienced different cultures and communities.",
                    "Asha identifies as biracial and non-binary, showing that scientists come from many different backgrounds.",
                    "They enjoyed understanding how things worked and developed an interest in biology."
                ]
            },
            {
                title: "Discovering science",
                colour: "#E9B400",
                image: `${base}/asha/theatre.jpg`,
                imageAlt: "Image representing Asha's interest in theatre",
                points: [
                    "Asha enjoyed biology at school because they liked learning how living things work.",
                    "They also loved theatre and volunteered backstage during school productions.",
                    "For a long time, Asha was unsure what career they wanted.",
                    "They discovered that enjoying creative activities and being interested in science did not have to be separate things."
                ]
            },
            {
                title: "Finding their path",
                colour: "#50B96D",
                image: `${base}/asha/laboratory.jpg`,
                imageAlt: "Image representing laboratory research at WEHI",
                points: [
                    "While studying at university, Asha worked as a cleaner at WEHI, a medical research institute in Melbourne.",
                    "They became interested in the science happening around them and later gained experience as a research assistant.",
                    "Asha completed honours research and went on to pursue a PhD.",
                    "Their journey shows that opportunities in science can come from unexpected places!"
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/asha/ovarian-cancer.jpg`,
                imageAlt: "Image representing cancer cells and genetic research",
                points: [
                    "Asha researched ovarian cancer, a disease in which abnormal cells grow in the ovaries.",
                    "They contributed to a clinical trial study involving 114 women receiving different combinations of cancer medicines.",
                    "Asha investigated tumour samples, including DNA changes and immune activity, to help understand differences between patients.",
                    "The research could help scientists identify which treatments might work best for different people."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/asha/clinical-trials.jpg`,
                imageAlt: "Image representing clinical trials and healthcare research",
                points: [
                    "Asha is interested in moving from laboratory research into roles that support clinical trials.",
                    "Clinical trials are studies that investigate how safe and effective medical treatments are for people.",
                    "They hope to use their experience with scientific research and data to support work that could help patients.",
                    "Asha's story shows that STEM offers many different careers, including important roles outside the laboratory."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Outside science, Asha loves making chainmail jewellery and crafts by connecting lots of small metal rings! They also enjoyed theatre and helping backstage during school productions.",
            image: `${base}/asha/chainmail.jpg`,
            imageAlt: "Handmade chainmail jewellery created by connecting metal rings"
        },
        impact: {
            heading: "Why does their research matter?",
            image: `${base}/asha/ovarian-cancer.jpg`,
            imageAlt: "Image representing DNA and ovarian cancer research",
            points: [
                "Investigates genetic changes and immune activity in ovarian cancer",
                "Helps scientists understand why different patients respond differently to cancer medicines",
                "Could guide more personalised treatment decisions in the future, although further research is needed"
            ]
        },
        adviceHeading: "Asha's advice",
        advice: [
            "Follow what you're genuinely interested in, even if it takes you in an unexpected direction.",
            "Do not be afraid to try different things and discover what you enjoy!",
            "Understanding how something works is the first step to fixing it.",
            "You don't have to follow exactly the same path as everyone else."
        ]
    },
    {
        name: "Meagan",
        role: "Marsupial Biology Researcher",
        subtitle: "GTAC STEM Coach",
        organisation: "Genetics, immunology and marsupial research in Melbourne",
        portrait: `${base}/meagan/portrait.jpg`,
        portraitAlt: "Meagan, Marsupial Biology Researcher",
        back: {
            superpower: "Using genetics and immunology to understand marsupials and help protect wildlife!",
            coolFact: "A Year 10 genetics project helped Meagan discover what she wanted to study!",
            impact: "Her research interests could help scientists better understand and protect marsupials.",
            lesson: "Science starts with curiosity about the world around you!"
        },
        timeline: [
            {
                title: "Curious beginnings",
                colour: "#F43559",
                image: `${base}/meagan/portrait.jpg`,
                imageAlt: "Portrait of Meagan today",
                points: [
                    "Meagan grew up in Minnesota, USA, and enjoyed exploring science from a young age.",
                    "Her father was an engineer who encouraged her interest in science, technology and mathematics.",
                    "As a child, she loved experimenting with science kits and discovering how things worked.",
                    "She was naturally curious and wanted to understand the world around her."
                ]
            },
            {
                title: "Challenges in school",
                colour: "#E9B400",
                image: `${base}/meagan/genetics.jpg`,
                imageAlt: "Image representing genetics and Punnett squares",
                points: [
                    "Meagan enjoyed biology and maths at school.",
                    "In Year 10, she completed a genetics project using Punnett squares, which help predict how traits can be inherited.",
                    "This project sparked her interest in genetics and helped her decide what she wanted to study.",
                    "She also found making friends challenging at times, especially because her family moved several times."
                ]
            },
            {
                title: "Finding her path",
                colour: "#50B96D",
                image: `${base}/meagan/university.jpg`,
                imageAlt: "Image representing Meagan's studies in Australia",
                points: [
                    "Meagan moved from the USA to Australia to study biomedical science at the University of Melbourne.",
                    "She focused on genetics, the study of DNA and how traits are passed from parents to offspring.",
                    "She continued into research, developing knowledge of immunology - the study of the immune system.",
                    "Her interests eventually brought her towards the biology of Australian marsupials."
                ]
            },
            {
                title: "Research with an impact",
                colour: "#4F71CB",
                image: `${base}/meagan/dunnart.jpg`,
                imageAlt: "Fat-tailed dunnart, a small Australian marsupial",
                points: [
                    "Meagan is interested in the biology and immune systems of marsupials, including the fat-tailed dunnart.",
                    "Marsupials give birth to very tiny young that continue much of their development after birth, often in a pouch.",
                    "Scientists study dunnarts to better understand how marsupials grow and develop.",
                    "Dunnarts are also closely related to the extinct thylacine, or Tasmanian tiger. Research on living marsupials could help scientists develop future conservation technologies."
                ]
            },
            {
                title: "Looking to the Future",
                colour: "#00A7B8",
                image: `${base}/meagan/conservation.jpg`,
                imageAlt: "Image representing wildlife conservation",
                points: [
                    "Meagan hopes to return to the USA and use her scientific knowledge to help protect wildlife.",
                    "She is particularly interested in conservation within her Native American community, including animals such as bats and bears.",
                    "She also wants to support education and create more opportunities for Native American students.",
                    "Her goal is to use science to help both wildlife and the communities she cares about."
                ]
            }
        ],
        hobbies: {
            heading: "Hobbies and interests",
            text: "Meagan enjoys acrobatics and circus sports! She has also tried soccer, athletics, basketball, ice hockey, and speech and debate.",
            image: `${base}/meagan/acrobatics.jpg`,
            imageAlt: "Image representing Meagan's interest in acrobatics",
            photos: [
                {
                    image: `${base}/meagan/acrobatics.jpg`,
                    imageAlt: "Acrobatics activity",
                    caption: "Acrobatics"
                },
                {
                    image: `${base}/meagan/ice-hockey.jpg`,
                    imageAlt: "Ice hockey activity",
                    caption: "Ice hockey"
                }
            ]
        },
        impact: {
            heading: "Why does her research matter?",
            image: `${base}/meagan/dunnart.jpg`,
            imageAlt: "Fat-tailed dunnart used in marsupial research",
            points: [
                "Helps scientists understand how tiny marsupials grow and how their bodies develop",
                "Supports research into the biology of Australian marsupials and ways to conserve them",
                "Research on living relatives of the thylacine could help scientists develop technologies for conservation and possible future de-extinction research"
            ]
        },
        adviceHeading: "Meagan's advice",
        advice: [
            "Science is all around you! Start by asking questions about things you find interesting.",
            "Try small investigations at home, such as exploring how different conditions affect a growing plant.",
            "Don't just watch what happens - try to understand why it happens!",
            "If you cannot find an answer, that might be the perfect opportunity to investigate."
        ]
    }
];
