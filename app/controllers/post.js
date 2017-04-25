import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    cancel() {
      this.set('isEditing', false);
    },

    edit() {
      this.set('isEditing', true);
    },

    delete() {
      //      console.log('delete')
      this.set('isEditing', false);
      let that = this
      let model = this.get('model');
      model.destroyRecord().then(function () {
        that.transitionToRoute('posts');
      })

    },

    save() {
      let model = this.get('model');
      model.save();

      this.set('isEditing', false);
      this.transitionToRoute('post', model);
    }
  }

});
