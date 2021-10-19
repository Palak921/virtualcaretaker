const diagnoseSugarHandler=(e)=>{
    if(this.state.gender=='' || this.state.sugar==''){
        this.setState({result:"Please select appropriate gender option and blood glucose level readings"})
    }
    else if(this.state.gender=='' ){
     this.setState({result:"Please select appropriate gender option"})  
    }
    else if(this.state.sugar=='')
    {
       this.setState({result:"Please select blood glucose level readings"})
    }
    else{
       if(this.state.preg){
        if(this.state.bloodSugarType==1){
           if(this.state.sugar>70 || this.state.sugar<89){
              this.setState({result:'Your sugar levels are normal'})
           }
           else if(this.state.sugar<=70 ){
             this.setState({result:'You are hypoglycemic'})
           }
           else if(this.state.sugar>=89 ){
             this.setState({result:'You are hyperglycemic'})
           }
        }

   if(this.state.bloodSugarType==2){
     if(this.state.sugar==89){
        this.setState({result:'Your sugar levels are normal'})
     }
     else if(this.state.sugar<89 ){
       this.setState({result:'You are hypoglycemic'})
     }
     else if(this.state.sugar>89 ){
       this.setState({result:'You are hyperglycemic'})
     }
  }

if(this.state.bloodSugarType==3){
               if(this.state.sugar<120 ){
                  this.setState({result:'Your sugar levels are normal'})
               }
              
               else if(this.state.sugar>=120 ){
                 this.setState({result:'You are hyperglycemic'})
               }
            }

            if(this.state.bloodSugarType==4){
              if(this.state.sugar>=100 || this.state.sugar<=140){
                 this.setState({result:'Your sugar levels are normal'})
              }
              else if(this.state.sugar<100 ){
                this.setState({result:'You are hypoglycemic'})
              }
              else if(this.state.sugar>140 ){
                this.setState({result:'You are hyperglycemic'})
              }
           }
      }
       else if(this.state.age==6){
            if(this.state.bloodSugarType==1){
               if(this.state.sugar>80 || this.state.sugar<=180){
                  this.setState({result:'Your sugar levels are normal'})
               }
               else if(this.state.sugar<=80 ){
                 this.setState({result:'You are hypoglycemic'})
               }
               else if(this.state.sugar>180 ){
                 this.setState({result:'You are hyperglycemic'})
               }
            }
            if(this.state.bloodSugarType==2){
              if(this.state.sugar>=100 || this.state.sugar<=180){
                 this.setState({result:'Your sugar levels are normal'})
              }
              else if(this.state.sugar<100 ){
                this.setState({result:'You are hypoglycemic'})
              }
              else if(this.state.sugar>180 ){
                this.setState({result:'You are hyperglycemic'})
              }
           }
           if(this.state.bloodSugarType==3){
              if(this.state.sugar>=180){
                 this.setState({result:'Your sugar levels are normal'})
              }
              else if(this.state.sugar<180 ){
                this.setState({result:'You are hypoglycemic'})
              }
              else if(this.state.sugar>180 ){
                this.setState({result:'You are hyperglycemic'})
              }
           }
           if(this.state.bloodSugarType==4){
              if(this.state.sugar>=110 || this.state.sugar<=200){
                 this.setState({result:'Your sugar levels are normal'})
              }
              else if(this.state.sugar<110 ){
                this.setState({result:'You are hypoglycemic'})
              }
              else if(this.state.sugar>200 ){
                this.setState({result:'You are hyperglycemic'})
              }
           }
       
    }

    else if(this.state.age>6 && this.state.age<=12){
        if(this.state.bloodSugarType==1){
           if(this.state.sugar>80 || this.state.sugar<=180){
              this.setState({result:'Your sugar levels are normal'})
           }
           else if(this.state.sugar<=80 ){
             this.setState({result:'You are hypoglycemic'})
           }
           else if(this.state.sugar>180 ){
             this.setState({result:'You are hyperglycemic'})
           }
        }
        if(this.state.bloodSugarType==2){
          if(this.state.sugar>=90 || this.state.sugar<=180){
             this.setState({result:'Your sugar levels are normal'})
          }
          else if(this.state.sugar<90 ){
            this.setState({result:'You are hypoglycemic'})
          }
          else if(this.state.sugar>180 ){
            this.setState({result:'You are hyperglycemic'})
          }
       }
       if(this.state.bloodSugarType==3){
          if(this.state.sugar<=140){
             this.setState({result:'Your sugar levels are normal'})
          }
          else if(this.state.sugar>140 ){
            this.setState({result:'You are hyperglycemic'})
          }
       }
       if(this.state.bloodSugarType==4){
          if(this.state.sugar>=100 || this.state.sugar<=180){
             this.setState({result:'Your sugar levels are normal'})
          }
          else if(this.state.sugar<100 ){
            this.setState({result:'You are hypoglycemic'})
          }
          else if(this.state.sugar>180 ){
            this.setState({result:'You are hyperglycemic'})
          }
       }
   
}

else if(this.state.age>=13 && this.state.age<=19){
    if(this.state.bloodSugarType==1){
       if(this.state.sugar>70 || this.state.sugar<=150){
          this.setState({result:'Your sugar levels are normal'})
       }
       else if(this.state.sugar<=70 ){
         this.setState({result:'You are hypoglycemic'})
       }
       else if(this.state.sugar>150 ){
         this.setState({result:'You are hyperglycemic'})
       }
    }
    if(this.state.bloodSugarType==2){
      if(this.state.sugar>=90 || this.state.sugar<=130){
         this.setState({result:'Your sugar levels are normal'})
      }
      else if(this.state.sugar<90 ){
        this.setState({result:'You are hypoglycemic'})
      }
      else if(this.state.sugar>130 ){
        this.setState({result:'You are hyperglycemic'})
      }
   }
   if(this.state.bloodSugarType==3){
      if(this.state.sugar>=140 ){
         this.setState({result:'Your sugar levels are normal'})
      }
     
      else if(this.state.sugar>140 ){
        this.setState({result:'You are hyperglycemic'})
      }
   }
   if(this.state.bloodSugarType==4){
      if(this.state.sugar>=90 || this.state.sugar<=150){
         this.setState({result:'Your sugar levels are normal'})
      }
      else if(this.state.sugar<90 ){
        this.setState({result:'You are hypoglycemic'})
      }
      else if(this.state.sugar>150 ){
        this.setState({result:'You are hyperglycemic'})
      }
   }

}


else if(this.state.age>=20){
    if(this.state.bloodSugarType==1){
       if(this.state.sugar>=70 || this.state.sugar<=110){
          this.setState({result:'Your sugar levels are normal'})
       }
       else if(this.state.sugar<70 ){
         this.setState({result:'You are hypoglycemic'})
       }
       else if(this.state.sugar>150 ){
         this.setState({result:'You are hyperglycemic'})
       }
    }
    if(this.state.bloodSugarType==2){
      if(this.state.sugar>=70 || this.state.sugar<=130){
         this.setState({result:'Your sugar levels are normal'})
      }
      else if(this.state.sugar<70 ){
        this.setState({result:'You are hypoglycemic'})
      }
      else if(this.state.sugar>130 ){
        this.setState({result:'You are hyperglycemic'})
      }
   }
   if(this.state.bloodSugarType==3){
      if(this.state.sugar<180 ){
         this.setState({result:'Your sugar levels are normal'})
      }
     
      else if(this.state.sugar>180 ){
        this.setState({result:'You are hyperglycemic'})
      }
   }
   if(this.state.bloodSugarType==4){
      if(this.state.sugar>=100 || this.state.sugar<=140){
         this.setState({result:'Your sugar levels are normal'})
      }
      else if(this.state.sugar<100 ){
        this.setState({result:'You are hypoglycemic'})
      }
      else if(this.state.sugar>140 ){
        this.setState({result:'You are hyperglycemic'})
      }
   }

}
    }
    }
 