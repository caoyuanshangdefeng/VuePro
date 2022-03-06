// 小明

// var moduleA=(function(){
//   // ES5写法,到处对象,ES6自带导出对象的写法
//   var obj={}
//     var name = "小明"
//     var age = 22
//     // function sum(num1, num2) {
//     //   return num1 + num2
//     // }
    
//     // var flag = true
//     obj.flag = true;
//     obj.sum=function sum(num1, num2) {
//       return num1 + num2
//     }
//     if (obj.flag){
//       console.log(obj.sum(20,30))
//     }
//     console.log(obj)
//     return obj

// // 在自己的作用域中命名自己的变量
// })()





// CommonJS写法


var obj={}
  var name = "小明"
  var age = 22
  function sum(num1, num2) {
    return num1 + num2
  }
    
var flag = true

module.exports={
  flag:flag,
  sum:sum,
}
    

// 在自己的作用域中命名自己的变量
