import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Insights = () => {
  const { Insights } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section  id="insights" className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Insights.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Insights.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[20rem] max-w-3xl"
        >
          {Insights.insights_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-white mx-8 border-2 
                p-8 h-full rounded-2xl flex items-center gap-6
                 border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.logo} alt="..." className="h-24 mx-auto" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Insights;