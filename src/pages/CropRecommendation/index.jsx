import React, { useState } from 'react';
import { Snackbar, Alert, Typography, Grid, Card, CardContent } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import 'bulma/css/bulma.min.css';

// Define the months, states, and districts
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

// Define the data for the chart
const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 2210, amt: 2290 },
  { name: 'Mar', uv: 200, pv: 2290, amt: 2000 },
  { name: 'Apr', uv: 278, pv: 2000, amt: 2181 }
];

// Define the CropRecommendation component
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

  // Define the handleSubmit function
  const handleSubmit = () => {
    if (!month || !state || !district) {
      setWarning('Please fill out all mandatory fields.');
      return;
    }

    setShowRecommendations(true);
    setWarning('');
  };

  // Return the JSX structure
  return (
    <div className="section" style={{ backgroundColor: '#2d3436', minHeight: '100vh', color: '#dfe6e9' }}>
      <div className="container">
        <div className="box has-background-dark p-6">
          <h1 className="title is-2 has-text-centered has-text-white">Crop Recommendation System</h1>
          <div className="columns is-multiline">
            <div className="column is-half">
              <div className="field">
                <label className="label has-text-white">Current Month</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select className="has-background-light has-text-dark" value={month} onChange={(e) => setMonth(e.target.value)}>
                      <option value="">Select month</option>
                      {months.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white">State</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select className="has-background-light has-text-dark" value={state} onChange={(e) => setState(e.target.value)}>
                      <option value="">Select state</option>
                      {states.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white">District</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select className="has-background-light has-text-dark" value={district} onChange={(e) => setDistrict(e.target.value)}>
                      <option value="">Select district</option>
                      {districts.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white">Temperature</label>
                <div className="control">
                  <input className="input has-background-light has-text-dark" type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white">N Level</label>
                <div className="control">
                  <input className="input has-background-light has-text-dark" type="number" value={nLevel} onChange={(e) => setNLevel(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white">pH Level</label>
                <div className="control">
                  <input className="input has-background-light has-text-dark" type="number" value={ph} onChange={(e) => setPh(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white">Humidity</label>
                <div className="control">
                  <input className="input has-background-light has-text-dark" type="number" value={humidity} onChange={(e) => setHumidity(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary" onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="box has-background-light">
                <h2 className="title is-4 has-text-centered has-text-primary">Recommendations</h2>
                {showRecommendations ? (
                  <div>
                    <p className="has-text-dark">Here are the recommendations based on your inputs:</p>
                    <div className="columns is-multiline" style={{ marginTop: '20px' }}>
                      <div className="column is-half">
                        <Card style={{ backgroundColor: '#dff9fb' }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Rice
                            </Typography>
                            <Typography variant="body1">Yearly throughout</Typography>
                            <Typography variant="body1">Profit: High</Typography>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="column is-half">
                        <Card style={{ backgroundColor: '#dff9fb' }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Maize
                            </Typography>
                            <Typography variant="body1">Expected growth: 3 months</Typography>
                            <Typography variant="body1">Profit: Medium</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <Typography variant="h6" gutterBottom>
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
                    </div>
                  </div>
                ) : (
                  <p className="has-text-dark">No recommendations to show. Please fill out the form and click Submit.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {warning && (
        <Snackbar open={true} autoHideDuration={6000} onClose={() => setWarning('')}>
          <Alert onClose={() => setWarning('')} severity="warning">
            {warning}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default CropRecommendation;

