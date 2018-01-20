var data = require("../data/db");
var jwt = require("jsonwebtoken");
module.exports = {
  loginCheck: function(req, res) {
    var user = data.filter(val => {
      return val.id === req.body.id && val.password === req.body.password;
    });
    var ret;
    user.length === 1 ? (ret = user[0]) : (ret = false);
    if (ret) {
      const payload = {
        admin: req.body.id
      };
      var token = jwt.sign(payload, app.get("supersecret"), {
        expiresIn: 7200
      });
      ret = { data: ret, token: token };
    }
    res.send(ret);
  }
};
