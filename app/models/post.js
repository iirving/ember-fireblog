import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),


  titleURL: Ember.computed('title',
    function () {
      return this.get('title').underscore()
    })


});
