<template>
  <div id="app">
    <tabs transitionName="fade">
      <tab :title="'Tab1'">
        <h1>Tab 1 content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
      </tab>
      <tab :title="'Tab2'" v-if="!hide">
        <h1>Tab 2 content</h1>
        <p>Inventore provident enim eos sint, alias dicta,
          totam in quo laborum aspernatur officiis.</p>
      </tab>
      <tab :title="'Tab3'">
        <h1>Tab 3 content</h1>
        <p>Quis harum dicta, facere incidunt suscipit voluptatum!</p>
      </tab>
      <tab :title="'Tab4'">
        <h1>Tab 4 content</h1>
        <p>Some example content!</p>
      </tab>
    </tabs>

    <button @click="toggleHide">Toggle hide</button>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

export default {
  name: 'app',
  components: {
    Tabs,
    Tab,
  },
  data() {
    return {
      hide: false,
    };
  },
  methods: {
    toggleHide() {
      this.hide = !this.hide;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
