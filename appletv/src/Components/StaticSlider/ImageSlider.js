import React, { useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = ({ StaticData }) => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const length = StaticData.length;

  if (!Array.isArray(StaticData) || length <= 0) {
    return null;
  }

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
      console.log(current)
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <div
      className="static-slider"
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      { visible ? (
          
        <div>
          <MdKeyboardArrowLeft className="left-arrow" onClick={prev}  />
        </div>
      ) : (
        <div style={{ width: "3rem" }}></div>
      )}

      {StaticData.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "active"}
          key={index}
        >
          {index === current && (
            <img
              src={slide.image}
              alt="slide"
              className="static-slide-images"
            />
          )}
        </div>
      ))}

      {visible ? (
        <div>
          <MdKeyboardArrowRight className="right-arrow" onClick={next} />
        </div>
      ) : (
        <div style={{ width: "3rem" }}></div>
      )}
    </div>
  );
};

export default ImageSlider;
