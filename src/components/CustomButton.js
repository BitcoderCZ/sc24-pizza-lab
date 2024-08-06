import { Button } from '@mui/material';
import React from 'react';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" size="medium" {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
