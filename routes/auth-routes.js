const Router = require('express');
const controller = require('../controllers/auth-controller');
const { check } = require("express-validator");

const router = new Router()

router.post('/registration', [
    check('username', "Enter your name").notEmpty(),
    check('email', "Please enter a valid e-mail").isEmail(),
    check('password', "Password must be at least 6 characters").isLength({min:6})
], controller.registration);

router.post('/login', [
    check('email', "Please enter a valid e-mail").normalizeEmail().isEmail(),
    check('password', "Password must be at least 6 characters").isLength({min:6})
], controller.login)

module.exports = router