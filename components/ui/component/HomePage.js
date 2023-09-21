"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewArrivals from "./NewArrivals";
const HomePage = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 1000,
        }}
      >
        <SwiperSlide>
          <div
            className="w-full grid grid-cols-2 "
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
                  introduce you to a huge variety of books that you may not even
                  know exist.
                </span>
                <div className="flex flex-row  space-x-10">
                  <Button variant="secondary">Read More</Button>
                  <Button className="text-white">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div>
              <div className=" h-70 w-70 p-5 flex items-center justify-center">
                <img
                  style={{ height: "250px", width: "200px" }}
                  className="w-full"
                  src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/689/9780857197689.jpg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full grid grid-cols-2 "
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
                  introduce you to a huge variety of books that you may not even
                  know exist.
                </span>
                <div className="flex flex-row  space-x-10">
                  <Button variant="secondary">Read More</Button>
                  <Button className="text-white">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div>
              <div className=" h-70 w-70 p-5 flex items-center justify-center">
                <img
                  style={{ height: "250px", width: "200px" }}
                  className="w-full"
                  src="https://www.bookswagon.com/productimages/images200/295/9780143442295.jpg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <NewArrivals />
      <Footer />
    </div>
  );
};

export default HomePage;
