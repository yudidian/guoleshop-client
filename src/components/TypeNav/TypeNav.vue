<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="isout=true">全部商品分类</h2>
      <div @mouseleave="moveOut">
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
        <transition name="sort">
          <div class="sort" v-show="isout" >
            <div class="all-sort-list2" @click="toSearch($event)">
              <div
                class="item bo"
                v-for="(c1, index) in categoryList"
                :key="index"
                @mouseenter="moveInter(index)"
                :class="{ move: currentIndex === index }"
              >
                <h3>
                  <a
                    href="javascript:;"
                    :data-id1="c1.goods_id"
                    :data-name="c1.goods_name"
                  >
                    {{ c1.goods_name }}
                  </a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a
                          href="javascript:;"
                          :data-id2="c1.goods_id"
                          :data-name="c1.goods_name"
                        >
                          {{ c1.goods_name }}
                        </a>
                      </dt>
                      <dd v-for="(c2, index) in c1.categoryChild" :key="index">
                        <em v-for="(c3, index) in c2" :key="index">
                          <a
                            href="javascript:;"
                            :data-id3="c3.goods_id"
                            :data-name="c3.good_name"
                          >
                            {{ c3.good_name }}
                          </a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  mounted() {
    // 这样注册会使每一次跳转都会进行请求
    // this.$store.dispatch("getCategory");
    if(this.$route.path!=='/home'){
      this.isout=false;
    }
  },
  data() {
    return {
      currentIndex: -1,
      isout:true,
    };
  },
  methods: {
    moveInter: throttle(
      function (index) {
        this.currentIndex = index;
      },
      20,
      { trailing: false }
    ),
    moveOut(){
      this.currentIndex=-1;
      if (this.$route.path!=='/home'){
        this.isout=false;
      }
    },
    toSearch(event){
      let node=event.target;
      let {id1,id2,id3,name}=node.dataset;
      if (name){
        let location={
          name:'search'
        }
        let query={
          categoryname:name
        }
        if(id1){
          query.id1=id1;
        }else if (id2){
          query.id2=id2;
        }else{
          query.id3=id3;
        }
        if(this.$route.params){
          location.params=this.$route.params
        }
        location.query=query;
        this.$router.push(location)
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.category,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #beb9b9;
      z-index: 999;
      &-enter{
        height: 0;
        opacity: 0;
      }
      &-enter-to{
        height: 461px;
        opacity: 1;
      }
      &-enter-active{
        transition: all 0.8s;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: rgba(255, 255, 255, 0.8);
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  line-height: 22px;
                  text-align: left;
                  padding: 3px 6px 0 16px;
                  font-weight: 700;
                  font-size: 16px;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.move {
            background-color: #afadad;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
