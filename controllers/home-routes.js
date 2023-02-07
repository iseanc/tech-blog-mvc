const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// Get all blog posts
router.get('/', async (req, res) => {
  // Retrieve blog posts from database
  try {
    const dbPostData = await Post.findAll({
      // attributes: ['title','content','created_at','date_created'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      // Map.prototype.get(), "plain: true" is SEQUELIZE syntax, part of .findAll()  
      post.get({ plain: true }) 
    );
    
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Comment,
      //     attributes: [
      //       'id',
      //       'title',
      //       'artist',
      //       'exhibition_date',
      //       'filename',
      //       'description',
      //     ],
      //   },
      // ],
    });

    const post = dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Load the dashboard
router.get('/dashboard', async (req, res) => {
  
  res.render('dashboard', {
    // galleries, -- may need BLOG posts and/or COMMENTS here
    loggedIn: req.session.loggedIn,
  });
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
