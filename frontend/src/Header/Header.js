import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from 'semantic-ui-react'
import Notification from '../Notification';

import './Header.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <div class="Nav">
            {/* <p>Navbar</p> */}
            <Link to="/homepage"><i class="home icon"></i></Link>
            <p>   </p>
            <Link to="/profile" className="profile">Profile</Link>
            <p>   </p>
            <Link to="/" className="profile">Home</Link>
            <Notification />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}


export default Navbar;