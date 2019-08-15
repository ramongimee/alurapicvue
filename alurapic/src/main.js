import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VuewRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';

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
