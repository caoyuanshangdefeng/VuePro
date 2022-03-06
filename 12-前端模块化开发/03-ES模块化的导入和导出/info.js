

// // export写法一
// export function test(content){
//   console.log(content)

// }

// export class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }

//   run(){
//     console.log(this.name+"在奔跑"
//     )
//   }  
// }
// // export写法二
// function test1(content){
//   console.log(content)

// }

// class Person1{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }

//   run(){
//     console.log(this.name+"在奔跑"
//     )
//   }  
// }

// export {test1,Person1}


// // export default
// export default function(){
//   console.log('default function')
// }

let name = "小明"
let age = 18
let height = 1.88
let flag = true

function sum(num1, num2) {
  return num1 + num2
}


if (flag){
  console.log(sum(10,20));
  
}

export {flag,sum}




// 2.导出函数/类
// 2-1.导出函数
export function mul(num1,num2){
  return num1*num2
}

// ES6 定义类
// class Person{
// }
// ES5 定义类
// function Person(){

// }
// 2-2.导出类
export class Person{
  run(){
    console.log('在跑步');
  }
}



// 3.export default:

// export default function(argument){
//   console.log(argument)
// }

const address="陕西西安"

export default address


