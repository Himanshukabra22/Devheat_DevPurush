const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const userSchema = require("../models/students")


router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render('Sign_up')
});

router.get("/search", (req, res) => {
  res.render('Sign_up')
});
router.get("/", (req, res) => {
  res.render('home')
});

router.get("/profilepage", (req, res) => {
  res.render('ProfilePage')
});
router.get("/aboutus", (req, res) => {
  res.render('aboutus')
});


 
router.post("/signup", async(req,res) =>{
try{
  const{
      firstname,
        lastname,
        gender,
        batch,
        branch,
        city,
        state,
        contact,
        email,
        linkedin,
        instagram,
        designation,
        skills,
        about,
        password,
        cpassword
  } = req.body; 
    console.log(req.body);
    // res.send(req.body);
   
    if (password === cpassword) {
      const userData = new userSchema({
        firstname,
        lastname,
        gender,
        batch,
        branch,
        city,
        state,
        contact,
        email,
        linkedin,
        instagram,
        designation,
        skills,
        about,
        password,
        cpassword
      })
      userData.save(err=>{
        if (err) {
          console.log(err);
        }
      })
      res.redirect("/signup");7
    }
    else{
      res.send("passwords not matching")
    }
 }catch(error){
   res.render("ahh! error occured")
 }
});


router.post("/login", async (req,res) =>{
    try{
        let findData = await userSchema.findOne({email:req.body.email})
        if(!findData)
        {
          res.send("no such data found!!");
        }
        else{
          if(req.body.password === findData.password)
          {console.log(findData);
          res.redirect('home');}
          else{
            res.send("Wrong Credentials!!");
          }
        }
    }catch(err){
        console.log(err);
    }
})


 // Get the Individual studnt data using Id
 
 router.get("/profile/:email", async (req,res) =>{      //we can get anything like name email etc,
 
      try {
         const email = req.params.email;
         console.log(email);
         const studentData = await userSchema.findOne({email:email});
         console.log(studentData);

         if(!studentData){
             return res.status(404).send("no data found");
         }
         else{
             res.render("ProfilePage" , {firstname:studentData.firstname,lastname:studentData.lastname, gender:studentData.gender,batch:studentData.batch,college:studentData.college,branch:studentData.branch,city:studentData.city,state:studentData.state,contact:studentData.contact,email:studentData.email,linkedin:studentData.linkedin,instagram:studentData.instagram,designation:studentData.designation,skills:studentData.skills})
         }
      } catch (e) {
         res.status(500).send(e);           //status 500 is internal server error(i.e Data not present)
      }
 });

 

module.exports = router;
