import React, { Component } from "react";
import './Mainpage.css';
import { Button } from 'semantic-ui-react';
import Header from './Header/Header';
import hospitaldata from './data/hospitals'

class Mainpage extends Component {
   state = {
      age: 0,
      gender: 'not selected',
      sbp: 0,
      sugar: 0,
      dbp: 0,
      bpresult: '',
      sugarresult: '',
      preg: false,
      bloodSugarType: '1',
      userlatitude: '',
      userlongitude: '',
      hosplist: [],
      bpabnormality: false,
      sugarabnormality: false
   }
   render() {

      const agehandler = (e) => {
         if (e.target.value == '') {
            e.target.value = 0
         }
         this.setState({ age: parseInt(e.target.value) }, () => { console.log(this.state.age) })
      }

      const genHandler = (e) => {
         this.setState({ gender: e.target.id }, () => { console.log(this.state.gender) })
      }

      const sbpHandler = (e) => {
         if (e.target.value == '') {
            e.target.value = 0
         }
         this.setState({ sbp: parseInt(e.target.value) }, () => { console.log(this.state.sbp) })
      }

      const dbpHandler = (e) => {
         if (e.target.value == '') {
            e.target.value = 0
         }
         this.setState({ dbp: parseInt(e.target.value) }, () => { console.log(this.state.dbp) })
      }

      const sugarHandler = (e) => {
         if (e.target.value == '') {
            e.target.value = 0
         }
         this.setState({ sugar: parseInt(e.target.value) }, () => { console.log(this.state.sugar) })
      }

      const pregHandler = (e) => {
         this.setState({ preg: !this.state.preg })
      }

      const sugartypeHandler = (e) => {
         this.setState({ bloodSugarType: e.target.value })
      }


      let pregnancydetails = ''
      if (this.state.gender === 'women' && this.state.age >= 13) {
         pregnancydetails = (
            <div>Are you Pregnant
               <input type='checkbox' onChange={(e) => pregHandler(e)}></input>
            </div>)
      }


      let sugarans = false

      const diagnoseBPHandler = (e) => {
         e.preventDefault();
         if (this.state.sbp === 0 && this.state.dbp === 0) {
            this.setState({ bpresult: 'Please enter your diastolic Blood Pressure readings and systolic Blood Pressure' })
         }
         else if (this.state.sbp != 0 && this.state.dbp === 0) {
            this.setState({ bpresult: 'Please enter your diastolic Blood Pressure readings' })

         }
         else if (this.state.sbp === 0 && this.state.dbp != 0) {
            this.setState({ bpresult: 'Please enter your systolic Blood Pressure readings' })
         }
         else {

            const sys = this.state.sbp;
            const dia = this.state.dbp;
            if (sys != 0 && dia != 0) {
               if (sys < 120 && dia < 80) {
                  this.setState({ bpresult: 'You are perfectly Healthy' })
               }
               else if (sys >= 120 && sys <= 129 && dia < 80) {
                  this.setState({ bpresult: 'Your blood Pressure is slighlty Elevated and needs care', bpabnormality: true })
               }
               else if (sys >= 130 && sys <= 139 || dia >= 80 && dia <= 89) {
                  this.setState({ bpresult: 'Your blood Pressure is high.You are at Stage 1 Hypertension', bpabnormality: true })
               }
               else if (sys >= 140 || dia >= 90) {
                  this.setState({ bpresult: 'Your blood Pressure is high.You are at Stage 2 Hypertension', bpabnormality: true })
               }
               else {
                  this.setState({ bpresult: 'Your have Hypertensive crisis and requires immediate medical care', bpabnormality: true })
               }
            }
         }
      }
      let report = ''
      const diagnoseSugarHandler = (e) => {
         e.preventDefault()
         console.log(this.state.preg, this.state.bloodSugarType, this.state.age, this.state.sugar, this.state.gender == 'not selected')
         if (this.state.age == 0 || this.state.gender == 'not selected' || this.state.sugar == 0) {

            if (this.state.age == 0) {
               report = "Please enter your age. "
            }
            if (this.state.gender == 'not selected') {
               report += "Please select appropriate gender option. "
            }
            if (this.state.sugar == 0) {
               report += "Please add blood glucose level readings. "
            }
         }
         else {
            if (this.state.preg && this.state.age >= 13) {
               if (this.state.bloodSugarType === '1') {
                  if (this.state.sugar > 70 && this.state.sugar < 89) {
                     report = "Your sugar levels are normal"
                     sugarans = false
                  }
                  else if (this.state.sugar <= 70) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar >= 89) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

               if (this.state.bloodSugarType === '2') {
                  if (this.state.sugar === 89) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 89) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 89) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

               if (this.state.bloodSugarType === '3') {
                  if (this.state.sugar < 120) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }

                  else if (this.state.sugar >= 120) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

               if (this.state.bloodSugarType === '4') {
                  if (this.state.sugar >= 100 && this.state.sugar <= 140) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 100) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 140) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
            }
            else if (this.state.age === 6) {
               if (this.state.bloodSugarType === '1') {
                  if (this.state.sugar > 80 && this.state.sugar <= 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar <= 80) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '2') {
                  if (this.state.sugar >= 100 && this.state.sugar <= 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 100) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '3') {
                  if (this.state.sugar >= 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 180) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '4') {
                  if (this.state.sugar >= 110 && this.state.sugar <= 200) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 110) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 200) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

            }

            else if (this.state.age > 6 && this.state.age <= 12) {
               if (this.state.bloodSugarType === '1') {
                  if (this.state.sugar > 80 && this.state.sugar <= 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar <= 80) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

               if (this.state.bloodSugarType === '2') {
                  if (this.state.sugar >= 90 && this.state.sugar <= 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 90) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '3') {
                  if (this.state.sugar <= 140) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar > 140) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '4') {
                  if (this.state.sugar >= 100 && this.state.sugar <= 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 100) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
            }



            else if (this.state.age >= 13 && this.state.age <= 19) {
               if (this.state.bloodSugarType === '1') {

                  if (this.state.sugar > 70 && this.state.sugar <= 150) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar <= 70) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 150) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '2') {
                  if (this.state.sugar >= 90 && this.state.sugar <= 130) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 90) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 130) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '3') {
                  if (this.state.sugar >= 140) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }

                  else if (this.state.sugar > 140) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '4') {
                  if (this.state.sugar >= 90 && this.state.sugar <= 150) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 90) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 150) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

            }


            else if (this.state.age >= 20) {
               if (this.state.bloodSugarType === '1') {
                  if (this.state.sugar >= 70 && this.state.sugar <= 110) {

                     report = 'Your sugar levels are normal'
                     sugarans = false

                  }
                  else if (this.state.sugar < 70) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 110) {
                     report = 'You are hyperglycemic'
                     sugarans = true

                  }
               }
               if (this.state.bloodSugarType === '2') {
                  if (this.state.sugar >= 70 && this.state.sugar <= 130) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 70) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 130) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '3') {
                  if (this.state.sugar < 180) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }

                  else if (this.state.sugar > 180) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }
               if (this.state.bloodSugarType === '4') {
                  if (this.state.sugar >= 100 && this.state.sugar <= 140) {
                     report = 'Your sugar levels are normal'
                     sugarans = false
                  }
                  else if (this.state.sugar < 100) {
                     report = 'You are hypoglycemic'
                     sugarans = true
                  }
                  else if (this.state.sugar > 140) {
                     report = 'You are hyperglycemic'
                     sugarans = true
                  }
               }

            }
         }
         this.setState({ sugarresult: report, sugarabnormality: sugarans }, () => console.log(this.state.sugarresult))
      }
      const distance = (lat1, lon1, lat2, lon2, unit) => {
         var radlat1 = Math.PI * lat1 / 180
         var radlat2 = Math.PI * lat2 / 180
         var theta = lon1 - lon2
         var radtheta = Math.PI * theta / 180
         var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
         if (dist > 1) {
            dist = 1;
         }
         dist = Math.acos(dist)
         dist = dist * 180 / Math.PI
         dist = dist * 60 * 1.1515
         if (unit == "K") { dist = dist * 1.609344 }
         return dist * 1609.344
      }

      let hospitalbutton = null
      let hospitallist = null
      if (this.state.bpabnormality || this.state.sugarabnormality) {
         hospitalbutton = <Button color="blue" className="btn" onClick={(e) => hospitalhandler(e)}>Hospitals near me</Button>
      }

      let hosp = []
      const hospitalhandler = (e) => {
         e.preventDefault()
         navigator.geolocation.getCurrentPosition(position => {
            this.setState({ userlatitude: position.coords.latitude, userlongitude: position.coords.longitude },
               () => {
                  console.log(this.state.userlatitude, this.state.userlongitude)
                  for (var i = 0; i < hospitaldata.length; i++) {
                     let x = distance(this.state.userlatitude, this.state.userlongitude, hospitaldata[i].lat, hospitaldata[i].long)
                     if (x <= 5000) {
                        console.log(x)
                        hosp.push(hospitaldata[i])
                     }
                  }
                  this.setState({ hosplist: hosp }, () => {
                     console.log(this.state.hosplist)
                  })
               })
         })
      }

      if (this.state.hosplist != []) {
         hospitallist = this.state.hosplist.map((i, ind) => { return (<div><li key={ind}>{i.name}</li></div>) })
      }
      let style = "";
      

      return (
         <div className="main">
            <div>
               <Header />
            </div>
            <h1><strong> <u>  Check your health  </u> </strong> </h1>
            <div className="co">
               <strong>
                  <p>Blood Pressure</p>
                  <br />
               </strong>

               <p className="top1">
                  <p className="top">Age
                     <input type="text" required id="age" onChange={(e) => agehandler(e)} placeholder={this.state.age}></input>
                  </p>
                  {/* </p> */}
                  {/* <p className="top1"> */}
                  <p className="gender">
                     Gender
                     <input className="radio" type="radio" required id='men' name="gender" value="Male" onChange={(e) => genHandler(e)}></input>
                     <label for="men">Male</label>
                     <input className="radio" type="radio" id='women' required name="gender" value="Female" onChange={(e) => genHandler(e)}></input>
                     <label for="women">Female</label><br></br>
                  </p>
               </p>
               <p>Systolic(Top) Blood Pressure</p>
               <input type="text" id="bp" onChange={(e) => sbpHandler(e)} placeholder={this.state.sbp}></input>
               <p>Diastolic(Bottom) Blood Pressure</p>
               <input type="text" id="bp" onChange={(e) => dbpHandler(e)} placeholder={this.state.dbp}></input>
               <div className="prega">
                  {pregnancydetails}
               </div>
               <div>
                  <p>{this.state.bpresult}</p>
               </div>
               <Button color="blue" className="btn" onClick={(e) => diagnoseBPHandler(e)}>Diagnose</Button>
            </div>
            <div className="co">
               <p> <strong>Sugar</strong> </p>
               <input type="text" id="bp" onChange={(e) => sugarHandler(e)} placeholder={this.state.sugar}></input>
               {/* <legend></legend> */}
               <p>Please select appropriate option from the dropdown list</p>
               <div>
                  <select id="list" onChange={(e) => sugartypeHandler(e)}>
                     <option selected value='1'>Blood Sugar levels after Fasting</option>
                     <option value='2'>Blood Sugar Levels Before Meal</option>
                     <option value='3'>Blood Sugar Levels After 1 to 2 Hours of Eating</option>
                     <option value='4'>Blood Sugar Levels at Bedtime</option>
                  </select>
               </div>
               <p>{this.state.sugarresult}</p>
               <Button color="blue" className="btn" onClick={(e) => diagnoseSugarHandler(e)}>Diagnose</Button>
               {/* <button >Diagnose</button> */}
               {hospitalbutton}
               {hospitallist}
            </div>
            <br />
            <br />
         </div>
      )
   }
}
export default Mainpage