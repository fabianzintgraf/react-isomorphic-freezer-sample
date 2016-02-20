const React = require('react');
const State = require('./../state')
const Time = require('./Time.view.jsx');

class App extends React.Component {

  componentDidMount() {
    State.on('update', () => {
      this.forceUpdate();
    });
  }

  render() {
    const state = State.get();

    return (
      <div className="index">
        <Time state={state} />
        <Time state={state} />
        <Time state={state} />
        <Time state={state} />
        <Time state={state} />
        <Time state={state} />


        <h1>{state.items.length} This is the first page!!</h1>

        <button onClick={ () => state.items.push('123')}>Add new items</button>
      </div>
    );
  }
}

module.exports = App;
