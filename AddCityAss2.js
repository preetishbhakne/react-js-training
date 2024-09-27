

import React, { useState } from 'react';

const CityAddition = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setMessage(''); 
  };

  const handleAddCity = () => {
    if (city && !cities.includes(city)) {
      setCities([...cities, city]);
      setCity('');
      setMessage(''); 
    }
  };

  const handleRemoveCity = () => {
    if (city && cities.includes(city)) {
      setCities(cities.filter(c => c !== city));
      setCity('');
      setMessage(''); 
    } else if (city) {
      setMessage('invalid city');
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleAddCity}>Add City</button>
      <button onClick={handleRemoveCity}>Remove City</button>

      {message && <p>{message}</p>} 

      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityAddition;
