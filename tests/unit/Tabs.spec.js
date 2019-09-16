
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';

import Tab from '@/components/Tab.vue';
import Tabs from '@/components/Tabs.vue';

const localVue = createLocalVue();

localVue.component('tab', Tab);

describe('Tab.vue', () => {
  it('does not render anything when slot are not passes', () => {
    const wrapper = shallowMount(Tabs);

    expect(wrapper.html()).toBe(undefined);
  });

  it('renders passed tabs correctly', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
            <tab title="tab-1"><div>tab-1-content</div></tab>
            <tab title="tab-2"><div>tab-2-content</div></tab>
            <tab title="tab-3"><div>tab-3-content</div></tab>
            <tab title="tab-4"><div>tab-4-content</div></tab>
        `,
      },
      localVue,
    });

    expect(wrapper).toMatchSnapshot();
  });
});
