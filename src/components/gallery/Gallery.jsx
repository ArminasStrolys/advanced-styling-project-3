import React from 'react';
import img1 from '../../images/gal-1.jpeg';
import img2 from '../../images/gal-2.jpeg';
import img3 from '../../images/gal-3.jpeg';
import img4 from '../../images/gal-4.jpeg';
import img5 from '../../images/gal-5.jpeg';
import img6 from '../../images/gal-6.jpeg';
import img7 from '../../images/gal-7.jpeg';
import img8 from '../../images/gal-8.jpeg';
import img9 from '../../images/gal-9.jpeg';
import img10 from '../../images/gal-10.jpeg';
import img11 from '../../images/gal-11.jpeg';
import img12 from '../../images/gal-12.jpeg';
import img13 from '../../images/gal-13.jpeg';
import img14 from '../../images/gal-14.jpeg';

const Gallery = () => {
  return (
    <section className="gallery">
      <img src={img1} alt="Gallery pic 1" className="gallery__img" />
      <img src={img2} alt="Gallery pic 2" className="gallery__img" />
    </section>
  );
};

export default Gallery;
