// src/App.js

import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [area, setArea] = useState('');
  const [timeOfYear, setTimeOfYear] = useState('');
  const [cropType, setCropType] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call with a timeout
    setTimeout(() => {
      const rainfallData = {
        spring: 100,
        summer: 50,
        autumn: 75,
        winter: 25,
      };

      const undergroundWaterFlowData = 200; // hardcoded value

      const irrigationData = {
        wheat: 30,
        corn: 40,
        rice: 50,
      };

      const rainfall = rainfallData[timeOfYear.toLowerCase()];
      const irrigationRecommendation = irrigationData[cropType.toLowerCase()] || 0;

      setResult({
        location: `${street}, ${city}, ${state}, ${pincode}`,
        area,
        timeOfYear,
        rainfall,
        undergroundWaterFlow: undergroundWaterFlowData,
        irrigationRecommendation,
      });
      setLoading(false);
    }, 1000); // simulate a delay of 1 second
  };

  return (
    <div className="App">
      <h1>Water Management System</h1>
      {!result && (
        <form onSubmit={handleSubmit} className="form-card">
          <div className="input-group">
            <label>
              Street:
              <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required />
            </label>
          </div>
          <div className="input-group">
            <label>
              City:
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
            </label>
          </div>
          <div className="input-group">
            <label>
              State:
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
            </label>
          </div>
          <div className="input-group">
            <label>
              Pincode:
              <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
            </label>
          </div>
          <div className="input-group">
            <label>
              Area (in sq meters):
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)} required />
            </label>
          </div>
          <div className="input-group">
            <label>
              Time of Year:
              <select value={timeOfYear} onChange={(e) => setTimeOfYear(e.target.value)} required>
                <option value="">Select</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
              </select>
            </label>
          </div>
          <div className="input-group">
            <label>
              Crop Type:
              <select value={cropType} onChange={(e) => setCropType(e.target.value)} required>
                <option value="">Select</option>
                <option value="Wheat">Wheat</option>
                <option value="Corn">Corn</option>
                <option value="Rice">Rice</option>
              </select>
            </label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      {loading && <div className="loading">Loading...</div>}
      {result && !loading && (
        <div className="result">
          <h2>Results</h2>
          <div className="result-row">
            <div className="result-box">
              <FaMapMarkerAlt size={50} color="#ff6347" />
              <p><strong>Location:</strong> {result.location}</p>
            </div>
            <div className="result-box">
              <FaCalendarAlt size={50} color="#4682b4" />
              <p><strong>Time of Year:</strong> {result.timeOfYear}</p>
            </div>
          </div>
          <div className="result-row">
            <div className="result-box">
              <div className="progress-bar">
                <CircularProgressbar
                  value={100}
                  text={`${result.area} sq meters`}
                  styles={buildStyles({ pathColor: "#32cd32", textSize: '10px' })}
                />
              </div>
              <p><strong>Area:</strong> {result.area} sq meters</p>
            </div>
            <div className="result-box">
              <div className="progress-bar">
                <CircularProgressbar
                  value={result.rainfall}
                  maxValue={200}
                  text={`${result.rainfall} mm`}
                  styles={buildStyles({ pathColor: "#ffa500", textSize: '10px' })}
                />
              </div>
              <p><strong>Rainfall:</strong> {result.rainfall} mm</p>
            </div>
          </div>
          <div className="result-row">
            <div className="result-box">
              <div className="progress-bar">
                <CircularProgressbar
                  value={result.undergroundWaterFlow}
                  maxValue={500}
                  text={`${result.undergroundWaterFlow} liters`}
                  styles={buildStyles({ pathColor: "#1e90ff", textSize: '10px' })}
                />
              </div>
              <p><strong>Underground Water Flow:</strong> {result.undergroundWaterFlow} liters</p>
            </div>
            <div className="result-box">
              <div className="progress-bar">
                <CircularProgressbar
                  value={result.irrigationRecommendation}
                  maxValue={100}
                  text={`${result.irrigationRecommendation} liters`}
                  styles={buildStyles({ pathColor: "#6a5acd", textSize: '10px' })}
                />
              </div>
              <p><strong>Irrigation Recommendation for {result.cropType}:</strong> {result.irrigationRecommendation} liters</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
