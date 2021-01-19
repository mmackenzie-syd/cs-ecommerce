import Vue from 'vue';
import router from './router';
import store from './store';
import Base from './layout/Base.vue';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(Base)
}).$mount('#app')
