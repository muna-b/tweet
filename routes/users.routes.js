const router = require('express').Router();
const { signup, signupForm, uploadImage } = require('../controllers/users.controller')
const { ensureAuthenticated } = require('../config/gards.config');


router.get('/signup/form', signupForm)
router.post('/signup', signup)
router.post('/update/image', ensureAuthenticated ,uploadImage),


module.exports = router