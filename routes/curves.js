var express = require('express');
var router = express.Router();

/*
 * GET curvelist.
 */
router.get('/curvelist', function(req, res) {
    
     var items = 
     [
         {
            uid: "bit",
            name: "bit"
         },
         {
            uid: "rop",
            name: "rop"
         }
    ];
    
    res.json (items);
    
});



module.exports = router;
