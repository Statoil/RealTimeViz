{"filter":false,"title":"curves.js","tooltip":"/routes/curves.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["{","            uid: \"uid1\",","            name: \"wellbore1\"","         }"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":22},"action":"remove","lines":["uid1"]},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"remove","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"remove","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"remove","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":19},"end":{"row":12,"column":28},"action":"remove","lines":["wellbore1"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":18},"end":{"row":15,"column":22},"action":"remove","lines":["uid1"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":19},"end":{"row":16,"column":28},"action":"remove","lines":["wellbore1"]},{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["var express = require('express');","var router = express.Router();","","/*"," * GET curvelist."," */","router.get('/curvelist', function(req, res) {","    ","     var items = ","     [","         {","            uid: \"bit\",","            name: \"bit\"","         },","         {","            uid: \"rop\",","            name: \"rop\"","         }","    ];","    ","    res.json (items);","    ","});","","","","module.exports = router;",""]},{"start":{"row":0,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["exports.userlist = function (req, res) {","var db = req.db;","var collection = db.get('usercollection'); // error in this line","collection.find({}, {}, function (e, docs) {","    res.render('userList', {","        \"userlist\": docs","    });","});","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":16},"action":"remove","lines":["userlist"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["//var db = req.db;","//var collection = db.get('usercollection'); // error in this line","//collection.find({}, {}, function (e, docs) {","    res.render('userList', {","        \"userlist\": docs","    });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":5,"column":6},"action":"insert","lines":["var items = {","        uid: \"uid1\",","        name: \"wellbore1\"","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["exports.userlist = function (req, res) {","var db = req.db;","var collection = db.get('usercollection'); // error in this line","collection.find({}, {}, function (e, docs) {","    res.render('userList', {","        \"userlist\": docs","    });","});","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":2},"end":{"row":18,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":1},"end":{"row":18,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":6},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":7},"action":"insert","lines":["res"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":10},"action":"remove","lines":["js"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":12},"action":"insert","lines":["json"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":15},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["exports.curvelist = function (req, res) {","","var items = {","        uid: \"uid1\",","        name: \"wellbore1\"","    };","    ","    res.json (items);","};","","/*","exports.userlist = function (req, res) {","var db = req.db;","var collection = db.get('usercollection'); // error in this line","collection.find({}, {}, function (e, docs) {","    res.render('userList', {","        \"userlist\": docs","    });","});","};","*/"]},{"start":{"row":0,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["var express = require('express');","var fs = require(\"fs\");","var router = express.Router();","","/*"," * GET userlist."," */","router.get('/wellborelist', function(req, res) {","    ","    fs.readFile('./sampledata/wellborelist.json', 'utf8', function (err,data) {","        if (err) {","            return console.log(err);","        }","        var jsonRep = JSON.parse(data);","        res.json(jsonRep);","    });","});","","","module.exports = router;",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":25},"action":"remove","lines":["wellborelist"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":30},"end":{"row":9,"column":42},"action":"remove","lines":["wellborelist"]},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":15,"column":7},"action":"remove","lines":["fs.readFile('./sampledata/curvelist.json', 'utf8', function (err,data) {","        if (err) {","            return console.log(err);","        }","        var jsonRep = JSON.parse(data);","        res.json(jsonRep);","    });"]},{"start":{"row":9,"column":4},"end":{"row":15,"column":7},"action":"insert","lines":["fs.readFile('./sampledata/curvelist.json', 'utf8', function (err,data) {","    if (err) {","      return console.log(err);","    }","    var jsonRep = JSON.parse(data);","    res.json(jsonRep);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":14},"end":{"row":0,"column":21},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426595300295,"hash":"94f75b862f57f1735edc30a774cc6d5d5b340564"}