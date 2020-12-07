// Import Vue
import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import values from 'object.values';

if (!Object.values) {
  values.shim();
}

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

import VueStash from 'vue-stash';
import VueResource from 'vue-resource';
import VueEvents from 'vue-events';
import { storageFactory } from 'storage-factory';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

window.localStore = storageFactory(() => localStorage);

// Import Icons and App  Custom Styles
import '../css/app.less';

// Import App Component
import App from '../components/app.vue';
import store from './store';
import pck from '../../package.json';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);
Vue.use(VueLogger, {
  isEnabled: true,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: false,
  showMethodName: false,
  separator: '|',
  showConsoleColors: true,
});
Vue.use(VueResource);
Vue.use(VueStash);
Vue.use(VueEvents);

// Init App
window.Vue = Vue;
window.$$ = Framework7.$;
window.version = pck.version;
window.app = new Vue({
  el: '#app',
  render: (h) => h(App),
  data: {
    store,
  },
  // Register App Component
  components: {
    app: App
  },
});
window.f7 = window.app.$f7;
window.store = store;
