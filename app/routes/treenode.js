import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'grand-old-mansion',
    }, {
      id: 'Brban-living',
    }, {
      id: 'Cowntown-charm',
    }];
  }
});
