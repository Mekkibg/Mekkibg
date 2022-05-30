const express = require ('express');
const ContactSchema = require ('../model/contact');
const ContactRoute = express.Router();
const {GetaUser,AddUser,UpdateUser,DeletUser,GetUnique} = require ('../controlles/contact')


//route get all user
ContactRoute.get('/',GetaUser)
//add a user
ContactRoute.post('/adduser',AddUser)
//update a user 
ContactRoute.put('/:id',UpdateUser)
//delete a user 
ContactRoute.delete('/:id',DeletUser)
//option get unique user
ContactRoute.get('/:id',GetUnique)

module.exports = ContactRoute;