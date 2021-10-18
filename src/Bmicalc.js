import React,{Component} from "react";
class BMICalculater extends Component{
    state={
       wval:'',
       hval:'',
       res:'',
       bmi:0,
       errorMessage:''
    }
render(){
    const weighthandler=(e)=>{
     this.setState({wval:e.target.value},()=>{console.log(this.state.wval)})
    }

    const heighthandler=(e)=>{
     this.setState({hval:e.target.value},()=>{console.log(this.state.hval)})
    }
    const reshandler=(event)=>{
        event.preventDefault();
        if(this.state.hval=='' || this.state.wval==''){
            this.setState({errorMessage:'Please make sure the values you entered are correct'})
        }
        else{
        let bmi = (this.state.wval/ ((this.state.hval*this.state.hval)/ 10000)).toFixed(2);
        this.setState({bmi})
    }
}
    let answer=''
    let result=''
    if(this.state.bmi>0){
        if (this.state.bmi < 18.6){
            result='You are Underweight'
        }
  
        else if (this.state.bmi >= 18.6 && this.state.bmi < 24.9) 
          {
            result='You are Healthy'
          }
  
        else{
            result='You are Overweight'
            }
   answer=(<div id="result">{result} : <span>{this.state.bmi}</span></div>)
    }
    return(
        <div class="container">
        <h1>BMI Calculator</h1>
        <p>Height (in cm)</p>
        <input type="text" id="height" onChange={(e)=>weighthandler(e)} value={this.state.wval}></input>
        <p>Weight (in kg)</p>
        <input type="text" id="weight" onChange={(e)=>heighthandler(e)} value={this.state.hval}></input>
        <button id="btn" onClick={(e)=>reshandler(e)}>Calculate</button>
        {answer}
       <div class='error'>{this.state.errorMessage}</div>
    </div>
    )
}
}
export default BMICalculater