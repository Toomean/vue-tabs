
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
    ariaLabelValue: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      activeIndex: this.defaultIndex,
    };
  },

  methods: {
    getTabs() {
      return this.$slots.default
        ? this.$slots.default
          .filter(({ tag }) => tag && tag.includes('vue-tabs-item'))
        : [];
    },
    getTabsLength() {
      return this.getTabs().length;
    },
    renderTabNav() {
      return this.getTabs()
        .map(({ componentOptions }, index) => {
          const { title } = componentOptions.propsData;

          return (
            <button
              class={ this.getTabClasses(index) }
              attrs={ this.getTabAria(index) }
              onClick={ () => this.switchTab(index) }
              refInFor='true'
              ref='tabs'
              vOn:keyup_right={ () => this.showNextTab() }
              vOn:keyup_left={ () => this.showPrevTab() }
              vOn:keyup_36={ () => this.switchTab(0) }
              vOn:keyup_35={ () => this.switchTab(this.getTabsLength() - 1) }
            >
              { title }
            </button>
          );
        });
    },
    renderTabList() {
      return (
        <div
          class="vue-tabs__nav"
          role="tablist"
          aria-label={ this.ariaLabelValue }
        >
          { this.renderTabNav() }
        </div>
      );
    },
    renderTabPanels() {
      return this.getTabs()
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

    switchTab(index) {
      this.activeIndex = index;

      this.focusActiveTab();
    },
    focusActiveTab() {
      this.$refs.tabs[this.activeIndex].focus();
    },
    showNextTab() {
      const nextIndex = this.activeIndex + 1;

      this.switchTab(nextIndex % this.getTabsLength());
    },
    showPrevTab() {
      const prevIndex = this.activeIndex - 1 < 0
        ? this.getTabsLength() - 1
        : this.activeIndex - 1;

      this.switchTab(prevIndex);
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
        tabindex: this.isTabActive(index) ? false : -1,
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
    if (!this.getTabs().length) {
      return (null);
    }

    return (
      <div class="vue-tabs">
        { this.renderTabList() }
        <transition name={ this.transitionName } mode="out-in">
          <div key={ this.activeIndex }>
            { this.renderTabPanels() }
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
}
</style>
