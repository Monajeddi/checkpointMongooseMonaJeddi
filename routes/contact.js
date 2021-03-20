// require express
const express = require ('express')

const router = express.Router()

const Contact = require ('../models/Contact')

//require controllers
const controllers = require('../controllers/contact.controllers')

//Routes 
/**
 *@desc : test route
 *@path :'http://localhost:7002/contacts/test'
 *@method: GET
 *@access : public
 *@data : ras 
 */
router.get('/test', (req, res) => {
    res.send("Hello test")
})

/**
 *@desc : add contact
 *@path :'http://localhost:7002/contacts'
 *@method: POST
 *@access : public
 *@data : req.body 
 */
router.post('/', controllers.addContact)

/**
 *@desc : Get all contact
 *@path :'http://localhost:7002/contacts'
 *@method: GET
 *@access : public
 *@data : ras
 */

router.get('/', controllers.getContacts)

/**
 *@desc : get one contact
 *@path :'http://localhost:7002/contacts/:id'
 *@method: GET
 *@access : public
 *@data : req.params 
 */

router.get('/:id', controllers.getOneContact)

/**
 *@desc : Delete contact
 *@path :'http://localhost:7002/contacts/:_id'
 *@method: DELETE
 *@access : public
 *@data : req.params 
 */

router.delete('/:_id', controllers.deleteContact)

/**
 *@desc : Update contact
 *@path :'http://localhost:7002/contacts/:_id'
 *@method: UPDATE
 *@access : public
 *@data : req.params  & req.body
 */

router.put('/:_id', controllers.updateContact)

module.exports = router