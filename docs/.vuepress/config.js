import { defineUserConfig } from 'vuepress'
import {path} from '@vuepress/utils'
import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'


export default defineUserConfig({
  isuUpdate: "更新时间",
  lang: 'zh-CN',
  title: '你好， 奇飒悠然 ！',
  description: '这是我的第一个站点',
  public: path.resolve(__dirname, `./c`),
  debug: true,
  base: `/test/`,
  markdown: {
      // anchor: false,
      importCode: {
        handleImportPath: (str) =>
          str.replace(/^@vuepress/, path.resolve(__dirname, '../path/to/src')),
      },
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '奇飒',
      description: 'Vue-powered Static Site Generator',
      head: [['link', { rel: 'icon', href: 'hero.png' }]],
    },
    '/zh/': {
      lang: 'en-US',
      title: '奇飒',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/zh/': {
        selectLanguageName: 'English',
      },
    },
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '导航栏',
        link: '/',
      },
    ],
    logo: './hero.png',
    repo: 'https://github.com/dock',

  }),
  plugins: [
    backToTopPlugin(),

  ],

})