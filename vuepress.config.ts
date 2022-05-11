import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  // base: '/',
  // lang: 'en-US',
  lang: 'zh-CN',
  title: 'VuePress',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/images/favicon-32x23.png' }]],
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  }),
})