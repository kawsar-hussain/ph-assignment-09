import React from "react";
import { useLoaderData } from "react-router";

const PlantDetails = () => {
  const details = useLoaderData();

  const { plantName, image, description, price, rating, availableStock } = details;
  return (
    <div className="bg-[#00a700] text-white p-20 flex justify-center gap-8">
      <img className="rounded-md w-[30%]" src={image} alt={`${plantName} image`} />
      <div className="flex flex-col justify-between">
        <div className="">
          <p className="text-4xl font-bold mb-3">{plantName}</p>
          <p className="mb-8">{description}</p>
          <div className="flex text-3xl font-bold gap-5 text-center mb-5">
            <div className="flex flex-col gap-4 justify-center border rounded-md border-gray-300 px-15 py-2">
              <p>Price</p>
              <p>${price}</p>
            </div>
            <div className="flex flex-col gap-4 border rounded-md border-gray-300 px-13 py-2">
              <p className="">Rating</p>
              <div className="flex items-center gap-1 justify-center ">
                <p className="">{rating}</p>
                <img className="w-7 h-7" src="/icon-ratings.png" alt="star icon" />
              </div>
            </div>
          </div>
          <p>Available: {availableStock}</p>
        </div>
        <div className="">
          <hr className="my-5 text-gray-300" />
          <input className="bg-white text-black px-3 py-1 rounded mb-3" type="text" placeholder="Enter Your Name" /> <br />
          <input className="bg-white text-black px-3 py-1 rounded" type="email" placeholder="Enter Your Email" /> <br />
          <button className="btn bg-white mt-3">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
