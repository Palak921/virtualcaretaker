import React,{Component} from "react";
import {Link} from "react-router-dom"
class Homepage extends Component{
render(){
return(
<div className='container'>
<Link to='/bmi'>
<button>
    BMI Calculator
</button>
</Link>

<Link to='/cal'>
<button>
    Caloriecounter
</button>
</Link>

<Link to='/mainpage'>
<button>
    Mainpage
</button>
</Link>
</div>
)
}
}
export default Homepage