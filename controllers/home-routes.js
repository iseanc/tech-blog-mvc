const router = require('express').Router();
const { Post, Comment } = require('../models');

// Load the home page with all blog posts
router.get('/', async (req, res) => {
  // TODO: Retrieve blog posts from database
    // NOTE: Reqs do NOT mention including blog post comments
  try {
    const dbPostData = await Post.findAll({
      // include: [
      //   {
      //     model: Painting,
      //     attributes: ['filename', 'description'],
      //   },
      // ],
    });

    // console.log(dbPostData);

    const posts = dbPostData.map((post) =>
      // Map.prototype.get(), "plain: true" is SEQUELIZE syntax, part of .findAll()  
      post.get({ plain: true }) 
    );
    
    res.render('homepage', {
      // galleries, -- may need BLOG posts and/or COMMENTS here
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  //Render the 'homepage' Handlebars.js template.
  // res.render('homepage', {
  //   // galleries, -- may need BLOG posts and/or COMMENTS here
  //   loggedIn: req.session.loggedIn,
  // });
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
