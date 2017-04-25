import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('post', {
    path: '/:titleURL'
  }, function () {
    this.route('new');
  });

  this.route('posts', function () {

  });

});

export default Router;
