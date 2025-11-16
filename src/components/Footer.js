import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1976d2', color: '#fff', py: 3, mt: 6, textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Art Gallery. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Crafted with <span style={{ color: '#ff4081' }}>&#10084;</span> using React & Material UI
      </Typography>
    </Box>
  );
}

export default Footer;
