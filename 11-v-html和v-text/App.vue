<template>
  <div>
  <h1 v-html='str'></h1>
  <h1 v-text='str'></h1><!-- //不识别标签 -->
  </div>
</template>

<script>
// 需求：str 变量渲染到页面上
export default {
  data (){
    return {
      str: "<span>我是一个span</span>"
    }
  }
}
</script>