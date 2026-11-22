/* ==================================================
   CLASSROOM LANGUAGE FILTER
   Loads the encoded word list (public/cypher.txt) once, then lets any
   component check student text. While the list loads, `loading` is true
   so text fields can disable themselves.
   ================================================== */

import { ref } from 'vue';

const WORD_LIST_URL = `${import.meta.env.BASE_URL}cypher.txt`;

let blockedEntries = [];
let loadPromise = null;

const ready = ref(false);
const loading = ref(false);

function caesarCipher(text, shift) {
  return text
    .split('')
    .map((character) => {
      if (!/[a-z]/i.test(character)) return character;

      const code = character.charCodeAt(0);
      const base = code >= 65 && code <= 90 ? 65 : 97;

      return String.fromCharCode(((code - base + shift + 26) % 26) + base);
    })
    .join('');
}

function normaliseForProfanityCheck(text) {
  return String(text)
    .toLowerCase()
    .replace(/[@4]/g, 'a')
    .replace(/[3]/g, 'e')
    .replace(/[1!|]/g, 'i')
    .replace(/[0]/g, 'o')
    .replace(/[$5]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function loadWordList() {
  loading.value = true;

  try {
    const response = await fetch(WORD_LIST_URL);

    if (!response.ok) {
      throw new Error(`Could not fetch ${WORD_LIST_URL}. HTTP status: ${response.status}`);
    }

    const decodedText = caesarCipher(await response.text(), -3);

    blockedEntries = decodedText
      .split(/\r?\n/)
      .map((entry) => {
        const trimmedEntry = entry.trim();
        const hasWildcard = trimmedEntry.endsWith('*');
        const withoutWildcard = hasWildcard ? trimmedEntry.slice(0, -1) : trimmedEntry;
        const cleanedEntry = normaliseForProfanityCheck(withoutWildcard);

        return hasWildcard ? `${cleanedEntry}*` : cleanedEntry;
      })
      .filter(Boolean);

    ready.value = true;
  } catch (error) {
    ready.value = false;
    console.error('Classroom language filter failed to load:', error);
  } finally {
    loading.value = false;
  }
}

function containsProfanity(text) {
  if (!ready.value) return false;

  const normalisedText = normaliseForProfanityCheck(text);
  if (normalisedText === '') return false;

  const words = normalisedText.split(/\s+/).filter(Boolean);

  return blockedEntries.some((blockedEntry) => {
    if (blockedEntry.endsWith('*')) {
      const blockedStart = blockedEntry.slice(0, -1);
      return words.some((word) => word.startsWith(blockedStart));
    }

    if (blockedEntry.includes(' ')) {
      return normalisedText.includes(blockedEntry);
    }

    return words.includes(blockedEntry);
  });
}

export function useClassroomLanguageFilter() {
  loadPromise ??= loadWordList();

  return { ready, loading, containsProfanity };
}
