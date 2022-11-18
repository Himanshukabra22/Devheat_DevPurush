const express = require("express");
require("./db/connection");
const student = require("./models/student");
const studentRouter = require("./routers/routes")
const multer = require("multer")
const fs = require("fs")

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req,res) => {
    res.send("You are at home page");
});

//Middleware: to recognize the incoming object as a json object
// we only need it for post and put requests and not for get or delete requests
app.use(express.json());
// Regestiering the Router
app.use(studentRouter);

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'uploads')
    },
    filename:(req,file,cb) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage:storage})

// app.post('/', upload.single('testImage'),(req,res)=>{
//     const saveImage = new imageModel({
//         name:req.body.name,
//         img:{
//             data: fs.readFileSync("uploads/" + req.file.filename),
//             contentType:"image/png"
//         },
//     });
//     saveImage.save()
//     .then((res) => {console.log("image is saved");
//     })
//     .catch((err) =>{
//         console.log(err,"error has occured");
//     });
//     res.send("image is saved")
// })
 
app.listen(port, () => {
    console.log(`Port is listening at ${port}`);
})