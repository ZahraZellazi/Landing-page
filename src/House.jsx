import React from 'react';
import './House.css';

const House = () => {
    return (
    <div className="dream-house-container">
        <img className='img' src='https://img.freepik.com/photos-gratuite/rendu-3d-maison-campagne_1048-13116.jpg?t=st=1720704553~exp=1720708153~hmac=6c76a956b4cd117ffd2f2abf1c3ac1377ce9b0c8cb5767c3cb18b7abadd08ed4&w=1380' alt="Dream House" />
        <div className="overlay">
        <div className="container">
          <h1 className='h1'>THE PERFECT <br/>DREAM HOUSE</h1>
          <p className='p'>We build modern and smart homes for the next generation.<br/> Our smart homes can be controlled via mobile apps.</p>
        </div>
      </div>
    </div>
    
    )
}
export default House;