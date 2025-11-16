import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const GradientAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, #1976d2 0%, #64b5f6 100%)',
  boxShadow: '0 4px 20px 0 rgba(25, 118, 210, 0.2)',
});

const tabConfig = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'About Us', path: '/about' },
];

function Navbar() {
  const location = useLocation();
  const { role } = useAuth();
  let tabs = tabConfig;
  if (role === 'admin') {
    tabs = [...tabConfig, { label: 'Admin', path: '/admin' }];
  }
  const currentTab = tabs.findIndex(tab => tab.path === location.pathname);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <GradientAppBar position="static">
      <Toolbar>
        <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 2 }}>
          Art Gallery
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 200 }}>
                {tabs.map(tab => (
                  <ListItem key={tab.path} disablePadding>
                    <ListItemButton component={Link} to={tab.path} onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={tab.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Tabs value={currentTab === -1 ? 0 : currentTab} textColor="inherit" indicatorColor="secondary" sx={{ minHeight: 64 }}>
            {tabs.map(tab => (
              <Tab key={tab.path} label={tab.label} component={Link} to={tab.path} sx={{ fontSize: 18, fontWeight: 'bold', mx: 1 }} />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </GradientAppBar>
  );
}

export default Navbar;
