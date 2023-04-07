import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const [carts, setCart] = useState([]);
  const tShirts = useLoaderData();

  const handlerAddCart = (tshirt) => {
    const newCart = [...carts, tshirt];
    setCart(newCart);
  };

  return (
    <div className="home-container lg:px-32 pb-32 ">
      <div className="lg:grid-cols-3 grid gap-8">
        {tShirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handlerAddCart={handlerAddCart}></Tshirt>
        ))}
      </div>
      <div>
        <div className="sticky top-28">
          <div className="border-2 py-7 pl-6 rounded-lg md:w-96">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            <p>Add to Cart: {carts.length}</p>
            {carts.map((cart) => (
              <Cart cart={cart}></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
