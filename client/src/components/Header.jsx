import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <AirplanemodeActiveIcon sx={{ fontSize: 32, mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          airbnb
        </Typography>
        <IconButton color="inherit" aria-label="profile">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
