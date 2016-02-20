const React = require('react');
const State = require('./../state')

class Time extends React.Component {

  static propTypes = {
    state: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  shouldComponentUpdate(props) {
    return this.props.state.currentTime.time !== props.state.currentTime.time;
  }

  updateTime() {
    State.get().currentTime.set({ time: new Date()}).now();
  }

  render() {
    return <div>{this.props.state.currentTime.time.toString()} Time</div>;
  }
}

module.exports = Time;
