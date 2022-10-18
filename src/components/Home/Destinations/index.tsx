import nord from "../../../assets/nord.jpg";
import RegionCard from "../Regions/RegionCard";
import { motion } from "framer-motion";
type Props = {};

export default function Destinations(props: Props) {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24"
      id="destinations"
    >
      <div
        id="header"
        className="flex flex-col space-x-0 space-y-2 justify-between sm:flex-row sm:space-x-8"
      >
        <div className="font-bold text-2xl flex-1">Destination highlights</div>
        <div className="flex-[2]">
          Whether you’re looking for an urban holiday or a nature escape – or a
          bit of both – there’s sure to be a destination that’s right for you.
          Browse these options to find your next port of call.
        </div>
      </div>
      <div
        id="regions"
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {destinations.map((destination, key) => (
          <RegionCard
            key={key}
            img={destination.img}
            body={destination.body}
            head={destination.head}
          />
        ))}
      </div>
    </motion.div>
  );
}

const destinations: any[] = [
  {
    img: nord,
    head: "Casbah of Algiers",
    body: "The upper old part of Algiers has interesting Moorish houses, minarets and old citadel.",
  },
  {
    img: nord,
    head: "Emir Abdelkader Mosque",
    body: "I visit so many mosques around the world but this one put me in tears as the beauty of the edifice is beyond any expectation!",
  },
  {
    img: nord,
    head: "Sidi M'Cid Bridge",
    body: "Very high bridge, We walked to cross it, it is very scary but amazing is the same time ! To do it again!",
  },
  {
    img: nord,
    head: "Pic des Singes",
    body: "Yet another great view is to be encountered here of the sea and the lighthouse. And don't forget the macaques ",
  },
  {
    img: nord,
    head: "Ahmed Bey Palace",
    body: "The palace was commissioned during the rule of Ahmed Bey ben Mohamed Chérif in 1825, Ahmad Bay summoned a Genovese engineer Chiavino, and two well known artists Al-Jabari and Al-Khatabi for the architectural design.",
  },

  {
    img: nord,
    head: "Palais des Rais",
    body: "Palais des Rais is an historic and architectural site. It is also a center of art and culture.",
  },
];
