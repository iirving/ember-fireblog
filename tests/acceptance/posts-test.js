import {
  test
} from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function (assert) {
  visit('/posts');

  andThen(function () {
    assert.equal(currentURL(), '/posts');
  });
});

test('should show posts as the home page', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/posts', 'should redirect automatically')
  })
})
