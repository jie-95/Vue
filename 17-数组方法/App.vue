<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button>数组翻转</button>
    <button>截取前3个</button>
    <button>更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: "Demo02Test",
  data() {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  methods: {},
};
</script>