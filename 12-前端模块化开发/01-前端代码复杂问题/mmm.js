// var flag = true

// if (flag){
//   console.log('小明是個天才')
// }
// function sum(num1, num2) {
//   return num1 + num2
// }
// if (flag){
//   console.log(sum(20,30))
// }

// 上面的是因为无法代码复用


// ; (function () {
  // 1.想使用flag
  // if(moduleA.flag){
  //   console.log('小明是天才,哈哈哈')

  // }
  // 2.使用sum函数





  // 使用CommonJS导入

// })()

// var { flag, sum } = require('./xiaoming.js')
// console.log(sum(20, 30))
var aaa=require("./xiaoming.js")
console.log(aaa.flag)
