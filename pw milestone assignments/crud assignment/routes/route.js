const express = require('express');
const router = express.Router();

const controller = require('../controllers/appController');
const middleware = require('../middlewares/checkUser');

router
  .route('/register')
  .post(middleware.checkUserExist, controller.registerUser);
router.route('/login').post(controller.loginUser);

module.exports = router;
