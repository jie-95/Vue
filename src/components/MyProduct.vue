<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>{{title}}</h3>
    <p>{{price}}元</p>
    <p>{{info}}</p>
  <button @click="cutDown">砍价</button>
  </div>
</template>

<script>
export default {
    name:"MyProduct",
    props:['title','price','info','index'],
    methods:{
      cutDown(){
        this.$emit('del',this.index)
      }
    }
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