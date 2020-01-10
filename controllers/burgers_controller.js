const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// devour a burger
router.post("/api/burgers", function(req, res) {
  burger.devour(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

// PUT;

// Export routes for server.js to use.
module.exports = router;
