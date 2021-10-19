import Auth from './Login';
import './App.css';
import reducer from './reducer'
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
    <div className="App App-header">
     {/* <Auth/> */}
     <BrowserRouter>
     <Route path="/" exact component={Auth}/>
     </BrowserRouter>
    </div>
    </Provider>
    
  );
}

export default App;
