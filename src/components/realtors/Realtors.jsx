import React from 'react';
import realtor1 from '../../images/realtor-1.jpeg';
import realtor2 from '../../images/realtor-2.jpeg';
import realtor3 from '../../images/realtor-3.jpeg';

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3 mb-md">Top 3 realtors</h3>
      <div className="realtors__list">
        <img src={realtor1} alt="Realtor avatar 1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4-light">Mark Bulker</h4>
          <p className="realtors__sold">218 houses sold</p>
        </div>
        <img src={realtor2} alt="Realtor avatar 2" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4-light">Stephanie Sormey</h4>
          <p className="realtors__sold">258 houses sold</p>
        </div>
        <img src={realtor3} alt="Realtor avatar 3" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4-light">Gerald Mayweather</h4>
          <p className="realtors__sold">395 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
