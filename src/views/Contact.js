import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BackgroundText from '../components/BackgroundText';

const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 4, background: theme.palette.background.main }}>
      <Container maxWidth="md">
        <Typography variant="h3" color={theme.palette.background.contrastText} gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BackgroundText variant="h6" gutterBottom>
              Our Address
            </BackgroundText>
            <BackgroundText variant="body1">Hoodline</BackgroundText>
            <BackgroundText variant="body1">Náměstí 1</BackgroundText>
            <BackgroundText variant="body1">110 00 Prague, Czech Republic</BackgroundText>
            <BackgroundText variant="body1" gutterBottom>
              Phone: +420 123 456 789
            </BackgroundText>
            <BackgroundText variant="body1" gutterBottom>
              Email: info@pizzalab.cz
            </BackgroundText>
          </Grid>
          <Grid item xs={12} md={6}>
            <BackgroundText variant="h6" gutterBottom>
              Contact Form
            </BackgroundText>
            <form noValidate autoComplete="off">
              <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
              <TextField label="Email" variant="outlined" fullWidth margin="normal" required type="email" />
              <TextField label="Message" variant="outlined" fullWidth margin="normal" required multiline rows={4} />
              <Box mt={2}>
                <Button variant="contained" type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Box mt={4}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.5246395185485!2d14.418540716056957!3d50.08745137942571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ea6a34e1d3%3A0xf6e57a48402db75!2zTsOhbcWZZcWZZcOtIDE1LCAxMTEgMDAgUHJhaGEgMSwgQ8OhcmNldmHEjW8gcmVwdWJsaWNh!5e0!3m2!1sen!2sus!4v1621530297152!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
