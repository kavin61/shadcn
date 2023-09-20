import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewArrivals from "./NewArrivals";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <div
        className="sticky top-0 z-10 w-full h-auto p-6 flex flex-row justify-around items-center font-bold "
        style={{ backgroundColor: "#222", color: "white" }}
      >
        <div>
          <span>Ecommerce</span>
        </div>
        <div className="flex space-x-10 " style={{ color: "#aaa" }}>
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">All products</span>
          <span className="cursor-pointer">Cart</span>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="white"
            className="cursor-pointer"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </div>
      </div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 1000, // Set the time interval between automatic slides (in milliseconds)
            // Allow user interactions (e.g., manual swiping) to not stop auto-play
          }}
        >
          <SwiperSlide>
            <div
              className="w-full grid grid-cols-2"
              style={{ backgroundColor: "#222" }}
            >
              <div className="" style={{ backgroundColor: "#222" }}>
                <div className=" flex flex-col items-center justify-center h-auto p-10">
                  <span className="text-white " style={{ fontSize: "60px" }}>
                    The Line of Beauty
                  </span>
                  <span style={{ color: "#aaa" }} className="p-3">
                    Most of these sites let you get involved in discussions,
                    reviews, and active conversation. Plus, buying books on the
                    web can end up saving you some serious money, not to mention
                    introduce you to a huge variety of books that you may not
                    even know exist.
                  </span>
                  <div className="flex flex-row  space-x-10">
                    <Button variant="secondary">Read More</Button>
                    <Button variant="secondary">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div>
                <div className=" h-70 w-70 p-5 flex items-center justify-center">
                  <img
                    style={{ height: "250px", width: "200px" }}
                    className="w-full"
                    src="https://www.bookswagon.com/productimages/images200/456/9781421522456.jpg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <NewArrivals />
      <Footer />
    </>
  );
};

export default Header;
