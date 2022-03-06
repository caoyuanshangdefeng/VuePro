export default {
  // actions的默认参数是context
  // aUpdateInfo(context,payload){
  //   setTimeout(() => {
  //     context.commit('modifyInfo')
  //     // console.log(payload);
  //     payload.msg
  //     payload.success()
  //   }, 2000);

  // }


  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('modifyInfo')
        console.log(payload);
        resolve(111666)
      }, 2000);
    })


  }

}