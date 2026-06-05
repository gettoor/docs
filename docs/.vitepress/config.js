export default {
  title: 'Toor',
  lang: 'en-US',
  description: 'Toor for LLM evaluations and experiments',
  themeConfig: {
    siteTitle: 'Toor',

    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: 'github', link: 'https://github.com/orgs/gettoor/repositories' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation.md' },
          { text: 'Getting started', link: '/getting-started.md' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: '@gettoor/engine', link: '/engine/api/README.md' },
        ],
      },
    ],

    search: {
      provider: 'local'
    }    
  },
};