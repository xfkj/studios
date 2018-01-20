<template lang="pug">
List(title="杭州画室大全" label="—STUDIOS OF HANGZHOU—" :items="studios")
</template>

<script>
import axios from 'axios'
import List from '~/components/List'

export default {
  async asyncData() {
    let {data: studios} = await axios.get('http://www.ffjy.org/core/studios')
    return {studios}
  },
  head() {
    return {
      title: '画室大全-非凡教育',
      meta: [
        {hid: 'keywords', name: 'keywords', content: '画室大全，非凡教育'},
        {hid: 'description', name: 'description', content: '画室大全，非凡教育'},
      ]
    }
  },
  components: {List}
}
</script>

<style lang="css">
</style>
