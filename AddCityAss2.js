import React, { useState } from 'react';
city=["Hyderabad", "Gurgaon","Mumbai","Chennai"];
cities=[];

const AddCity = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const handleAddCity = (e) => {
    e.preventDefault(); 
    if (city.trim()) {
      setCities([...cities, city.trim()]); 
      setCity(''); 
    }
  };

  return (
    <div>
      <h1>Add City</h1>
      <form onSubmit={handleAddCity}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city name"
        />
        <button type="submit">Add City</button>
      </form>

      <h2>City List:</h2>
      <ul>
        {cities.map((c, index) => (
          <li key={index}>{c}</li> 
        ))}
      </ul>
    </div>
  );
};

export default AddCity;
