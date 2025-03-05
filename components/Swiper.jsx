"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ images }) => {

  return (
    <div className="w-[334px] h-[348px] rounded-[8px] pb-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w- h-[348px]rounded-[8px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center bg-white">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={800} // Adjust width
              height={400} // Adjust height
              className="w-full h-full object-cover"
              priority={index === 0} // Prioritize first image for faster loading
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
