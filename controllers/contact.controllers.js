
const addContact = async (req, res) => {
    try {
        const {name, email , phone} = req.body
        if (!name || !email) {
           res.status(400).send({ msg : 'Name or email are required!'})
           return
        } 
       //email unique
       const contact = await Contact.findOne({email}) 
       if (contact){
        res.status(400).send({msg : 'Email already exist !'})
        return
       }
        
       const newContact = new Contact({
           name,
           email,
           phone
       })
    await newContact.save()
   res.status(200).send({msg :'Contact added !', newContact })
    } catch(error) {
        res.status(400).send({msg: 'Execution failed !', error })
    }
   }

const getContacts = async (req, res) => {
    try {
       const listContacts = await Contact.find()
       res.status(200).send({msg : 'List of all contacts .', listContacts})
    } catch(error) {
       res.status(400).send({msg : 'Getting contact failed !', error}) 
    }
}

const getOneContact = async(req, res) => {
    try {
        const contactToFind = await Contact.findOne({_id : req.params.id})
        res.status(200).send({msg : 'Contact found :', contactToFind})
    } catch (error) {
        res.status(400).send({msg : 'Id not found !', error})  
    }
}

const deleteContact = async(req, res) => {
    try {
        const { _id } = req.params
        const contactToDelete = await Contact.findOneAndDelete({_id : _id})
        if (!contactToDelete) {
            res.status(400).send({msg: 'Contact already deleted !'})
            return

        }
        res.status(200).send({msg: 'Contact deleted successfully'})
        

    } catch (error) {
        res.status(400).send({msg: 'Delete failed ! Id not found !', error})
    }
}

const updateContact = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await Contact.updateOne({ _id}, {$set :{...req.body}})
        if (!result.nModified){
            res.status(400).send({msg : 'Contact is already updated' }) 
            return
        }
        res.status(200).send({msg : 'Contact is updated'})

    } catch (error) {
        res.status(400).send({msg : 'Update failed', error })
    }
}


   module.exports = controllers = { addContact, getContacts , getOneContact , deleteContact , updateContact}