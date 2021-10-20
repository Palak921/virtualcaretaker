const dotenv=require('dotenv')
const mongoose = require('mongoose')
const express =require('express')
const app = express();
const routes=require('./routes')
const port =  5000;
const cors = require('cors')


app.use(cors)
dotenv.config()
const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kgm4w.mongodb.net/test`
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log('Db connected')
}).catch(err => { console.log(err)
   })

app.use('/api/profile',routes)
app.listen(port,()=>{console.log("started")})