<template>
  <div>
    <!-- 动态绑定style 语法 v-bind:style="对象" 
         v-bind:style = '{css属性名: 值}'-->
    <p v-bind:style="{color:'orange'} ">vue 动态绑定style</p>
    <!-- 需求： 点击按钮 切换字体大小 -->
    <p>vue 动态绑定style111</p>
    <button>16px</button>
    <button>32px</button>
    <button>48px</button>
  </div>
</template>
<script>
export default {
  name: "VueStyle",
  data() {
    return {};
  },
  methods: {},
};
</script>