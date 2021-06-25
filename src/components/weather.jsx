import React, { useEffect, useState } from "react";
import getWeatherApi from "../utils/weatherApi";

const Weather = ({ onGetLocation }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const longitude = position.coords.longitude.toString();
      const latitude = position.coords.latitude.toString();

      const result = await getWeatherApi(latitude, longitude);
      console.log(result);
      const data = result.data.list[0].main;
      data.city = result.data.list[0].name;
      data.country = result.data.list[0].sys.country;
      data.icon = result.data.list[0].weather[0];
      data.latitude = result.data.list[0].coord.lat.toString();
      data.longitude = result.data.list[0].coord.lon.toString();

      console.log(data);

      setWeather({ ...data });
      // const result = await axios.get(url);

      // const dataWeather = result.data.current;
      // const dataLocation = result.data.location;
      // setWeather({ ...dataWeather });
      // setLocation({ ...dataLocation });

      onGetLocation({ latitude, longitude });

      console.log(result);
    });
  };

  if (Object.keys(weather).length === 0) {
    return <div>No Forecast yet</div>;
  }
  return (
    <div className="container-widget grid grid-2-rows">
      <div className="header-info-weather">
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon.icon}@2x.png`}
          alt={weather.icon.description}
          className="weather-icon"
        />
        <div className="weather-result">
          <h2>{weather.temp + " °C"}</h2>
          <p>{weather.humidity + " % HR"}</p>
          <p>{weather.pressure + " kPa"}</p>
        </div>

        <div className="weather-location">
          <h2>{weather.city + " - " + weather.country}</h2>
          <p>{`Lat: ${weather.latitude}°, Long: ${weather.longitude}°`}</p>
        </div>
      </div>
      <p className="weather-description">{`${weather.city} 
        presents actual temperature of ${weather.temp}°C and humidity of 
        ${weather.humidity}%HR. Temperature feelslike ${weather.feels_like}°C.
        Today, we will have a max temperature of ${weather.temp_max} and minimum of ${weather.temp_min}.`}</p>
    </div>
  );
};

export default Weather;
