import React from 'react';

const images = [
  { src: 'https://reqres.in/img/faces/1-image.jpg', name: 'George Bluth', email: 'george.bluth@reqres.in' },
  { src: 'https://reqres.in/img/faces/2-image.jpg', name: 'Janet Weaver', email: 'janet.weaver@reqres.in' },
  { src: 'https://reqres.in/img/faces/3-image.jpg', name: 'Emma Wong', email: 'emma.wong@reqres.in' },
  { src: 'https://reqres.in/img/faces/4-image.jpg', name: 'Eve Holt', email: 'eve.holt@reqres.in' },
  { src: 'https://reqres.in/img/faces/5-image.jpg', name: 'Charles Morris', email: 'charles.morris@reqres.in' },
  { src: 'https://reqres.in/img/faces/6-image.jpg', name: 'Tracy Ramos', email: 'tracy.ramos@reqres.in' },
];

const Assd1 = () => {
  return (
    <div style={styling}>
      {images.map((image, index) => (
        <div key={index} style={imageContainerStyle}>
          <div style={whiteSquareStyle}>
            <img src={image.src} alt={image.name} style={imageStyle} />
          </div>
          <p style={textStyle}>{image.name}</p>
          <p style={textStyle}>{image.email}</p>
        </div>
      ))}
    </div>
  );
};

const styling = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'nowrap', 
  overflowX: 'auto', 
  padding: '40px',
};

const imageContainerStyle = {
  textAlign: 'center',
  margin: '10px',
};

const whiteSquareStyle = {
  backgroundColor: 'white',
  width: '220px', 
  height: '220px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px', 
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const imageStyle = {
  width: '200px', 
  height: '200px', 
  borderRadius: '500px', 
  objectFit: 'cover', 
};

const textStyle = {
  margin: '5px 0',
};

export default Assd1;
