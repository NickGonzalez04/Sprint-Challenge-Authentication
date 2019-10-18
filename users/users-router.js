const router = require('express').Router();


//Bring in the functionality
const Users = require('./user-model');

// Bring in middleware 
const authenticate = require('../auth/authenticate-middleware');
//Users route to display all users

router.get('/users', authenticate, (req, res)=> {

    //Checks to display the user logged in viewing users
    console.log('username', req.session.username);

    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});


module.exports = router;