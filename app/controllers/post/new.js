import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {
      const titleURL = this.get('title').underscore();
      const post = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        //        author: 'test',
        titleURL: titleURL
      });
      post.save();
      this.set('title', '');
      this.set('body', '');
      this.transitionToRoute('posts');
    }
  }
});
