const React = require('react');

class ReactFreezerComponent extends React.Component {

  static contextTypes = {
    state: React.PropTypes.object
  };

  render() {
    console.log('Render ' + this.displayName);
    return this.renderComponent();
  }
}

module.exports = ReactFreezerComponent;