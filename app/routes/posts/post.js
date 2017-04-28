import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  /*
    param is the titleURL of post
  */
  model: function (param) {
    const titleURL = param.titleURL
    const store = this.get('store')
      // peek into local store and see is titleURL exists there
    let posts = store.peekAll('post')
    if (Ember.isPresent(posts)) {
      return posts.filterBy('titleURL', titleURL).get('firstObject')
    } else { // else hit the store and see if turrleURL exists there
      return store.query('post', {
        titleURL: titleURL
      }).then(function (posts) {
        return posts.filterBy('titleURL', titleURL).get('firstObject')
      })
    }
  },

  afterModel(model) {
    // if the model returns empty because the titleURL doesn't match anything
    if (Ember.isEmpty(model)) {
      this.transitionTo('posts');
    }
  }

});
