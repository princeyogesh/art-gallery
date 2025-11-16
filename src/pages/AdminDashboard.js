import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CardMedia from '@mui/material/CardMedia';

function AdminDashboard() {
  const paintings = [
    { title: 'Painting 1', imagename: 'painting1.jpg' },
    { title: 'Painting 2', imagename: 'painting2.jpg' },
    // Add more paintings as needed
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <AdminPanelSettingsIcon sx={{ fontSize: { xs: 40, sm: 60 }, color: '#1976d2' }} />
      </Box>
      <Card sx={{ maxWidth: { xs: '100%', sm: 600 }, mx: 'auto', borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '2rem' } }}>
            Admin Dashboard
          </Typography>
          <form>
            <TextField label="Image Title" fullWidth margin="normal" required />
            <TextField label="Image URL" fullWidth margin="normal" required />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" color="primary">
                Add Image
              </Button>
            </Box>
          </form>
          {paintings.map((painting, index) => (
            <Card key={index} sx={{ mt: 2 }}>
              <CardMedia component="img" height={200} image={`https://raw.githubusercontent.com/princeyogesh/art-gallery/master/public/${painting.imagename || painting.url}`} alt={painting.title} />
              <CardContent>
                <Typography variant="h6">{painting.title}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button variant="contained" color="primary">
                    Update
                  </Button>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default AdminDashboard;
