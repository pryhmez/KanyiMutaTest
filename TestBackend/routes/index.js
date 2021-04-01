// var router = require('express').Router();
var clockinRoutes = require("./clockinRoutes");


module.exports = function (router, app) {
    router.use("/clockin", clockinRoutes());

    return router;
}