import React, { useState } from 'react';
import { Grid, Typography, Button, TextField, MenuItem, FormControl, InputLabel, Select, Snackbar, Alert, Card, CardContent } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

// import Layout from '../../layouts/protolayout';
const months = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  // Add other months as needed
];

const states = [
  { value: 'State1', label: 'State 1' },
  { value: 'State2', label: 'State 2' },
  // Add other states as needed
];

const districts = [
  { value: 'District1', label: 'District 1' },
  { value: 'District2', label: 'District 2' },
  // Add other districts as needed
];

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 2210, amt: 2290 },
  { name: 'Mar', uv: 200, pv: 2290, amt: 2000 },
  { name: 'Apr', uv: 278, pv: 2000, amt: 2181 }
];

const CropRecommendation = () => {
  const [month, setMonth] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [temperature, setTemperature] = useState('');
  const [nLevel, setNLevel] = useState('');
  const [ph, setPh] = useState('');
  const [humidity, setHumidity] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [warning, setWarning] = useState('');

  const handleSubmit = () => {
    if (!month || !state || !district) {
      setWarning('Please fill out all mandatory fields.');
      return;
    }

    setShowRecommendations(true);
    setWarning('');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
        Crop Recommendation System
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Current Month</InputLabel>
            <Select value={month} onChange={(e) => setMonth(e.target.value)} label="Current Month">
              {months.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>State</InputLabel>
            <Select value={state} onChange={(e) => setState(e.target.value)} label="State">
              {states.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>District</InputLabel>
            <Select value={district} onChange={(e) => setDistrict(e.target.value)} label="District">
              {districts.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Temperature (optional)"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="N Level (optional)"
            value={nLevel}
            onChange={(e) => setNLevel(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="pH of Soil (optional)"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Soil Humidity (optional)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Get Recommendations
          </Button>
        </Grid>
      </Grid>
      {warning && (
        <Snackbar open={Boolean(warning)} autoHideDuration={6000} onClose={() => setWarning('')}>
          <Alert onClose={() => setWarning('')} severity="warning">
            {warning}
          </Alert>
        </Snackbar>
      )}
      {showRecommendations && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Crop Recommendations:
          </Typography>
          <Typography variant="body1">- Rice (Yearly throughout, profit: high)</Typography>
          <Typography variant="body1">- Maize (Profit: medium, expected growth: 3 months)</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Crop Recommendation Statistics
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Statistics
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;
