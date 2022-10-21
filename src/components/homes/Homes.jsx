import React from 'react';
import house1 from '../../images/house-1.jpeg';

const Homes = () => {
  return (
    <div className="homes">
      <div className="home">
        <img src={house1} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <div className="home__pin">&nbsp;</div>
        </div>
        <p>PARIS</p>
      </div>
      <div className="home">Home card 2</div>
      <div className="home">Home card 3</div>
      <div className="home">Home card 4</div>
      <div className="home">Home card 5</div>
      <div className="home">Home card 6</div>
    </div>
  );
};

export default Homes;
