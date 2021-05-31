<template>
  <div>
    Recommend
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend'

export default {
  name: 'Recommend',
  async created () {
    const restlt = await getRecommend()
    console.log(restlt)
  },
  mounted () {
    console.log('ggod')
  }

}
</script>

<style lang="scss" scoped>

</style>
