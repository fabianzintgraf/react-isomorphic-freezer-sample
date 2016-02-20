'use strict'

const fs = require('fs');
const URL = require('url');
const indexTemplateContent = fs.readFileSync('./dist/index.html', 'utf-8');
const State = require('./state');

function searchPage(req, res) {
  const requestLocation = URL.parse(req.url);

  const initialState = {
    pathname: requestLocation.pathname,
    items: ['a', 'b', 'c', 'd'],
    currentTime: { time: new Date() }
  };

  State.set(initialState);

  res.render('./router/Router.view.jsx', initialState, (error, pageHtml) => {

    const scripts = '<script>var initialState =' + _safeStringify(State.get()) + ';</script>';
    res.send(indexTemplateContent.replace('<INITIAL-STATE></INITIAL-STATE>', scripts).replace('<INITIAL-APP></INITIAL-APP>', pageHtml));

    if (error) {
      console.error('Error on Pre-Rendering', error);
    }
  });
}

// A utility function to safely escape JSON for embedding in a <script> tag
function _safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = {
  search: searchPage
};
