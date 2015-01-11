import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return {
      date: new Date(),
      car: 'car',
      hello: 'hello',
      number: 156780.4354,
      amount: 1567804354,
      percent: 0.85,
      yesterday: Date.now() - (24 * 60 * 60 * 1000),
      beforeYesterday: Date.now() - (24 * 60 * 60 * 1000 * 2),
      lastMonth: Date.now() - (24 * 60 * 60 * 1000 * 31),
      photos: 'photos',
      numPhotos: 3
    };
  }

});
