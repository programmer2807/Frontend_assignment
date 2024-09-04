import React, { useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([
    "https://i.pinimg.com/474x/d3/f3/da/d3f3da2d94bce01c389850107c5109de.jpg",
    'https://i.pinimg.com/474x/95/2e/30/952e30adc3afe2665904739059e4ea71.jpg',
    'https://i.pinimg.com/originals/a8/28/b4/a828b4363f2621cc669f1fe89a7f2500.jpg',
    'https://i.pinimg.com/474x/a7/9c/54/a79c545fed6c74f01d69dd0ac902caa9.jpg',
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">Gallery</h2>
        <div>
          <label className="bg-gray-600 px-4 py-2 rounded-lg cursor-pointer">
            + Add Image
            <input 
              type="file" 
              className="hidden" 
              onChange={handleImageUpload} 
              accept="image/*"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="h-24 bg-cover bg-center rounded-lg grayscale transition duration-300 ease-in-out hover:grayscale-0"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

