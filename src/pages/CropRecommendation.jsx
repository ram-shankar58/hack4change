// src/pages/CropRecommendation.jsx
import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import Dropdown from '../components/Dropdown';
import ParticleBackground from '../components/ParticleBackground';

const states = ["State1", "State2", "State3"]; // Add real states
const districts = {
  State1: ["District1", "District2"],
  State2: ["District3", "District4"],
  State3: ["District5", "District6"],
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CropRecommendation = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [month, setMonth] = useState('');
  const [temperature, setTemperature] = useState('');
  const [nLevel, setNLevel] = useState('');
  const [ph, setPh] = useState('');
  const [humidity, setHumidity] = useState('');

  const handleStateChange = (event) => {
    setState(event.target.value);
    setDistrict('');
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = () => {
    // Add recommendation logic
    console.log({ state, district, month, temperature, nLevel, ph, humidity });
  };

  return (
    <Container style={{ position: 'relative', height: '100vh', paddingTop: '50px' }}>
      <ParticleBackground />
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center" style={{ color: '#fff' }}>
            Crop Recommendation System
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Dropdown label="Current Month" value={month} onChange={handleMonthChange} options={months} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Dropdown label="State" value={state} onChange={handleStateChange} options={states} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Dropdown
            label="District"
            value={district}
            onChange={handleDistrictChange}
            options={state ? districts[state] : []}
            disabled={!state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Temperature (°C)"
            variant="outlined"
            fullWidth
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="N Level"
            variant="outlined"
            fullWidth
            value={nLevel}
            onChange={(e) => setNLevel(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="PH of Soil"
            variant="outlined"
            fullWidth
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Soil Humidity"
            variant="outlined"
            fullWidth
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Get Recommendations
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CropRecommendation;
