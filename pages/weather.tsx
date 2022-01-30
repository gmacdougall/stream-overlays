import {
  Cloud,
  Cloudy,
  DayCloudy,
  DayFog,
  DayShowers,
  DaySunny,
  NightClear,
  NightCloudy,
  NightFog,
  NightShowers,
  Rain,
  Snow,
  Thunderstorm,
  WeatherIcon,
} from "@intern0t/react-weather-icons";
import OpenWeatherAPI from "openweather-api-node";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { createElement, useEffect, useState } from "react";
import type { FC, VFC } from "react";

const RoundedBox: FC = ({ children }) => (
  <div className="bg-black/30 rounded-l-xl mb-2 p-1 pl-4 pr-4">{children}</div>
);

const Time: VFC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  }).format(time);

  return (
    <RoundedBox>
      {formattedTime.substring(0, formattedTime.length - 3)}
    </RoundedBox>
  );
};

const iconLookup = (apiIcon: string): WeatherIcon => {
  const map = new Map();
  map.set("01d", DaySunny);
  map.set("02d", DayCloudy);
  map.set("03d", Cloud);
  map.set("04d", Cloudy);
  map.set("09d", DayShowers);
  map.set("10d", Rain);
  map.set("11d", Thunderstorm);
  map.set("13d", Snow);
  map.set("50d", DayFog);
  map.set("01n", NightClear);
  map.set("02n", NightCloudy);
  map.set("03n", Cloud);
  map.set("04n", Cloudy);
  map.set("09n", NightShowers);
  map.set("10n", Rain);
  map.set("11n", Thunderstorm);
  map.set("13n", Snow);
  map.set("50n", NightFog);
  return map.get(apiIcon);
};

const Weather: VFC = () => {
  const [temp, setTemp] = useState<string | number>("--");
  const [icon, setIcon] = useState("01d");

  const router = useRouter();
  const apiKey = router.query.api_key;

  useEffect(() => {
    const doFetch = (): void => {
      if (apiKey && !Array.isArray(apiKey)) {
        const weather = new OpenWeatherAPI({
          key: apiKey,
          locationName: "Toronto,ON,CA",
          units: "metric",
        });

        weather.getCurrent().then((data) => {
          setTemp(Math.round(data.weather.temp.cur));
          setIcon(data.weather.icon.raw);
        });
      }
    };

    doFetch();
    const interval = setInterval(doFetch, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [apiKey]);

  return (
    <RoundedBox>
      <div className="flex">
        <div className="w-14 h-14 mr-4">
          {createElement(iconLookup(icon), {
            color: "rgb(229 231 235)",
            size: 56,
          })}
        </div>
        <div>{temp}&deg;C</div>
      </div>
    </RoundedBox>
  );
};

const IndexPage: NextPage = () => (
  <div className="text-5xl text-gray-200 text-right absolute bottom-0 right-0 font-sans">
    <Time />
    <Weather />
    <RoundedBox>Toronto</RoundedBox>
  </div>
);

export default IndexPage;
