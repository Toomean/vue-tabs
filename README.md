# vue-tabs [![Build Status](https://travis-ci.com/Toomean/vue-tabs.svg?branch=master)](https://travis-ci.com/Toomean/vue-tabs) [![Coverage Status](https://coveralls.io/repos/github/Toomean/vue-tabs/badge.svg?branch=master)](https://coveralls.io/github/Toomean/vue-tabs?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Install 

```bash
$ npm install vue-tmn-tabs
```

```bash
$ yarn add vue-tmn-tabs
```

## Register components

```js
import Vue from 'vue';
import { Tabs, Tab } from 'vue-tmn-tabs';

Vue.component('tab', Tab);
Vue.component('tabs', Tab);
```

## Use components in your project

```html
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
```