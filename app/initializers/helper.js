import Ember from 'ember';
import formatHelper from '../helpers/format';
import formatDateHelper from '../helpers/format-date';
import formatMessageHelper from '../helpers/format-message';

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', formatHelper);
  Ember.HTMLBars.registerHelper('format-date', formatDateHelper);
  Ember.HTMLBars.registerHelper('format-message', formatMessageHelper);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
