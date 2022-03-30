import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ array, lenght }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isArrayShort = lenght === 1;

  const goNext = () => {
    if (currentIndex === lenght - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(lenght - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return isArrayShort ? (
    <div
      className="gallery_container"
      style={{
        backgroundImage: `url(${array[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
      }}
    ></div>
  ) : (
    <div
      className="gallery_container"
      style={{
        backgroundImage: `url(${array[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
      }}
    >
      <FaChevronLeft className="gallery_icon" onClick={() => goPrev()} />
      <p className="currImgIndex">{currentIndex + 1} / {array.length}</p>
      <FaChevronRight className="gallery_icon" onClick={() => goNext()} />
    </div>
  );
}

export default Carousel;