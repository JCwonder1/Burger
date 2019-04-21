var express = require('express');
var router = express.Router();
var burger = require('../model/burgers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  burger.all(function (data) {
    let hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
  
});

router.post('/api/burger', function(req, res) {
  console.log(req.body);
  burger.create([req.body.name.trim(), "false"], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  console.log(req.params, " <--Params Condition-->", req.body);
  burger.update(req.params, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
