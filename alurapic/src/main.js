import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VuewRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});
Vue.use(VueResource);
Vue.use(VuewRouter);

const router = new VuewRouter({ 
  routes,
  mode: 'history'
});

//Http usará sempre o endereço abaixo

Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
