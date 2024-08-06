import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModeSwitch from './ModeSwitch';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#210061' }}>
      <Toolbar>
        <IconButton size="large" edge="start" component={RouterLink} to="/" aria-label="logo">
          <LocalPizzaIcon htmlColor="#fff" />
        </IconButton>
        <Typography variant="h6" component={'h1'} color="white" sx={{ flexGrow: 1 }} aria-label="brand name">
          Pizza Lab
        </Typography>
        <Stack direction="row" sx={{ flexGrow: 1 }} spacing={2}>
          <Button variant="text" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            Our Offerings <ArrowDropDownTwoToneIcon htmlColor="#fff" />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={RouterLink} to="/food-menu" onClick={handleMenuClose}>
              Food Menu
            </MenuItem>
            <MenuItem component={RouterLink} to="/drink-menu" onClick={handleMenuClose}>
              Drink Menu
            </MenuItem>
          </Menu>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="about"
          >
            About Us
          </Button>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="contact"
          >
            Contact
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <ModeSwitch />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
