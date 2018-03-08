import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('treenode', function() {
    this.route('housedetail');
  });
  this.route('housedetailnonnested');
});

export default Router;
