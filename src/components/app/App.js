import React from 'react';
import Features from '../features/Features';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Header from '../header/Header';
import Homes from '../homes/Homes';
import Realtors from '../realtors/Realtors';
import Sidebar from '../sidebar/Sidebar';
import Story from '../story/Story';

export default function App() {
  return (
    <div className="main-grid-container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}
