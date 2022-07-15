<template>
  <div>
    <a href="http://www.bilibili.com" @click="btn">B站</a><br />
    <a href="http://www.bilibili.com" @click="btn1($event)">BBB</a>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btn (e) {
      e.preventDefault()
    },
    btn1 (e) {
      console.log(e)
      e.preventDefault()
    },
  },
}
</script>

<style></style>
