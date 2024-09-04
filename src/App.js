import React from 'react';
import AboutSection from './components/section';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="flex flex-row w-full max-w-7xl">
        <div className="flex-1 bg-gray-800 p-4 rounded-lg"></div>
        <div className="flex-1 bg-gray-800 p-4 ml-4 rounded-lg">
          <AboutSection />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;

