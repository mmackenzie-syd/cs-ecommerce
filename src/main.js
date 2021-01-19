import Vue from 'vue';
import router from './router';
import store from './store';
import Base from './layout/Base.vue';

console.log('Vue', Vue)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(Base)
}).$mount('#app')
