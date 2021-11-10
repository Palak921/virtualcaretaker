const mongoose=require('mongoose')
const profile=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String
    },
    age:{
       type:Number
    },
    height:{
      type:Number
    },
    weight:{
      type:Number
    },
    bmi:{
      type:Number
    },
    calorie:{
       type:Number
    },
    systolic:{
      type:Number
    },
    diastolic:{
       type:Number
    },
    bloodsugar:{
       type:Number
    },
    gender:{
      type:String
    },
    bpresult:{
      type:String
    },
    sugarresult:{
      type:String
    }
})

const profile_model=new mongoose.model('profile_model',profile)

module.exports=profile_model
