import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Header from './components/Header';
import Footer from './components/Footer';

function RoleSwitcher() {
  const { role, loginAsAdmin, loginAsViewer } = useAuth();
  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Button variant={role === 'admin' ? 'contained' : 'outlined'} onClick={loginAsAdmin} sx={{ mr: 2 }}>Admin</Button>
      <Button variant={role === 'viewer' ? 'contained' : 'outlined'} onClick={loginAsViewer}>Viewer</Button>
    </Container>
  );
}

function App() {
  const { role } = useAuth();
  return (
    <Router>
      <Header />
      <Navbar />
      <RoleSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        {role === 'admin' && <Route path="/admin" element={<AdminDashboard />} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default function RootApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
