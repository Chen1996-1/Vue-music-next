<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Checken music</h1>
    <router-link class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .header {
    height: 2.75rem; // 44px
    color: $color-theme;
    text-align: center;
    font-size: 0;
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: .375rem;
      width: 1.875rem;
      height: 2rem;
      margin-right: .56rem;
      @include bg-image('logo');
      background-size: 2rem;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 2.75rem;
      font-size: $font-size-large;
    }
    .mine {
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine {
        display: block;
        padding: .75rem;
        font-size: $font-size-large-x;
        color: $color-theme;
      }
    }
  }
</style>
