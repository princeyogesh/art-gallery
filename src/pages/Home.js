import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ARTIST = 'Bhalchandra Mandke'; // Set your artist name here

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
};

function Home() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/princeyogesh/art-gallery/master/public/paintings.json')
      .then(res => res.json())
      .then(data => setPaintings(data))
      .catch(() => {
        // Fallback dummy data if fetch fails
        setPaintings([
          { imagename: 'painting1.jpg', title: 'Sunset Over Lake' },
          { imagename: 'painting2.jpg', title: 'Abstract Dreams' },
          { imagename: 'painting3.jpg', title: 'Portrait of Lady' },
          { imagename: 'painting4.jpg', title: 'Starry Night' }
        ]);
      });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
        Featured Paintings
      </Typography>
      <Box sx={{ mb: 6 }}>
        <Slider {...sliderSettings}>
          {paintings.map((painting, idx) => (
            <Box key={idx} sx={{ px: { xs: 0, sm: 2 } }}>
              <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
                <CardMedia component="img" height={window.innerWidth < 600 ? 200 : 400} image={`https://raw.githubusercontent.com/princeyogesh/art-gallery/master/public/${painting.imagename}`} alt={painting.title} />
                <CardContent sx={{ background: 'rgba(255,255,255,0.8)' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } }}>{painting.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">by {ARTIST}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Typography variant="h5" align="center" sx={{ mb: 2, color: '#333', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}>
        Explore More Artworks
      </Typography>
      <Grid container spacing={2}>
        {paintings.map((painting, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia component="img" height={window.innerWidth < 600 ? 120 : 200} image={`https://raw.githubusercontent.com/princeyogesh/art-gallery/master/public/${painting.imagename}`} alt={painting.title} />
              <CardContent>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}>{painting.title}</Typography>
                <Typography variant="body2" color="text.secondary">by {ARTIST}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
