const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');


// Authorization for creating a user 
router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
});


//Authorization for a logged in user
router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // Saving username into the session - server accesses the username 
        req.session.username = user.username;

        //see the session was saved
        console.log('session', req.session);
        res.status(200).json({ message: `Welcome ${username} we in there like swim wear!`,
      });
      } else {
        res.status(401).json({ message: `Nah you arent a user. Whatcha doing?`})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
