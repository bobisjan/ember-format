import { registerFormatHelpers } from 'ember-format/helper';

export var initialize = registerFormatHelpers;

export default {
  name: 'ember-format-helper',
  after: 'ember-format-formatter',
  initialize: registerFormatHelpers
};
