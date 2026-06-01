import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

import { testimonialData } from "../../Constants/config";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="section-title-wrap"
      >
        <h1 className="section-heading">Testimonials</h1>
      </motion.div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="swiper-container"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="review">{testimonial.review}</p>
              <hr className="lin" />
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h3 className="name">{testimonial.name}</h3>
                  <h4 className="comp">{testimonial.comp}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimonial;
