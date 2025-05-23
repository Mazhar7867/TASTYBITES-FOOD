import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";
const FoodCart = ({ id, name, price, desc, img, rating ,handleToast }) => {
  const dispatch = useDispatch();

   return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg shadow-md">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out"
      /> 
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-sm"> ₹{price}</span>
      </div>
      <p className="text-sm font-normal">
        {desc.slice(0, 40)}...
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="flex items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button onClick={()=> {
         dispatch(addToCart({id,name,price,img,rating,qty: 1      }))
         handleToast();
        }} className="px-3 py-1 text-white bg-yellow-500 hover:bg-yellow-800 rounded-lg text-sm">
          Add to Cart
        </button>
      </div> 
    </div>
  );
};

export default FoodCart;
