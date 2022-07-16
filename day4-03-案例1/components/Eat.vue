<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>{{title ||'好吃的口水鸡'}}</h3>
    <p>{{price || "50元"}}元</p>
    <p>{{info ||"开业大酬宾, 全场8折"}}</p>
  </div>
</template>

<script>
export default {
    name:"MyProduct",
    
    props:['title','price','info']
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>