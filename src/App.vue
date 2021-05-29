<template>
  <div>
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Hearder from './components/hearder/hearder'
import Tab from './components/tab/tab'
export default {
  components: {
    MHeader: Hearder,
    Tab
  }
}
</script>

<style lang="scss">

</style>
