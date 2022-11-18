const express = require("express");
const { find, findOne } = require("../models/userData");
const userData = require("../models/userData.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/delete", (req, res) => {
  res.render("delete");
});
router.delete(`/delete/:email`, async(req,res)=>{
  try{
  let x  = await userData.deleteOne({email:req.params.email});
  console.log(x);
}catch(e){
    console.log(e);
  }
});

router.post("/signup", async (req, res) => {
  try {
    // let x = await userData.find({email:req.body.email});
    // if((x.length)!=0)
    // {
    //   res.send("Email Already Exists");
    // }
    if (!(req.body.password === req.body.Cpassword)) {
      res.send("passwords not matching!!");
    } else{
      const savedData = await userData.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(savedData);
      // res.status(200).json({savedData});
      res.redirect("/login");
    };
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
