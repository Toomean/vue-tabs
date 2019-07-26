
<script>
export default {
  name: 'vue-tabs-container',

  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
    transitionName: {
      type: String,
      default: '',
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
    tabNav() {
      return this.tabs
        .map(({ componentOptions }, index) => {
          const { title } = componentOptions.propsData;

          return (
            <button
              class={ this.getTabClasses(index) }
              attrs={ this.getTabAria(index) }
              onClick={ e => this.switchTab(e, index) }
            >
              { title }
            </button>
          );
        });
    },
    tabList() {
      return (
        <div
          class="vue-tabs__nav"
          role="tablist"
        >
          { this.tabNav }
        </div>
      );
    },
    tabPanels() {
      return this.tabs
        .map((panel, index) => (
          <div
            class="vue-tabs__panel"
            key={index}
            attrs={ this.getPanelAria(index) }
          >
            { panel }
          </div>
        ));
    },
  },

  methods: {
    switchTab(e, index) {
      this.activeIndex = index;
    },
    isTabActive(index) {
      return this.activeIndex === index;
    },
    getTabClasses(index) {
      return [
        'vue-tabs__nav-item',
        { '--active': this.isTabActive(index) },
      ];
    },
    getTabAria(index) {
      return {
        role: 'tab',
        tabindex: !this.isTabActive(index) && -1,
        'aria-selected': this.isTabActive(index) ? 'true' : 'false',
        'aria-controls': `tab-${index}`,
      };
    },
    getPanelAria(index) {
      return {
        role: 'tabpanel',
        tabindex: 0,
        hidden: this.activeIndex !== index,
        'aria-labelledby': `tab-${index}`,
      };
    },
  },

  render() {
    return (
      <div class="vue-tabs">
        { this.tabList }
        <transition name={ this.transitionName } mode="out-in">
          <div key={ this.activeIndex }>
            { this.tabPanels }
          </div>
        </transition>
      </div>
    );
  },
};
</script>

<style lang="scss">
.vue-tabs {
  $bl: '.vue-tabs';

  #{$bl}__nav {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
  #{$bl}__nav-item {
  }
  #{$bl}__panel {
    &[hidden="hidden"] {
      display: none;
    }
  }
  #{$bl}__panel-container {
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
