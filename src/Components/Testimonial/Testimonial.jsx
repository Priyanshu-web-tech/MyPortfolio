import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
const Testimonial = () => {
  const data = [
    {
      name: "Utkarsh Goel",
      comp: "Co-founder @Elanine Creatives",
      review:
        "I'm happy to submit a recommendation for Priyanshu, who has been an outstanding SDE intern at our organisation. His skill sets are remarkable; he always delivers high-quality work on time. Priyanshu actively participates in testimonial brainstorming sessions, offering valuable ideas that have substantially advanced our projects. His devotion, and productive energy make him an essential addition to our testimonial. We look forward to watching him advance and succeed in his profession.",
    },
    {
      name: "Pratyush Narayan",
      comp: "Web Developer Intern @Mycto Innovations",
      review:
        "Working with Priyanshu Sharma has been an absolute pleasure. His expertise in web development is truly commendable. Priyanshu's attention to detail, creativity, and commitment to delivering high-quality results have consistently exceeded my expectations. I highly recommend Priyanshu to anyone in need of a skilled and reliable web developer.",
    },
  ];
  return (
    <div id="testimonial" className="testimonial-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>Testimonials</h1>
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
        {data.map((testimonial, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="testimonial-card">
              <p className="review">"{testimonial.review}"</p>
              <hr className="lin" />

              <h3 className="name">{testimonial.name}</h3>
              <h4 className="comp">{testimonial.comp}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimonial;