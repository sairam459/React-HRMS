var express =require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');
const path = require('path');



global.app = module.exports=express();
var router =require('./routes')

//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)))
app.use(bodyParser.json());
app.use(cors());
app.use('/hrms', router);

app.set('supersecret','src_459');
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server running on port ' + port);