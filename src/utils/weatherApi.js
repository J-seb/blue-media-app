import axios from "axios";

const getWeatherApi = (lat, lon) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/find",
    params: {
      q: "",
      cnt: "1",
      mode: "null",
      lon,
      type: "link, accurate",
      lat,
      units: "metric",
    },
    headers: {
      "x-rapidapi-key": "0a96a28c20msh7809c4b4da2910dp191b72jsndec65f277d19",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export default getWeatherApi;
