import React, { useEffect, useState } from "react";
import TopRatedPlant from "./TopRatedPlant";

const TopRatedPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 text-center my-12">
        <span className="border-b-4 border-[#00a700] pb-0.5">Top Rat</span>
        <span className="border-t-4 border-[#00a700] ">
          ed <span className=" text-[#00a700]">Plants</span>
        </span>
      </h2>
      <div className="grid grid-cols-4 gap-5 px-20 mb-15">
        {plants
          .filter((plant) => plant.rating >= 4.5)
          .slice(0, 4)
          .map((plant) => (
            <TopRatedPlant key={plant.id} plant={plant} />
          ))}
      </div>
    </div>
  );
};

export default TopRatedPlants;
