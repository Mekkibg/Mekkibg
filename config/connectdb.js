const mongoose = require ('mongoose');

const connectdb = async () => {
    try {
await   mongoose.connect(process.env.MONGO_URI)
console.log('You are connected to the DB')
    } catch (err){
console.log(err)
    }
}


module.exports = connectdb;