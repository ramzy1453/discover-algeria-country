import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import InspirationCard from "./InspirationCard";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import nord from "../../../assets/nord.jpg";

export default function Inspirations() {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24"
      id="inspirations"
    >
      <div
        id="header"
        className="flex flex-col space-x-0 space-y-2 justify-between sm:flex-row sm:space-x-8 mb-4"
      >
        <div className="font-bold text-2xl flex-1">Inspirations highlights</div>
        <div className="flex-[2]">
          Peruse these sample journeys for inspiration on places to visit and
          things to do. When you find something you like, save it with the heart
          icon.
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          "992": { slidesPerView: 3 },
          "768": { slidesPerView: 2 },
          "576": { slidesPerView: 1 },
        }}
        watchSlidesProgress
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {inspirations.map((inspiration, key) => (
          <SwiperSlide key={key}>
            <InspirationCard inspiration={inspiration} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

const inspirations: any[] = [
  {
    img: nord,
    text: "Learn About The History of Algeria",
    location: "Algeria",
    duration: "7 days",
  },
  {
    img: nord,
    text: "Learn About Islam",
    location: "Islamic World",
    duration: "30 days",
  },
  {
    img: nord,
    text: "Taste Algerian Cuisine",
    location: "Algeria",
    duration: "7 days",
  },
  {
    img: nord,
    text: "Take The Cable Car",
    location: "Belouizdad",
    duration: "5 min",
  },

  {
    img: nord,
    text: "Relax in the Botanical Garden Hamma",
    location: "Hamma",
    duration: "1 day",
  },
];
