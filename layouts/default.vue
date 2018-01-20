<template lang="pug">
section
  Nav
  a.banner(href="http://www.ffjy.org/article/61/" target="_blank")
  nuxt
  footer
    .container
      h4.address-title 校区地址:
      .address
        ul
          li 杭州硅谷校区：浙江社杭州市富阳区九龙大道富春硅谷园区4号楼
          li 杭州象山校区：浙江省杭州市西湖区美院南路象山国际1号楼10F
          li 杭州银湖校区：浙江省杭州市富阳区银湖街道受降镇金子垄5号
        ul
          li 广州总部校区：广东省广州市海珠区昌港东路252号江南坊一楼
          li 广州住宿校区：广东省广州市萝岗区新安路332号谷丰艺术园B栋1楼
          li 福州校区：福建省福州市仓山区浦上大道272号仓山万达广场A2楼20层10室
      h4.phone 全国热线：400-009-1108
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
  line-height: 1.5;
}
ul {
  padding: 0;
  list-style: none;
  margin: 0;
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
footer {
  padding: 56px 0;
  background: #262626;
  color: #8c8c8c;
}
.address-title {
  margin: 0;
  margin-bottom: 8px;
  font-size: 24px;
}
.address {
  display: flex;
  justify-content: space-between;
}
.phone {
  font-size: 20px;
}
</style>
