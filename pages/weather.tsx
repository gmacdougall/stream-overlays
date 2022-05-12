import { Icon, addIcon } from "@iconify/react/dist/offline";
import type { NextPage } from "next";
import type { FC, PropsWithChildren } from "react";
import useSWR from "swr";
import type { BareFetcher } from "swr";

import weatherCloudy from "@iconify-icons/fluent/weather-cloudy-48-regular";
import weatherFog from "@iconify-icons/fluent/weather-fog-48-regular";
import weatherMoon from "@iconify-icons/fluent/weather-moon-48-regular";
import weatherPartlyCloudyDay from "@iconify-icons/fluent/weather-partly-cloudy-day-48-regular";
import weatherPartlyCloudyNight from "@iconify-icons/fluent/weather-partly-cloudy-night-48-regular";
import weatherRain from "@iconify-icons/fluent/weather-rain-48-regular";
import weatherRainShowersDay from "@iconify-icons/fluent/weather-rain-showers-day-48-regular";
import weatherRainShowersNight from "@iconify-icons/fluent/weather-rain-showers-night-48-regular";
import weatherSnow from "@iconify-icons/fluent/weather-snow-48-regular";
import weatherSunny from "@iconify-icons/fluent/weather-sunny-48-regular";
import weatherThunderstorm from "@iconify-icons/fluent/weather-thunderstorm-48-regular";

import type { WeatherResponse } from "./api/current_weather";

addIcon("01d", weatherSunny);
addIcon("02d", weatherPartlyCloudyDay);
addIcon("03d", weatherCloudy);
addIcon("04d", weatherCloudy);
addIcon("09d", weatherRainShowersDay);
addIcon("10d", weatherRain);
addIcon("11d", weatherThunderstorm);
addIcon("13d", weatherSnow);
addIcon("50d", weatherFog);
addIcon("01n", weatherMoon);
addIcon("02n", weatherPartlyCloudyNight);
addIcon("03n", weatherCloudy);
addIcon("04n", weatherCloudy);
addIcon("09n", weatherRainShowersNight);
addIcon("10n", weatherRain);
addIcon("11n", weatherThunderstorm);
addIcon("13n", weatherSnow);
addIcon("50n", weatherFog);

const RoundedBox: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="bg-black/75 rounded-l-xl mb-2 p-1 pl-4 pr-4">{children}</div>
);

const Time: FC = () => {
  const { data: time } = useSWR("time", async () => new Date(), {
    refreshInterval: 1000,
    dedupingInterval: 1000,
  });

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

const fetcher: BareFetcher<WeatherResponse> = (url: string) =>
  fetch(url).then((r) => r.json());

const Weather: FC = () => {
  const { data, error } = useSWR("/api/current_weather", fetcher, {
    refreshInterval: 10 * 60 * 1000,
  });

  if (error) return <p>Error</p>;

  return (
    <RoundedBox>
      <div className="flex">
        <div className="w-14 h-14 mr-4">
          {data && <Icon icon={data.icon} width="56" height="56" />}
        </div>
        <div>{data?.temp ?? "--"}&deg;C</div>
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
