import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const tmi = require('tmi.js');
import events from 'events-vue-allin'

window.client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['saintrafix']
});

window.client.connect();

Vue.config.productionTip = false
Vue.use(events)
new Vue({
  router,
  store,
  events,
  render: h => h(App)
}).$mount('#app')
