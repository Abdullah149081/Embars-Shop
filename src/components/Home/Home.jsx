import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const tShirts = useLoaderData();
  return (
    <div className="home-container lg:px-32 pb-32 ">
      <div className="lg:grid-cols-3 grid gap-8">
        {tShirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
        ))}
      </div>
      <div>
        <div className="sticky top-28">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
