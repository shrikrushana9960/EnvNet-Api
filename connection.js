const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const DB =
  "mongodb+srv://vedantjain123:vedantjain123@cluster0.vkzsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(()=>{
    try{
        console.log('Connected to Database')
    }catch(err){
        console.log(err);
    }
})