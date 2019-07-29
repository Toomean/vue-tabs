// import Vue from 'vue';
// import App from './App.vue';

import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

const install = (VueLib) => {
  VueLib.component(Tabs.name, Tabs);
  VueLib.component(Tab.name, Tab);
};

export { Tabs, Tab, install };
