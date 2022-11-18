const mongoose = require("mongoose")

// connecting to database
mongoose.connect("mongodb://localhost:27017/Devheat_Te",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Connection is sucessful"); 
}).catch((e) =>{
    console.log("No connection"); 
    console.log(e); 
});
