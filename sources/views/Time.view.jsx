const React = require('react');
const ReactFreezerComponent = require('./ReactFreezerComponent.view.jsx');

const State = require('./../state')

class Time extends ReactFreezerComponent {
 
  constructor(props, context) {
    super(props, context);
    this.displayName = 'Time';
  }

  shouldComponentUpdate(props, state, context) {
    return this.context.state.currentTime !== context.state.currentTime;
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  updateTime() {
    State.get().currentTime.set({ time: new Date()}).now();
  }

  renderComponent() {
    return (
      <div>{this.context.state.currentTime.time.toString()} Time</div>
      );
  }
}

module.exports = Time;
