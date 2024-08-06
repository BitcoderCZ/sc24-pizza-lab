import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DrinkMenu = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 4, background: theme.palette.background.main }}>
      <Container maxWidth="lg" sx={{ height: '735px' }}>
        <Typography variant="h3" color={theme.palette.background.contrastText} gutterBottom>
          Our Drink Menu
        </Typography>
      </Container>
    </Box>
  );
};

export default DrinkMenu;
