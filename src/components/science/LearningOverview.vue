<script setup>
const props = defineProps({
  learningObjective: { type: String, required: true } ,
  successCriteria: { type: Array, default: () => [] }
});
</script>

<template>
  <section class="learning-overview">
    <!-- Learning Objective -->
    <article class="card learning-panel learning-panel--objective">
      <p class="learning-kicker">Learning Objective</p>
      <div class="learning-objective-box">
        <strong>{{ learningObjective }}</strong>
      </div>

      <h2 class="learning-subheading">Success criteria</h2>
      <ol class="success-criteria">
        <li v-for="(itemContent, index) in successCriteria">
          <span class="success-number">{{ index + 1 }}</span>
          <span>{{ itemContent }}</span>
        </li>
      </ol>
    </article>

    <!-- Think Like a Scientist -->
    <article class="card learning-panel learning-panel--scientist">
      <p class="learning-kicker">Think Like a Scientist</p>
      <h2>See, Think, Wonder</h2>
      <p class="learning-description">
        As scientists we are all curious. We observe the world around us and ask questions about how the world
        works. A way to come up with questions is to use a thinking tool called
        <strong><em>See, Think, Wonder</em></strong
        >. Practice making observations and asking questions by following these steps:
      </p>

      <div class="stw-guide">
        <div class="stw-guide-row stw-guide-row--see">
          <strong>See</strong>
          <span>What do you notice?</span>
        </div>
        <div class="stw-guide-row stw-guide-row--think">
          <strong>Think</strong>
          <span>What do you think is happening?</span>
        </div>
        <div class="stw-guide-row stw-guide-row--wonder">
          <strong>Wonder</strong>
          <span>What questions do you have?</span>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.learning-overview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 24px;

    margin: 32px 0;
}

/* ---------- Shared learning panels ---------- */

.learning-panel {
    position: relative;

    padding: 28px;

    border-top-width: 9px;
}

.learning-panel::before {
    content: "";

    display: block;

    width: 55%;
    margin-bottom: 18px;

    border-top: 3px dashed var(--mint);
}

.learning-panel--objective {
    border-top-color: var(--orange);
}

.learning-panel--scientist {
    border-top-color: var(--purple);
}

/* ---------- Small section label ---------- */

.learning-kicker {
    margin: 0 0 16px;

    color: var(--purple);

    font-size: 0.8rem;
    font-weight: 700;

    letter-spacing: 0.08em;
    text-transform: uppercase;
}




/* ---------- Learning objective ---------- */

.learning-objective-box {
    padding: 18px;

    background: var(--soft-yellow);

    border: 2px solid var(--charcoal);
    border-radius: var(--radius-small);

    box-shadow: 0 3px 0 rgba(48, 51, 47, 0.25);

    line-height: 1.5;
}

.learning-subheading {
    margin: 22px 0 14px;

    font-size: 1rem;
}

.success-criteria {
    display: grid;
    gap: 12px;

    margin: 0;
    padding: 0;

    list-style: none;
}

.success-criteria li {
    display: flex;
    align-items: center;

    gap: 12px;

    min-height: 72px;
    padding: 14px;

    background: white;

    border: 2px solid var(--charcoal);
    border-radius: var(--radius-small);

    box-shadow: 0 3px 0 rgba(48, 51, 47, 0.25);

    line-height: 1.4;
}

.success-number {
    flex: 0 0 auto;

    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    background: var(--yellow);

    border: 2px solid var(--charcoal);
    border-radius: 50%;

    font-weight: 700;
}

/* ---------- Think like a scientist ---------- */

.learning-panel--scientist h2 {
    margin: 0 0 14px;

    font-size: 1.35rem;
}

.learning-description {
    margin: 0 0 18px;

    color: var(--muted);

    line-height: 1.6;
}

.stw-guide {
    display: grid;
    gap: 9px;
}

.stw-guide-row {
    display: grid;
    grid-template-columns: 86px 1fr;

    align-items: center;

    gap: 12px;

    padding: 10px 14px;

    border: 2px solid var(--charcoal);
    border-radius: var(--radius-small);
}

.stw-guide-row--see {
    background: var(--soft-yellow);
}

.stw-guide-row--think {
    background: var(--soft-green);
}

.stw-guide-row--wonder {
    background: var(--soft-purple);
}


/* ---------- Responsive ---------- */

@media (max-width: 800px) {
    .learning-overview {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .learning-panel {
        padding: 22px 18px;
    }

    .stw-guide-row {
        grid-template-columns: 72px 1fr;
    }
}
</style>