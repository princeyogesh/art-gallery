import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';

const ARTIST = 'A. Monet'; // Set your artist name here

function Gallery() {
  const [images, setImages] = useState([]);
  const [enlargedId, setEnlargedId] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/princeyogesh/art-gallery/master/public/paintings.json')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(() => {
        setImages([
          { id: 1, title: 'Sunset', url: 'painting1.jpg' },
          { id: 2, title: 'Abstract', url: 'painting2.jpg' },
          { id: 3, title: 'Portrait', url: 'painting3.jpg' },
          { id: 4, title: 'Starry Night', url: 'painting4.jpg' }
        ]);
      });
  }, []);

  // Handle click outside enlarged card
  React.useEffect(() => {
    if (enlargedId !== null) {
      const handleClick = (e) => {
        if (!e.target.closest('.enlarged-card')) {
          setEnlargedId(null);
        }
      };
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [enlargedId]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
        Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              className={enlargedId === idx ? 'enlarged-card' : ''}
              sx={{
                borderRadius: 4,
                boxShadow: 6,
                position: 'relative',
                overflow: 'visible',
                transition: 'transform 0.3s cubic-bezier(.4,2,.3,1)',
                zIndex: enlargedId === idx ? 10 : 1,
                transform: enlargedId === idx ? 'scale(1.25)' : 'scale(1)',
                cursor: 'pointer',
              }}
              onClick={() => setEnlargedId(idx)}
            >
              <CardActionArea>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height={window.innerWidth < 600 ? (enlargedId === idx ? 320 : 180) : (enlargedId === idx ? 400 : 260)}
                    image={`https://raw.githubusercontent.com/princeyogesh/art-gallery/master/public/${image.imagename || image.url}`}
                    alt={image.title}
                    sx={{ borderRadius: 4, objectFit: 'cover', filter: 'brightness(0.95)' }}
                  />
                  <Chip label={ARTIST} sx={{ position: 'absolute', top: 12, left: 12, background: '#1976d2', color: '#fff', fontWeight: 'bold' }} />
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', bgcolor: 'rgba(25,118,210,0.85)', color: '#fff', px: 2, py: 1, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>{image.title}</Typography>
                  </Box>
                </Box>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button size="small" color="primary" startIcon={<FavoriteBorderIcon />}>Shortlist</Button>
                <Button size="small" color="secondary" startIcon={<VisibilityIcon />}>Interact</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Gallery;
