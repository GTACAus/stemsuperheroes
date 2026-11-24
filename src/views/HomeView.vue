<script setup>
/* =========================================================
   LANDING PAGE
   Uses the same source data as the two learning pages, so
   image paths and names stay in sync with the rest of the site.
   ========================================================= */
import { scienceObjects } from '@/data/science-objects.js';
import { expertCards } from '@/data/expert-cards.js';

const previewObjects = scienceObjects.slice(0, 3);
const previewExperts = expertCards.slice(0, 3);
</script>

<template>
  <main id="main-content" class="page home-page">
    <section class="home-hero" aria-labelledby="home-title">
      <p class="home-eyebrow">GTAC STEM</p>
      <h1 id="home-title">A world worth discovering</h1>
      <p>Look closely. Ask questions. Meet the people behind STEM.</p>
      <div class="home-hero-actions">
        <RouterLink class="home-button home-button--yellow" to="/science-around-us">
          Explore everyday science <span aria-hidden="true">→</span>
        </RouterLink>
        <RouterLink class="home-button home-button--light" to="/local-stem-experts">
          Meet STEM experts <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

    <section class="home-paths" aria-label="Choose your STEM adventure">
      <article class="home-path home-path--science">
        <div class="home-path-text">
          <p class="home-path-kicker">Explore · Question · Test</p>
          <h2>Science is All Around Us</h2>
          <p>Why do helmets protect us? How does bread rise? What does sunscreen do?</p>
          <RouterLink class="home-path-link" to="/science-around-us">
            Explore everyday objects <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
        <div class="home-preview-images" aria-hidden="true">
          <span v-for="object in previewObjects" :key="object.id" class="home-preview-image">
            <img :src="object.image" alt="" loading="lazy" />
          </span>
        </div>
      </article>

      <article class="home-path home-path--experts">
        <div class="home-path-text">
          <p class="home-path-kicker">People · Pathways · Possibilities</p>
          <h2>Local STEM Experts</h2>
          <p>Discover real people in STEM, what they do and how they got there.</p>
          <RouterLink class="home-path-link" to="/local-stem-experts">
            Meet the experts <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
        <div class="home-preview-images home-preview-images--experts" aria-hidden="true">
          <span v-for="expert in previewExperts" :key="expert.id" class="home-preview-image">
            <img :src="expert.portrait" alt="" loading="lazy" />
          </span>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.home-page { padding-top: 24px; }
.home-hero {
  padding: clamp(28px, 5vw, 56px) clamp(20px, 5vw, 56px);
  border: 3px solid var(--charcoal);
  border-radius: var(--radius-large);
  background: var(--purple);
  box-shadow: var(--shadow-medium);
  color: white;
  text-align: center;
}
.home-eyebrow {
  display: inline-block;
  margin: 0 0 15px;
  padding: 7px 16px;
  border: 2px solid var(--charcoal);
  border-radius: 999px;
  background: var(--yellow);
  color: var(--charcoal);
  font-size: .85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
}
.home-hero h1 {
  max-width: 800px;
  margin: 0 auto 12px;
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  line-height: 1.12;
}
.home-hero > p:not(.home-eyebrow) {
  margin: 0 auto;
  max-width: 670px;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.5;
}
.home-hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 26px;
}
.home-button,
.home-path-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  border: 2px solid var(--charcoal);
  border-radius: 14px;
  box-shadow: 0 4px 0 var(--charcoal);
  color: var(--charcoal);
  font-weight: 800;
  text-decoration: none;
  transition: transform .18s ease, box-shadow .18s ease;
}
.home-button--yellow { background: var(--yellow); }
.home-button--light { background: var(--paper); }
.home-button:hover,
.home-path-link:hover { transform: translateY(-2px); }
.home-button:active,
.home-path-link:active { transform: translateY(2px); box-shadow: none; }
.home-paths {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  margin-top: 26px;
}
.home-path {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;
  min-width: 0;
  padding: clamp(20px, 2.5vw, 30px);
  border: 3px solid var(--charcoal);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);
}
.home-path--science { background: var(--soft-blue); }
.home-path--experts { background: var(--soft-green); }
.home-path-kicker {
  margin: 0 0 10px;
  color: var(--purple);
  font-size: .8rem;
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.home-path h2 { margin: 0 0 10px; font-size: clamp(1.45rem, 2.5vw, 1.9rem); }
.home-path-text > p:not(.home-path-kicker) { margin: 0 0 18px; line-height: 1.55; }
.home-path-link { background: var(--paper); font-size: .95rem; }
.home-preview-images { display: flex; justify-content: center; gap: 12px; }
.home-preview-image {
  display: grid;
  place-items: center;
  min-width: 0;
  width: min(30%, 140px);
  aspect-ratio: 1;
  padding: 8px;
  background: var(--paper);
  border: 2px solid var(--charcoal);
  border-radius: 15px;
  overflow: hidden;
}
.home-preview-image img { width: 100%; height: 100%; object-fit: contain; }
.home-preview-images--experts .home-preview-image { padding: 0; }
.home-preview-images--experts img { object-fit: cover; }
@media (max-width: 760px) {
  .home-paths { grid-template-columns: minmax(0, 1fr); }
}
@media (max-width: 540px) {
  .home-hero-actions { flex-direction: column; align-items: stretch; }
  .home-hero-actions .home-button { width: 100%; }
  .home-page { padding-top: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .home-button, .home-path-link { transition: none; }
}
</style>
