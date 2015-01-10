import Ember from 'ember';
import format from '../helpers/format';

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', format);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
