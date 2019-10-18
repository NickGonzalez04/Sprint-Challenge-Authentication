/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/


const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');

module.exports = function authenticate(req, res, next) {
  const { username, password } = req.headers;

  if( username && password ) {
    Users.findBy({ username })
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            next();
      } else {
       res.status(401).json({ you: 'shall not pass!' });
         }
      })
    .catch(error => {
      res.status(500).json(error);
    });
    }    else {
    res.status(400).json({ message: 'Please provide valid Credentials '})
    }
};
