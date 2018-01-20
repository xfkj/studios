<template lang="pug">
section
  List(title="杭州画室大全" label="—STUDIOS OF HANGZHOU—" link="/studios" :items="studios")
  List(title="画室资讯" label="—NEWS OF FEIFAN—" link="/news" :items="news")
</template>

<script>
import axios from 'axios'
import List from '~/components/List'

export default {
  async asyncData() {
    let {data: studios} = await axios.get('http://www.ffjy.org/core/studios/index')
    let {data: news} = await axios.get('http://www.ffjy.org/core/news/index')
    return {studios, news}
  },
  components: {List}
}
</script>

<style lang="css">
</style>
