.<template>
  <div>
    <h2>{{msg}}</h2>
    <!-- <h2>{{counter}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
    
  </div>
  
</template>

<script>
export default {
  name:"HelloVuex",
  data(){
    return{msg:"我是HelloVuex"

    }
  },

  // props:{
  //   counter:Number,
  // }
  // 使用VUEX共享counter
  


}
</script>

<style>

</style>