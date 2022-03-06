export default {
  state: {
    // 这些状态都是响应式地
    name: 'zhengPeng',
    },
  mutations: {
    updateName(state,payload){
      state.name=payload
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','wangwu')
        
      }, 2000);
      context.commit('updateName')
    }



  },
  getters: {
    fullName(state){
      return state.name+'111116666'
    },
    fullName2(state,getters){
      return getters.fullName+'222266666'
    },
    fullName3(state,getters,rootState){
      return getters.fullName2+rootState.counter
    }






  }
  
}