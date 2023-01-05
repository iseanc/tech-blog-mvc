const { Post } = require('../models');

const postdata = [
  {
    author_id: 1,
    title: 'sean\'s first post',
    content: 'This is the first post for user Sean.',
  },
  {
    author_id: 2,
    title: 'betty\'s first post',
    content: 'Hi, I\'m Betty and this is my blog.',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
