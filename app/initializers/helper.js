import Ember from 'ember';
import formatHelper from '../helpers/format';

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', formatHelper);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
