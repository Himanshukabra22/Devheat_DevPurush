const mongoose = require("mongoose");
const validator = require("validator");



const studentSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
    img:{
        data:Buffer,
        contentType: String,
    }
});

//we will create a new connection

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;