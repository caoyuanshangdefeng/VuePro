<!--  -->
<template>
    <div>
        <h2>我是用户界面</h2>
        <h2>我是用户的相关信息,小鬼才</h2>
        <h2>{{userID}}</h2>
        <button @click='btnClick'>按钮</button>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'User',
    computed: {
        userID(){
            return this.$route.params.userID
            // this.$route指当前哪一个路由处于活跃状态你拿到的就是哪个路由
            
        }
    },
    methods:{
        btnClick(){
            console.log(this.$router);
            console.log(this.$route);

            // this.test();
            // console.log(this.name);
        }
    }
    
}
</script>
<style>
/* // <style lang='scss' scoped>
//@import url(); 引入公共css类
//@import url(); 引入公共css类 */

</style>