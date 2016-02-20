const Freezer = require('freezer-js')
const utilities = require('./services/utilities');

var state = utilities.store('freezerTodos') || {
  items: [],
  currentTime: { time: undefined }
};

module.exports = new Freezer( state );
