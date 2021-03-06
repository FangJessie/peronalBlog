/*
 * @Author: Mr.Hope
 * @Date: 2019-09-16 22:17:34
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-22 12:28:05
 * @Description: 主题配置
 */

/** 对默认主题的配置 */
module.exports = {
  /** 头部导航栏的配置 */
  nav: [
    { text: '主页', link: '/', icon: 'homefill' },
    { text: '学习笔记', link: '/learning.html', icon: 'note' }
  ],


  /** 侧边栏配置 */
  sidebar: {
    // fallback
    '/': [
      '',      /* / */
      'about'  /* /about.html */
    ]
  },

  /** 侧边栏标题显示深度，0-2 */
  sidebarDepth: 2,

  /** 语言设置 */
  locales: {
    /** 默认语言 */
    '/': {
      lang: 'zh-CN',
      selectText: '选择语言',
      lastUpdated: '上次编辑时间',
      label: '简体中文'
    },

    /** 英文 */
    '/en/': {
      /** 设置该语言的代码 */
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性

      /** 网站在该语言下的标题 */
      title: 'Jessie\'s Bolg',

      /** 网站在该语言下的描述 */
      description: 'Vuepress based blog',

      /** 该语言下头部导航栏的配置 */
      nav: [
        { text: 'Home', link: '/en/', icon: 'homefill' },
        { text: 'Learning Note', link: '/en/learning.html', icon: 'note' }
      ],

      /** 网站在该语言下的侧边栏 */
      sidebar: {
        '/en/': ['', 'about']
      },

      /** 多语言下拉菜单的标题 */
      selectText: 'Language',

      /** 辅助标签 */
      ariaLabel: 'Select language',

      /** 该语言下的更新时间文字 */
      lastUpdated: 'Last update',

      /** 该语言在下拉菜单中的标签 */
      label: 'English',

      /** 编辑链接文字 */
      editLinkText: 'Edit on Github'
    }
  },

  /** repo地址 */
  repo: 'https://github.com/FangJessie/peronalBlog',

  /** 文档目录 */
  docsDir: 'src',

  /** 自定义仓库链接文字 */
  repoLabel: 'Github',
  /** 开启编辑此页链接 */
  editLinks: true, // 默认是 false, 设置为 true 来启用

  /** 编辑此页链接提示文字 */
  editLinkText: '在 GitHub 上编辑此页' // 默认为 "Edit this page"
};
