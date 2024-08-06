import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import pizzaPattern from '../assets/images/pizza-seamless-pattern.jpg';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#000',
        color: '#fff',
        py: 4,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${pizzaPattern})`,
          backgroundRepeat: 'repeat',
          opacity: 0.2,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneInTalkIcon />
              &nbsp;+420 123 456 789
            </Typography>
            <Typography variant="body1" gutterBottom>
              <AlternateEmailIcon />
              &nbsp;info@hoodline.cz
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PlaceIcon />
              &nbsp;Namesti 1, Prague
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Opening Hours
            </Typography>
            <Typography variant="body1" gutterBottom>
              Monday - Friday: 10:00 AM - 10:00 PM
            </Typography>
            <Typography variant="body1">Saturday - Sunday: 12:00 PM - 12:00 AM</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/menu" color="inherit" underline="hover">
              Menu
            </Link>
            <br />
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Hoodline. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
