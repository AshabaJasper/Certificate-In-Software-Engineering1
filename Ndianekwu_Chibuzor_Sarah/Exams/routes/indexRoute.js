const express = require("express");
const router = express.Router();
const Index = require("../model/index")



router.get('/', function(req, res) {
    res.render('index');
  });

  router.post("/", async(req, res) => {
    try {
      const signup = new Index(req.body);
      await signup.save();
      req.flash("success", "Signup successful!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(400).render("index");
    }
  });
  


module.exports = router;