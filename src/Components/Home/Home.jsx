import React from "react";
import Hero from "./Hero";
import TopRatedPlants from "./TopRatedPlants";
import PlantOfTheWeek from "./PlantOfTheWeek";

const Home = () => {
  return (
    <div>
      <title>GreenNest - Home</title>
      <Hero></Hero>
      <PlantOfTheWeek></PlantOfTheWeek>
      <TopRatedPlants></TopRatedPlants>
    </div>
  );
};

export default Home;
