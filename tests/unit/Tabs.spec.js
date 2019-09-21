
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';

import Tab from '@/components/Tab.vue';
import Tabs from '@/components/Tabs.vue';

const localVue = createLocalVue();

localVue.component('tab', Tab);

describe('Tab.vue', () => {
  it('does not render anything when slot is not passed', () => {
    const wrapper = shallowMount(Tabs);

    expect(wrapper.html()).toBe(undefined);
  });

  describe('Rendering', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
            <tab title="tab-1"><div>tab-1-content</div></tab>
            <tab title="tab-2"><div>tab-2-content</div></tab>
            <tab title="tab-3"><div>tab-3-content</div></tab>
            <tab title="tab-4"><div>tab-4-content</div></tab>
            <div title="tab-5"><div>tab-5-content</div></div>
        `,
      },
      localVue,
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('doesn\'t render non-tab components', () => {
      expect(wrapper.vm.getTabs().length).toBe(4);
    });

    it('returns right tabs array length', () => {
      expect(wrapper.vm.getTabsLength()).toBe(4);
    });

    describe('Tabs navigation clicks', () => {
      const tabItems = wrapper.findAll('.vue-tabs__nav-item');

      for (let i = 0; i < tabItems.length; i += 1) {
        it('Switches tabs correctly', () => {
          wrapper.findAll('.vue-tabs__nav-item').at(i).trigger('click');

          expect(wrapper.vm.activeIndex).toBe(i);
          expect(tabItems.at(i).classes()).toContain('--active');
          expect(wrapper.vm.getPanelAria(i).hidden).toBe(false);
        });
      }
    });
  });
});
