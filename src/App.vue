<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  created(){
    this.$router.push({path:'/book/26433805'})
  }
}
</script>

<style>

</style>
