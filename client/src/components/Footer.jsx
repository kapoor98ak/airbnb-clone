import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
