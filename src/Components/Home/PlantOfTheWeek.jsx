import React from "react";

const PlantOfTheWeek = () => {
  return (
    <div className="bg-[#bdffbd] p-4 md:p-10 lg:p-15">
      <div className="flex justify-center mb-8 md:mb-15">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-s-5 pl-2 border-[#00a700]">
          Plant of the
          <br />
          <span className="text-2xl md:text-4xl">
            <span className="text-[#00a700]">Week</span>
          </span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-10">
        <img
          src="https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg"
          alt=""
          className="w-full md:w-[400px] lg:w-[500px] rounded-md object-cover"
        />
        <div className="w-full md:w-[500px] lg:w-[600px] flex">
          <div className="">
            <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-5 border-2 border-[#17cf17] py-2 border-l-0 border-r-0">Peace Lily</p>
            <p className="text-md md:text-md lg:text-base text-gray-700 py-3">
              Elegant white blooms and deep green leaves make this plant a stunning addition to any space. Thriving in medium light, it is ideal for homes or offices with limited sunlight. Beyond its
              beauty, it helps purify the air, removing toxins and promoting a healthier environment. Easy to care for, it brings lasting greenery and freshness to your surroundings.
            </p>
            <div className="flex flex-col md:flex-row text-lg md:text-2xl lg:text-3xl font-bold gap-3 md:gap-5 text-center mb-5 text-gray-700 mt-5">
              <div className="flex flex-col gap-3 md:gap-4 justify-center border rounded-md border-gray-800 px-8 md:px-15 py-2">
                <p className="text-base md:text-xl">Price</p>
                <p className="text-lg md:text-2xl">$25</p>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 border rounded-md border-gray-800 px-8 md:px-13 py-2">
                <p className="text-base md:text-xl">Rating</p>
                <div className="flex items-center gap-1 justify-center">
                  <p className="text-lg md:text-2xl">4.7</p>
                  <img className="w-5 h-5 md:w-7 md:h-7" src="/icon-ratings.png" alt="star icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
