<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';

const open = ref(false);
const links = [
  { to: '/science-around-us', label: 'Science is All Around Us' },
  { to: '/local-stem-experts', label: 'Local STEM Experts' },
];
</script>

<template>
  <header class="site-header">
    <RouterLink to="/">GTAC STEM</RouterLink>
    <Button
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
    </Button>
    <nav class="site-nav" :class="{ open }" id="site-navigation">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="open = false">
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    
    width: min(var(--content-width), 94%);
    margin: 0 auto;
    padding: 20px 10px;
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    background: var(--cream);
}

.site-header > a {
    color: var(--purple);

    font-size: 1.1rem;
    font-weight: 700;

    text-decoration: none;
}

.site-header nav {
    display: flex;
    align-items: center;
    gap: 12px;
}

.site-header nav a {
    padding: 8px 12px;

    color: var(--text);

    border-radius: var(--radius-small);

    font-weight: 600;
    text-decoration: none;
}

.site-header nav a:hover {
    background: var(--soft-purple);
}

.nav-toggle {
    --padding: 0;
    --background: var(--paper);
    --box-shadow: none;
    
    --background-hover: var(--soft-green);
    --color-hover: inherit;
    --translate-amount-hover: -2px;
    --box-shadow-hover: var(--shadow-medium);
    
    --background-active: var(--mint);
    --color-active: inherit;
    --translate-amount-active: 3px;
    --box-shadow-active: none;

    --animation: pop-fade-in 0.5s ease;

    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    width: 40px;
    height: 40px;

}

.nav-toggle-bar {
    display: block;
    margin: 0 20%;
    height: 3px;
    background: var(--charcoal);
    border-radius: 2px;
}

@media (max-width: 700px) {
    .nav-toggle {
        display: flex;
    }

    .site-header .site-nav {
        flex-direction: column;
        gap: 6px;

        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        right: 0;

        padding: 12px;

        background: var(--paper);

        border: 2px solid var(--charcoal);
        border-radius: var(--radius-medium);
        box-shadow: var(--shadow-small);

        z-index: 999;

        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);

        transition:
            opacity 0.18s ease,
            transform 0.18s ease,
            visibility 0s linear 0.18s;
    }

    .site-header .site-nav.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);

        transition:
            opacity 0.18s ease,
            transform 0.18s ease,
            visibility 0s linear 0s;
    }

    .site-nav a {
        padding: 12px 14px;
    }
}
</style>
