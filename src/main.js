import Vue from 'vue';
import Default from '@/layouts/Default.vue';
import NoTitlebar from '@/layouts/NoTitlebar.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import './plugins/axios';
import './plugins/lodash';

Vue.component('default-layout', Default);
Vue.component('without-titlebar-layout', NoTitlebar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
