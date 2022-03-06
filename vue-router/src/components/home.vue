<template>
  <div>
      <h2>我是首页</h2>
      <p>我是首页的内容</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">内容</router-link>
      
        <router-view></router-view>
      
      
      <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
    name:'Home',
    data(){
     return{ message:'guaicai',
     path:'/home/news'}
     
    },
    // 生命周期函数
    created(){
      // 当组件被创建出来的时候,对create进行回调
      console.log('Home created');
      // document.title='首页'
      // this.$router.push('/home/news')
    },
    // mounted(){
    //   // 当模板挂载到DOM上时来回调
    //   console.log('mounted');
    // },
    // updated(){
    //   // 当页面进行数据更新时,这块就会进行刷新
    //   console.log('updated');
    // }
    destroyed(){
      // distoryed:销毁
      console.log('home destroyed');
    },
    // activated与deactivated这两个函数,只有组件被保持了状态使用了keep-alive时,才是有效的

    activated(){
      // 活跃与不活跃进行切换
      console.log('activated');
      this.$router.replace(this.path).catch(error => error)

    },
    // deactivated(){
    //   console.log('disactivated');
    //   this.path=this.$router.path

    // },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path);
      this.path=this.$route.path;
      next()
    }
}
</script>

<style>

</style>