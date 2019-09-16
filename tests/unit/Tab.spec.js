import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/Tab.vue';

describe('Tab.vue', () => {
  it('renders passed slot', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        title: 'fake',
      },
      slots: {
        default: '<div class="fake-slot">fake-slot-content</div>',
      },
    });

    expect(wrapper.text()).toBe('fake-slot-content');
    expect(wrapper.classes()).toContain('vue-tabs__panel-container');
  });
});
