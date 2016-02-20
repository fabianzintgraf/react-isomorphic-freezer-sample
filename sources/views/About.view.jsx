const React = require('react');
const State = require('./../state')
const Time = require('./Time.view.jsx');
const Items = require('./Items.view.jsx');

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {state: State.get()};
  }

  static childContextTypes = {
    state: React.PropTypes.object
  };

  getChildContext() {
    return { state: State.get() };
  }

  componentDidMount() {
    State.on('update', () => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="index">
        <Time />
        <h1>This is the first page!!</h1>

        <Items />
      </div>
    );
  }
}

module.exports = App;
