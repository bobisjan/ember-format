import Ember from 'ember';
import formatHelper from '../helpers/format';
import formatDateHelper from '../helpers/format-date';

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', formatHelper);
  Ember.HTMLBars.registerHelper('format-date', formatDateHelper);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
