import React, { Component } from "react";
import "./Profile.css";
import Header from '../Header/Header';
import dummy from '../images/dummy.jpg';
import axios from "axios";
import qs from 'qs'
import { connect } from 'react-redux'

class Profile extends Component {
    state = {
        username: '',
        age: '',
        gender: '',
        sys: "",
        dia: '',
        sugar: '',
        bmi: '',
        calorie: '',
        sugarresult: '',
        bpresult: ''
    }
    componentDidMount = () => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/getprofile',
            data: qs.stringify({
                username: this.props.username
            })
        }).then(response => {
            response = response.data
            console.log(response)
            let a = '', g = '', s = '', d = '', sug = '', bm = '', sr = '', br = '';
            if (response.age) {
                a = response.age
            }
            if (response.gender) {
                g = response.gender
            }
            if (response.bloodsugar) {
                sug = response.bloodsugar
            }
            if (response.diastolic) {
                d = response.diastolic
            }
            if (response.systolic) {
                s = response.systolic
            }
            if (response.bmi) {
                bm = response.bmi
            }
            if (response.sugarresult) {
                sr = response.sugarresult
            }
            if (response.bpresult) {
                br = response.bpresult
            }
            this.setState({
                username: response.username,
                age: a,
                gender: g,
                sys: s,
                dia: d,
                sugar: sug,
                bmi: bm,
                sugarresult: sr,
                bpresult: br
            }, () => { console.log(this.state) })
        }).
            catch(error => { console.log(error) })
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

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(Profile);