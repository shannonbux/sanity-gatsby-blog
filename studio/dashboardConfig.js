export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2b47f30746ed39b4e14a7f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2dtz1b94',
                  apiId: '24127078-75e7-4243-b93e-f2d5368a9e51'
                },
                {
                  buildHookId: '5e2b47f39c64e71a9d9cbdbb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qem23hr9',
                  apiId: '45d983b4-a780-49d8-b39d-9030ae2de06d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shannonbux/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qem23hr9.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
