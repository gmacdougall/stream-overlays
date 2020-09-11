import styled from '@emotion/styled';
import React from 'react';

const WeatherWidget = styled.div`
  background-color: #333;
`;

const IndexPage: React.FC<HTMLDivElement> = () => (
  <WeatherWidget>Hello world!</WeatherWidget>
);

export default IndexPage;
