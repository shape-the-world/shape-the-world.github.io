const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const math = require('remark-math')
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Shape the world',
  tagline: 'The global shape modelling network',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Shape the world',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },*/
        {label : 'About us', position: 'left',
          items: [
            {to: 'vision', label : 'Vision'},
            {to: 'partners', label : 'Partners'},
          ],
        },
        {label : `Case studies`, position : 'left',
          items: [
            {to: 'vertebra/vertebra', label : 'Vertebra-modelling'},
            {to: 'testpage', label : 'Senkenberg chimpanzees'},
          ],
        },
        {label : 'Theory', position : 'left',
          items: [
            {to: 'scientific-articles', label : 'Scientific articles'},
            {to: 'primers', label : 'Primers'},
            {to: 'courses', label : 'Courses'},
          ],
        },
        {to: 'conversations', label : 'Conversations', position: 'left'},
        {to: 'resources', label : 'Resources', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        }, */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Global shape network`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

      },
    ],
  ],
};
