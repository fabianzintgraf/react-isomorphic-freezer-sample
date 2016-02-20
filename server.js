'use strict';

global.IS_CLIENT = false;
global.TEST_MODE = false;

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8000 : process.env.PORT;

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const http = require('http');
const express = require('express');
const path = require('path');

const methodOverride = require('method-override');

const routes = require('./sources/routes');

const app = express();
const reactViews = require('./view.engine');

app.set('port', port);

app.set('views', [
  __dirname + '/sources/views',
  __dirname + '/sources/services'
]);

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'sources',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  //app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine({doctype: '', beautify: false, transformViews: true}));

app.use(methodOverride());

// Define our routes
app.get('/my-component/start', routes.search);
app.get('/my-component/about', routes.search);
app.get('/*', routes.search);

const server = http.createServer(app);
const env = process.env.NODE_ENV || 'development';

server.listen(port, () =>{
  console.log(`Server started on port ${port} on ${env} environment`);
});
