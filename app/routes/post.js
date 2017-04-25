import Ember from 'ember';

export default Ember.Route.extend({
  /*
    param is the titleURL of post
  */
  model: function (param) {
    // if store.post is
    const titleURL = param.titleURL
    return this.get('store').query('post', {
      titleURL: titleURL
    }).then(function (posts) {
      return posts.filterBy('titleURL', titleURL).get('firstObject')
    })

  }
});
