import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple MacBook Pro 13' with Touch Bar, 10th-Generation Quad-Core Intel Core i7 2.3GHz, 16GB RAM, 512GB SSD, Space Gray (Mid 2020)"
            price={1999.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61gcCcu6VQL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Ikigai: The Japanese Secret to a Long and Happy Life"
            price={13.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG QN32Q50RAFXZA Flat 32' QLED 4K 32Q50 Series Smart TV (2019 model)"
            price={399.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
