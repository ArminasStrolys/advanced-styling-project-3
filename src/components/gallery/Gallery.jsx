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
      <figure className="gallery__item gallery__item--1">
        <img src={img1} alt="Gallery pic 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={img2} alt="Gallery pic 2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={img3} alt="Gallery pic 3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={img4} alt="Gallery pic 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={img5} alt="Gallery pic 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={img6} alt="Gallery pic 6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={img7} alt="Gallery pic 7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={img8} alt="Gallery pic 8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={img9} alt="Gallery pic 9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={img10} alt="Gallery pic 10" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={img11} alt="Gallery pic 11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={img12} alt="Gallery pic 12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={img13} alt="Gallery pic 13" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={img14} alt="Gallery pic 14" className="gallery__img" />
      </figure>
    </section>
  );
};

export default Gallery;
