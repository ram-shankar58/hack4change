import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Team Quad Squad - Agriculture Resource Management System
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/crop">
            Crop Recommendation
          </Button>
          <Button color="inherit" component={Link} to="/waste">
            Waste Management
          </Button>
          <Button color="inherit" component={Link} to="/water">
            Water Management
          </Button>
          <Button color="inherit" component={Link} to="/solar">
            Solar Management
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
