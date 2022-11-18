const express = require("express");
// const { find, findOne } = require("../models/userData");
// const userData = require("../models/userData.js");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("index");
// });
// router.get("/home", (req, res) => {
//   res.render("home");
// });

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render('Sign_up')
});

// router.get("/delete", (req, res) => {
//   res.render("delete");
// });
// router.delete(`/delete/:email`, async(req,res)=>{
//   try{
//   let x  = await userData.deleteOne({email:req.params.email});
//   console.log(x);
// }catch(e){
//     console.log(e);
//   }
// });

// router.post("/signup", async (req, res) => {
//   try {
//     // let x = await userData.find({email:req.body.email});
//     // if((x.length)!=0)
//     // {
//     //   res.send("Email Already Exists");
//     // }
//     if (!(req.body.password === req.body.Cpassword)) {
//       res.send("passwords not matching!!");
//     } else{
//       const savedData = await userData.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       });
//       console.log(savedData);
//       // res.status(200).json({savedData});
//       res.redirect("/login");
//     };
//   } catch (error) {
//     res.send(error);
//   }
// });
module.exports = router;












// const express = require("express")
// const router = new express.Router();   
// const student = require("../models/students");



// //Create a new student using(async await)

// router.post("/students", async (req,res) =>{

//     try {
//      const user = new student(req.body);
//      const createUser = await user.save();
//      res.status(201).send(createUser);
//     }
//     catch(e){  res.status(400).send(e);
//     }
//  })

//  router.post('/students', upload.single('testImage'),(req,res)=>{
//   const saveImage = new imageModel({
//       name:req.body.name,
//       img:{
//           data: fs.readFileSync("uploads/" + req.file.filename),
//           contentType:"image/png"
//       },
//   });
//   saveImage.save()
//   .then((res) => {console.log("image is saved");
//   })
//   .catch((err) =>{
//       console.log(err,"error has occured");
//   });
//   res.send("image is saved")
// })
 
 
//  // Get Requests
 
//  // Read the data of rgistered students
 
//  router.get("/students", async (req,res) =>{
   
//    try {
//      const studentsData = await student.find();
//      res.send(studentsData);
//    }catch (e) {
//      res.send(e);
//    }
//  });
 
//  // Get the Individual studnt data using Id
 
//  router.get("/students/:id", async (req,res) =>{      //we gand get anything like name email etc,
 
//       try {
//          const _id = req.params.id;
//          const studentData = await student.findById(_id);
//          // console.log(req.params);
//          // console.log(req.params.id);
//          if(!studentData){
//              return res.status(404).send();
//          }
//          else{
//              res.send(studentData);
//          }
//       } catch (e) {
//          res.status(500).send(e);           //status 500 is internal server error(i.e Data not present)
//       }
//  });
 
 
//  // Put Requests
 
//  // Update the Students by its Id
  
//  router.patch("/students/:id", async (req,res)=>{
//        try {
//          const _id = req.params.id;
//          const updateStudents = await student.findByIdAndUpdate(_id, req.body,{
//              new:true
//          });
//          res.send(updateStudents);
//        } catch (e) {
//           res.status(400).send(e);
//        }
//  });
 
 
//  //Delete the Students by its id
 
//  router.delete("/students/:id", async(req,res) =>{
//      try {
//          // const id = req.params.id;
//          const deleteStudent = await student.findByIdAndDelete(req.params.id);
//          if (!req.params.id) {
//              res.status(400).send();          //400 status code for bad request
//          }
//             res.send(deleteStudent);
//      } catch (e) {
//          res.status(500).send(e);
//      }
//  })
 


// //export
// module.exports = router;