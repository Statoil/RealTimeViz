var express = require('express');
var fs = require("fs");
var router = express.Router();


router.get('/curvelist', function(req, res) {

    fs.readFile('./sampledata/curvelist.json', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        var jsonRep = JSON.parse(data);
        res.json(jsonRep);
    });
});


//example get with an ID 
router.get('/curvelist/:wellboreId', function(req, res) {
    var wellboreId = req.params.wellboreId;
    if (wellboreId == "1") {
        //create random dataset containing a set of samples
        var ROP = {
            name: "ROP",
            unit: "m/h",
            min: 0,
            max: 100
        };
        var WOB = {
            name: "WOB",
            unit: "tonne",
            min: 0,
            max: 20
        };
        var BIT_DEPTH = {
            name: "BIT_DEPTH",
            unit: "m",
            min: 0,
            max: 10000
        };
        var HOLE_DEPTH = {
            name: "HOLE_DEPTH",
            unit: "m",
            min: 0,
            max: 10000
        };

        var result = [];
        var numberOfSamples = 10;
        for (var i = numberOfSamples; i > 0 ; i--) {
        var curves = [];
            curves.push({
                name: ROP.name,
                unit: ROP.unit,
                value: getRandomNumber(ROP.min, ROP.max)
            });
            curves.push({
                name: WOB.name,
                unit: WOB.unit,
                value: getRandomNumber(WOB.min, WOB.max)
            });
            curves.push({
                name: BIT_DEPTH.name,
                unit: BIT_DEPTH.unit,
                value: getRandomNumber(BIT_DEPTH.min, BIT_DEPTH.max)
            });
            curves.push({
                name: HOLE_DEPTH.name,
                unit: HOLE_DEPTH.unit,
                value: getRandomNumber(HOLE_DEPTH.min, HOLE_DEPTH.max)
            });

            result.push({ time: ((new Date().getTime())-(i*5000)), curves: curves});
        }

        res.json(result);

    }
    else {
        console.log('curves for wellboreid ' + wellboreId);
        fs.readFile('./sampledata/curvelist.json', 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            var jsonRep = JSON.parse(data);
            res.json(jsonRep);
        });
    }
});



function getRandomNumber(min, max){
   return Math.random()*(max-min)+min;
}

module.exports = router;
