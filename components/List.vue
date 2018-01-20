<template lang="pug">
section.main
  .title
    h2 {{title}}
    small {{label}}
    nuxt-link(:to="link" v-if="link") 点击查看更多
  .container
    Item.item(v-for="i in items" :key="i.id" v-bind="i")
</template>

<script>
import Item from '~/components/Item'

export default {
  props: ['items', 'title', 'label', 'link'],
  components: {Item}
}
</script>

<style lang="css" scoped>
.main {
  margin-bottom: 40px;
}
.title {
  text-align: center;
  letter-spacing: 5px;
  padding: 16px 0;
}
.title h2 {
  margin-bottom: 4px;
  font-size: 32px;
}
.title small {
  display: block;
  margin: 8px;
}
.item {
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom: dashed 1px #8c8c8c;
}
.item:first-child {
  border-top: solid 2px #8c8c8c;
  padding-top: 24px;
}
</style>
