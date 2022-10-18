import AboutCard from "./AboutCard";

export default function About() {
  return (
    <div className="mt-24" id="about">
      <div
        id="header"
        className="flex flex-col space-x-0 space-y-2 justify-between sm:flex-row sm:space-x-8 mb-4"
      >
        <div className="font-bold text-2xl flex-1">About Algeria</div>
        <div className="flex-[2]">
          Algeria comprises 2,381,740 square kilometres of land, more than 80%
          of which is desert, in North Africa, between Morocco and Tunisia. It
          is the largest country in Africa. Its Arabic name, Al Jazair (the
          islands), an area of mountains, valleys, and plateaus between the
          Mediterranean and the Sahara Desert, forms an integral part of the
          section of North Africa known as the Maghreb.
        </div>
      </div>
      <AboutCard />
    </div>
  );
}
