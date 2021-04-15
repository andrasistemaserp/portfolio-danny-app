// implented in nextjs 9.4 and substituted for jsconfig.json   const path = require('path')
// implented in nextjs 9.4   const Dotenv = require('dotenv-webpack')

module.exports = {
  // implented in nextjs 9.4 and substituted for jsconfig.json
  // webpack: (config) => {
  //   config.resolve.alias['@'] = path.resolve(`${__dirname}/src`)
  //   // implented in nextjs 9.4 config.plugins.push(new Dotenv({ silent: true }))
  //   return config
  // },
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL
  }
}