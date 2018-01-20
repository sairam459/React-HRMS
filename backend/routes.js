var router = require("express").Router();
var Login = require("./services/login");
var Employee = require("./services/employee");
var Util = require("./services/util");
var jwt = require("jsonwebtoken");
var cookieSession = require('cookie-session')

// router.use(cookieSession({
//   secret: 'session',
//   resave: false,
//   saveUninitialized: true
// }))
//to over come cant set head error
// router.use(function(req,res,next){
//   var _send = res.send;
//   var sent = false;
//   res.send = function(data){
//     if(sent) return;
//     _send.bind(res,data);
//     sent = true;
// };
//   next();
// });
router.use(function(req, res, next) {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  
  if (token) {
    
    jwt.verify(token, app.get("supersecret"), function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token."
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else if (req.path == "/login") {
      //res.redirect('/')
      next();
  } else {
   
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
});
router.post("/login", Login.loginCheck);
router.post("/getAllEmployees", Employee.getAllEmployees);
router.post("/:id/saveEmployee", Employee.createEmployee);
router.delete("/:eid/:mid/deleteEmployee", Employee.deleteEmployee);
router.get("/:id/getAnalysisData", Employee.getAnalysisData);
router.get("/getVideo", Util.getVideo);
router.get("/:id/logout", Employee.logout);
module.exports = router;

