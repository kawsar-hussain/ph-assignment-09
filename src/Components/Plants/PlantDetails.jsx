import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const details = useLoaderData();

  const { plantName, image, description, price, rating, availableStock } = details;

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successfully!");
  };

  useEffect(() => {
    document.title = `GreenNest - ${plantName}`;
  }, [plantName]);

  return (
    <div className="bg-[#49e94926] text-white p-4 md:p-10 lg:p-20 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
      <img className="rounded-md w-full md:w-[40%] lg:w-[35%] object-cover" src={image} alt={`${plantName} image`} />
      <div className="flex flex-col justify-between md:w-[50%]">
        <div className="">
          <p className="text-4xl text-gray-800 font-bold mb-3">{plantName}</p>
          <p className="mb-8 text-gray-800">{description}</p>
          <div className="flex flex-col md:flex-row text-2xl md:text-3xl font-bold gap-5 text-center mb-5 text-gray-700">
            <div className="flex flex-col gap-4 justify-center border rounded-md border-gray-800 px-15 py-2">
              <p>Price</p>
              <p>${price}</p>
            </div>
            <div className="flex flex-col gap-4 border rounded-md border-gray-800 px-13 py-2">
              <p className="">Rating</p>
              <div className="flex items-center gap-1 justify-center ">
                <p className="">{rating}</p>
                <img className="w-7 h-7" src="/icon-ratings.png" alt="star icon" />
              </div>
            </div>
          </div>
          <p className="text-gray-800">Available: {availableStock}</p>
        </div>
        <div>
          <hr className="my-5 mb-4 text-gray-400" />
          <div className="bg-[#c7ffc7] w-full md:w-[300px] p-3 rounded-md *:w-full">
            <p className="text-gray-800 mb-3 font-medium text-center">Claim Your Plant Now</p>
            <form className="*:w-full" onSubmit={handleBooking}>
              <input className="bg-white text-black px-3 py-1 rounded mb-3 text-sm md:text-base" type="text" placeholder="Enter Your Name" required /> <br />
              <input className="bg-white text-black px-3 py-1 rounded text-sm md:text-base" type="email" placeholder="Enter Your Email" required /> <br />
              <button type="submit" className="btn shadow-none border-none mt-3 h-9 bg-[#13cb13] text-white">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
