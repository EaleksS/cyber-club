import { FC, useState } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { SwiperType } from "../../types/Swiper";

export const Slider: FC = (): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType>();

  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);

  const isActice = () => {
    setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
    setNextActive(
      Number(swiper?.slides?.length) ===
        Number(swiper && swiper?.activeIndex + 1)
    );
  };

  return (
    <div className="slider-wrapper" id="slider">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        onSlideChange={() => isActice()}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((e) => (
          <SwiperSlide key={e}>
            <img src={`/bg2.png`} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev" onClick={() => swiper && swiper.slidePrev()}>
        <HiArrowLongLeft
          style={prevActive ? { opacity: 0.2 } : {}}
          className="arrow_prev"
        />
      </div>
      <div className="next" onClick={() => swiper && swiper.slideNext()}>
        <HiArrowLongRight
          style={nextActive ? { opacity: 0.2 } : {}}
          className="arrow_next"
        />
      </div>
    </div>
  );
};
