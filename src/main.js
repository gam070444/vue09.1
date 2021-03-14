import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Initialize Cloud Firestore through Firebase

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyAh-2KRv4nqEQitY-jRmTOj6QLvrNQhWmY",
    authDomain: "vue09-1.firebaseapp.com",
    projectId: "vue09-1",
    storageBucket: "vue09-1.appspot.com",
    messagingSenderId: "187269863045",
    appId: "1:187269863045:web:f684c18c0a0071df063bec",
  }
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')