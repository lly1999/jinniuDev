const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        //target: 'http://192.168.12.112:8084',
        // target: 'http://localhost:8084',
        // target: 'http://175.153.176.27:18801',
        target: 'http://101.37.246.72:8084',//服务器
        //target: 'http://192.168.43.39:8084',
        //target: 'http://192.168.50.7:8084',
        // target: 'http://192.168.31.214:8084',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''//将url中起始的'/api'替换成''，比如将/api/getDeptList替换成/getDeptList
        }
      },

    }

  }
})

