const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(()=>{
    try{
        console.log('Connected to Database')
    }catch(err){
        console.log(err);
    }
})