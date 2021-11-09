import Auth from './Login';
import './App.css';
import reducer from './reducer'
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';

import BMICalculater from './bmi/Bmicalc';
import Caloriecounter from './bmi/Caloriecounter'
import './App.css';
import Mainpage from './Mainpage';
import Homepage  from './homepage';
import Profile from './Profile/Profile'


function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
    <div className="App App-header">
     <BrowserRouter>
     <Route path="/" exact component={Mainpage}/>
     <Route path="/bmi" exact component={BMICalculater}/>
     <Route path="/cal" exact component={Caloriecounter}/>
     <Route path="/mainpage" exact component={Mainpage}/>
     <Route path="/homepage" exact component={Homepage}/>
     <Route path="/profile" exact component={Profile}/>
     </BrowserRouter>
      {/* <Mainpage></Mainpage> */}
      {/*<BMICalculater></BMICalculater>*/}
     {/* <Caloriecounter></Caloriecounter>*/}
    </div>
    </Provider>
    
  );
}
export default App;