const express = require ('express');
const connectdb = require('./config/connectdb');
const ContactRoute = require('./route/contact');

const app = express ();

const port = process.env.port;

require ('dotenv').config()


app.use(express.json())
app.use('/api/user',ContactRoute)
//appelle base de donnee
connectdb()

app.listen(process.env.port,err=>{
    err?console.log(err):console.log(`Go to the port : ${process.env.port}`)
})