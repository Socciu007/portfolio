import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemProjectComponent from "../ItemProjectComponent";
import "./style.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SlideComponent = ({ arrSlide }: { arrSlide: any[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={false}
      scrollbar={false}
      className="slide-component"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {arrSlide.map((item, index) => (
        <SwiperSlide key={index}>
          <ItemProjectComponent
            item={{
              name: item.name,
              createdAt: item.createdAt,
              technologies: item.technologies,
              description: item.description,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideComponent;
