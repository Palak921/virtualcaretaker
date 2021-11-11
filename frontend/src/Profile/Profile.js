import React, { Component } from "react";
import "./Profile.css";
import Header from '../Header/Header';
import dummy from '../images/dummy.jpg';

import axios from "axios";
class Profile extends Component {
    state = {
        username: '',
        age: '',
        gender: '',
        preg: '',
        sys: "",
        dia: '',
        sugar: '',
        bmi: '',
        calorie: '' 

    }
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className='container'>
                    <div className='row1'>
                        <div>
                            <img className="picture" src={dummy} />
                        </div>
                        <div> User Name </div>
                        <div className="information">
                            <div className="info">
                                <div className="label">Age    </div>
                                <input disabled placeholder="age"></input>
                            </div>

                            <div className="info">
                                <div className="label">Height    </div>
                                <input disabled placeholder="height"></input>
                            </div>

                            <div className="info">
                                <div className="label">Weight    </div>
                                <input disabled placeholder="weight"></input>
                            </div>
                        </div>
                    </div>
                    <div className='row2'>Information
                    </div>
                </div> 
            </div>
        )
    }
}

export default Profile;