const router = require('express').Router();
const tweets = require('./tweets.routes');
const users = require('./users.routes');
const auth = require('./auth.routes');
const { ensureAuthenticated } = require('../config/gards.config');

router.use('/tweets', ensureAuthenticated, tweets);
router.use('/users', users);
router.use('/auth', auth);

router.get('/', (req, res, next) => {
    res.redirect('/tweets');
});


module.exports = router