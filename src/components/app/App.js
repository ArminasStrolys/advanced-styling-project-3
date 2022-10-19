import React from 'react';
import Features from '../features/Features';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Header from '../header/Header';
import Homes from '../homes/Homes';
import Realtors from '../realtors/Realtors';
import Sidebar from '../sidebar/Sidebar';
import StoryContent from '../story/StoryContent';
import StoryPictures from '../story/StoryPictures';

export default function App() {
  return (
    <body className="main-grid-container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </body>
  );
}
