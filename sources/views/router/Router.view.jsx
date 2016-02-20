'use strict';

const React = require('react');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const browserHistory = ReactRouter.browserHistory;

const App = require('./../App.view.jsx');
const NotFound = require('./../NotFound.view.jsx');
const About = require('./../About.view.jsx');

class AppRouter extends React.Component {

  render() {

    const historyController = IS_CLIENT ? browserHistory : ReactRouter.createMemoryHistory(this.props.pathname);

    return (
      <Router history={historyController}>
        <Route path="my-component">
          <Route path="start" component={About} />
          <Route path="about" component={About} />
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    );
  }
}

module.exports = AppRouter;
