import React, { use } from "react";
import Plant from "./Plant";

const Plants = ({ plantsPromise }) => {
  const plants = use(plantsPromise);

  return (
    <div className="bg-[#69ec6924] px-4 md:px-10 lg:px-20 py-15">
      <title>GreenNest - Plants</title>
      <div className="flex justify-center mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-s-5 pl-2 border-[#00a700] ">
          Discover Your
          <br />
          <span className="text-2xl md:text-4xl">
            Perfect <span className="text-[#00a700]">Plant</span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant}></Plant>
        ))}
      </div>
    </div>
  );
};

export default Plants;
