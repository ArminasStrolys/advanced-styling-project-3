import React from 'react';
import pic1 from '../../images/story-1.jpeg';
import pic2 from '../../images/story-2.jpeg';

const StoryPictures = () => {
  return (
    <div className="story__pictures">
      PICTURES
      <img className="story__img--1" src={pic1} alt="" />
      <img className="story__img--2" src={pic2} alt="" />
    </div>
  );
};

export default StoryPictures;
