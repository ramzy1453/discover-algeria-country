export const getWeather = async (place: string, signal: AbortSignal) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=de645bc435ea4fbd811171251221510&q=${place}&aqi=no`;
  const response = await fetch(url, { signal });
  return await response.json();
};

export const formatTime = (time: Date) => {
  return (
    setZero(time.getHours()) +
    ":" +
    setZero(time.getMinutes()) +
    ":" +
    setZero(time.getSeconds())
  );
};

export const setZero = (number: number) => {
  if (number > 9) {
    return number;
  } else {
    return "0" + number;
  }
};
