import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CropRecommendation from './pages/CropRecommendation';
import SolarApp from './pages/SolarManagement';
import App from './pages/WasteManagement';
import WaterApp from './pages/WaterManagement';
import HomePage from './pages/Dashboard';
import Header from './components/Header';

const Approutes = ()=>{
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            {/* <Header /> */}
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/crop" element={<CropRecommendation />} />
            <Route path="/waste" element={<App />} />
            <Route path="/water" element={<WaterApp />} />
            <Route path="/" element={<HomePage />} />
            <Route path ="/solar/*" element={<SolarApp />} />

        </Routes>
        </BrowserRouter>
    );
};

export default Approutes;