<template>
  <div>
    <v-header></v-header>
  </div>
</template>

<script>
import header from '../components/header'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components:{
    'v-header':header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
