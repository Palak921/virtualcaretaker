import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from './Header/Header';
import { Button } from 'semantic-ui-react';
import doctors from './images/doctors.jpg';
import './homepage.css';
class Homepage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className='home'>
                    <div className="image">
                        <strong>VIRTUAL CARETAKER</strong>
                        <img src={doctors} />
                    </div>
                    <div className="rowele">
                        <div className="btn">
                            <Link to='/bmi'>
                                <Button as="div" color="blue">BMI Calculator</Button>
                            </Link>
                        </div>

                        <div className="btn">
                            <Link to='/cal'>
                                <Button color="blue">Caloriecounter</Button>
                            </Link>
                        </div>

                        <div className="btn">
                            <Link to='/mainpage'>
                                <Button as="div" color="blue">Mainpage</Button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        )
    }
}
export default Homepage