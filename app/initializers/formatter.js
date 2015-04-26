import DateFormatter from '../formatters/date';
import MessageFormatter from '../formatters/message';
import NumberFormatter from '../formatters/number';
import RelativeFormatter from '../formatters/relative';

export function initialize(container, application) {
  application.register('formatter:date', DateFormatter);
  application.register('formatter:message', MessageFormatter);
  application.register('formatter:number', NumberFormatter);
  application.register('formatter:relative', RelativeFormatter);

  application.inject('formatter', 'locale', 'service:locale');
}

export default {
  name: 'ember-format-formatter',
  after: 'ember-format-locale',
  initialize: initialize
};
