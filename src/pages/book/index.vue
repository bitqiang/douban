<template>
  <div id="app">
    <v-header></v-header>
    <bookWebList class='book_list' bookName='前端书籍'></bookWebList>
<!--     <bookEndList class='book_list' bookName='后端书籍'></bookEndList>
<booShop class='book_list' bookName='豆瓣书店'></booShop>
<bookFind class='book_list' bookName='发现好图书'></bookFind>
<classification></classification>
<v-footer></v-footer> -->
  </div>
</template>
<script>
import book_web_List from '../../components/book_Web_List.vue'
import book_end_List from '../../components/book_End_List.vue'
import book_shop from '../../components/book_shop.vue'
import header from '../../components/header.vue'
import book_find from '../../components/book_find.vue'
import classification from '../../components/classification.vue'
import footer from '../../components/footer.vue'
export default {
  name: 'book-index',
  data() {
    return {
      homeData: [{
        rating: {}
      }],
    }
  },
  components: {
    'v-header': header,
    bookWebList: book_web_List,
    bookEndList: book_end_List,
    booShop: book_shop,
    bookFind: book_find,
    classification,
    'v-footer': footer
  },
}
</script>
<style scoped lang='scss'>
.book_list {
  margin-bottom: 1.5rem;
}
</style>
