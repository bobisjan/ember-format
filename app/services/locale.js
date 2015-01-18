import Ember from 'ember';
import Stream from 'ember-format/utils/stream';

var get = Ember.get;
var set = Ember.set;
var computed = Ember.computed;
var observer = Ember.observer;

export default Ember.Object.extend({

  locales: null,

  code: null,

  init: function() {
    this._super();
    this._initStream();
  },

  _initStream: function() {
    var that = this;
    var stream = new Stream(function() {
      return that;
    });

    set(this, 'stream', stream);
  },

  _notify: observer('code', function() {
    var stream = get(this, 'stream');

    stream.value(); // to set clean state on stream
    stream.notify();
  }),

  displayName: computed('code', function() {
    var code = get(this, 'code');

    return this.displayNameFor(code);
  }),

  displayNameFor: function(code) {
    var path = ['locales', code, 'displayName'].join('.');

    return get(this, path);
  },

  messages: computed('code', function() {
    var code = get(this, 'code');

    return this.messagesFor(code);
  }),

  messagesFor: function(code) {
    var path = ['locales', code, 'messages'].join('.');

    return get(this, path);
  },

  formats: computed('code', function() {
    var code = get(this, 'code');

    return this.formatsFor(code);
  }),

  formatsFor: function(code) {
    var path = ['locales', code, 'formats'].join('.');

    return get(this, path);
  }

});
