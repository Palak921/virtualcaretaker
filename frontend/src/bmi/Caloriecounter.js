import React, { Component } from "react";
import './bmi.css';

class Caloriecounter extends Component {

  state = {
    wval: '',
    hval: '',
    res: '',
    bmi: 0,
    gender: '',
    age: '',
    activity: '',
    totalCalories: 0,
    errorMessage: ''
  }

  render() {

    const weighthandler = (e) => {
      this.setState({ wval: e.target.value }, () => { console.log(this.state.wval) })
    }

    const heighthandler = (e) => {
      this.setState({ hval: e.target.value }, () => { console.log(this.state.hval) })
    }

    const agehandler = (e) => {
      this.setState({ age: e.target.value }, () => { console.log(this.state.age) })
    }

    const activityhandler = (e) => {
      this.setState({ activity: e.target.value }, () => { console.log(this.state.activity) })
    }

    const genHandler = (e) => {
      this.setState({ gender: e.target.id }, () => { console.log(this.state.gender) })
    }

    const reshandler = (e) => {
      e.preventDefault()
      if (this.state.age === '' || this.state.wval === '' || this.state.hval === '' || this.state.age == '') {
        this.setState({ errorMessage: 'Please make sure the values you entered are correct' })
      }
      else if (this.state.gender === 'men' && this.state.activity === "1") {
        this.setState({ totalCalories: 1.2 * (66.5 + (13.75 * parseFloat(this.state.wval)) + (5.003 * parseFloat(this.state.hval)) - (6.755 * parseFloat(this.state.age))) })

      } else if (this.state.gender === 'men' && this.state.activity === "2") {
        this.setState({ totalCalories: 1.375 * (66.5 + (13.75 * parseFloat(this.state.wval)) + (5.003 * parseFloat(this.state.hval)) - (6.755 * parseFloat(this.state.age))) });
      } else if (this.state.gender === 'men' && this.state.activity === "3") {
        this.setState({ totalCalories: 1.55 * (66.5 + (13.75 * parseFloat(this.state.wval)) + (5.003 * parseFloat(this.state.hval)) - (6.755 * parseFloat(this.state.age))) });
      } else if (this.state.gender === 'men' && this.state.activity === "4") {
        this.setState({ totalCalories: 1.725 * (66.5 + (13.75 * parseFloat(this.state.wval)) + (5.003 * parseFloat(this.state.hval)) - (6.755 * parseFloat(this.state.age))) });
      } else if (this.state.gender === 'men' && this.state.activity === "5") {
        this.setState({ totalCalories: 1.9 * (66.5 + (13.75 * parseFloat(this.state.wval)) + (5.003 * parseFloat(this.state.hval)) - (6.755 * parseFloat(this.state.age))) })

      } else if (this.state.gender === 'women' && this.state.activity === "1") {
        this.setState({ totalCalories: 1.2 * (655 + (9.563 * parseFloat(this.state.wval)) + (1.850 * parseFloat(this.state.hval)) - (4.676 * parseFloat(this.state.age))) });
      } else if (this.state.gender === 'women' && this.state.activity === "2") {
        this.setState({ totalCalories: 1.375 * (655 + (9.563 * parseFloat(this.state.wval)) + (1.850 * parseFloat(this.state.hval)) - (4.676 * parseFloat(this.state.age))) });
      } else if (this.state.gender === 'women' && this.state.activity === "3") {
        this.setState({ totalCalories: 1.55 * (655 + (9.563 * parseFloat(this.state.wval)) + (1.850 * parseFloat(this.state.hval)) - (4.676 * parseFloat(this.state.age))) });
      } else if (this.state.gender === 'women' && this.state.activity === "4") {
        this.setState({ totalCalories: 1.725 * (655 + (9.563 * parseFloat(this.state.wval)) + (1.850 * parseFloat(this.state.hval)) - (4.676 * parseFloat(this.state.age))) });
      } else {
        this.setState({ totalCalories: 1.9 * (655 + (9.563 * parseFloat(this.state.wval)) + (1.850 * parseFloat(this.state.hval)) - (4.676 * parseFloat(this.state.age))) });
      }

    }



    return (
      <div class="container">
        <h1 class="heading">Calorie Calculator</h1>
        <p class="content">Age</p>
        <input class="ip" type="text" id="age" onChange={(e) => agehandler(e)} value={this.state.age}></input>
        <p class="content">Height (in cm)</p>
        <input class="ip" type="text" id="height" onChange={(e) => weighthandler(e)} value={this.state.wval}></input>
        <p class="content">Weight (in kg)</p>
        <input class="ip" type="text" id="weight" onChange={(e) => heighthandler(e)} value={this.state.hval}></input>
        <p class="content">Gender</p>
        <input class="ip" type="radio" id='men' name="gender" value="Male" onChange={(e) => genHandler(e)}></input>
        <label class="content" for="men">Male</label><br></br>
        <input type="radio" id='women' name="gender" value="Female" onChange={(e) => genHandler(e)}></input>
        <label class="content" for="women">Female</label><br></br>
        <legend class="content" >Activity</legend>
        <select id="list" onChange={(e) => activityhandler(e)}>
          <option selected value="1">Sedentary (little or no exercise)</option>
          <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
        </select>
        <button id="btn" onClick={(e) => reshandler(e)}>Calculate</button>
        <div class='error'>{this.state.errorMessage}</div>
        <div>You may intake {this.state.totalCalories.toFixed(2)} Calories per day</div>
      </div>
    )
  }
}
export default Caloriecounter