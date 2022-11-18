const express = require("express");
const hbs = require('hbs')
require("./db/connection");
const student = require("./models/students");
const studentRouter = require("./routes/routes")
const multer = require("multer")
const fs = require("fs")
const path = require('path')
const {PORT} = require("../ignore")

const app = express();
const port = PORT || 3000;

app.get("/", (req,res) => {
    res.send("You are at home page");
});

//Middleware: to recognize the incoming object as a json object
// we only need it for post and put requests and not for get or delete requests
app.use(express.json());
// Regestiering the Router
app.use(studentRouter);

app.use(express.urlencoded({
    extended:false
}
))
const router = require('./routes/routes');
app.use(router);
// const userData = require('./models/userData');


//defining static dir path
const staticPath = path.join(__dirname,"../public"); 

//defining views and partials
const tempPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


console.log(staticPath);
console.log(tempPath);
console.log(partialsPath);

//Serving static files using express
app.use(express.static(staticPath)) 

//setting view engine and directory
app.set("view engine", "hbs");
app.set("views", tempPath);

//setting partials directory
hbs.registerPartials(partialsPath)

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
    console.log(`Port is listening at ${port}\nhttp://localhost:${port}`);
})