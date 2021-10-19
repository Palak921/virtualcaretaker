import React,{Component} from "react";
class Mainpage extends Component{
     state={
       age:'',
       gender:'',
       hval:'',
       wval:'',
       sbp:'',
       sugar:'',
       dbp:'',
       result:'',
       preg:false,
       bloodSugarType:''
     }
     render(){
        
        const agehandler=(e)=>{
          this.setState({age:e.target.value},()=>{console.log(this.state.age)})
        }
 
        const genHandler=(e)=>{
         this.setState({gender:e.target.id},()=>{console.log(this.state.gender)})
        }

        const sbpHandler=(e)=>{
         this.setState({sbp:e.target.value},()=>{console.log(this.state.sbp)})
        }

        const dbpHandler=(e)=>{
         this.setState({dbp:e.target.value},()=>{console.log(this.state.dbp)})
        }

        const sugarHandler=(e)=>{
         this.setState({sugar:e.target.value},()=>{console.log(this.state.sugar)})
        }

        const pregHandler=(e)=>{
           this.setState({preg:!this.state.preg})
        }

        const sugartypeHandler=(e)=>{
           this.setState({bloodSugarType:e.target.value})
        }

        let result=''
        let pregnancydetails=''
        if(this.state.gender=='women')
      {
         pregnancydetails=(<div><label>Are you Pregnant</label>
         <input type='checkbox' onChange={(e)=>pregHandler(e)}></input></div>)
      }
        
        const diagnoseBPHandler=(e)=>{
           e.preventDefault();
           if(this.state.sbp=='' && this.state.dbp=='' && this.state.sugar==''){
            result=<p>Please enter your diastolic Blood Pressure readings and systolic Blood Pressure</p>
         }
         else if(this.state.sbp!='' && this.state.dbp==''){
          result=<p>Please enter your diastolic Blood Pressure readings</p>
       }
       else if(this.state.sbp=='' && this.state.dbp!=''){
          result=<p>Please enter your systolic Blood Pressure readings</p>
       }
       else{
           
            const sys=this.state.sbp;
            const dia=this.state.dbp;
            if(sys!='' && dia!=''){
            if(sys<120 && dia<80){
                this.setState({result:'You are perfectly Healthy'})
            }
            else if(sys>=120 && sys<=129 && dia<80){
               this.setState({result:'Your blood Pressure is slighlty Elevated and needs care'})
            }
            else if(sys>=130 && sys<=139 || dia>=80 && dia<=89){
               this.setState({result:'Your blood Pressure is high.You are at Stage 1 Hypertension'})
            }
            else if(sys>=140 || dia>=90){
               this.setState({result:'Your blood Pressure is high.You are at Stage 2 Hypertension'})
            }
            else{
               this.setState({result:'Your have Hypertensive crisis and requires immediate medical care'})
            }
          }
       }
        }
        let report=''
        const diagnoseSugarHandler=(e)=>{
           console.log(this.state.preg,this.state.bloodSugarType,this.state.age,this.state.sugar)
         if(this.state.age==''){
            report="Please enter your age"
         }
         if(this.state.gender=='' ){
            report="Please enter your age and select appropriate gender option"  
         }
         if(this.state.sugar=='')
         {
            report="Please enter your age , add blood glucose level readings and select appropriate gender option"
         }
         else{
            if(this.state.preg){
             if(this.state.bloodSugarType=="1"){
                if(this.state.sugar>70 || this.state.sugar<89){
                   report="Your sugar levels are normal"
                }
                else if(this.state.sugar<=70 ){
                   report='You are hypoglycemic'
                }
                else if(this.state.sugar>=89 ){
                   report='You are hyperglycemic'
                }
             }
     
        if(this.state.bloodSugarType=="2"){
          if(this.state.sugar==89){
             report='Your sugar levels are normal'
          }
          else if(this.state.sugar<89 ){
             report='You are hypoglycemic'
          }
          else if(this.state.sugar>89 ){
             report='You are hyperglycemic'
          }
       }
     
     if(this.state.bloodSugarType=="3"){
                    if(this.state.sugar<120 ){
                       report='Your sugar levels are normal'
                    }
                   
                    else if(this.state.sugar>=120 ){
                       report='You are hyperglycemic'
                    }
                 }
     
                 if(this.state.bloodSugarType=="4"){
                   if(this.state.sugar>=100 || this.state.sugar<=140){
                      report='Your sugar levels are normal'
                   }
                   else if(this.state.sugar<100 ){
                      report='You are hypoglycemic'
                   }
                   else if(this.state.sugar>140 ){
                      report='You are hyperglycemic'
                   }
                }
           }
            else if(this.state.age==6){
                 if(this.state.bloodSugarType=="1"){
                    if(this.state.sugar>80 || this.state.sugar<=180){
                       report='Your sugar levels are normal'
                    }
                    else if(this.state.sugar<=80 ){
                       report='You are hypoglycemic'
                     
                    }
                    else if(this.state.sugar>180 ){
                       report='You are hyperglycemic'
                      
                    }
                 }
                 if(this.state.bloodSugarType=="2"){
                   if(this.state.sugar>=100 || this.state.sugar<=180){
                      report='Your sugar levels are normal'
                      
                   }
                   else if(this.state.sugar<100 ){
                      report='You are hypoglycemic'
                    
                   }
                   else if(this.state.sugar>180 ){
                      report='You are hyperglycemic'
                   }
                }
                if(this.state.bloodSugarType=="3"){
                   if(this.state.sugar>=180){
                      report='Your sugar levels are normal'
                     
                   }
                   else if(this.state.sugar<180 ){
                      report='You are hypoglycemic'
                    
                   }
                   else if(this.state.sugar>180 ){
                      report='You are hyperglycemic'
                     
                   }
                }
                if(this.state.bloodSugarType=="4"){
                   if(this.state.sugar>=110 || this.state.sugar<=200){
                      report='Your sugar levels are normal'
                   }
                   else if(this.state.sugar<110 ){
                      report='You are hypoglycemic'
                   }
                   else if(this.state.sugar>200 ){
                      report='You are hyperglycemic'
                   }
                }
            
         }
     
         else if(this.state.age>6 && this.state.age<=12){
             if(this.state.bloodSugarType=="1"){
                if(this.state.sugar>80 || this.state.sugar<=180){
                  report='Your sugar levels are normal'
                }
                else if(this.state.sugar<=80 ){
                  report='You are hypoglycemic'
                }
                else if(this.state.sugar>180 ){
                  report='You are hyperglycemic'}
                }
             
             if(this.state.bloodSugarType=="2"){
               if(this.state.sugar>=90 || this.state.sugar<=180){
                  report='Your sugar levels are normal'
               }
               else if(this.state.sugar<90 ){
                  report='You are hypoglycemic'
                 
               }
               else if(this.state.sugar>180 ){
                  report='You are hyperglycemic'
             
               }
            }
            if(this.state.bloodSugarType=="3"){
               if(this.state.sugar<=140){
                  report='Your sugar levels are normal'
                  
               }
               else if(this.state.sugar>140 ){
                  report='You are hyperglycemic'
                 
               }
            }
            if(this.state.bloodSugarType=="4"){
               if(this.state.sugar>=100 || this.state.sugar<=180){
                  report='Your sugar levels are normal'
                 
               }
               else if(this.state.sugar<100 ){
                  report='You are hypoglycemic'
                
               }
               else if(this.state.sugar>180 ){
                  report='You are hyperglycemic'
               }
            }
         }
        
     
     
     else if(this.state.age>=13 && this.state.age<=19){
         if(this.state.bloodSugarType=="1"){
            
            if(this.state.sugar>70 || this.state.sugar<=150){
               report='Your sugar levels are normal'
            }
            else if(this.state.sugar<=70 ){
               report='You are hypoglycemic'
              
            }
            else if(this.state.sugar>150 ){
               report='You are hyperglycemic'
              
            }
         }
         if(this.state.bloodSugarType=="2"){
           if(this.state.sugar>=90 || this.state.sugar<=130){
              report='Your sugar levels are normal'
              
           }
           else if(this.state.sugar<90 ){
              report='You are hypoglycemic'
            
           }
           else if(this.state.sugar>130 ){
              report='You are hyperglycemic'
            
           }
        }
        if(this.state.bloodSugarType=="3"){
           if(this.state.sugar>=140 ){
              report='Your sugar levels are normal'
              
           }
          
           else if(this.state.sugar>140 ){
              report='You are hyperglycemic'
            
           }
        }
        if(this.state.bloodSugarType=="4"){
           if(this.state.sugar>=90 || this.state.sugar<=150){
              report='Your sugar levels are normal'
              
           }
           else if(this.state.sugar<90 ){
              report='You are hypoglycemic'

           }
           else if(this.state.sugar>150 ){
              report='You are hyperglycemic'
             
           }
        }
     
     }
     
     
     else if(this.state.age>=20){
         if(this.state.bloodSugarType=="1"){
            if(this.state.sugar>=70 || this.state.sugar<=110){
               report='Your sugar levels are normal'
             
            }
            else if(this.state.sugar<70 ){
               report='You are hypoglycemic'
         
            }
            else if(this.state.sugar>150 ){
               report='You are hyperglycemic'
              
            }
         }
         if(this.state.bloodSugarType=="2"){
           if(this.state.sugar>=70 || this.state.sugar<=130){
              report='Your sugar levels are normal'
              
           }
           else if(this.state.sugar<70 ){
              report='You are hypoglycemic'
             
           }
           else if(this.state.sugar>130 ){
              report='You are hyperglycemic'
             
           }
        }
        if(this.state.bloodSugarType=="3"){
           if(this.state.sugar<180 ){
              report='Your sugar levels are normal'
             
           }
          
           else if(this.state.sugar>180 ){
              report='You are hyperglycemic'
             
           }
        }
        if(this.state.bloodSugarType=="4"){
           if(this.state.sugar>=100 || this.state.sugar<=140){
              report='Your sugar levels are normal'
              
           }
           else if(this.state.sugar<100 ){
              report='You are hypoglycemic'
            
           }
           else if(this.state.sugar>140 ){
              report='You are hyperglycemic'
            
           }
        }
     
     }
         }
         this.setState({result:report},()=>console.log(this.state.result))
         }
      
        
    return(
       <div className="container">
          <h1>Virtual Caretaker</h1>
          <p>Age</p>
          <input type="text" required id="age" onChange={(e)=>agehandler(e)} value={this.state.age}></input>
          <p>Gender</p>
          <input type="radio" required id='men' name="gender" value="Male" onChange={(e)=>genHandler(e)}></input>
          <label for="men">Male</label><br></br>
          <input type="radio" id='women' required name="gender" value="Female" onChange={(e)=>genHandler(e)}></input>
          <label for="women">Female</label><br></br>  
          <p>Systolic(Top) Blood Pressure</p>      
          <input type="text" id="bp" onChange={(e)=>sbpHandler(e)} value={this.state.sbp}></input>
          <p>Diastolic(Bottom) Blood Pressure</p>      
          <input type="text" id="bp" onChange={(e)=>dbpHandler(e)} value={this.state.dbp}></input>
          <button onClick={(e)=>diagnoseBPHandler(e)}>Diagnose</button>
          <p>Sugar</p>
          {pregnancydetails}
          <input type="text" id="bp" onChange={(e)=>sugarHandler(e)} value={this.state.sugar}></input>
          <legend>Please select appropriate option from the dropdown list</legend>
                <select id="list" onChange={(e)=>sugartypeHandler(e)}>
                  <option selected value="1">Blood Sugar levels after Fasting</option>
                  <option value="2">Blood Sugar Levels Before Meal</option>
                  <option value="3">Blood Sugar Levels After 1 to 2 Hours of Eating</option>
                  <option value="4">Blood Sugar Levels at Bedtime</option>
                </select>
          <button onClick={(e)=>diagnoseSugarHandler(e)}>Diagnose</button>
         <p>{this.state.result}</p>
       </div>
    )
   }
}

export default Mainpage