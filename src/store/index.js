import Vue from 'vue';
import Vuex from 'vuex';
import account from './account';
import product from './product';

console.log('vue', Vue)

Vue.use(Vuex);

export default new Vuex.Store({
        modules: {
            account,
            product
        },
        strict: process.env.DEV
    });
