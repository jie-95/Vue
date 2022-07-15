<template>
  <div id="app">
    <ChaZhiyufa/>
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
import img1 from "./assets/01.jpg"
import ChaZhiyufa from "./components/01-插值语法"
export default {
  name: "App",
  components: {ChaZhiyufa},
  data(){
    return{
      imgUrl:img1
    }
  }
};
</script>

<style>

#app {
  text-align: center;
  margin-top: 60px;
  
}

</style>
