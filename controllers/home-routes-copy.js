const router = require('express').Router();
const { Gallery, Painting } = require('../models');

// Load the home page
router.get('/', async (req, res) => {
  // TODO: Retrieve blog posts from database
    // NOTE: Reqs do NOT mention including blog post comments
  try {
    res.render('homepage', {
      // galleries, -- may need BLOG posts and/or COMMENTS here
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

// Load the dashboard
router.get('/', async (req, res) => {
  
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
