import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ItemProjectComponent from '../ItemProjectComponent'
import './style.scss'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

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
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false
      // }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
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
              id: item.id,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideComponent
