<template>
  <div>
    <div>
      选择所在地：
      <input type="checkbox" v-model="city" value="中国大陆" />中国大陆
      <input type="checkbox" v-model="city" value="中国香港" />中国香港
    </div>
    <div>
      手机号码：
      <input type="text" name="phone" />
    </div>
    <div>
      年龄：
      <input type="text" name="age" />
    </div>
    <div>
      密码：
      <input type="password" name="password" />
    </div>
    <div>
      爱好：
      <input type="checkbox" name="hobby" value="看书" />看书
      <input type="checkbox" name="hobby" value="写字" />写字
      <input type="checkbox" name="hobby" value="打游戏" />打游戏
    </div>
    <div>
      <input type="checkbox" name="hobby" value="打游戏" />
      记住密码
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: "中国大陆",
    }
  },
}
</script>

<style></style>
