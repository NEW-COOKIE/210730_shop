<template>
  <div class="footer_guide">
      <span class="guide_item" :class="{no: $route.path === '/msite'}" @click="goto('/msite')">
          <span>
              <i class="iconfont icon-icon-test"></i>
          </span>
          <span>首页</span>
      </span>

      <span class="guide_item" :class="{no: $route.path === '/search'}" @click="goto('/search')">
          <span>
              <i class="iconfont icon-search"></i>
          </span>
          <span>搜索</span>
      </span>

      <span class="guide_item" :class="{no: $route.path === '/order'}" @click="goto('/order')">
          <span>
              <i class="iconfont icon-emaxcitygerenxinxitubiaoji03"></i>
          </span>
          <span>订单</span>
      </span>

      <span class="guide_item" :class="{no: $route.path === '/profile'}" @click="goto('/profile')">
          <span>
              <i class="iconfont icon-yonghudianji"></i>
          </span>
          <span>个人</span>
      </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name: 'FooterGuide',

      methods: {
          goto(path) {
              /* if (path !== this.$router.path) {
                  this.$router.replace(path);
              } */

              if (path !== this.$router.path) {
                  this.$router.replace(path);
              }else {
                  window.location = path;
              }
          }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl";
    .footer_guide
        top-border-1px(#ccc)
        display flex
        position fixed
        left 0
        bottom 0
        width 100%
        height 50px
        background #fff
        .guide_item
            display flex
            width 25%
            flex-direction column
            text-align center
            &.no
                color $green
            span
                margin-top 3px
                font-size 14px
                i
                    font-size 24px
</style>
