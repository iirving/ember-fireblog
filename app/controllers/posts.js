import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    edit() {
      this.set('isEditing', true);
    },
    save() {
      this.get('model').forEach(model => {
        const titleURL = this.get('title').underscore();
        model.set('titleURL', titleURL);
        model.save();
      });
      this.set('isEditing', false);
      this.transitionToRoute('index');
    }
  }

});
