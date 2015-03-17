var express = require('express');
var fs = require("fs");
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/curvelist', function(req, res) {
    
    fs.readFile('./sampledata/curvelist.json', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var jsonRep = JSON.parse(data);
        res.json(jsonRep);
    });
});

router.get('/curvelist/:wellboreId', function(req, res) {
    
    var wellboreId = req.params.wellboreId;
    console.log('curves for wellboreid ' + wellboreId);
    fs.readFile('./sampledata/curvelist.json', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var jsonRep = JSON.parse(data);
        res.json(jsonRep);
    });
});


module.exports = router;
