<template lang="pug">
section
  List(title="杭州画室大全" label="—STUDIOS OF HANGZHOU—" link="/studios" :items="studios")
</template>

<script>
import axios from 'axios'
import List from '~/components/List'

export default {
  async asyncData() {
    let {data: studios} = await axios.get('http://www.ffjy.org/core/studios/index')
    return {studios}
  },
  components: {List}
}
</script>

<style lang="css">
</style>
