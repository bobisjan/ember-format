import Ember from 'ember';
import format from '../helpers/format';

// TODO remove when exposed as a public API
if (!Ember.HTMLBars.registerHelper) {
  Ember.HTMLBars.registerHelper = Ember.HTMLBars._registerHelper;
}

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', format);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
