import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import CardMedia from '@mui/material/CardMedia';

function AboutUs() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <InfoIcon sx={{ fontSize: { xs: 40, sm: 60 }, color: '#1976d2' }} />
      </Box>
      <Card sx={{ maxWidth: { xs: '100%', sm: 600 }, mx: 'auto', borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '2rem' } }}>
            About Us
          </Typography>
          <Typography variant="body1" align="center" sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
            The Art Gallery is a curated platform for artists and art lovers. Admins can manage the gallery, while viewers can browse, shortlist, and interact with paintings.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutUs;
