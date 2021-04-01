const { register} = require("../services/memberServices");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");
const checkAuth = require("../middleWares/checkAuth");

module.exports = function userController() {
  this.register = (req, res, next) => {

    res.send({
      success: true,
      message: "registration successful",
      data: req.body
    })

    // register(req.body, req.params.id)
    //   .then(result => {
    //     res.send({
    //       success: true,
    //       message: "member registered successfully",
    //       data: result
    //     });
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     res.send({
    //       success: false,
    //       message: "could not register member",
    //       data: req.body,
    //       error

    //     });
    //   });
  };

  this.signin = (req, res, next) => {

    // console.log(req.query);
    res.send({
      success: true,
      message: "successfully clocked in",
      data: req.body

    })
  }

};
