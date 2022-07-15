<template>
  <div>
 
    <h1>{{ msg }}</h1>
    <h2>姓名：{{ obj.name }}</h2>
    <h2>今年{{ obj.age }},{{ obj.age > 18 ? "已经成年了" : "还是小朋友" }}</h2>

  </div>
</template>

<script>

export default {
  name: 'ChaZhiyufa',
  data() {
    return {
      msg: "Hello啊!",
      obj: {
        name: "anya",
        age: 6,
      },
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: pink;
}
h2:nth-child(2) {
  color: orange;
}
h2:nth-child(3) {
  color: lawngreen;
}
</style>
