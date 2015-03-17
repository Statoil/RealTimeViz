var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/wellborelist', function(req, res) {
    
    var items = {
        uid: "uid1",
        name: "wellbore1"
    };
    
    res.json (items);
    
    //var db = req.db;
    //db.collection('userlist').find().toArray(function (err, items) {
    //    res.json(items);
    //});
    
    
});


module.exports = router;
