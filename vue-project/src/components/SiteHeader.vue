<script setup>
import { ref } from 'vue';

const open = ref(false);
const links = [
  { to: '/science-around-us', label: 'Science is All Around Us' },
  { to: '/local-stem-experts', label: 'Local STEM Experts' },
];
</script>

<template>
  <header class="site-header">
    <RouterLink to="/">GTAC STEM</RouterLink>
    <button
      class="nav-toggle"
      type="button"
      aria-label="Toggle navigation"
      aria-controls="site-navigation"
      :aria-expanded="String(open)"
      @click="open = !open"
    >
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>
    <nav class="site-nav" :class="{ open }" id="site-navigation">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="open = false">
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>
