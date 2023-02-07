import dunk from '../assets/dunk.jpg'
import yeezy from '../assets/yeezy350v1.jpg'
import ultraboost from '../assets/ultraboost.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const SlideShow = () => {
  return(
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full md:w-[80rem] md:h-[45rem] ">
    <SwiperSlide><img src={dunk}/></SwiperSlide>
    <SwiperSlide><img src={yeezy}/></SwiperSlide>
    <SwiperSlide><img src={ultraboost}/></SwiperSlide>
    </Swiper>
  )
 
  }
