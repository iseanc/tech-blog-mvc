const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many Post
User.hasMany(Post, {
  foreignKey: 'author_id',
});

// Post belongs to one User
Post.belongsTo(User, {
  foreignKey: 'author_id',
});

// User has many Comment
User.hasMany(Comment, {
  foreignKey: 'author_id',
});

// Comment belongs to one User
Comment.belongsTo(User, {
  foreignKey: 'author_id',
});

// Post has many Comment
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});


// Comment belongs to one Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = {
  User,
  Post,
  Comment,
};

module.exports = { User, Post, Comment };
