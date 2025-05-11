import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '073'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6bd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a06'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '01e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0b1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '55e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dc1'),
    routes: [
      {
        path: '/docs/concepts',
        component: ComponentCreator('/docs/concepts', 'bba'),
        exact: true
      },
      {
        path: '/docs/creating-first-agent',
        component: ComponentCreator('/docs/creating-first-agent', 'db7'),
        exact: true
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started', 'a24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/n8n-integration',
        component: ComponentCreator('/docs/n8n-integration', '378'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7f5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
