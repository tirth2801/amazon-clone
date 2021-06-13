import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/evergreen/house_ads/SMTL_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB_358748._CB670096814_.jpg"
          alt="amazon background banner"
        />

        <div className="home_row">
          <Product
            id="12312303"
            title="Playstation 5: DualSense Wireless Controller"
            price={66.95}
            image="https://images-na.ssl-images-amazon.com/images/I/612bjwBuobS._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="12312304"
            title="The Lean Startup: How Entrepreneurs Use Innovation to Create Successful Businesses"
            price={14.59}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="12312305"
            title="New Apple 11-inch iPad Pro (Wi-Fi, 128GB) - Space Gray"
            price={799.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="12312306"
            title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD"
            price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61XDeaOrrKL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="12312301"
            title="Vezzio Stand Mixer, 9.5 Qt 660W, 10-Speed Tilt-Head Food Dough Mixer, Kitchen Electric Mixer with Stainless Steel Bowl,Dough Hook"
            price={159.99}
            image="https://images-na.ssl-images-amazon.com/images/I/714MhH4u5oS._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="12312302"
            title="Instant Pot Duo Nova 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, Sterilizer, and Warmer, 6 Quart, 14 One-Touch Programs"
            price={88.94}
            image="https://images-na.ssl-images-amazon.com/images/I/71A3oxSQ5rL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
