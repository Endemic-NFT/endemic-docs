// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Endemic',
  tagline: 'Collect smart art',
  url: 'https://endemic.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Endemic-NFT', // Usually your GitHub org/user name.
  projectName: 'endemic-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og.png',
      metadata: [{name: 'og:title', content: 'Endemic docs'}, {name: 'og:description', content: 'Collect smart art'}],
      navbar: {
        title: 'Endemic',
        logo: {
          alt: 'Endemic',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://www.endemic.app/', label: 'Launch app', position: 'left'},
          {
            href: 'https://github.com/Endemic-NFT',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/',
              },
              {
                label: 'Bug reports',
                to: '/bugs',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/endemic.app/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/endemic_app',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/xj2HSDExRR',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Endemic_nft',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Endemic-NFT',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Endemic, Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        lightTheme: lightCodeTheme
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
