import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from 'semantic-ui-react'
import Notification from '../Notification';

import './Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div class="Nav">
          {/* <p>Navbar</p> */}
          <i class="home icon"></i>
          <p>   </p>
          <Link to="/profile" className="profile">Profile</Link>
          <p>   </p>
          <Link to="/home" className="profile">Home</Link>
          <Notification/>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;