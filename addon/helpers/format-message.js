import Ember from 'ember';
import formatHelper from './format';

export default function formatMessageHelper(params, hash, options, env) {
  Ember.assert('You passed `' + params.length + '` parameters in your template, but just input is required.', params.length === 1);
  params.unshift('message');
  return formatHelper.call(this, params, hash, options, env);
}
