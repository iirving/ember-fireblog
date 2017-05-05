import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('post-read-summary-link', 'Integration | Component | post read summary link', {
  integration: true
});

test('it renders', function (assert) {

  let post = Ember.Object.create({
    title: 'title',
    body: 'body is just long enough to get truncated '
  })
  this.set('post', post)
  this.render(hbs `{{post-read-summary-link post=post}}`);

  assert.equal(this.$('.summary-title').text().trim(), 'title', 'title is title');
  assert.equal(this.$('.summary-body').text().trim(), 'body is just long...', 'body is truncated body');
});
