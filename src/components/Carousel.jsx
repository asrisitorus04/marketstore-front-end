import React from "react";
import Banner1 from "../assets/banner1.svg";
import Banner2 from "../assets/banner2.svg";

function Carousel() {
  return (
    <div className="w-full flex justify-center">
      <div className="carousel w-3/5">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle border-none bg-transparent hover:bg-secondary "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle border-none bg-transparent hover:bg-secondary"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle border-none bg-transparent hover:bg-secondary"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle border-none bg-transparent hover:bg-secondary"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
