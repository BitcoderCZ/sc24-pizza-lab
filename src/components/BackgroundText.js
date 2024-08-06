import { Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line react/prop-types
const BackgroundText = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Typography color={theme.palette.background.contrastText} {...props}>
      {children}
    </Typography>
  );
};

export default BackgroundText;
