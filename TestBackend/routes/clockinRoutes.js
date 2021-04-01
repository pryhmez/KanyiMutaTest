const router = require("express").Router();
const clockinController = require("../controllers/clockinController");
// const auth = require("../middleWares/checkAuth");
// const {
//   signUpValidation,
//   loginValidation
// } = require("../middleWares/userValidation");

module.exports = function() {
  var clockinCtl = new clockinController();
  // var authCtl = new authController();

  router.post("/register", clockinCtl.register);
  router.post("/signin", clockinCtl.signin);

  return router;
};
