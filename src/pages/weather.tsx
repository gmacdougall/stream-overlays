import fetch from 'cross-fetch';
import styled from '@emotion/styled';
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
} from '@intern0t/react-weather-icons';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';

const WeatherWidget = styled.div`
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 48px;
  text-align: right;
  font-family: sans-serif;
`;

const WeatherIconContainer = styled.div`
  width: 64px;
  height: 64px;
`;

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  padding-right: 20px;
  border-radius: 15px 0 0 15px;
`;

const City = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
  border-radius: 15px 0 0 0;
`;

const StyledTime = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  padding-right: 20px;
  border-radius: 15px 0 0 15px;
`;

const Time: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(time);

  return (
    <StyledTime>
      {formattedTime.substring(0, formattedTime.length - 3)}
    </StyledTime>
  );
};

const iconLookup = (apiIcon: string): WeatherIcon => {
  const map = new Map();
  map.set('01d', DaySunny);
  map.set('02d', DayCloudy);
  map.set('03d', Cloud);
  map.set('04d', Cloudy);
  map.set('09d', DayShowers);
  map.set('10d', Rain);
  map.set('11d', Thunderstorm);
  map.set('13d', Snow);
  map.set('50d', DayFog);
  map.set('01n', NightClear);
  map.set('02n', NightCloudy);
  map.set('03n', Cloud);
  map.set('04n', Cloudy);
  map.set('09n', NightShowers);
  map.set('10n', Rain);
  map.set('11n', Thunderstorm);
  map.set('13n', Snow);
  map.set('50n', NightFog);
  return map.get(apiIcon);
};

const Weather: React.FC = () => {
  const [temp, setTemp] = useState('--');
  const [icon, setIcon] = useState('01d');

  const apiKey = queryString.parse(useLocation().search).api_key;
  const apiLocation = `https://api.openweathermap.org/data/2.5/weather?q=Toronto,ON,CA&appid=${apiKey}&units=metric`;

  useEffect(() => {
    const doFetch = (): void => {
      fetch(apiLocation)
        .then((res) => res.json())
        .then((json) => {
          setTemp(Math.round(json.main.temp).toString());
          setIcon(json.weather[0].icon);
        });
    };

    doFetch();
    const interval = setInterval(doFetch, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [apiLocation]);

  return (
    <>
      <WeatherIconContainer>
        {React.createElement(iconLookup(icon), { color: 'white', size: 64 })}
      </WeatherIconContainer>
      <div>{temp}&deg;C</div>
    </>
  );
};

const IndexPage: React.FC<HTMLDivElement> = () => (
  <WeatherWidget>
    <Time />
    <WeatherContainer>
      <Weather />
    </WeatherContainer>
    <City>Toronto</City>
  </WeatherWidget>
);

export default IndexPage;
