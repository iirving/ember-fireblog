import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {


  this.route('posts', function () {
    this.route('new');
    this.route('post', {
      path: '/:titleURL'
    });
  });

});

export default Router;
