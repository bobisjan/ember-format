import Ember from 'ember';
import formatHelper from '../helpers/format';
import formatDateHelper from '../helpers/format-date';
import formatMessageHelper from '../helpers/format-message';
import formatNumberHelper from '../helpers/format-number';

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', formatHelper);
  Ember.HTMLBars.registerHelper('format-date', formatDateHelper);
  Ember.HTMLBars.registerHelper('format-message', formatMessageHelper);
  Ember.HTMLBars.registerHelper('format-number', formatNumberHelper);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
