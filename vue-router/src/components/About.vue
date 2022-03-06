<template>
    <div>
      <h2>我是关于</h2>
      <h3>我是关于的内容</h3>
  </div>
</template>

<script>
export default {
    name:'About',
    created(){
      // 当组件被创建出来的时候,对create进行回调
      console.log('created_About');
      document.title='关于'
    },
}
</script>

<style>

</style>