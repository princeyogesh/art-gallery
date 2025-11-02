import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function CustomAboutUs({ open, onClose }) {

    const AboutUsContent = (

    <Box
      sx={{ width: '100%', p: 3, textAlign: 'center' }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Welcome to Mandke's Art Gallery! We are passionate about showcasing exquisite artworks from talented artists around the world. Our mission is to provide a platform for art enthusiasts to explore, appreciate, and acquire unique pieces that inspire and captivate.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Mandke's Art Gallery, we believe that art has the power to transform spaces and evoke emotions. Our curated collection features a diverse range of styles, mediums, and themes, ensuring that there is something for every art lover.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Whether you are a seasoned collector or a first-time buyer, our knowledgeable team is here to assist you in finding the perfect artwork that resonates with your personal taste and aesthetic.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Thank you for visiting Mandke's Art Gallery. We invite you to explore our collection and discover the beauty and creativity that art brings to life.
      </Typography>
      <Divider sx={{ my: 3 }} />
      </Box>
    );
 
    return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose} 
      onOpen={() => {}}
      >
      {AboutUsContent}
      </SwipeableDrawer>
    );
}