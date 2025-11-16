import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactUs() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <ContactMailIcon sx={{ fontSize: { xs: 40, sm: 60 }, color: '#1976d2' }} />
      </Box>
      <Card sx={{ maxWidth: { xs: '100%', sm: 600 }, mx: 'auto', borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '2rem' } }}>
            Contact Us
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button startIcon={<LocationOnIcon />} href="https://maps.google.com/?q=Art+Gallery+Location" target="_blank" sx={{ textTransform: 'none', color: '#1976d2' }}>
                View Map Location
              </Button>
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <strong>Contact Number:</strong> <span style={{ color: '#1976d2' }}>+1 (555) 123-4567</span>
            </Typography>
            <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: 500, height: 300, borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
                <iframe
                  title="Art Gallery Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363155042!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sArt%20Gallery!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </Box>
            </Box>
          </Box>
          <form>
            <TextField label="Name" fullWidth margin="normal" required />
            <TextField label="Email" fullWidth margin="normal" required />
            <TextField label="Message" fullWidth margin="normal" multiline rows={4} required />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" color="primary">
                Send
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactUs;
