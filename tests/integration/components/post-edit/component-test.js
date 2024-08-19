import {
  moduleForComponent,
  test
} from 'ember-qunit';
// import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
moduleForComponent('post-edit', 'Integration | Component | post edit', {
  integration: true
});

test('it renders a new post', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('isEditing', true)
  this.render(hbs `{{post-edit mode='new'}}`);

  assert.equal(this.$('h1.post-edit-display-title').text().trim(), 'New Post', 'title is New post for a new post')
  assert.equal(this.$('.post-edit').length, 1, 'edit section is there ')

});

test('it renders a post for pre edit (read)', function (assert) {

  const postModel = Ember.Object.create({
    title: 'A Title',
    body: 'This is the posts body.'
  });
  this.set('post', postModel)
  this.set('isEditing', false)
  this.render(hbs `{{post-edit model=post mode='edit'}}`);


  const displayTitleText = this.$('h1.post-edit-display-title').text().trim()
  assert.equal(displayTitleText, `Post : ${postModel.title}`, 'initial render for edit post for the titile is a label and the post title')
  const displayBodyText = this.$('h4.post-edit-display-body').text().trim()
  assert.equal(displayBodyText, `${postModel.body}`, 'initial render for body is the post body')
  assert.equal(this.get('isEditing'), false, 'initial isEditing state is false')
  assert.equal(this.$('.post-edit-display').length, 1, 'display section is there ')

});

// test('it renders a post for editing and can be canceled', function (assert) {

//   const postModel = Ember.Object.create({
//     title: 'A Title',
//     body: 'This is the posts body.'
//   });
//   this.set('post', postModel)
//   this.set('isEditing', false)
//   this.render(hbs `{{post-edit model=post mode='edit'}}`);

//   this.$('button#btn-edit').click();
//   return wait().then(() => {
//     assert.equal(this.$('.post-edit-display').length, 0, 'display section is hidden')
//     assert.equal(this.$('.post-edit').length, 1, 'edit section is there')

//     // change the title and cancel
//     let bodyInput = this.$('.post-edit .body textarea')
//     const bodyTxt = 'a body text to delete'
//     bodyInput.val(bodyTxt)
//     assert.equal(bodyInput.val().trim(), bodyTxt, 'body text is ready for cancel')
//     this.$('button#btn-cancel').click();
//     return wait().then(() => {
//       assert.equal(this.$('.post-edit-display').length, 1, 'after cancel the display section is shown')
//       const displayBodyText = this.$('h4.post-edit-display-body').text().trim()
//       assert.equal(displayBodyText, `${postModel.body}`, 'initial render for body is the orginal post body')

//     })
//   })
// });


test('it renders a post for editing', function (assert) {

  const postModel = Ember.Object.create({
    title: 'A Title',
    body: 'This is the posts body.'
  });
  this.set('post', postModel)
  this.set('isEditing', false)
  this.render(hbs `{{post-edit model=post mode='edit'}}`);

  this.$('button#btn-edit').click();
  assert.equal(this.$('.post-edit-display').length, 0, 'display section is hidden')
  assert.equal(this.$('.post-edit').length, 1, 'edit section is there')

  this.$('button#btn-edit').click();

  let titleInput = this.$('.post-edit .title textarea')
  assert.equal(titleInput.val().trim(), `${postModel.title}`, 'title is ready for editing')
  let bodyInput = this.$('.post-edit .body textarea')
  assert.equal(bodyInput.val().trim(), `${postModel.body}`, 'body is ready for editing')
  const bodyTxt = 'a new body text'
  bodyInput.val(bodyTxt)
  assert.equal(bodyInput.val().trim(), `${bodyTxt}`, 'body is changed')

  // this.$('button#btn-update').click();
  // return wait().then(() => {
  //   assert.equal(this.$('.post-edit-display').length, 1, 'after cancel the display section is shown')
  //   const displayBodyText = this.$('h4.post-edit-display-body').text().trim()
  //   assert.equal(displayBodyText, `${postModel.body}`, 'initial render for body is the orginal post body')

  // })


});
