<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ obj.count }}</h1>
    <h1>{{ arr }}</h1>
    <button @click="btn">点击变化</button>
    <button @click="btn1">点击变化</button>
    <!-- <button @click="btn2">点击变化</button> -->

    <!-- 
      Vue.set(target, propertyName/index, value)
      或
      vm.$set(target, propertyName/index, value)

    作用：向响应式对象中添加一个 属性，并确保这个新 属性
    同样是响应式的，且触发视图更新 
    
    target: 不能是 Vue 实例，或者 Vue 实例的根数据对象-->
  </div>
</template>

<script>
export default {
  name: "Demo03Set",
  data() {
    return {
      msg: 1,
      obj:{
        age:12,

      },
      arr:[10,20,30,]
    };
    
  },
  mounted() {},
  methods: {
    btn(){
      this.msg++
      this.$set(this.obj,'count',100)
    },
    btn1(){
      this.$set(this.arr,1,100)
    }
  },
};
</script>