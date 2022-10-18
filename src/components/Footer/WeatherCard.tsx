import { memo, useEffect, useState } from "react";
import { formatTime, getWeather } from "../../utils/weather";
import { Weather } from "../../types/Weather";

function WeatherCard() {
  const [weather, setWeather] = useState<Weather>();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const abortController = new AbortController();
    getWeather("algiers", abortController.signal).then((data) =>
      setWeather(data)
    );
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      abortController.abort();
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="space-y-8 px-6 py-8 text-2xl shadow-xl rounded-md absolute -top-16 right-10 w-[30%] bg-[#43AE57] text-white flex flex-col justify-between">
      {/* Meteo  */}
      <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-8">
        <div className="flex space-x-2 flex-col md:flex-row">
          <img
            alt="weather-icon"
            src={
              weather?.current.condition.icon ||
              "//cdn.weatherapi.com/weather/64x64/day/116.png"
            }
            width="36"
            height="36"
          />
          <div>{weather?.current.temp_c || 27}°</div>
        </div>
        <div>{formatTime(time)}</div>
      </div>
      {/* City  */}
      <div className="text-center md:text-left">
        {weather?.location.name || "Algiers"}:{" "}
        {weather?.current.condition.text.toLowerCase() || "partly cloudy"}
      </div>
    </div>
  );
}

export default memo(WeatherCard);
