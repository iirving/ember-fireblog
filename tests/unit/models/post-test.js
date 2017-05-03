import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function (assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// test that the titleURL is the title with underscores
test('titleURL is the title with lowercase and underscores instead of spaces',
  function (assert) {
    assert.expect(1);
    const post = this.subject()
    Ember.run(function () {
      post.set('title', 'this is a test of titleURL');
    });

    assert.equal(post.get('titleURL'), 'this_is_a_test_of_title_url')

  })
