<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Button from '@/components/Button.vue';

const open = ref(false);
const route = useRoute();
const links = [
  { to: '/', label: 'Home' },
  { to: '/science-around-us', label: 'Science Around Us' },
  { to: '/local-stem-experts', label: 'STEM Experts' },
];
// Close the mobile menu after every navigation.
watch(() => route.path, () => { open.value = false; });
</script>

<template>
  <div class="header-wrapper" @keydown.esc="open = false">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header>
      <RouterLink id="home" to="/">GTAC STEM</RouterLink>
      <Button
        class="nav-toggle"
        type="button"
        :aria-label="open ? 'Close navigation' : 'Open navigation'"
        aria-controls="site-navigation"
        :aria-expanded="String(open)"
        @click="open = !open"
      >
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </Button>
      <nav class="site-nav" :class="{ open }" id="site-navigation" aria-label="Main navigation">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="open = false">
          {{ link.label }}
        </RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: var(--cream);
  border-bottom: 1px solid rgba(48,51,47,.18);
}
header {
  width: min(var(--content-width), 94%);
  margin: 0 auto;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
header a { color: var(--text); text-decoration: none; }
header a:hover { color: var(--purple); }
header #home { color: var(--purple); font-weight: 800; font-size: 1.45rem; white-space: nowrap; }
header nav { display: flex; align-items: center; gap: 8px; }
header nav a {
  padding: 9px 13px;
  border-radius: 999px;
  font-size: .96rem;
  font-weight: 700;
  line-height: 1.3;
}
header nav a:hover { background: var(--soft-purple); }
header nav a.router-link-exact-active { background: var(--soft-green); color: var(--charcoal); }
.skip-link {
  position: absolute;
  top: -100px;
  left: 12px;
  z-index: 1001;
  padding: 12px 16px;
  background: var(--yellow);
  border: 2px solid var(--charcoal);
  border-radius: 12px;
  color: var(--charcoal);
  font-weight: 800;
}
.skip-link:focus { top: 10px; }
.nav-toggle {
  --padding: 0;
  --background: var(--paper);
  --box-shadow: none;
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
}
.nav-toggle-bar { display: block; margin: 0 20%; height: 3px; background: var(--charcoal); border-radius: 2px; }
@media (max-width: 750px) {
  .nav-toggle { display: flex; }
  header .site-nav {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3px;
    position: absolute;
    top: calc(100% + 6px);
    left: 3%; right: 3%;
    padding: 12px;
    background: var(--paper);
    border: 2px solid var(--charcoal);
    border-radius: var(--radius-medium);
    box-shadow: var(--shadow-small);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    pointer-events: none;
    transition: opacity .18s ease, transform .18s ease;
  }
  header .site-nav.open { opacity: 1; visibility: visible; transform: none; pointer-events: auto; }
  header .site-nav a { padding: 13px 14px; }
}
@media (prefers-reduced-motion: reduce) {
  header .site-nav { transition: none; }
}
</style>
