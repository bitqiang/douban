<template>
  <div id="app">
    <v-header></v-header>
    <div class="title">
      <p>前端书籍</p>
      <p>更多</p>
    </div>
    <div class="webBook">
      <div class="web" v-for='(index,item) in 10'>
        <div class="book">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import header from '../../components/header.vue'
export default {
  name: 'book-index',
  components: {
    'v-header': header
  },
  mounted(){
    
  }
}
</script>
<style scoped lang='scss'>
.title {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1.06rem;
    padding-top: 0.8rem;
  }
  p:nth-child(1) {
    padding-left: 1rem;
    font-weight: 500;
  }
  p:nth-child(2) {
    padding-right: 1rem;
    color: #42bd56;
  }
}
.webBook{
  display: flex;
  width: 100%;
  background: #fff;
  overflow:hidden;
  overflow-x: scroll;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.book{
  margin-left: 10px;
  height: 200px;
  width: 100px;
  background: red;
}
</style>
