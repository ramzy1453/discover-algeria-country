import nord from "../../../assets/nord.jpg";
import RegionCard from "./RegionCard";
import { motion } from "framer-motion";

export default function Regions() {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24"
    >
      <div
        id="header"
        className="flex flex-col space-x-0 space-y-2 justify-between sm:flex-row sm:space-x-8"
      >
        <div className="font-bold text-2xl">Algerian Regions</div>
        <div className="">
          Algerian regions all have unique characteristics, and each season
          brings something new to experience. Happy exploring!{" "}
        </div>
      </div>
      <div
        id="regions"
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {regions.map((region, key) => (
          <RegionCard
            img={region.img}
            key={key}
            body={region.body}
            head={region.head}
          />
        ))}
      </div>
    </motion.div>
  );
}

const regions: any[] = [
  {
    img: nord,
    head: "Algeirs",
    body: "Learn more about The Capital and organize a trip to experience the Northern Lights.",
  },
  {
    img: nord,
    head: "Constantine",
    body: "Discover Constantine, national parks and towns of the region during your trip to Algeria.",
  },
  {
    img: nord,
    head: "Tlemcen",
    body: "Charming seaside resort and the westernmost city of Algeria.",
  },
  {
    img: nord,
    head: "Sahara",
    body: "Learn what to do and see in the Algerian Desert, a place tourists love to visit for its beautiful landscapes.",
  },
  {
    img: nord,
    head: "Béjaïa",
    body: "Spend your summer by one or more of these Algerian lakes of Béjaïa.",
  },
  {
    img: nord,
    head: "Annaba",
    body: "Purest air in the world and winter activities from skiing to reindeer rides.",
  },
];
