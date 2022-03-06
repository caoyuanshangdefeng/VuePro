
import { INCREMENT } from './mutations-types'

export default {
  //定义方法的,执行increment时默认有state参数
  [INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  // incrementCount(state,count){
  //   state.counter+=count

  // },
  incrementCount(state, payload) {
    state.counter += payload.count

  },
  addStudent(state, stuCont) {
    state.students.push(stuCont)
  },
  modifyInfo(state) {
    state.info.name = 'zhangSan'
    //state.info['address']="luoshanji"不在响应式系统中
    // state.info['address']="luoshanji"
    // 数组的响应式方法:
    // Vue.set(state.info,'address',"luoshanji")
    //删除某个对象的属性
    //直接delete不是响应性的
    // delete state.info.age 
    // Vue.delete(state.info,'age')


    //异步操作需要经过actions,在这里会出现底层未修改,错误代码
    // setTimeout(() => {
    //   state.info.name='zhangSan'
    // }, 1000);

  }
}