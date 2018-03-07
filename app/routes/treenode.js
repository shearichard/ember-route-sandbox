import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'Agrand-old-mansion',
    }, {
      id: 'Brban-living',
    }, {
      id: 'Cowntown-charm',
    }];
  }
});
