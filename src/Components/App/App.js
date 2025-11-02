import CustomImageList from '../ImageList/CustomImageList';
import CustomContactUs from '../ContactUs/CustomContactUs';
import CustomAboutUs from '../AboutUs/CustomAboutUs'; 
import './App.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function Header({onExplore, onContact, onAbout}) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 3, background: 'none' }}>
      <Toolbar sx={{ justifyContent: 'center', flexDirection: 'column', py: 4 }}>
        <Avatar src="/logo192.png" sx={{ width: 80, height: 80, mb: 2, boxShadow: 3 }} />
        <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1, textShadow: '0 2px 8px rgba(25,118,210,0.12)' }}>
          Mandke's Art Gallery
        </Typography>
        <Typography variant="h6" sx={{ color: '#555', mb: 2 }}>
          Discover, admire, and get inspired by beautiful art collections
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" 
                  color="primary" 
                  size="large" 
                  sx={{ borderRadius: 8, fontWeight: 'bold', boxShadow: 2 }
                  }
                  onClick={onExplore}>
            Explore Gallery
          </Button>
          <Button variant="outlined" 
                  color="primary" 
                  size="large" 
                  sx={{ borderRadius: 8, fontWeight: 'bold' }}
                  onClick ={onAbout}
                  >
            About Us
          </Button>
          <Button variant="outlined" 
                  color="primary" 
                  size="large" 
                  sx={{ borderRadius: 8, fontWeight: 'bold' }}
                  onClick ={onContact}
                  >
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 3, background: 'linear-gradient(90deg, #e3f2fd 0%, #fff 100%)', mt: 6, boxShadow: 1 }}>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="text.secondary">
        &copy; 2025 Mandke's Art Gallery &mdash; Crafted with <span style={{color:'#1976d2'}}>&#10084;</span>
      </Typography>
    </Box>
  );
}

function App() {
  const [showGallery, setShowGallery] = React.useState(false);
  const [contactDrawerOpen, setContactDrawerOpen] = React.useState(false);
  const [aboutDrawerOpen, setAboutDrawerOpen] = React.useState(false);  

  const handleExploreClick = () => {
    setShowGallery(true);
  };

  const handleContactUsClick = () => {
    setContactDrawerOpen(true);
  };

  const handleContactDrawerClose = () => {
    setContactDrawerOpen(false);
  };

  const handleAboutUsClick = () => {
    setAboutDrawerOpen(true);
  };

  const handleAboutDrawerClose = () => {
    setAboutDrawerOpen(false);
  };  

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)', pb: 4 }}>
      <Header onExplore={handleExploreClick} onContact={handleContactUsClick} onAbout={handleAboutUsClick} />
      {showGallery && (
        <Container maxWidth="md" sx={{ mt: 2 }}>
          <Paper elevation={3} sx={{ p: 3, background: 'rgba(255,255,255,0.95)', borderRadius: 4, boxShadow: 4 }}>
            <CustomImageList />
          </Paper>
        </Container>
      )}
      <CustomAboutUs open={aboutDrawerOpen} onClose={handleAboutDrawerClose} /> 
      <CustomContactUs open={contactDrawerOpen} onClose={handleContactDrawerClose} />
      <Footer />
    </Box>
  );
}

export default App;
