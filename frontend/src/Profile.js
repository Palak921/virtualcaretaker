import React,{Component} from "react";
import Input from "./input";
import axios  from "axios";
class Profile extends Component{
    state={
        username:'',
        age:'',
        gender:'',
        preg:'',
        sys:"",
        dia:'',
        sugar:'',
        bmi:'',
        calorie:''
    
    }
    render(){
        return(
            <div className='container'>
                 <p>Name</p>
                 <p>Age</p>
                 <p>Gender</p>
                 <p>Systolic BP</p>
                 <p>Diastolic BP</p>
                 <p>Blood Sugar Levels</p>
            </div>
        )
    }
}