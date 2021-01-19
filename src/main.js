import { createApp } from 'vue';
// import App from './App.vue';
import Base from './layout/Base.vue';
import router from './router';

createApp(Base).use(router).mount('#app')
