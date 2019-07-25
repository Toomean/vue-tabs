
<script>
export default {
  name: 'vue-tabs-container',

  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      activeIndex: this.defaultIndex,
    };
  },

  computed: {
    tabs() {
      return this.$slots.default
        .filter(({ tag }) => tag === 'vue-component-2-vue-tabs-item');
    },
    tabsNavigation() {
      return this.tabs
        .map(({ componentOptions }, index) => {
          const { title } = componentOptions.propsData;

          return (
            <div
              class="vue-tabs__nav-item"
              role="tab"
              aria-selected="false"
              aria-controls={index}
              onClick={ e => this.switchTab(e, index) }
            >
              {title}
            </div>
          );
        });
    },
    tabsNavWrapper() {
      return (
        <div
          class="vue-tabs__nav"
          role="tablist"
        >
          {this.tabsNavigation}
        </div>
      );
    },
    tabsContent() {
      return (
        <div
          class="vue-tabs__content"
          role="tabpanel"
        >
          <transition name="fade" mode="out-in">
            <div key={this.activeIndex}>
              {this.tabs[this.activeIndex]}
            </div>
          </transition>
        </div>
      );
    },
  },

  methods: {
    switchTab(e, index) {
      this.activeIndex = index;
    },
  },

  render() {
    return (
      <div class="vue-tabs">
        {this.tabsNavWrapper}
        {this.tabsContent}
      </div>
    );
  },
};
</script>

<style lang="scss">

.vue-tabs {
  &__nav {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
  &__nav-item {

  }
  &__content {

  }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
