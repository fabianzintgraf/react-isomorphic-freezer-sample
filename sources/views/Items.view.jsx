const React = require('react');
const ReactFreezerComponent = require('./ReactFreezerComponent.view.jsx');

const State = require('./../state')

class Items extends ReactFreezerComponent {
  
  constructor(props, context) {
    super(props, context);
    this.displayName = 'Items';
  }

  shouldComponentUpdate(props, state, context) {
    return this.context.state.items !== context.state.items;
  }

  renderComponent() {
    return (
      <div>
        {this.context.state.items.map((item, index) => <div key={index}>{item}</div>)}
        <button onClick={ () => this.context.state.items.push('123')}>Add new items</button>
      </div>
    );
  }
}

module.exports = Items;
