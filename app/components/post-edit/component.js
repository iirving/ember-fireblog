import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.errors = [];

    if (this.get('mode') === 'new') {
      this.set('isEditing', true);
    } else {
      this.set('isEditing', false);
    }
    this.set('displayTitle', this.displayTitle)

  },

  displayTitle: Ember.computed('mode', 'title', 'model',
    function () {
      if (this.get('mode') === 'edit') {
        const title = this.get('model').get('title')
        return `Post : ${title}`
      } else {
        return 'New Post'
      }

    }),

  actions: {

    cancel() {
      let model = this.get('model')
      if (this.get('mode') === 'edit') {
        let store = this.get('store')
        store.findRecord('post', model.get('id')).then((post) => {
          post.rollbackAttributes()
        })
        this.set('isEditing', false)
      } else {
        this.get('routing').transitionTo('posts')
      }
    },

    edit() {
      this.set('isEditing', true);
    },

    delete() {
      let that = this
      let model = this.get('model');
      model.destroyRecord().then(function () {
        that.get('routing').transitionTo('posts')
        that.set('isEditing', false);
      })
    },

    save() {
      const store = this.get('store')
      let model = this.get('model');
      if (this, this.get('mode') === 'edit') {
        model.save();
        this.set('displayTitle', this.displayTitle)
        this.set('isEditing', false)
      } else {
        const post = store.createRecord('post', {
          title: model.get('title'),
          body: model.get('body')
        });
        post.save();
        this.set('model.title', '');
        this.set('model.body', '');
      }
      this.get('routing').transitionTo('posts')
    }
  }

});
