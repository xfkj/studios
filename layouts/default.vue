<template lang="pug">
section
  Nav
  a.banner(href="http://www.ffjy.org/article/61/" target="_blank")
  nuxt
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {Nav}
}
</script>

<style>
body {
  color: #262626;
  font-family: "Monospace Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
}
a {
  text-decoration: none;
}
.banner {
  background-image: url(http://ffwebsite.ffjy.org/WechatIMG4.jpeg);
  background-size: cover;
  background-position: center;
  display: block;
  width: 100%;
  height: 600px;
}
.container {
  max-width: 1176px;
  width: 100%;
  margin: 0 auto;
}
</style>
