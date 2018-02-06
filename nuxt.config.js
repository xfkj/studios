module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '杭州画室排名,杭州美术培训班，老鹰画室，孪生画室，白塔岭画室，厚一画室-非凡教育官方网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '杭州画室排名，杭州美术培训班，老鹰画室，孪生画室，白塔岭画室，厚一画室' },
      { hid: 'description', name: 'description', content: '非凡教育一家知名的艺术生文化课 补习培训机构，与杭州各大画室美术培训中心，都建立的良好的合作关系 ，长期为老鹰画室，孪生画室，厚一画室，白塔岭画室等提供高考冲刺提升课程。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  css: ['normalize.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
