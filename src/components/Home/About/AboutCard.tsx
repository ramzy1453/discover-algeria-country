import { useEffect, useState } from "react";
import { formatNumber, getCountry } from "../../../utils/country";
import { Country } from "../../../types/Country";
import { Map } from "react-algeria-map";
export default function AboutCard() {
  const [country, setCountry] = useState<Country>();
  useEffect(() => {
    const abortController = new AbortController();
    getCountry(abortController.signal).then((data) => setCountry(data[0]));
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="flex space-y-8 md:space-x-8 lg:space-y-0 mt-10 flex-col md:flex-row">
      <div
        id="infos"
        className="flex-1 flex flex-col lg:flex-row border p-8 space-x-8"
      >
        <div className="flex flex-col flex-1 items-center justify-center mb-4">
          <img
            alt="flag"
            src={country?.flags.png}
            className="w-[240px] h-[160px] border mb-3"
          />
          <h3 className="text-3xl">{country?.name.common}</h3>
        </div>
        <div className="flex flex-col text-md flex-1 justify-center text-xl space-y-1">
          <div>
            <span className="font-bold">Relgion</span> : Islam
          </div>
          <div>
            <span className="font-bold">Region</span> : {country?.region}
          </div>
          <div>
            <span className="font-bold">Sub region</span> : {country?.subregion}
          </div>
          <div>
            <span className="font-bold">Population</span> :{" "}
            {formatNumber(country?.population)}
          </div>
          <div>
            <span className="font-bold">Area</span> :{" "}
            {formatNumber(country?.area)}
          </div>
          <div>
            <span className="font-bold">Capital</span> :{" "}
            {country?.capital.join(", ")}
          </div>
          <div>
            <span className="font-bold">Top Level Domain</span> :{" "}
            {country?.tld[0]}
          </div>
          <div>
            <span className="font-bold">Currencies</span> :{" "}
            {country?.currencies.DZD.name}
          </div>
          <div>
            <span className="font-bold">Languages</span> :{" "}
            {country?.languages.ara}
          </div>
        </div>
      </div>
      <div
        id="map"
        className="flex-1 border p-5 flex items-center justify-center"
      >
        <Map
          color="#43AE57"
          HoverColor="#006233"
          stroke="#fff"
          hoverStroke="#218c74"
          data={objectWilaya}
        />
      </div>
    </div>
  );
}

const wilayas = [
  "Adrar",
  "Alger",
  "Annaba",
  "Aïn Defla",
  "Aïn Témouchent",
  "Batna",
  "Biskra",
  "Blida",
  "Bordj Badji Mokhtar",
  "Bordj Bou Arreridj",
  "Bouira",
  "Boumerdès",
  "Béchar",
  "Béjaïa",
  "Béni Abbès",
  "Chlef",
  "Constantine",
  "Djanet",
  "Djelfa",
  "El Bayadh",
  "El Meghaier",
  "El Menia",
  "El Oued",
  "El Tarf",
  "Ghardaïa",
  "Guelma",
  "Illizi",
  "In Guezzam",
  "In Salah",
  "Jijel",
  "Khenchela",
  "Laghouat",
  "M'Sila",
  "Mascara",
  "Mila",
  "Mostaganem",
  "Médéa",
  "Naâma",
  "Oran",
  "Ouargla",
  "Ouled Djellal",
  "Oum El Bouaghi",
  "Relizane",
  "Saïda",
  "Sidi Bel Abbès",
  "Skikda",
  "Souk Ahras",
  "Sétif",
  "Tamanrasset",
  "Timimoun",
  "Tindouf",
  "Tipaza",
  "Tissemsilt",
  "Tizi Ouzou",
  "Tlemcen",
  "Touggourt",
  "Tébessa",
];

const objectWilaya: any = {};
wilayas.forEach((wilaya) => {
  objectWilaya[wilaya] = wilaya;
});
