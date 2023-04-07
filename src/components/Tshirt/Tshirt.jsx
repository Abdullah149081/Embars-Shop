import React from "react";

const Tshirt = ({ tshirt }) => {
  const { price, _id, name, gender, picture } = tshirt;
  return (
    <div className="mt-32">
      <div className=" rounded-lg border-2 w-full bg-base-100 shadow-xl">
        <div className="text-center p-5 ">
          <img className="w-full h-96 rounded-sm border-2" src={picture} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p className="text-lg font-semibold">
            Price: <span className="text-orange-600">${price ? price : 0}</span>
          </p>
          <p className="text-lg font-semibold">Gender : {gender}</p>
          <div className="mt-6 text-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
