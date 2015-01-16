import Ember from 'ember';
import formatHelper from '../helpers/format';
import formatDateHelper from '../helpers/format-date';
import formatMessageHelper from '../helpers/format-message';
import formatNumberHelper from '../helpers/format-number';
import formatRelativeHelper from '../helpers/format-relative';

export function initialize(/*container, application*/) {
  Ember.HTMLBars.registerHelper('format', formatHelper);
  Ember.HTMLBars.registerHelper('format-date', formatDateHelper);
  Ember.HTMLBars.registerHelper('format-message', formatMessageHelper);
  Ember.HTMLBars.registerHelper('format-number', formatNumberHelper);
  Ember.HTMLBars.registerHelper('format-relative', formatRelativeHelper);
}

export default {
  name: 'helper',
  after: 'formatter',
  initialize: initialize
};
