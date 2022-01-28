// const path = require('path')
// const withSass = require('@zeit/next-sass');

// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   /* Add Your Scss File Folder Path Here */
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// })

module.exports = {
  reactStrictMode: true,
  // env: {
  //   customKey: 'my-value',
  // },
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/contact': { path: '/contact' },
  //     '/services': { path: '/services' },
  //     '/pricing': { path: '/pricing' },
  //     '/projects': { path: '/projects' }
  //   }
  // }
}