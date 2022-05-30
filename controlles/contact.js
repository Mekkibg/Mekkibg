const ContactSchema = require ('../model/contact');

//get a user 
exports.GetaUser = async (req,res) => {
    try{
        const contact = await ContactSchema.find()
        res.status(200).send({msg:'you did it , the user is added',contact})
    }catch (err){
        console.log(err)
        res.status(500).send('could not get the contact')
    }
}





//post a user 
exports.AddUser = async(req,res) => {
    try{
        const NewContact = await new ContactSchema(req.body)
        NewContact.save()
        res.status(200).send({msg:'you did it , the user is added',NewContact})
    }catch(err){
        console.log(err)
        res.status(500).send('could not add the contact')
    }
}


//post user update
exports.UpdateUser = async(req,res) => {
    try{
        const {id} = req.params
        const updateuser = await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({msg:'you did it , the user is updated'})
    }catch (err){
        console.log(err)
        res.status(500).send('could not update the contact')
    }
}


//post delete user 
exports.DeletUser = async(req,res) => {
    try{
        const {id} = req.params
        const deleteContact = await ContactSchema.findByIdAndDelete
        res.status(200).send('you did it , the user is delete')
    }catch (err){
        console.log(err)
        res.status(500).send('could not delete the contact')
    }
}


//post get a single user 

exports.GetUnique = async(req,res) => {
    try{
        const {id} = req.params
        const getuniqueuser = await ContactSchema.findById(id)
        res.status(200).send({msg:'this is the user you asked for ',getuniqueuser})
    }catch (err){
        console.log(err)
        res.status(500).send('could not delete the contact')
    }
}