<script setup>
import { ref, useTemplateRef } from 'vue';
import { useClassroomLanguageFilter } from '../../composables/useClassroomLanguageFilter.js';

defineProps({
  placeholder: String,
  ariaLabel: String,
});

const { ready, loading, containsProfanity } = useClassroomLanguageFilter();

const inputEl = useTemplateRef('input');
const text = ref('');
const entries = ref([]);
let nextId = 0;

function showBlockedLanguageFeedback() {
  const input = inputEl.value;
  text.value = '';

  input.setCustomValidity('Please use appropriate classroom language.');
  input.reportValidity();
  input.focus();

  window.setTimeout(() => input.setCustomValidity(''), 2000);
}

function save() {
  const value = text.value.trim();
  if (value === '') return;

  // Entries are rejected until the word list has loaded (or if it failed to load).
  if (!ready.value) {
    inputEl.value.focus();
    return;
  }

  if (containsProfanity(value)) {
    showBlockedLanguageFeedback();
    return;
  }

  entries.value.push({ id: nextId++, text: value });
  text.value = '';
}

function remove(id) {
  entries.value = entries.value.filter((entry) => entry.id !== id);
}
</script>

<template>
  <div class="student-entry-area">
    <input
      ref="input"
      v-model="text"
      class="student-entry-input"
      type="text"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      :disabled="loading"
      :aria-busy="loading ? 'true' : undefined"
      @keydown.enter.prevent="save"
      @blur="save"
    />

    <ul class="student-entry-list">
      <li v-for="entry in entries" :key="entry.id">
        <span>{{ entry.text }}</span>
        <button
          class="delete-answer"
          type="button"
          :aria-label="`Delete ${entry.text}`"
          @click="remove(entry.id)"
        >
          ×
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

/* ==================================================
   STUDENT ENTRY BOXES
   ================================================== */

.student-entry-area {
    margin-top: 18px;
}

.student-entry-input {
    width: 100%;
    padding: 14px 16px;

    background: white;
    color: var(--text);

    border: 2px solid var(--charcoal);
    border-radius: var(--radius-small);

    font-family: inherit;
    font-size: 1rem;
}

.student-entry-input:focus {
    outline: 3px solid rgba(78, 50, 232, 0.2);
    border-color: var(--purple);
}

.student-entry-list {
    display: grid;
    gap: 10px;

    margin: 14px 0 0;
    padding: 0;

    list-style: none;
}

.student-entry-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    padding: 10px 12px 10px 16px;

    background: white;

    border: 2px solid var(--charcoal);
    border-radius: var(--radius-small);

    line-height: 1.4;
}

.delete-answer {
    flex: 0 0 auto;

    width: 30px;
    height: 30px;

    display: grid;
    place-items: center;

    padding: 0;

    background: var(--soft-orange);
    color: var(--charcoal);

    border: 2px solid var(--charcoal);
    border-radius: 50%;

    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1;

    cursor: pointer;
}

.delete-answer:hover {
    background: var(--orange);
}
</style>
