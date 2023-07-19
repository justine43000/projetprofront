import { useState } from 'react';
import "./Carroussel.css"
const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="ImageCarousel">
      <div className="ImageCarousel__controls">
        <button onClick={handlePrevClick}><i className="fa-solid fa-chevron-left"></i></button>
      </div>
      <div className="ImageCarousel__main">
        <img src={images[activeIndex]} alt={`Image ${activeIndex}`} />
      </div>
      <div className="ImageCarousel__controls">
        <button onClick={handleNextClick}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  )

};

export default ImageCarousel;