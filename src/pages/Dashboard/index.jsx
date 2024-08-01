import React, { useState } from 'react';
import { Card, CardContent, Typography, Snackbar, Alert } from '@mui/material';
import 'bulma/css/bulma.min.css';

const HomePage = () => {
  const [pincode, setPincode] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [warning, setWarning] = useState('');

  const handleSubmit = () => {
    if (!pincode) {
      setWarning('Please enter your pincode.');
      return;
    }

    setShowRecommendations(true);
    setWarning('');
  };

  const recommendations = [
    { title: 'Crop Recommendation', description: 'Based on your location, the best crops to grow are:', crops: ['Rice (Yearly, high profit)', 'Maize (3 months, medium profit)'] },
    { title: 'Waste Management', description: 'Recommended waste management practices for your area include:', practices: ['Recycling', 'Composting'] },
    { title: 'Water Management', description: 'Effective water management techniques for your area are:', techniques: ['Rainwater Harvesting', 'Drip Irrigation'] },
    { title: 'Solar Management', description: 'Optimal solar management practices for your area include:', practices: ['Solar Panels', 'Solar Water Heaters'] },
  ];

  return (
    <div className="section" style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <div className="container">
        <div className="box has-background-light p-6">
          <h1 className="title is-2 has-text-centered">Home Dashboard</h1>
          <div className="field">
            <label className="label">Enter Pincode</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter your location pincode"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          {showRecommendations && (
            <div className="columns is-multiline">
              {recommendations.map((rec, index) => (
                <div className="column is-half" key={index}>
                  <Card style={{ backgroundColor: '#dff9fb' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {rec.title}
                      </Typography>
                      <Typography variant="body1">{rec.description}</Typography>
                      <ul>
                        {rec.crops ? rec.crops.map((crop, idx) => <li key={idx}>{crop}</li>) : null}
                        {rec.practices ? rec.practices.map((practice, idx) => <li key={idx}>{practice}</li>) : null}
                        {rec.techniques ? rec.techniques.map((technique, idx) => <li key={idx}>{technique}</li>) : null}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
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

export default HomePage;
