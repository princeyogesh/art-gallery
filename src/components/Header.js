import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BrushIcon from '@mui/icons-material/Brush';

function Header() {
  return (
    <Box sx={{ bgcolor: '#e3f2fd', py: 2, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <BrushIcon sx={{ fontSize: 40, color: '#1976d2' }} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', letterSpacing: 2 }}>
        Welcome to Art Gallery
      </Typography>
    </Box>
  );
}

export default Header;
