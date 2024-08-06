import React from 'react';
import { Box, Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';
import bannerPicture from '../assets/images/banner-picture.png';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bannerPicture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2} direction="column">
          <Grid align="center" justify="center" alignItems="center" direction="row">
            <img style={{ borderRadius: 50 }} width="350vmin" src={require('../assets/images/logo.png')} />
          </Grid>
          <Box
            align="center"
            justify="center"
            alignItems="center"
            sx={{
              padding: 2,
              backgroundColor: theme.palette.background.main + 'A0',
              borderRadius: 10,
            }}
          >
            <Typography
              variant="h2"
              color={theme.palette.background.contrastText}
              sx={{
                padding: '8px 16px',
              }}
            >
              <strong>The best pizza of Your life is just one click away!</strong>
            </Typography>
          </Box>
          <ButtonGroup
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{
                background: 'rgba(255,255,255, 0.85);',
                '&:hover': {
                  backgroundColor: '#ffffff',
                  strokeWidth: '2',
                  stroke: '#fff',
                },
                borderRadius: 12,
              }}
              size="extraLarge"
              component={RouterLink}
              to="food-menu"
            >
              Order
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
