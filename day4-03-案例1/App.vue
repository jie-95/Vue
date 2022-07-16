<template>
  <div id="app">
   
    <MyProduct title="我的标题" :info="msg" :price="pri"/>
    
  </div>
</template>
<script>
import MyProduct from "./components/Eat.vue"

export default {
  data(){
    return {
      title:'口水鸡',
      msg:'好吃嚼不烂',
      pri:10000
    }
  },
  components: {
    MyProduct,
  },
}
</script>

<style lang="less">

</style>
