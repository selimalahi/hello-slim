import React from "react";
import banner1 from '../../../assets/image/banner/banner1.jpg';
import banner2 from '../../../assets/image/banner/banner2.png';
import banner3 from '../../../assets/image/banner/banner3.jpg';

const Carousel = () => {
  return (
    <div className="carousel w-full mt-10 rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/3">
           <h1 className="text-5xl font bold  text-orange-400">
           FIND A CAR AT THE <br />
             BEST PRICE!

           </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full h-[500px] object-cover"  alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/3">
           <h1 className="text-5xl font bold text-orange-400	">
            Used Car For Sale <br />
             FIND YOURS!

           </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full"  alt=""/>

        <div className="absolute flex justify-between transform -translate-y-1/2 right-28 top-1/3">
           <h1 className="text-5xl font bold text-orange-400	">
            Affordable
            </h1> 
            
        </div> <br />
        <div className="absolute flex justify-between transform -translate-y-1/2 right-44 top-1/2">
        <h2 className="text-5xl font bold text-orange-400">
            USED CARS!
            </h2>
            
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Carousel;
