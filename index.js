const express = require('express')
const app = express();
const router = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()


// mongoose.connect(process.env.MONGO_URI, ()=>{
//     console.log('Database successfully connected');
// })



// The express.json middleware must be at the top
app.use(express.json())
// Routes
app.use('/users', router)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database connected!');
})
.then(()=>{
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000');
    })
})
.catch((error)=>{
    console.log(error);
})


// const PORT = 3000

// app.listen(PORT, ()=>{
//     console.log(`Server listening on ${PORT}`);
// })