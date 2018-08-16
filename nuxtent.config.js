module.exports = {
  content: {
    permalink: ':slug',
    page: '/_content',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: false
  },
  api: {
    baseURL: 'http://localhost',
    browserBaseURL: 'http://localhost'
  }
}
