import React from 'react';
import house1 from '../../images/house-1.jpeg';
import house2 from '../../images/house-2.jpeg';
import house3 from '../../images/house-3.jpeg';
import house4 from '../../images/house-4.jpeg';
import house5 from '../../images/house-5.jpeg';
import house6 from '../../images/house-6.jpeg';

const Homes = () => {
  return (
    <div className="homes">
      {/*--------------------------------------------------------------------------------1ST HOUSE CARD*/}
      <div className="home">
        <img src={house1} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <div className="home__location-pin">&nbsp;</div>
          <p>Prague</p>
        </div>
        <div className="home__rooms">
          <div className="home__rooms-key">&nbsp;</div>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <div className="home__area-zone">&nbsp;</div>
          <p>
            350 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <div className="home__price-euro">&nbsp;</div>
          <p>800,000 &euro;</p>
        </div>
        <button className="btn">Contat realtor</button>
      </div>
      {/*--------------------------------------------------------------------------------2ND HOUSE CARD*/}
      <div className="home">
        <img src={house2} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">SPA resort</h5>
        <div className="home__location">
          <div className="home__location-pin">&nbsp;</div>
          <p>Kyiv</p>
        </div>
        <div className="home__rooms">
          <div className="home__rooms-key">&nbsp;</div>
          <p>7 rooms</p>
        </div>
        <div className="home__area">
          <div className="home__area-zone">&nbsp;</div>
          <p>
            410 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <div className="home__price-euro">&nbsp;</div>
          <p>1,000,000 &euro;</p>
        </div>
        <button className="btn">Contat realtor</button>
      </div>
      {/*--------------------------------------------------------------------------------3RD HOUSE CARD*/}
      <div className="home">
        <img src={house3} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">Forest retreat</h5>
        <div className="home__location">
          <div className="home__location-pin">&nbsp;</div>
          <p>Riga</p>
        </div>
        <div className="home__rooms">
          <div className="home__rooms-key">&nbsp;</div>
          <p>9 rooms</p>
        </div>
        <div className="home__area">
          <div className="home__area-zone">&nbsp;</div>
          <p>
            500 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <div className="home__price-euro">&nbsp;</div>
          <p>1,470,000 &euro;</p>
        </div>
        <button className="btn">Contat realtor</button>
      </div>
      {/*--------------------------------------------------------------------------------4TH HOUSE CARD*/}
      <div className="home">
        <img src={house4} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">Winter mansion</h5>
        <div className="home__location">
          <div className="home__location-pin">&nbsp;</div>
          <p>Kaunas</p>
        </div>
        <div className="home__rooms">
          <div className="home__rooms-key">&nbsp;</div>
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <div className="home__area-zone">&nbsp;</div>
          <p>
            390 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <div className="home__price-euro">&nbsp;</div>
          <p>740,000 &euro;</p>
        </div>
        <button className="btn">Contat realtor</button>
      </div>
      {/*--------------------------------------------------------------------------------5TH HOUSE CARD*/}
      <div className="home">
        <img src={house5} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">Summer palace</h5>
        <div className="home__location">
          <div className="home__location-pin">&nbsp;</div>
          <p>Berlin</p>
        </div>
        <div className="home__rooms">
          <div className="home__rooms-key">&nbsp;</div>
          <p>8 rooms</p>
        </div>
        <div className="home__area">
          <div className="home__area-zone">&nbsp;</div>
          <p>
            440 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <div className="home__price-euro">&nbsp;</div>
          <p>990,000 &euro;</p>
        </div>
        <button className="btn">Contat realtor</button>
      </div>
      {/*--------------------------------------------------------------------------------6TH HOUSE CARD*/}
      <div className="home">
        <img src={house6} alt="House 1" className="home__image" />
        <div className="home__like">&nbsp;</div>
        <h5 className="home__name">Modernistic cottage</h5>
        <div className="home__location">
          <div className="home__location-pin">&nbsp;</div>
          <p>Klaipėda</p>
        </div>
        <div className="home__rooms">
          <div className="home__rooms-key">&nbsp;</div>
          <p>8 rooms</p>
        </div>
        <div className="home__area">
          <div className="home__area-zone">&nbsp;</div>
          <p>
            420 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <div className="home__price-euro">&nbsp;</div>
          <p>1,230,000 &euro;</p>
        </div>
        <button className="btn">Contat realtor</button>
      </div>
    </div>
  );
};

export default Homes;
