<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link :to="{name: 'City'}">
      <div class="header-right">
        {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles' 
  .header
    display: flex
    height: .86rem
    background: $bgColor
    color: #fff
    line-height .86rem
    .header-left 
      width: .64rem
      float: left 
      .back-icon
        font-size .4rem
        text-align center 
    .header-input
      flex: 1
      background #ffffff
      border-radius .1rem
      margin: .12rem 0 0 .2rem
      height: .64rem
      color #cccccc
      line-height .64rem
      padding-left .2rem
    .header-right
      width 1.24rem
      text-align center
      float: right
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
