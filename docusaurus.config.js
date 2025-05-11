const config = {
  title: "Aivix Bench Documentation",
  tagline: "Voice-first AI agent builder",
  favicon: "img/favicon.ico",
  url: "https://aivix.dev",
  baseUrl: "/",
  organizationName: "aivix",
  projectName: "aivix-docs",
  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Kdkulakov/aivix-bench/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Aivix Bench",
      logo: {
        alt: "Aivix Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/Kdkulakov/aivix-bench",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/aivix",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/aivix",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Kdkulakov/aivix-bench",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kirill Kulakov. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
