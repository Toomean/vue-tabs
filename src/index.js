
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

const install = (VueLib) => {
  VueLib.component(Tabs.name, Tabs);
  VueLib.component(Tab.name, Tab);
};

export { Tabs, Tab, install };
