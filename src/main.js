import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './styles/build_styles.css';
import './styles/expert-profile.css';

createApp(App).use(router).mount('#app');
