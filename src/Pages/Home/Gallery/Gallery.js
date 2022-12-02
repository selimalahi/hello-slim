import React from "react";
import gallery1 from "../../../assets/image/gallery/gallery1.png";
import gallery2 from "../../../assets/image/gallery/gallery2.png";
import gallery3 from "../../../assets/image/gallery/gallery3.png";
import gallery4 from "../../../assets/image/gallery/gallery4.png";

const Gallery = () => {
  return (
    <div className="mt-20">
        <h2 className="text-center font-bold text-4xl">GELLARY</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        <figure>
          <img src={gallery1} alt="Movie" />
        </figure>
        <figure>
          <img src={gallery2} alt="Movie" />
        </figure>
        <figure>
          <img src={gallery3} alt="Movie" />
        </figure>
        <figure>
          <img src={gallery4} alt="Movie" />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
