import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
