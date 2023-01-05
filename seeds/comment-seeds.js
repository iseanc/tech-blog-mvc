const { Comment } = require('../models');

const commentdata = [
  {
    author_id: 2,
    post_id: 1,
    content: 'I\'m Betty, and I\'m commenting on Sean\'s post.',
  },
  {
    author_id: 1,
    post_id: 2,
    content: 'Hi, I\'m Sean and this is my comment to the Hi I am Betty post.',
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
