import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FirstComponent from './components/FirstComponent.vue'

Vue.config.productionTip = false

Vue.component("mineComponent",FirstComponent);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
