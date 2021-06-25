import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ onGetLocation }) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const longitude = position.coords.longitude.toString();
      const latitude = position.coords.latitude.toString();

      const url = `http://api.weatherstack.com/current?access_key=6a07a5d63cea0ab295614c0e81816ae8&query=${latitude},${longitude}&units=m`;

      const result = await axios.get(url);

      const dataWeather = result.data.current;
      const dataLocation = result.data.location;
      setWeather({ ...dataWeather });
      setLocation({ ...dataLocation });

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
          src={weather.weather_icons[0]}
          alt="weather-icon"
          className="weather-icon"
        />
        <div className="weather-result">
          <h2>{weather.temperature + " °C"}</h2>
          <p>{weather.humidity + " % HR"}</p>
          <p>{weather.pressure + " kPa"}</p>
        </div>
        <div className="weather-location">
          <h2>{location.name + " - " + location.region}</h2>
          <p>{`Lat: ${location.lat}°, Long: ${location.lon}°`}</p>
        </div>
      </div>
      <p className="weather-description">{`${location.name} presents actual temperature of ${weather.temperature}°C and humidity of ${weather.humidity}%HR. Temperature feelslike ${weather.feelslike}°C. ${weather.weather_descriptions} indicates the forecast.`}</p>
    </div>
  );
};

export default Weather;
