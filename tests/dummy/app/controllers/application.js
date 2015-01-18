import Ember from 'ember';

export default Ember.Controller.extend({

  selectedLocale: null,

  init: function() {
    this._super();
    var code = this.get('locale.code');

    this.set('selectedLocale', code);
  },

  locales: function() {
    var locales = this.get('locale.locales');

    return locales.toArray().filterBy('enabled', true);
  }.property('locale.locales.@each.enabled'),

  selectedLocaleDidChange: function() {
    var code = this.get('selectedLocale');
    var locale = this.get('locale');

    locale.set('code', code);
  }.observes('selectedLocale')

});
