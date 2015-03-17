var express = require('express');
var fs = require("fs");
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/wellborelist', function(req, res) {
    
    console.log('servside call wellborelist');
    fs.readFile('./sampledata/wellborelist.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var jsonRep = JSON.parse(data);
        res.json(jsonRep);
    });
});


module.exports = router;
