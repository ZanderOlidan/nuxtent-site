module.exports = {
  // content: {
  //   permalink: '/songs/:slug',
  //   page: '/_songs',
  //   generate: [ // for static build
  //     'get', 'getAll'
  //   ],
  //   isPost: false
  // },
  content: [
    ["songs", 
      {
        permalink: '/songs/:slug',
        page: '/_songs',
        generate: [
          'get', 'getAll'
        ],
        isPost: false
      }
    ],
    ["defaults", {
      permalink: '/:slug',
      page: '/_default',
      generate: ['get', 'getAll'],
      isPost: false
    }]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'https://jolly-lewin-dd1240.netlify.com'
  }
}
