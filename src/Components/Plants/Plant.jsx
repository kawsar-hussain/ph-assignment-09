import React from "react";
import { useNavigate } from "react-router";

const Plant = ({ plant }) => {
  const { image, plantName, price, rating } = plant;

  const navigate = useNavigate();

  const goPlantDetails = () => {
    navigate(`/plant/details/${plant.id}`);
  };

  return (
    <div className="bg-[#d0ffd0] p-4 rounded-md shadow">
      <img className="rounded-md mb-4 w-full" src={image} alt="" />
      <p className="font-bold text-xl mb-3">{plantName}</p>
      <div className="flex justify-between text-gray-500  mb-3 text-sm">
        <div className="flex text-gray-600">
          <p>Price: $</p>
          <p>{price}</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="">{rating}</p>
          <img className="w-3 h-3" src="/icon-ratings.png" alt="star icon" />
        </div>
      </div>
      <button className="btn bg-[#00a700] text-white w-full" onClick={goPlantDetails}>
        View Details
      </button>
    </div>
  );
};

export default Plant;
