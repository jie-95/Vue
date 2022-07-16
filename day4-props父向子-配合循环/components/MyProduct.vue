<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>{{obj.proname}}</h3>
    <p>{{obj.proprice}}元</p>
    <p>{{obj.info}}</p>
  </div>
</template>

<script>
export default {
    name:"MyProduct",
          
    props:{
      obj:{
        type:Object,
        required:true,
        default:() => ({})
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