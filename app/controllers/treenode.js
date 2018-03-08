import Ember from 'ember';
const { computed } = Ember;
export default Ember.Controller.extend({

  lSHid: "",
  lSHtitle: "",


  lastSelectedHouseChanged: Ember.observer('lSHid',function() {
    console.log('lSHid changed (' + this.get('lSHid') + ')')
    if (this.get('lSHid') != ""){
      //let hd = this.get('housedetail', this.get('lSHid'))
      //let hd = this.get('store').findRecord('treenode.housedetail', this.get('lSHid'));
      //var treenodes = this.modelFor('treenodes');
      //var treenodes.get('title').findBy('id', this.get('lSHid'));
      //let hd = this.get('store').findRecord('treenode.housedetail', this.get('lSHid'));
      var bar = this.store.findAll('treenode')
      var foo = this.store.findAll('housedetailnonnested')
      this.set('lSHtitle', this.get('hd.title'))
    }
  }),

  actions: {
    showDetail(id){
      this.set('lSHid', id);
    },
  }
});
