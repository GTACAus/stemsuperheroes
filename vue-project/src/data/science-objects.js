/* =========================================================
   SCIENCE OBJECTS (DATA ONLY)
   One entry per object on the Science is All Around Us page.
   Each gets a See / Think / Wonder panel. Object-specific extras
   (e.g. the helmet's "Did you know?") are registered by id in
   ScienceAroundUsView.vue.
   ========================================================= */

const images = `${import.meta.env.BASE_URL}assets/images/science/`;

export const scienceObjects = [
  {
    id: 'helmet',
    name: 'Helmet',
    image: `${images}helmet.png`,
    imageAlt: 'Helmet',
    observationImages: [
      { src: `${images}helmet-observation-1.jpg`, alt: 'Person wearing a safety helmet' },
      { src: `${images}helmet-observation-2.jpg`, alt: 'Person wearing a sports helmet' },
      { src: `${images}helmet-observation-3.jpg`, alt: 'Cyclist wearing a helmet' },
      { src: `${images}helmet-observation-4.jpg`, alt: 'Skateboarder wearing a helmet' },
    ],
    placeholders: {
      see: 'Type what you see...',
      think: 'Type what you think...',
      wonder: 'Type what you wonder...',
    },
  },
  {
    id: 'bread',
    name: 'Bread',
    image: `${images}bread.jpg`,
    imageAlt: 'Bread',
    observationImages: [
      { src: `${images}bread-observation-1.jpg`, alt: 'White bread' },
      { src: `${images}bread-observation-2.jpg`, alt: 'Baguette' },
      { src: `${images}bread-observation-3.jpg`, alt: 'Croissant' },
      { src: `${images}bread-observation-4.jpg`, alt: 'Sourdough' },
    ],
    placeholders: {
      see: 'Type something you see...',
      think: 'Type what you think...',
      wonder: 'Type what you wonder...',
    },
  },
  {
    id: 'sunscreen',
    name: 'Sunscreen',
    image: `${images}sunscreen.jpg`,
    imageAlt: 'Sunscreen',
    // Placeholder: these are still the bread photos from the original page.
    observationImages: [
      { src: `${images}bread-observation-1.jpg`, alt: 'White bread' },
      { src: `${images}bread-observation-2.jpg`, alt: 'Baguette' },
    ],
    placeholders: {
      see: 'Type something you see...',
      think: 'Type what you think...',
      wonder: 'Type what you wonder...',
    },
  },
];
