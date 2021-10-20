const dotenv=require('dotenv')
const mongoose = require('mongoose')
const express =require('express')
const app = express();
const port =  5000;

dotenv.config()
const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kgm4w.mongodb.net/test`
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
   
}).then(() => {
    console.log('Db connected')
     
}).catch(err => { console.log(err)
   })

app.listen(port,()=>{console.log("started")})