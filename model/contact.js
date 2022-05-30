const mongoose = require ('mongoose');

//creation de notre schema 

const ContactSchema = mongoose.Schema({
        name:String,
        age:Number,
        email:{
            type:String,
            required:true,
            unique:true
        }
})

//import sous forme de model 


module.exports = mongoose.model ('testcontact',ContactSchema)