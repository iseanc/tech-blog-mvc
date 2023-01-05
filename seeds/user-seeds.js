const { User } = require('../models');

const userdata = [
  {
    username: "sean",
    email: "sean@mail.com",
    password: "$2b$10$NdsXjLyy/jSgmQDh3jaAAOmx0NBC0nB7rlLFFBPuRrjsMStNcccgy"
  },
  {
    username: "betty",
    email: "betty@mail.com",
    password: "$2b$10$NdsXjLyy/jSgmQDh3jaAAOmx0NBC0nB7rlLFFBPuRrjsMStNcccgy",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
