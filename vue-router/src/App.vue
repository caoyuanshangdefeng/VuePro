<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- tag属性变成什么标签
       replace属性导致不可以使用返回-->
    <!-- <router-link to="/home" tag='button' replace active-class='active'> 首页</router-link>
    <router-link to="/about" tag='button' replace active-class='active'>关于</router-link> -->
    <router-link to="/home" tag='button'  > 首页</router-link>
    <router-link to="/about" tag='button'  >关于</router-link>
    <!-- <router-link to='/user' tag='button'  >用户</router-link> -->
    <!-- <router-link v-bind:to="'/user/'+userID" tag='button'  >用户</router-link> -->
    <!-- <router-link to="/profile"   tag='button' >档案</router-link> -->
    <router-link :to="{path:'/profile',query:{name:'xiaoguicai',age:2,height:'100cm'}}"   tag='button' >档案</router-link>
    <!--  '/user/'+userID 单引号指/user/整体是个字符串userID诗歌变量,后面的-->
    <!-- ：to="`/user/${userID}`"  ES6的模板字符串语法 -->
    <!-- router-link 最终被渲染成A标签 -->
    <!-- 通过代码进行路由跳转 -->
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于2</button> -->
    <button @click="userClick">用户</button>
    <!-- <button @click="profileClick">档案</button> -->
    <keep-alive>
      <router-view>

      </router-view>
    </keep-alive>
    
  
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userID:'xiaoguicai',
    }
  },


  methods:{
    homeClick(){
		//通过代码方式修改路由vue-router ,vue-router源码中在所有的组件加了个属性叫$router
		//push =>pushState
    // this.$router.push('./home')
    // 使用replace无返回
    // this获取的是当前组件,
    this.$router.push('./home')
		// this.$router.replace('/home');
		console.log('homeClick');
		},
		aboutClick(){
		this.$router.push('/about');
		// this.$router.replace('/about');
		console.log('aboutClick');
    },
    userClick(){
		this.$router.push('/user/'+this.userID);
		// this.$router.replace('/about');
		console.log('userClick');
    },
    profileClick(){
		this.$router.push({
				// path:'/profile/'+123,
				path:'/profile',
				query: {name:'xiaodou',age:18}
				})
		// this.$router.replace('/about');
		console.log('userClick');
		},
  }
}
</script>

<style>

  .active{
    color: #f00;

  }
</style>
