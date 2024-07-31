import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Container, TextField, Grid, Paper, Box, Typography, Button } from '@mui/material';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const dummyData = {
  dailyProduction: [
    { day: 'Mon', energy: 50 },
    { day: 'Tue', energy: 55 },
    { day: 'Wed', energy: 60 },
    { day: 'Thu', energy: 52 },
    { day: 'Fri', energy: 58 },
    { day: 'Sat', energy: 62 },
    { day: 'Sun', energy: 65 },
  ],
  yearlyProduction: [
    { month: 'Jan', energy: 200 },
    { month: 'Feb', energy: 220 },
    { month: 'Mar', energy: 250 },
    { month: 'Apr', energy: 270 },
    { month: 'May', energy: 300 },
    { month: 'Jun', energy: 320 },
    { month: 'Jul', energy: 330 },
    { month: 'Aug', energy: 310 },
    { month: 'Sep', energy: 290 },
    { month: 'Oct', energy: 270 },
    { month: 'Nov', energy: 250 },
    { month: 'Dec', energy: 230 },
  ],
  yearlySavings: [
    { name: 'Electricity Bill', value: 2400 },
    { name: 'Solar Savings', value: 4567 },
  ],
  uvIndexData: [
    { day: 'Mon', uvIndex: 5 },
    { day: 'Tue', uvIndex: 6 },
    { day: 'Wed', uvIndex: 7 },
    { day: 'Thu', uvIndex: 8 },
    { day: 'Fri', uvIndex: 6 },
    { day: 'Sat', uvIndex: 5 },
    { day: 'Sun', uvIndex: 4 },
  ],
  temperatureData: [
    { month: 'Jan', temperature: 15 },
    { month: 'Feb', temperature: 16 },
    { month: 'Mar', temperature: 18 },
    { month: 'Apr', temperature: 22 },
    { month: 'May', temperature: 25 },
    { month: 'Jun', temperature: 28 },
    { month: 'Jul', temperature: 30 },
    { month: 'Aug', temperature: 29 },
    { month: 'Sep', temperature: 26 },
    { month: 'Oct', temperature: 22 },
    { month: 'Nov', temperature: 18 },
    { month: 'Dec', temperature: 15 },
  ]
};

const SolarLandingPage = () => (
  <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Optimize Your Solar Energy Management
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Enter your location and land area to get detailed solar energy insights.
      </Typography>
      <Button variant="contained" component={Link} to="/input">Get Started</Button>
    </Box>
  </Container>
);

const SolarInputForm = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [landArea, setLandArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/solarinsights');
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Input Your Solar Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            margin="normal"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Land Area (sq m)"
            variant="outlined"
            margin="normal"
            type="number"
            value={landArea}
            onChange={(e) => setLandArea(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Generate Report
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

const SolarInsights = () => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
      Solar Energy Insights
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Daily Solar Production</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyData.dailyProduction}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="energy" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Yearly Production</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyData.yearlyProduction}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="energy" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Yearly Savings</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dummyData.yearlySavings} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>UV Index Trends</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyData.uvIndexData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uvIndex" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Temperature Trends</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyData.temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
    <Button variant="contained" sx={{ mt: 3 }}>Download Report</Button>
  </Container>
);

const SolarApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SolarLandingPage />} />
        <Route path="/input" element={<SolarInputForm />} />
        <Route path="/solarinsights" element={<SolarInsights />} />
        {/* Add routes for Features, Pricing, Support, Login */}
      </Routes>
    </Router>
  );
};

export default SolarApp;
