<template lang="pug">
nav
  .links.container
    h1
      nuxt-link(to="/" exact) 杭州画室大全
    .left
      nuxt-link(to="/studios") 画室大全
    .right
      a(href="//ffjy.org" target="_blank") 非凡官网
      a(href="//myfz.ffjy.org" target="_blank") 非凡美院附中
</template>

<style scoped>
nav {
  background: #262626;
  color: #ad8b00;
}
.links {
  display: flex;
  height: 56px;
  align-items:flex-end;
  padding-bottom: 6px;
  box-sizing: border-box;
}
.right {
  flex-grow: 1;
  text-align: right;
}
h1 {
  font-size: 24px;
  margin: 0;
  margin-right: 8px;
}
a {
  color: inherit;
  margin-left: 8px;
}
a.nuxt-link-exact-active, a.nuxt-link-active{
  color: #fadb14;
}
</style>
