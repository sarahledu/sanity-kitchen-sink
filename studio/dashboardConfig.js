export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fa5447ccfb40a0ac15a77b1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-19a3vrqq',
                  apiId: '0b920e52-89d0-45f5-b69e-e35ad8105cbe'
                },
                {
                  buildHookId: '5fa5447c6148c30685a73af5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-em4p47rs',
                  apiId: 'a25ca99d-2b21-4ac2-9290-9fd80220bae1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahledu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-em4p47rs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
