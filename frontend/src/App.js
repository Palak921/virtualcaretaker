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


function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
    <div className="App App-header">
     <BrowserRouter>
     <Route path="/" exact component={Auth}/>
     <Route path="/bmi" exact component={BMICalculater}/>
     <Route path="/cal" exact component={Caloriecounter}/>
<<<<<<< HEAD:src/App.js
     <Route path="/main" exact component={Mainpage}/>
=======
     <Route path="/mainpage" exact component={Mainpage}/>
     <Route path="/homepage" exact component={Homepage}/>
>>>>>>> 28f6d49e042cfc238a0d05e9b2915a05295b4fc0:frontend/src/App.js
     </BrowserRouter>
      {/* <Mainpage></Mainpage> */}
      {/*<BMICalculater></BMICalculater>*/}
     {/* <Caloriecounter></Caloriecounter>*/}
    </div>
    </Provider>
    
  );
}
export default App;