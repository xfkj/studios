<template lang="pug">
.wraper
  h2.title {{title}}
  .container
      img.cover(:src="'//ffwebsite.ffjy.org/' + cover")
      .content(v-html="content")
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({params}) {
    let {data: articles} = await axios.get(`http://www.ffjy.org/core/articles/${params.id}`)
    return {...articles[0]}
  },
  head() {
    return {
      title: this.title + '-非凡教育',
      meta: [
        {hid: 'keywords', name: 'keywords', content: this.keyword || '杭州画室大全'},
        {hid: 'description', name: 'description', content: this.desc},
      ]
    }
  },
}
</script>

<style lang="css" scoped>
.wraper {
  background-image: url(./studio.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-bottom: 200px;
}
.title {
  margin: 0;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fff;
  background: #262626;
  font-size: 32px;
  letter-spacing: 5px;
  margin-bottom: 80px;
  opacity: .85;
}
.cover {
  display: block;
  height: 400px;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px 6px #002329;
  margin-bottom: -48px;
}
.content {
  width: 900px;
  margin-left: 120px;
  background: #e8e8e8;
  font-size: 20px;
  line-height: 1.5;
  padding: 4px 12px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px 6px #002329;
  color: #262626;
  padding-top: 40px;
}
</style>
