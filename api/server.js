const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();


const sessionConfiguration = {
    name: 'thisthatSprintSession!',
    secret: 'yeathisthatSprintSessionsecret',
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
            secure: false,
        },
        resave: false,
        saveUninitialized: true,
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(sessions(sessionConfiguration));

server.use('/api/auth', authRouter);
server.use('/api/loggedin',userRouter);
server.use('/api/jokes', authenticate, jokesRouter);

// Test Router
server.get('/tests', (req,res) => {
    res.status(200).json({ message: 'In there like swim wear' });
})

module.exports = server;
