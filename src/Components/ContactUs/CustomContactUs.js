import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function CustomContactUs({ open, onClose }) {
  const contactContent = (
    <Box
      sx={{ width: '100%', p: 3, textAlign: 'center' }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mb: 4 }}>
        <input type="text" placeholder="Your Name" style={{ width: '80%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Your Email" style={{ width: '80%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <textarea placeholder="Your Message" rows={4} style={{ width: '80%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <Button variant="contained" color="primary" sx={{ mt: 2, borderRadius: 2 }}>
          Send Message
        </Button>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
        Reach Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Email:</strong> info@mandkeartgallery.com
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Contact Number:</strong> +91-1234567890
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Location:</strong> Mandke's Art Gallery, Pune, Maharashtra, India
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <iframe
          title="Mandke's Art Gallery Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=73.8567%2C18.5204%2C73.8567%2C18.5204&amp;layer=mapnik&amp;marker=18.5204%2C73.8567"
          width="90%"
          height="250"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
    >
      {contactContent}
    </SwipeableDrawer>
  );
}
