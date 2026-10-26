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
