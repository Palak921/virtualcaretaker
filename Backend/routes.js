
const express=require('express')
const router=express.Router()
const profile_model=require('./models.js')
router.get('/hi',(req,res)=>{
    console.log('fghj')
    res.send('ghj')
})
router.post('/signup',async(req,res)=>{
    console.log('asdfgh')
    const {username,password}=req.body
    console.log(req.body)
    try{
    const olduser=await profile_model.findOne({username})
    console.log(olduser)
    if(olduser){
        res.send('Username already Exists')
    }
    else{
    const newuser=new profile_model({username,password})
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
        console.log(err)
        res.status(400).send(err)
    }
})

router.post('/signin',async(req,res)=>{
    const {username,password}=req.body
    console.log(req.body)
    try{
    const prevuser=await profile_model.findOne({username,password})
    
    if(prevuser!=null){
        res.status(200).send('signed in')
    }
    else{
        res.send('Incorrect login credentials,please try again or sign up')
    }
}
catch(err){
    console.log(err)
    res.status(400).send(err)
}
})

router.post('/bpresult',async(req,res)=>{
    console.log(req.body)
    const {username,diastolic,systolic,bpresult}=req.body
    try{
    const adddetails=await profile_model.findOneAndUpdate({username},{diastolic,systolic,bpresult},{new:true,useFindAndModify:false})
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

router.post('/sugarresult',async(req,res)=>{
    const {age,gender,bloodsugar,sugarresult,username}=req.body
    try{  
       const adddetails=await profile_model.findOneAndUpdate({username},{age,gender,bloodsugar,sugarresult},{new:true,useFindAndModify:false})
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

router.post('/bmi',async(req,res)=>{
    const {username,height,weight,bmi}=req.body
    try{  
        const adddetails=await profile_model.findOneAndUpdate({username},{height,weight,bmi},{new:true,useFindAndModify:false})
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

router.post('/getprofile',async(req,res)=>{
    const {username}=req.body
    try{
        const getdetails=await profile_model.findOne({username})
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