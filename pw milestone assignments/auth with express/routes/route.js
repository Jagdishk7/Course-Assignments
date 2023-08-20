const express = require('express');
const router = express.Router();

const controller = require('../controllers/appController');
const middleware = require('../middlewares/checkUser');

router
  .route('/register')
  .post(middleware.checkUserExist, controller.registerUser);
router.route('/login').post(controller.loginUser);

router.route('/profile').get(middleware.auth, controller.profile);

router.route('/logout').get(middleware.auth, controller.logout);

module.exports = router;
