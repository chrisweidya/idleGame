const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/dist/index.html')
    console.log(indexPath);
    const publicPath = express.static(path.join(__dirname, '/css'))    
    const distPath = express.static(path.join(__dirname, '/dist/'))

    app.use('/', publicPath)    
    app.use('/', distPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}