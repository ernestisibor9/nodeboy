const express = require('express')
const router = express.Router()
// const myData = require('../data')
const mongooseProduct = require('./models/products')
const {getAllProduct, postAllProduct, getOneUser, deleteUser, updateUser} = require('../controllers/myProduct')



router.get('/', getAllProduct )
// router.post('/', postAllProduct )
router.post ('/',  postAllProduct )
router.get ('/:id',  getOneUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)



module.exports = router