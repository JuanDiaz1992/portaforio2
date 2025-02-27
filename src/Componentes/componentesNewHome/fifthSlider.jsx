import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { BiStore } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import woman from "../../img/newHome/section3/dani.webp";
import plants from "../../img/newHome/section3/daniPlants.webp";
function Slider({visiteWeb}) {
  const objects = {
    offscreen: {
      scale: 0.9,
    },
    onscreen: {
      scale: 1,
      transition: { duration: 0.9 },
    },
  };

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper fifth_slider_container"
        viewport={{ once: true, amount: 1 }}
      >
        <SwiperSlide className="fifth_slider_container--item1">
          <div className="header_card_slider fifth_slider_container-header_card ">
            <h2 className="h4_title bg-black text-white">Mango Biche Mía</h2>
            <h3 className="h3_small_title">Franquicia</h3>
            <p className="max-w-[400px] w-[100%] mb-[15px]">
              Desarrollé una web para la franquicia
              Mango Biche Mía, con la finalizad de dar a
              conocer los servicios que presta la misma
              e invitar al visitante a ser parte de la franquicia.
            </p>
            <Button
              onClick={() => visiteWeb("https://www.mangobichemia.com/")}
              color="warning"
              aria-label="Mango Biche Mía"
              endContent={<BiStore />}
            >
              Visita la web
            </Button>
          </div>
          <img className="principal_img" src={woman} alt="" />
          <motion.img
            src={plants}
            alt=""
            variants={objects}
            initial="offscreen"
            whileInView="onscreen"
          />
        </SwiperSlide>
        <SwiperSlide className="fifth_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="fifth_slider_container--item3"></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
