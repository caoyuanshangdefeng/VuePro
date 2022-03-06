// import myFunc from './info.js'

// myFunc()

// 没有引用时会报错:Uncaught ReferenceError: True is not defined
// 每个模块都有自己的作用域空间,别的文件不能随意访问


import {flag,sum} from "./info.js"
if(flag){
  console.log('小明是天才');
  console.log(sum(20,30));
  
}


// 导出函数
import {mul} from './info.js'
console.log(mul(50,50));


// 导出类
import {Person} from "./info.js"
const p = new Person();
p.run()


// 导出default
import addr from "./info.js"
console.log(addr);
