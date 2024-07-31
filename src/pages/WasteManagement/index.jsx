import React, { useState } from 'react';
import './App.css';

// Calculate age in days
const calculateAge = (nextCollectionDate) => {
  const now = new Date();
  const nextCollection = new Date(nextCollectionDate);
  const ageInDays = Math.ceil((now - nextCollection) / (1000 * 60 * 60 * 24));
  return ageInDays;
};

// Energy generation calculation
const calculateEnergy = (status, nextCollectionDate) => {
  const percentage = parseFloat(status);
  const ageInDays = calculateAge(nextCollectionDate);

  // Base energy calculation
  let baseEnergy = (percentage * 0.1).toFixed(2); // Example: 1% status = 0.1 kWh
  
  // Energy increase based on age, with diminishing returns
  const additionalEnergy = Math.max(0, (ageInDays / 100).toFixed(2));
  const totalEnergy = (parseFloat(baseEnergy) + parseFloat(additionalEnergy)).toFixed(2);
  
  return `${totalEnergy} kWh`;
};

// Calculate area using Shoelace formula
const calculateArea = (coordinates) => {
  let area = 0;
  const n = coordinates.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += coordinates[i].x * coordinates[j].y;
    area -= coordinates[i].y * coordinates[j].x;
  }
  area = Math.abs(area) / 2;
  return area;
};

// Card Component
const Card = ({ data, onDelete, onEdit }) => (
  <div className="card">
    <h2>{data.title}</h2>
    <p>Status: <span className="status">{data.status}</span> full</p>
    <p>Next Collection: <span className="date">{data.nextCollection}</span></p>
    <p>Energy Potential: <span className="energy">{data.energy}</span></p>
    <button onClick={() => onEdit(data)}>Edit</button>
    <button onClick={() => onDelete(data.title)}>Delete</button>
  </div>
);

// App Component
function App() {
  const initialWasteData = [
    { title: 'Recyclable Waste', status: '40%', nextCollection: '2024-07-31' },
    { title: 'Organic Waste', status: '70%', nextCollection: '2024-07-29' },
    { title: 'General Waste', status: '50%', nextCollection: '2024-08-01' },
    { title: 'Hazardous Waste', status: '30%', nextCollection: '2024-08-05' },
  ];

  // Initialize state with calculated energy values
  const [wasteData, setWasteData] = useState(() =>
    initialWasteData.map(item => ({
      ...item,
      energy: calculateEnergy(item.status, item.nextCollection),
    }))
  );

  const [newWaste, setNewWaste] = useState({ title: '', status: '', nextCollection: '' });
  const [editWaste, setEditWaste] = useState(null);

  // New state for area calculation
  const [coordinates, setCoordinates] = useState('');
  const [energyPerUnit, setEnergyPerUnit] = useState(0);
  const [totalEnergyPotential, setTotalEnergyPotential] = useState(null);

  const handleAddWaste = () => {
    if (newWaste.title && newWaste.status && newWaste.nextCollection) {
      const energy = calculateEnergy(newWaste.status, newWaste.nextCollection);
      setWasteData([...wasteData, { ...newWaste, energy }]);
      setNewWaste({ title: '', status: '', nextCollection: '' });
    }
  };

  const handleDeleteWaste = (title) => {
    setWasteData(wasteData.filter(waste => waste.title !== title));
  };

  const handleEditWaste = (waste) => {
    setEditWaste(waste);
  };

  const handleSaveUpdate = () => {
    if (editWaste) {
      const updatedWaste = { ...editWaste, energy: calculateEnergy(editWaste.status, editWaste.nextCollection) };
      setWasteData(wasteData.map(waste =>
        waste.title === editWaste.title ? updatedWaste : waste
      ));
      setEditWaste(null);
    }
  };

  const handleInputChange = (e, field, isEditing) => {
    const value = e.target.value;
    if (isEditing) {
      setEditWaste(prevState => ({ ...prevState, [field]: value }));
    } else {
      setNewWaste(prevState => ({ ...prevState, [field]: value }));
    }
  };

  const handleCalculateAreaEnergy = () => {
    // Parse coordinates
    const coords = coordinates.split(';').map(point => {
      const [x, y] = point.split(',').map(Number);
      return { x, y };
    });
    
    // Calculate area and total energy potential
    const area = calculateArea(coords);
    const totalEnergy = (area * energyPerUnit).toFixed(2);

    setTotalEnergyPotential(totalEnergy);
  };

  return (
    <div className="App">
      <header>
        <h1>Waste Management Dashboard</h1>
      </header>
      <main>
        <div className="container">
          {wasteData.map((data, index) => (
            <Card
              key={index}
              data={data}
              onDelete={handleDeleteWaste}
              onEdit={handleEditWaste}
            />
          ))}
        </div>

        <div className="form-container">
          <h2>{editWaste ? 'Update Waste' : 'Add New Waste'}</h2>
          <input
            type="text"
            placeholder="Title"
            value={editWaste ? editWaste.title : newWaste.title}
            onChange={(e) => handleInputChange(e, 'title', !!editWaste)}
          />
          <input
            type="text"
            placeholder="Status"
            value={editWaste ? editWaste.status : newWaste.status}
            onChange={(e) => handleInputChange(e, 'status', !!editWaste)}
          />
          <input
            type="date"
            placeholder="Next Collection"
            value={editWaste ? editWaste.nextCollection : newWaste.nextCollection}
            onChange={(e) => handleInputChange(e, 'nextCollection', !!editWaste)}
          />
          <input
            type="text"
            placeholder="Energy Potential (kWh)"
            value={editWaste ? calculateEnergy(editWaste.status, editWaste.nextCollection) : ''}
            disabled
          />
          {editWaste ? (
            <button onClick={handleSaveUpdate}>Update Waste</button>
          ) : (
            <button onClick={handleAddWaste}>Add Waste</button>
          )}
        </div>

        <div className="form-container">
          <h2>Calculate Area Energy Potential</h2>
          <input
            type="text"
            placeholder="Enter Coordinates (x1,y1;x2,y2;...)"
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
          />
          <input
            type="number"
            placeholder="Energy per Unit Area"
            value={energyPerUnit}
            onChange={(e) => setEnergyPerUnit(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateAreaEnergy}>Calculate Total Energy Potential</button>
          {totalEnergyPotential !== null && (
            <p>Total Energy Potential: {totalEnergyPotential} kWh</p>
          )}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Waste Management System</p>
      </footer>
    </div>
  );
}

export default App;
