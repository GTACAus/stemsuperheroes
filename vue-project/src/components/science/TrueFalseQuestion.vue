<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  statement: { type: String, required: true },
  answer: { type: Boolean, required: true },
  correctMessage: { type: String, required: true },
  incorrectMessage: { type: String, required: true },
});

const selected = ref(null);
const result = ref(null); // null | 'correct' | 'incorrect'

const feedback = computed(() => (result.value === 'correct' ? props.correctMessage : props.incorrectMessage));

function choose(value) {
  selected.value = value;
  result.value = null;
}

function check() {
  if (selected.value === null) return;
  result.value = selected.value === props.answer ? 'correct' : 'incorrect';
}
</script>

<template>
  <div class="section-box tf-section">
    <p><strong>True or False:</strong> {{ statement }}</p>

    <div class="tf-options" role="radiogroup" aria-label="True or False">
      <button
        v-for="option in [true, false]"
        :key="String(option)"
        class="gtac-button tf-option"
        role="radio"
        :aria-checked="String(selected === option)"
        type="button"
        @click="choose(option)"
      >
        {{ option ? 'True' : 'False' }}
      </button>
    </div>

    <div class="tf-actions">
      <button class="gtac-button tf-check" type="button" :disabled="selected === null" @click="check">Check</button>
    </div>

    <div
      v-if="result"
      class="tf-feedback"
      :class="`tf-feedback--${result}`"
      role="status"
      aria-live="polite"
    >
      {{ feedback }}
    </div>
  </div>
</template>

<style scoped>
.tf-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tf-options {
  display: flex;
  gap: 14px;
  margin: 18px 0;
}

.tf-option {
  padding: 12px 28px;

  background: white;
  color: var(--text);

  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);

  box-shadow: var(--shadow-small);

  font-weight: 700;
  cursor: pointer;

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;
}

.tf-option:hover {
  background: var(--soft-purple);
}

.tf-option[aria-checked="true"] {
  background: var(--mint);
  transform: translateY(2px);
  box-shadow: none;
}

.tf-check[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: var(--shadow-small) !important;
}

.tf-feedback {
  margin-top: 16px;
  padding: 14px 16px;

  border: 2px solid var(--charcoal);
  border-radius: var(--radius-small);

  font-weight: 700;

  animation: pop-fade-in 0.5s ease;
}

.tf-feedback--correct {
  background: var(--soft-green);
}

.tf-feedback--incorrect {
  background: var(--soft-orange);
}
</style>
