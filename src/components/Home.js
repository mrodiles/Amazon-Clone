import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product />
          {/* product */}
        </div>
        <div className="home__row">
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home__row">{/* products */}</div>
      </div>
    </div>
  );
}

export default Home;
