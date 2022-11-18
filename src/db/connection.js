const mongoose = require("mongoose")
const {MONGO} = require("../../ignore")

// connecting to database
mongoose.connect(`${MONGO}`,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Connection is sucessful"); 
}).catch((e) =>{
    console.log("No connection"); 
    console.log(e); 
});
