import React from 'react'
import {
    AppBar,
    Typography,
    Box,
    Toolbar,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    return (
    <Box>
      <AppBar position="static">
        <Toolbar  variant="regular">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit" component="div">
            'Off-the-Wall'
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navbar;