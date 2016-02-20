'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const AppRouter = require('./views/router/Router.view.jsx');
require('./reactions');

const State = require('./state');

const reactBootstrap = function(pageContainerId) {
  window.onerror = onError;

  const pageContainer = document.getElementById(pageContainerId);
  const initialState = window.initialState;

  State.set(initialState);

  ReactDOM.render(
    React.createElement(AppRouter, initialState),
    pageContainer
  );
};

function onError(message, filename, lineNumber, rowNumber, error) {
  const errorMessage = `ClientError ${message} @${filename}:${lineNumber}:${rowNumber}`;
  console.error(errorMessage, error);
}

window.reactBootstrap = {
  reactBootstrap
};
