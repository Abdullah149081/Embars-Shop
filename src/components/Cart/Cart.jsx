import React from "react";

const Cart = ({ cart, handlerRemove }) => {
  const { name, _id } = cart;
  return (
    <div className="my-6 py-6 px-4 mr-4 rounded-lg flex gap-6 justify-between items-center border-2">
      <p className="text-2xl font-bold">Name: {name}</p>
      <button onClick={() => handlerRemove(_id)} className="text-slate-800 text-2xl font-bold bg-red-200 w-9 rounded-full ">
        x
      </button>
    </div>
  );
};

export default Cart;
