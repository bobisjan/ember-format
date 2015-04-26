import Ember from 'ember';

export default Ember.Controller.extend({

  selectedLocale: null,

  init: function() {
    this._super();
    var code = this.get('locale.code');

    this.set('selectedLocale', code);
  },

  locales: Ember.computed('locale.locales.@each.enabled', function() {
    var locales = this.get('locale.locales');
    var enabled = locales.toArray().filterBy('enabled', true);

    return Ember.A(enabled);
  }),

  selectedLocaleDidChange: Ember.observer('selectedLocale', function() {
    var code = this.get('selectedLocale');
    var locale = this.get('locale');

    locale.set('code', code);
  })

});
