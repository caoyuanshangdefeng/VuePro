import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)




// 2.创建对象
// Vuex有个属性叫Store,注意S为大写
  const state= {
  // 这些状态都是响应式地
  counter: 1000,
  students: [
    { id: 110, name: 'zhangsan', age: 16 },
    { id: 111, name: 'lisi', age: 27 },
    { id: 112, name: 'wangwu', age: 18 },
    { id: 113, name: 'maliu', age: 29 },
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98

  }
}
const store = new Vuex.Store({
  state:state,
  // es6 : state

  mutations,
  actions, 
  getters, 

  modules: {
    a:moduleA

  }

})






// 3.导出Store独享
export default store


