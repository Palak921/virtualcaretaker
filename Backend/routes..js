const profile=require('./models.js')
const express=require('express')
const router=express.Router()

router.post('/signup',async(req,res)=>{
    const {username,password}=req.body()
    try{
    const olduser=await profile.findOne({username})
    if(olduser){
        res.send('Username already Exists')
    }
    else{
    const newuser=await profile({username,password})
    newuser.save((err)=>{
        if(err){
        res.status(404).send(err)
        }
        else{
            res.status(200).send(newuser)
        }
    })
}
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/signin',(req,res)=>{
    const {username,password}=req.body()
    try{
    const prevuser=await profile.findOne({username,password})
    if(prevuser){
        res.status(200).send('signed in')
    }
    else{
        res.send('Incorrect login credentials,please try again or sign up')
    }
}
catch(err){
    res.status(400).send(err)
}
})

router.post('/add_hw',(req,res)=>{
    const {height,weight,username}=req.body()
    try{
    const adddetails=await profile.findOneAndUpdate({username},{height,weight},{new:true,useFindAndModify:false})
    if(adddetails){
        res.status(200).send(adddetails)
    }
    else{
        res.status(404).send('not modified')
    }
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/add_a_g_p_s',(req,res)=>{
    const {age,gender,preg,sugar,username}=req.body()
    try{  
       const adddetails=await profile.findOneAndUpdate({username},{age,gender,preg,sugar},{new:true,useFindAndModify:false})
       if(adddetails){
        res.status(200).send(adddetails)
    }
    else{
        res.status(404).send('not modified')
    }
    }

    catch(error){
        res.status(400).send(error)
    }
})

router.post('/add_a_g_s_d',(req,res)=>{
    const {username,age,gender,systolic,diastolic}=req.body()
    try{  
        const adddetails=await profile.findOneAndUpdate({username},{age,gender,systolic,diastolic},{new:true,useFindAndModify:false})
        if(adddetails){
         res.status(200).send(adddetails)
     }
     else{
         res.status(404).send('not modified')
     }
     }
 
     catch(error){
         res.status(400).send(error)
     }
})

router.post('/getprofile',(req,res)=>{
    const {}=req.body()
    try{
        const getdetails=await profile.findOne({username})
        if(getdetails){
            res.status(200).send(getdetails)
        }
        else{
            res.status(404)
        }
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports=router