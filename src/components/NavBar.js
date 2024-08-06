import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#210061' }}>
      <Toolbar>
        <IconButton size="large" edge="start" component={RouterLink} to="/" aria-label="logo">
          <LocalPizzaIcon htmlColor="#fff" />
        </IconButton>
        <Typography variant="h6" component={'h1'} color="white" sx={{ flexGrow: 1 }} aria-label="brand name">
          Hoodline
        </Typography>
        <Stack direction="row" sx={{ flexGrow: 1 }} spacing={2}>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="food-menu"
          >
            Food Menu
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
