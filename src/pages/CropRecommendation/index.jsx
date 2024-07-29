// src/pages/CropRecommendation/index.jsx
import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { useSpring, animated } from "react-spring";
import Dropdown from "../../components/Dropdown";

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  // Add the rest of the months
];

const states = [
  { value: "State1", label: "State1" },
  { value: "State2", label: "State2" },
  // Add the rest of the states
];

const districts = [
  { value: "District1", label: "District1" },
  { value: "District2", label: "District2" },
  // Add the rest of the districts
];

const CropRecommendation = () => {
  const [month, setMonth] = useState(null);
  const [state, setState] = useState(null);
  const [district, setDistrict] = useState(null);
  const [temperature, setTemperature] = useState("");
  const [nLevel, setNLevel] = useState("");
  const [ph, setPh] = useState("");
  const [humidity, setHumidity] = useState("");

  const handleMonthChange = (selectedOption) => setMonth(selectedOption);
  const handleStateChange = (selectedOption) => setState(selectedOption);
  const handleDistrictChange = (selectedOption) => setDistrict(selectedOption);

  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={springProps}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Crop Recommendation System
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Dropdown label="Current Month" value={month} onChange={handleMonthChange} options={months} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Dropdown label="State" value={state} onChange={handleStateChange} options={states} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Dropdown label="District" value={district} onChange={handleDistrictChange} options={districts} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Temperature (°C)" value={temperature} onChange={(e) => setTemperature(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="N Level" value={nLevel} onChange={(e) => setNLevel(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="pH" value={ph} onChange={(e) => setPh(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Soil Humidity (%)" value={humidity} onChange={(e) => setHumidity(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Recommend Crops
            </Button>
          </Grid>
        </Grid>
      </Container>
    </animated.div>
  );
};

export default CropRecommendation;
