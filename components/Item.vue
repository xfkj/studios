<template lang="pug">
.main
  img.cover(:src="'//ffwebsite.ffjy.org/' + cover")
  .body
    h3.title {{title}}
    p.content {{desc}}
    nuxt-link.details(:to="{name: 'articles-id', params: {id}}") 查看详情
</template>

<script>
export default {
  props: ['id', 'cover', 'title', 'desc']
}
</script>

<style lang="css" scoped>
.main {
  display: flex;
  justify-content: space-between;
}
.cover {
  width: 360px;
  height: 240px;
  border-radius: 8px;
  flex-shrink: 0;
}
.body {
  padding-left: 16px;
  flex-grow: 1;
  position: relative;
}
.title {
  margin: 0;
  font-size: 24px;
}
.content {
  margin-top: 8px;
  line-height: 1.5;
  opacity: .75;
}
.details {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #40a9ff;
  display: block;
  border: 1px solid #40a9ff;
  padding: 8px;
  border-radius: 8px;
}
.details:hover {
  color: #fafafa;
  background: #40a9ff;
}
</style>
