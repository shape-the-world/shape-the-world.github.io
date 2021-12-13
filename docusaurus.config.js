const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const math = require('remark-math')
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Shape the world',
  tagline: 'The global shape modelling network',
  url: 'https://shape-the-world.github.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shape-the-world', // Usually your GitHub org/user name.
  projectName: 'shape-the-world.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
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
        {
          label: 'About us', position: 'left',
          items: [
            { to: 'about/vision', label: 'Vision' },
            { to: 'about/partners', label: 'Partners' },
          ],
        },
        {
          label: `Showcases`, position: 'left',
          items: [
            {
              to: `model-building`,
              label: 'Building a shape model from scratch (Jupyter)'
            }, 
            { to: 'case-studies/vertebra/annotation-segmentation', 
              label: 'Annotation-based segmentation (GUI)' 
            },
          ]
        },
        {
          label: `Case studies`, position: 'left',
            items: [
              { to: 'case-studies/vertebra/pipeline-and-data-management', label: 'Pipeline and data management'},
              { to: 'case-studies/vertebra/model-building', label: 'Model-buidling' },
              { to: 'case-studies/vertebra/contour-fitting', label: 'Contour-fitting' },
              { to: 'case-studies/vertebra/vertebra', label: 'Intensity-fitting' },
              { to: 'case-studies/vertebra/annotation-based-segmentation', label: 'Annotation-based Segmentation'},
              { to: 'case-studies/vertebra/bmd-application', label: 'Clinical application: Bone mineral density estimation' },
          ],
        },
        {
          label: 'Theory', position: 'left',
          items: [
            { to: '/theory/scientific-articles', label: 'Scientific articles' },
            { to: '/theory/primers', label: 'Primers' },
            { to: '/theory/courses', label: 'Courses' },
          ],
        },
        { to: 'conversations', label: 'Conversations', position: 'left' },
        { to: 'resources', label: 'Resources', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
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
      copyright: `Copyright © ${new Date().getFullYear()} Global shape network`
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
