import type { NextApiRequest, NextApiResponse } from "next";
import OpenWeatherAPI from "openweather-api-node";

export type WeatherResponse = Readonly<{
  icon: string;
  temp: number;
}>;

const currentWeather = async (
  _: NextApiRequest,
  res: NextApiResponse<WeatherResponse>
) => {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  if (!apiKey) {
    res.status(500);
  }

  const weather = new OpenWeatherAPI({
    key: apiKey,
    locationName: "Toronto,ON,CA",
    units: "metric",
  });

  const data = await weather.getCurrent();

  res.status(200).json({
    icon: data.weather.icon.raw,
    temp: Math.round(data.weather.temp.cur),
  });
};

export default currentWeather;
