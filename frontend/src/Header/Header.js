import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from 'semantic-ui-react'

import './Header.css';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div class="Nav">
          {/* <p>Navbar</p> */}
          {/* <p>Navbar</p> */}
          <p class="icons"><i class="home icon"></i></p>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;