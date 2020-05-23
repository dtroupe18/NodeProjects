var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Configure app for bodyParser()
// lets us grab data from the body of POST

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

// Set up port for server to listen on
var port = process.env.PORT || 3000;

// Connect to DB
mongoose.connect(
  'mongodb://localhost:27017/hello-world', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// API Routes
var router = express.Router();

// All routes prefixed with /api
app.use('/api', router);

// Test route
// http://localhost:3000/api/
router.get('/', function(req, res) {
  res.json({message: 'Welcome to our API!'});
});

// fire up server
app.listen(port);

// print message to console
console.log('Server listening on port ' + port);
