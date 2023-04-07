import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const tShirts = useLoaderData();
  const [carts, setCart] = useState([]);

  const handlerAddCart = (tshirt) => {
    const exisist = carts.find((ts) => ts._id === tshirt._id);
    if (exisist) {
      toast.success("You have already added this Product 🛒", {
        duration: 1000,
      });
    } else {
      const newCart = [...carts, tshirt];
      setCart(newCart);
    }
  };
  const handlerRemove = (id) => {
    const remaining = carts.filter((ts) => ts._id !== id);
    setCart(remaining);
    toast.error("Remove Product 🗑️", {
      duration: 1000,
    });
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
            {carts.map((cart, index) => (
              <Cart cart={cart} key={index} handlerRemove={handlerRemove}></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
