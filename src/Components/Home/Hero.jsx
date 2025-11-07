import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="bg-[#49e94926] py-10">
      <section className="hero-section w-[60%] m-auto">
        <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 2000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation loop speed={800} className="mySwiper">
          <SwiperSlide>
            <img className="w-full h-[400px] object-cover rounded-xl" src="https://wallpapers.com/images/hd/green-flower-background-ze00991e4unypoys.jpg" alt="first image" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full h-[400px] object-cover rounded-xl" src="https://w0.peakpx.com/wallpaper/488/641/HD-wallpaper-think-green-grown-nature-green-plant.jpg" alt="second image" />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full h-[400px] object-cover rounded-xl"
              src="https://e0.pxfuel.com/wallpapers/213/186/desktop-wallpaper-flowers-flower-wildflower-meadow-spring-grass-flora-field-easter-flower-field-plant-sunlight-nature-flowers-spring-spring.jpg"
              alt="third image"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
