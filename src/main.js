/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
/* eslint-enable import/no-extraneous-dependencies */
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
