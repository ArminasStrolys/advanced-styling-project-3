import React from 'react';
import global from '../../images/globe.svg';
import dollar from '../../images/dollar-sign.svg';
import divide from '../../images/divide.svg';
import briefcase from '../../images/briefcase.svg';
import compass from '../../images/compass.svg';
import home from '../../images/home.svg';

const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        {/* <img feature__icon src={global} alt="globe svg icon" /> */}
        <div className="feature__icon">
          <div className="feature__icon--1">&nbsp;</div>
        </div>
        <h4 className="heading-4">Best choice for your luxury home</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          unde maiores explicabo minima incidunt saepe tempore in est porro, hic
          deleniti iusto possimus totam aut deserunt necessitatibus. Fugiat,
          excepturi deserunt.
        </p>
      </div>
      <div className="feature">
        {/* <img feature__icon src={compass} alt="compass svg icon" /> */}
        <div className="feature__icon">
          <div className="feature__icon--2">&nbsp;</div>
        </div>
        <h4 className="heading-4">Worldwide business</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis unde
          distinctio, nesciunt eius, saepe ad non mollitia natus totam odio sunt
          in, aliquid temporibus voluptas eaque soluta facilis!
        </p>
      </div>
      <div className="feature">
        {/* <img feature__icon src={briefcase} alt="briefcase svg icon" /> */}
        <div className="feature__icon">
          <div className="feature__icon--3">&nbsp;</div>
        </div>
        <h4 className="heading-4">Best realtors on the work</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          accusamus ipsa doloribus rerum sint culpa veniam explicabo voluptatem,
          possimus cupiditate fugit quidem perspiciatis eum.
        </p>
      </div>
      <div className="feature">
        {/* <img feature__icon src={dollar} alt="dollar sign svg icon" /> */}
        <div className="feature__icon">
          <div className="feature__icon--4">&nbsp;</div>
        </div>
        <h4 className="heading-4">Best prices for quality</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          praesentium eos laboriosam repellendus dignissimos, fugit in
          asperiores? Voluptate accusantium nemo earum vitae iste quos
          voluptates similique, necessitatibus dolorum nisi, perferendis magnam
          optio soluta possimus qui!
        </p>
      </div>
      <div className="feature">
        {/* <img feature__icon src={divide} alt="divide svg icon" /> */}
        <div className="feature__icon">
          <div className="feature__icon--5">&nbsp;</div>
        </div>
        <h4 className="heading-4">Short and uncomplicated</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          facilis vel eaque obcaecati aspernatur recusandae maxime praesentium
          at pariatur?
        </p>
      </div>
      <div className="feature">
        {/* <img feature__icon src={home} alt="home svg icon" /> */}
        <div className="feature__icon">
          <div className="feature__icon--6">&nbsp;</div>
        </div>
        <h4 className="heading-4">Unique projects for you only</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          voluptatibus expedita inventore accusamus sint fugit reprehenderit
          voluptates nisi in ea blanditiis vero quia, sunt veritatis odit, saepe
          corporis hic quaerat aliquid culpa error maxime nostrum perferendis
          illum? Asperiores, exercitationem.
        </p>
      </div>
    </div>
  );
};

export default Features;
