import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const tmi = require('tmi.js');

window.client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['saintrafix']
});

window.client.connect();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
