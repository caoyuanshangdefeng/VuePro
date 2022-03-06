// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 将创建的router实例进行挂载
import router from './router'

Vue.config.productionTip = false

// vue的原型方法示例,意味着
// Vue.prototype.test=function(){
//   console.log('test');

// }
// Vue.prototype.name='xiaoha'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})


console.log(router);