# vue-tabs [![Build Status](https://travis-ci.com/Toomean/vue-tabs.svg?branch=master)](https://travis-ci.com/Toomean/vue-tabs) [![Coverage Status](https://coveralls.io/repos/github/Toomean/vue-tabs/badge.svg?branch=master)](https://coveralls.io/github/Toomean/vue-tabs?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

The main idea of this package is to have a standalone tabs component that provides CSS classes to make it fit your project's style guide.
Supports [WAI ARIA for tabs with automatic activation](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html)

## Install 

```bash
$ npm install vue-tmn-tabs
```

```bash
$ yarn add vue-tmn-tabs
```

## Register components

The most common way is to register components globally
```js
import Vue from 'vue';
import { Tab, Tabs } from 'vue-tmn-tabs';

Vue.component('tab', Tab);
Vue.component('tabs', Tabs);
```

You can also do this locally
```js
import { Tabs, Tab } from 'vue-tmn-tabs';

export default {
    components: {
        Tab,
        Tabs,
    },
};
```

## Add styling

```css
.vue-tabs {
}

.vue-tabs__nav {
    display: flex;
    align-items: baseline;
}

.vue-tabs__nav-item {
}

.vue-tabs__nav-item.--active {
}

.vue-tabs__panel {
}

.vue-tabs__panel[hidden="hidden"] {
    display: none;
}

.vue-tabs__panel-container {
}
```

## Use components in your project

```html
<tabs transitionName="fade">
    <tab :title="'Tab1'">
        <h1>Tab 1 content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
    </tab>
    <tab :title="'Tab2'">
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
```

## Props
### Tab
Tab component has 1 prop and default slot:

- title - defines the title of a tab;
- slot - you can pass content into it.

### Tabs
Tabs component has 3 props:

- defaultIndex - defines default active tab index;
- transitionName - transition name for tabs change animation;
- ariaLabelValue - is used to define a string that labels the current element
