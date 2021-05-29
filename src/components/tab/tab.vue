<template>
  <div class="tab">
    <router-link
      class="tab-item"
      v-for="item of tabs"
      :key="item.path"
      :to="item.path"
    >
      <span class="item-link">
        {{item.name}}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      tabs: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/top-list'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    background: #8883;
    height: 2.75rem;
    line-height: 2.75rem;
    font-size: $font-size-medium;
    .tab-item {
      flex: 1;
      text-align: center;
      .item-link {
        padding-bottom: 5px;
        color: $color-text-l;
      }
      &.router-link-active {
        .item-link {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }

</style>
