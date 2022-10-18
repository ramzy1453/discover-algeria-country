import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import InspirationFooter from "./InspirationFooter";

type Props = {
  inspiration: {
    img: string;
    text: string;
    location: string;
    duration: string;
  };
};

export default function InspirationCard({ inspiration }: Props) {
  const [showFooter, setShowFooter] = useState(false);
  const onShowFooter = () => {
    setShowFooter(true);
  };
  const onHideFooter = () => {
    setShowFooter(false);
  };
  return (
    <div
      onMouseEnter={onShowFooter}
      onMouseLeave={onHideFooter}
      className={`
      h-[512px] text-white py-8 px-4 flex flex-col items-center justify-end group cursor-pointer
      hover:scale-[1.05] transition-all relative
      `}
    >
      <img
        alt="inspiration"
        className="absolute top-0 left-0 h-full w-full z-[-1]"
        src={inspiration.img}
      />
      <div className="font-bold text-3xl text-center mb-4 group-hover:pb-[20px] transition-all">
        {inspiration.text}
      </div>
      <AnimatePresence>
        {showFooter && (
          <InspirationFooter
            location={inspiration.location}
            duration={inspiration.duration}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
