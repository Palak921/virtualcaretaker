import React,{Component} from "react";
import axios  from "axios";
import qs from "qs";
class Profile extends Component{
    state={
        username:'',
        age:'',
        gender:'',
        sys:"",
        dia:'',
        sugar:'',
        bmi:'',
        sugarresult:'',
        bpresult:''   
    }
    componentDidMount=()=>{
        axios({method:'post',
        url:'http://localhost:5000/api/getprofile',
        data:qs.stringify({
            username:username
        }).then(response=>{
            this.setState({username:response.username,age:response.age,gender:response.gender,
            sys:response.systolic,dia:response.diastolic,sugar:response.bloodsugar,bmi:response.bmi,
        sugarresult:response.sugarresult,bpresult:response.bpresult})}).
        catch(error=>{console.log(error)})
    })
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
export default Profile