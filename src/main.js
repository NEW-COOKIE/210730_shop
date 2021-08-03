import Vue from 'vue'
import App from './App.vue'

import "lib-flexible";

import router from './router/index.js';
import Herder from './components/Header/Header.vue';
import store from './vuex/store.js';
Vue.config.productionTip = false

Vue.component('Herder', Herder);

new Vue({
  render: h => h(App),

  router,

  store
}).$mount('#app')
