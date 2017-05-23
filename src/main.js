// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false
Vue.directive('myCss', {
  inserted(el, binding) {
    console.log('inserted');
    console.log(el, binding);
    let styleObj = binding.value;
    let arr = []
    for (let key in styleObj) {
      arr.push(key + ':' + styleObj[key])
    };
    arr = arr.join(';');
    el.style.cssText = arr;
  },
  bind(el, binding) {
    console.log('bind');
    console.log(el, binding);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //router:router的简写
  store,
  template: '<App/>',
  components: { App }
})
