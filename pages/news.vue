<template lang="pug">
List(title="画室资讯" label="—NEWS OF FEIFAN—" :items="news")
</template>

<script>
import axios from 'axios'
import List from '~/components/List'

export default {
  async asyncData() {
    let {data: news} = await axios.get('http://www.ffjy.org/core/news')
    return {news}
  },
  head() {
    return {
      title: '画室资讯-非凡教育',
      meta: [
        {hid: 'keywords', name: 'keywords', content: '画室资讯，非凡教育'},
        {hid: 'description', name: 'description', content: '画室资讯，非凡教育'},
      ]
    }
  },
  components: {List}
}
</script>
