import React from "react";
function Input(props){
    return(
        <div className='container'>
            <label>{props.name}</label>
            <input type={props.type}>
            </input>
        </div>
    )
}
export default Input