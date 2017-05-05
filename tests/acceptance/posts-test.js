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

// test('visiting /posts', function (assert) {
//   let posts = server.createList('post', 10)

//   let firstPostTitleUrl = posts[0].titleURL

//   visit(`/posts/${firstPostTitleUrl}`);

//   andThen(function () {
//     assert.equal(currentURL(), '/posts')
//     assert.equal(find('div.post-read-summary-link').length, 6)
//   });
// });

test('create a new post', function (assert) {
  visit('/')
  let startLength = 0
  click('button#btn-new')
  andThen(function () {
    assert.equal(currentURL(), '/posts/new', 'button new goes to the new post url')
    assert.equal(
      find('h1.post-edit-display-title').text().trim(), 'New Post', 'new post is displayed')
    startLength = find('ul#post-list li').length
  })

  click('button#btn-cancel')
  andThen(function () {
    assert.equal(currentURL(), '/posts', 'button cancel goes back to the posts url ')
    assert.equal(
      find('ul#post-list li').length, startLength, `and after a cancel the number of posts hasn't changed, still ${startLength}`)
  })
  click('button#btn-new')
  fillIn('div.title textarea', 'My new post');
  click('button#btn-add')
  andThen(function () {
    assert.equal(currentURL(), '/posts', 'button add goes back to post url')
    assert.equal(
      find('ul#post-list li').length, startLength + 1, `and there is an addtional post for a total of ${startLength + 1}`)
  })

})
