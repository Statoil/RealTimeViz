var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var items = [
      {
        "uid": "uidcurve1",
        "name": "bitDepth",
        "unit": "meter"
      },
      {
        "uid": "rop",
        "name": "ROP",
        "unit": "m/s"
      }
];

    res.json(items);
    //var db = req.db;
    //db.collection('userlist').find().toArray(function (err, items) {
    //    res.json(items);
    //});
});

module.exports = router;