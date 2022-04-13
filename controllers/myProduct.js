const myData = require('../data')
const { v4: uuidv4 } = require('uuid');
const res = require('express/lib/response');
const mongooseProduct = require('../routes/models/products')
// const employees = require('../data');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let people = [

]



const getAllProduct = async(req, res)=>{
    try{
        res.status(200).json({myData})
    }
    catch(error){
        res.status(500).send({msg: error})
    }
    
}
const postAllProduct =  async (req, res)=>{
    try{
        const product = new mongooseProduct({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phone:req.body.phone,
            state:req.body.state,  
        })
        product.save()
        res.json({success: true, product})
        
        // const user = req.body
        // const userID = uuidv4();
        // const usersData = {...user, id: userID}
        // myData.push(usersData)
        // res.json({success: true, usersData})
    }
    catch(error){
        res.status(500).send({msg: error})
    }
}
const getOneUser = async(req, res)=>{
    try{
        const {id} = req.params
        const userId = myData.find((user)=>
            user.id == id
        ) 
        res.json( userId)
    }
    catch(error){
        res.status(500).send({msg: error})
    }
}
const deleteUser = (req, res)=>{
    const {id} = req.params
    people = people.filter((user)=>
        user.id !== id)
    res.json(`User with ${id} has been deleted`)
    console.log(people);
}
const updateUser = (req, res)=>{
    const {id} = req.params
    const {firstName, lastName, phone, state} = req.body
    const userID = myData.find((user)=> user.id == id)
    // res.json(firstName)
    // console.log(req.body); 
    if(firstName){
        userID.firstName = firstName
    }
    if(lastName){
        userID.lastName = lastName
    }
    if(phone){
        userID.phone = phone
    }
    if(state){
        userID.state = state
    }
    res.send(`The person with the id: ${id} has been updated`)
}





module.exports = {getAllProduct, postAllProduct, getOneUser, deleteUser, updateUser}

