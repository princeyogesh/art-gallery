import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react'; 

export default function CustomAboutUs({ open, onClose }) {
  const [tabValue, setTabValue] = React.useState(0);  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const AboutUsContent = (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: { xs: '60vh', md: '50vh' },
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={6}
          sx={{
            borderRadius: 4,
            overflow: 'visible',
            background: 'rgba(255,255,255,0.95)',
            boxShadow: 6,
          }}
        >
          <CardContent>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="info"
              variant="fullWidth"
              sx={{ mb: 4 }}
            >
              <Tab label="Our Story" />
              <Tab label="Our Mission" />
              <Tab label="Our Values" />  

            </Tabs>
            {tabValue === 0 && (
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                  About Our Gallery
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                  At ArtGallery, we believe every piece tells a story. Our journey has been filled with challenges and triumphs, shaping us into a community that values creativity, trust, and resilience.
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Stack spacing={3}>
                  <Box display="flex" alignItems="flex-start">
                    <Avatar
                      sx={{
                        bgcolor: 'info.main',
                        width: 56,
                        height: 56,
                        boxShadow: 3,
                        mr: 2,
                      }}
                    >
                      <Icon fontSize="medium">mediation</Icon>
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Growth Through Adversity
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Life’s challenges shape our character and deepen our appreciation for art and connection.
                      </Typography>
                    </Box>
                  </Box>
                  <Divider flexItem />
                  <Box display="flex" alignItems="flex-start">
                    <Avatar
                      sx={{
                        bgcolor: 'info.main',
                        width: 56,
                        height: 56,
                        boxShadow: 3,
                        mr: 2,
                      }}
                    >
                      <Icon fontSize="medium">settings_overscan</Icon>
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Building Trust & Community
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We foster a welcoming environment where artists and enthusiasts can connect and grow together.
                      </Typography>
                    </Box>
                  </Box>
                  <Divider flexItem />
                  <Box display="flex" alignItems="flex-start">
                    <Avatar
                      sx={{
                        bgcolor: 'info.main',
                        width: 56,
                        height: 56,
                        boxShadow: 3,
                        mr: 2,
                      }}
                    >
                      <Icon fontSize="medium">token</Icon>
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Cherishing Every Moment
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Art helps us remember, heal, and celebrate life’s journey—together.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            )}
            {tabValue === 1 && (
              <Typography variant="body1" color="text.secondary">
                Our mission is to create a vibrant community where art enthusiasts and creators can connect, inspire, and grow together. We are dedicated to showcasing diverse artistic expressions and fostering an environment of creativity and collaboration.
              </Typography>
            )}
            {tabValue === 2 && (
              <Typography variant="body1" color="text.secondary">
                We value creativity, inclusivity, and integrity. Our commitment is to support artists from all backgrounds and provide a platform that celebrates diversity in art. We believe in the power of art to transform lives and communities.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      PaperProps={{
        sx: { borderTopLeftRadius: 24, borderTopRightRadius: 24, minHeight: { xs: '70vh', md: '60vh' } },
      }}
    >
      {AboutUsContent}
    </SwipeableDrawer>
  );
}