const mongoose=require('mongoose')
const profile=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
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
    gender:{
      type:String
    },
    preg:{
      type:Boolean
    },
    sugar:{
      type:Number
    }
})

const profile_model=new mongoose.model('profile_model',profile)
module.exports=profile_model