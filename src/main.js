import Vue from 'vue'
import App from './App.vue'
import Home from "./Home.vue"
import ServerApp from "./ServerApp.vue"

// Global component
Vue.component("app-servers", Home);

new Vue({
  el: '#app',
  render: h => h(ServerApp)
})
