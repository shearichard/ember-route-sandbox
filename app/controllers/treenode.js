import Ember from 'ember';
const { computed } = Ember;
export default Ember.Controller.extend({

  lastSelectedHouse: -1,

  lastSelectedHouseChanged: Ember.observer('lastSelectedHouse',function() {
    console.log('lastSelectedHouse changed (' + this.get('lastSelectedHouse') + ')')
  }),

  actions: {
    showDetail(id){
      this.set('lastSelectedHouse', id);
    },
  }
});
