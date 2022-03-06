<template>
  <div id="app">
    <h2>"APP内容"</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>



    

    <h2>--------APP中的内容--------:getters相关信息-----</h2>
    
    <h2>常规使用,不建议"$store.state.counter * $store.state.counter"</h2>
    <h2>{{ $store.state.counter * $store.state.counter}}</h2>
    <h2>使用"store.getters" </h2>
    <h2>{{ $store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>年龄大于20的学生的个数{{$store.getters.more20stuLength}}</h2>


    <h2>年龄大于20的学生{{$store.getters.moreAgeStu(18)}}</h2>


    <h2>--------APP中的内容--------:Mutations相关信息-----</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>


    <h2>--------APP中的内容--------:添加学生-----</h2>
    <!-- 传一个对象 -->
    <button @click="addStudent">添加学生</button>

    <h2>--------APP中的内容--------:info对象的内容是否是响应式的-----</h2>
    <h2>info 内容{{$store.state.info}}</h2>
    <button @click="updateInfo">修改info</button>

    <h2>--------APP中的内容--------:Modules中的内容-----</h2>
    <h2>Modules 内容{{$store.state.a.name}}</h2>
    <button @click="updateName">修改Modules-state名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">更新名字</button>












    <h2>"hello-vuex内容"</h2>
    <hello-vuex></hello-vuex>


    <!-- <hello-vuex :counter="counter"></hello-vuex> -->
    <!-- :counter="counter"中的":"不可以去掉,否则会把"counter"当成字符串 -->
    <!-- <hello-vuex/> 没有东西的时候为单标签
    如果有插槽的话需要时双标签,
    由于没有引入counter会报以下错误
    [Vue warn]: Property or method "counter" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
    属性或方法“计数器”未在实例上定义，但在渲染期间被引用。 通过初始化属性，确保该属性在data选项中或对于基于类的组件都是反应性的。
    想在hellvuex中使用counter,1.使用父传子的方法:props

     -->
  </div>
</template>

<script>
  import axios from 'axios'
  // config对象类型
  // axios({
  // url:'http://123.207.32.32:8000/home/multidata',

  // method:'get'
  // }).then(res=>{
  // console.log(res);
  // })
// 一.axios基本使用
  // axios.get()
  // axios url含参数,方式一:
  // axios({
  //   url:'http://123.207.32.32:8000/home/data?type=pop&page=1'
  // }).then(res=>{
  //   console.log('get request',res);
  // })

  // axios url含参数,方式二:框架会自动拼接,专门针对get请求的拼接

  // axios({
  //   url:'http://123.207.32.32:8000/home/data',
  //   params:{
  //     type:'pop',
  //     page:1

  //   }
  // }).then(res=>{
  //   console.log('get request',res);
  // })

// 二.axios 发送并发请求
// axios.all参数传入数组

// axios.all(
//   [
//     axios({
//       url:'http://123.207.32.32:8000/home/multidata',
//     }),
//     axios({
//       url:'http://123.207.32.32:8000/home/data',
//       params:{
//         type:'pop',
//         page:1
//       }
//     })
//     ]

// ).then(res=>{
//   console.log('res1',res[0]);
//   console.log('res2',res[1]);
// })


// 二.axios 全局配置
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=500
axios.all(
  [
    axios({
      url:'/home/multidata',
    }),
    axios({
      url:'/home/data',
      params:{
        type:'pop',
        page:1
      }
    })
    ]

).then(res=>{
  console.log('res1',res[0]);
  console.log('res2',res[1]);
})



  import HelloVuex from './components/HelloVuex'
  import {INCREMENT} from './store/mutations-types'
  export default {
    name: "App",
    components:{
      HelloVuex
    
    },
    data() {
      return {
        message: "我是我们的APP组件",
        counter: 0,
      };
    },
    methods:{
      addition(){
        return this.$store.commit(INCREMENT)
      },
      subtraction(){
        this.$store.commit('decrement')
      },
      addCount(count){
        //payload:负载
        //1.普通的提交封装
        // this.$store.commit('incrementCount',count)

        //2.特殊的提交封装,count是一个对象

        this.$store.commit({
          type:'incrementCount',
          count:count
        })

      },
      addStudent(){
        const stu ={id:115,name:'lilei',age:22}
        this.$store.commit('addStudent',stu)
      },
      // updateInfo(){
        // this.$store.commit('modifyInfo')
        //写法1:
        // this.$store.dispatch('aUpdateInfo',()=>{console.log('里面已经完成了');})
        //写法2;
        // this.$store.dispatch('aUpdateInfo',{
        //   msg:'我是携带的参数',
        //   success:()=>{
        //     console.log('里面已经完成了666');
        //   }})

      // },
      updateInfo(){
        this.$store
        .dispatch('aUpdateInfo','我是携带的信息')
        .then(res=>{
          console.log('里面已经进行提交');
          console.log(res);
        })
      },
      updateName(){
        this.$store.commit('updateName','lisi')

      },
      asyncUpdateName(){
        this.$store
        .dispatch('aUpdateName')
      }
    },
    // computed:{
    //   more20stu(){
    //     return this.$store.state.students.filter(s=>{
    //       return s.age>=20
    //     })
    //     // this.$store.state.students.filter(s=>s.age>=20)

    //   }
    // }
    
  };
</script>

<style>
</style>
