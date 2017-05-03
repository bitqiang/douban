<template>
  <div class="app">
    <v-header></v-header>
    <p class="title">{{homeData.title}}</p>
    <div class="bookMsg">
      <div>
        <div class="rating">
          <star class='star' :score='homeData.rating.average'></star>
          <span>{{ homeData.rating.numRaters}}人评价</span>
        </div>
        <div class="msg">
          <span>{{ homeData.author[0]}}</span>
          <span>{{ homeData.publisher}}</span>
          <span>{{ homeData.pages }}页</span>
          <span> {{ homeData.binding}}</span>
          <span> {{homeData.price}}</span>
          <span>{{homeData.pubdate}}</span>
        </div>
      </div>
      <div class="img">
        <img :src="homeData.image">
      </div>
    </div>
    <div class="price">
      <p><span>在哪儿买这本书</span><span>京东商城{{homeData.price * 0.7}}起</span></p>
    </div>
  </div>
</template>
<script>
import header from '../../components/header.vue'
import store from 'vuex'
import star from '../../components/star/star.vue'
export default {
  data() {
      return {
        homeData: {
          rating: {},
          author: {}
        }
      }
    },
    components: {
      star,
      'v-header': header
    },
    mounted() {
      var _this = this
      var url = '/api/book/' + this.$route.params.id;
      var id = 'U' + this.$route.params.id;
      this.$http.get(url)
        .then(function(response) {
          _this.$store.commit('BOOK_DATA', {
            id: response.id,
            data: response.data
          })
          _this.homeData = _this.$store.state.bookMsg.id
            //console.log(_this.$store.state.bookMsg)
          console.log(_this.homeData)
        })
        .catch(function(error) {
          console.log(error)
        });
    }
}
</script>
<style lang="scss" scoped>
@import '../../components/common/css/mixin.scss';
.title{
  width: 93%;
  font-size: 1.4rem;
  padding-left: 1.5rem;
  margin-top: 5rem;
  overflow: hidden;
  white-space: nowrap;
  /*设置不折行*/
  -o-text-overflow: ellipsis;
  /*兼容opera*/
  text-overflow: ellipsis;
  /*这就是省略号喽*/
}

.star {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.rating {
  display: flex;
  span {
    color: #AAAAAA;
    padding-left: 1rem;
    margin-top: 0.55rem;
  }
}

.bookMsg {
  margin-left: 1.5rem;
  display: flex;
  .msg {
    margin-right: 1rem;
    span {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    span::after {
      content: "/";
    }
  }
  .img {
    margin-top: 0.5rem;
    width: 8rem;
    height: 9rem;
  }
}

.price {
  @include border-1px(#e4e1e1);
  padding:0.8rem;
  padding-left: 1rem;
  &:after {
    top: 0;
    bottom: 0;
    border-bottom: 1px solid #e4e1e1;
  }
  span {}
  span:nth-child(1) {
    color: #51C263;
  }
  span:nth-child(2) {
    float: right;
    color: #AAAAAA;
  }
}
</style>
