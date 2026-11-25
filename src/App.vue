<script setup>
import {useRoute} from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';

const route = useRoute();
</script>

<template>
  <SiteHeader v-if="route.meta.header !== false" />
  <RouterView />
</template>
