const CracoLessPlugin = require('craco-less');
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#409eff' },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
    webpack: {
      alias: {
        "@": resolve("src")
      }
    },
    devServer: { 
      port: 9001,
      proxy: {

      }
    },
  }

