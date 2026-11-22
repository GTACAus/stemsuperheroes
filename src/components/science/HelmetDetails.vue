<script setup>
import ThingLinkBox from './ThingLinkBox.vue';
import TrueFalseQuestion from './TrueFalseQuestion.vue';

const coffeeSpillImage = `${import.meta.env.BASE_URL}assets/images/science/coffee-spill.jpg`;
</script>

<template>
  <!-- Did you know - Helmet concepts exploration -->
  <section class="gtac-section did-you-know">
    <div class="box-title did-you-know-title">
      <span class="gtac-svg-icon did-you-know-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18h6M10 21h4" stroke="white" stroke-width="1.8" stroke-linecap="round" />

          <path
            d="M8.5 15.5C6.9 14.4 6 12.7 6 10.7
               A6 6 0 0 1 18 10.7
               C18 12.7 17.1 14.4 15.5 15.5
               C14.7 16.1 14.4 16.7 14.3 17
               H9.7
               C9.6 16.7 9.3 16.1 8.5 15.5Z"
            stroke="white"
            stroke-width="1.8"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <h3>Did you know?</h3>
    </div>

    <p>Helmets are designed using the principles of force, materials, energy, and engineering.</p>

    <p>Engineers and scientists work together to:</p>

    <ul>
      <li>test how much force a helmet can absorb</li>
      <li>study how the brain gets injured</li>
      <li>design layers that squash, spread out impact, and protect your head</li>
      <li>decide the safest shapes and materials</li>
    </ul>

    <p>
      Helmets protect your head by absorbing and spreading impact energy — just like a sponge spreads water into a
      larger area.
    </p>

    <div class="section-box try-section">
      <div class="box-title try-header">
        <span class="gtac-svg-icon gtac-svg-icon--try" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Liquid fill with wavy surface -->
            <path
              d="M6.2 14.5
                 C8 13.8 9.8 15.2 12 14.5
                 C14.2 13.8 16 15.2 17.8 14.5
                 L20.6 18.9
                 C21.1 19.8 20.45 20.86 19.4 20.86
                 H4.6
                 C3.55 20.86 2.9 19.8 3.4 18.9
                 Z"
              fill="white"
            />

            <!-- Flask outline -->
            <path
              d="M9 2v6.7L3.4 17.9a2 2 0 0 0 1.75 2.96h13.7a2 2 0 0 0 1.75-2.96L15 8.7V2"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Flask opening -->
            <path d="M7 2h10" stroke="white" stroke-width="1.7" stroke-linecap="round" />

            <!-- Wavy liquid surface -->
            <path
              d="M6.2 14.5
                 C8 13.8 9.8 15.2 12 14.5
                 C14.2 13.8 16 15.2 17.8 14.5"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <h3>Try</h3>
      </div>

      <div class="try-grid">
        <div class="try-image">
          <img
            :src="coffeeSpillImage"
            alt="A cup of coffee on a table next to a spill soaked up by a paper towel"
            loading="lazy"
          />
        </div>

        <div class="try-content">
          <p class="try-lead">Try this:</p>

          <ol class="try-steps">
            <li>Spill a little water or tea on a table.</li>
            <li>Place a paper towel over the spill.</li>
          </ol>

          <p class="try-question">What do you notice?</p>

          <p>The paper towel spreads the water out, so there is less water in one place.</p>

          <p>
            Helmets work in a similar way. They spread out the force of a hit, so the impact is less strong, and your
            head is better protected.
          </p>
        </div>
      </div>
    </div>

    <div class="section-box">
      <ThingLinkBox
        title="Click on any parts of the helmet below to learn more about them!"
        src="https://www.thinglink.com/view/scene/2105478807539417956"
      />

      <TrueFalseQuestion
        statement="If you put a helmet on without a strap, it will fly off."
        :answer="true"
        correct-message="Correct! An unstrapped helmet can slip off right when you need it most."
        incorrect-message="Not quite — an unstrapped helmet can slip or fly off, so it won't protect your head when you need it."
      />
    </div>
  </section>

  <section class="gtac-section">
    <h3>Who Helps Keep Our Heads Safe?</h3>

    <p>Did you know that several STEM experts work together to make bike helmets safe?</p>
    <p>Each expert uses different knowledge of STEM to protect your brain.</p>

    <ThingLinkBox
      wide
      title="Click on each STEM expert below to discover what they do to help design safer helmets!"
      src="https://www.thinglink.com/view/scene/2105500633380422500"
    />
  </section>
</template>

<style scoped>
.did-you-know {
  background: var(--soft-purple);
}

.did-you-know-title {
  margin-bottom: 20px;
}

.did-you-know-icon {
  background: var(--purple);
}

.did-you-know-title h3 {
  margin: 0;

  font-size: 1.5rem;
  font-weight: 700;
}

.try-section {
  border: 2px solid var(--charcoal);
  background: var(--soft-blue);
}

.try-header {
  margin-bottom: 20px;
}

.gtac-svg-icon--try {
  background: #17b3c4;
}

.try-header h3 {
  margin: 0;
}

.try-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 26px;

  align-items: start;
}

.try-image img {
  width: 100%;
  height: 100%;

  aspect-ratio: 4 / 3;
  object-fit: cover;

  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);
}

.try-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.try-lead,
.try-question {
  font-weight: 700;
}

.try-steps {
  margin: 0;
  padding-left: 22px;

  display: grid;
  gap: 6px;

  line-height: 1.6;
}

@media (max-width: 650px) {
  .try-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
