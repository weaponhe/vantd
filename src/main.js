import Vue from 'vue'
import App from './App.vue'
import Button from './components/button/button.vue'

Vue.component('v-button', Button)
new Vue({
    el: '#app',
    render: h => h(App)
})
