import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import founders from '../assets/images/founders.png';
import restaurant from '../assets/images/restaurant.png';
import deliciousPizza from '../assets/images/delicious-pizza.png';
import { useTheme } from '@mui/material/styles';
import BackgroundText from '../components/BackgroundText';

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 4, background: theme.palette.background.main }}>
      <Container maxWidth="md">
        <BackgroundText variant="h3" gutterBottom>
          Pizza Lab Story
        </BackgroundText>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <img src={founders} alt="Founders" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BackgroundText variant="body1" paragraph>
              Pizza Lab was founded in 2010 by two passionate pizza enthusiasts, John Doe and Jane Smith. With a shared love for culinary arts and a
              vision to create the perfect pizza, they embarked on a journey to bring their dream to life. Located in the heart of the city, Pizza Lab
              has become a beloved spot for pizza lovers of all ages.
            </BackgroundText>
            <BackgroundText variant="body1" paragraph>
              Our mission is to deliver exceptional quality, taste, and service. We believe in using only the freshest ingredients and traditional
              methods to craft our pizzas. Our secret recipe dough is hand-kneaded daily, and our sauces are made from scratch using the finest
              tomatoes and herbs.
            </BackgroundText>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <BackgroundText variant="body1" paragraph>
              At Pizza Lab, we value our customers and strive to create a warm and welcoming atmosphere. Whether you`&apos;`re dining in with family,
              grabbing a quick slice on the go, or ordering delivery for a cozy night in, we aim to provide an unforgettable pizza experience.
            </BackgroundText>
            <BackgroundText variant="body1" paragraph>
              Our founders, John and Jane, are dedicated to innovation and constantly experimenting with new flavors and techniques. They have created
              a diverse menu that caters to all tastes, from classic Margherita to adventurous gourmet creations.
            </BackgroundText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={restaurant} alt="Pizza Lab Interior" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <img src={deliciousPizza} alt="Delicious Pizza" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BackgroundText variant="body1" paragraph>
              Beyond our commitment to great food, Pizza Lab is dedicated to giving back to the community. We regularly participate in local events,
              support charitable causes, and strive to make a positive impact. Our team believes in sustainability and environmentally friendly
              practices, using eco-friendly packaging and reducing food waste wherever possible.
            </BackgroundText>
            <BackgroundText variant="body1" paragraph>
              Join us at Pizza Lab and discover why our pizzas are loved by so many. We look forward to serving you and sharing our passion for pizza
              with every bite.
            </BackgroundText>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
