"use client";

import { testimonials } from "@/data";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  return (
    <Section
      title="Testimonials"
      description="What clients say about us"
      className="px-0"
    >
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 5000 }}
          loop
          centeredSlides
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-5 flex justify-center space-x-2"></div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
