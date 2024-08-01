import React from 'react';
import { Container, Typography, Button, Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Agriculture Resource Mangement System!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Discover solutions for Crop Recommendation, Waste Management, Water Management, and Solar Energy.
        </Typography>
        <Button variant="contained" color="secondary" href="/crop" sx={{ mt: 2 }}>
          Get Started with Crop Recommendation
        </Button>
      </HeroSection>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6} lg={3}>
          <FeatureCard>
            <Typography variant="h6" component="h3" gutterBottom>
              Crop Recommendation
            </Typography>
            <Typography>
              Optimize crop yields with our detailed recommendations based on your location and soil type.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }} href="/crop">
              Learn More
            </Button>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FeatureCard>
            <Typography variant="h6" component="h3" gutterBottom>
              Waste Management
            </Typography>
            <Typography>
              Improve waste management efficiency with our innovative solutions and insights.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }} href="/waste">
              Learn More
            </Button>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FeatureCard>
            <Typography variant="h6" component="h3" gutterBottom>
              Water Management
            </Typography>
            <Typography>
              Ensure sustainable water usage with our advanced management tools and data analysis.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }} href="/water">
              Learn More
            </Button>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FeatureCard>
            <Typography variant="h6" component="h3" gutterBottom>
              Solar Management
            </Typography>
            <Typography>
              Maximize your solar energy output with our comprehensive management system.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }} href="/solar">
              Learn More
            </Button>
          </FeatureCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
