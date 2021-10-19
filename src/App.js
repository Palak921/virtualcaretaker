import Auth from './Login';
import './App.css';
import reducer from './reducer'
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';

import BMICalculater from './bmi/Bmicalc';
import Caloriecounter from './bmi/Caloriecounter'
function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
    <div className="App App-header">
     {/* <Auth/> */}
     <BrowserRouter>
     <Route path="/" exact component={Auth}/>
     <Route path="/bmi" exact component={BMICalculater}/>
     <Route path="/cal" exact component={Caloriecounter}/>
     </BrowserRouter>
    {/* <div className="App"> */}
      {/* <BMICalculater></BMICalculater> */}
     {/* <Caloriecounter></Caloriecounter>*/}
    </div>
    </Provider>
    
  );
}

export default App;
