/* eslint-disable max-classes-per-file */
/* eslint-disable functional/no-class */
declare module '@intern0t/react-weather-icons' {
  type Props = {
    readonly color: readonly string;
    readonly size: readonly number;
  };

  export class Cloud extends React.Component<Props> {}
  export class Cloudy extends React.Component<Props> {}
  export class DayCloudy extends React.Component<Props> {}
  export class DayFog extends React.Component<Props> {}
  export class DayShowers extends React.Component<Props> {}
  export class DaySunny extends React.Component<Props> {}
  export class NightClear extends React.Component<Props> {}
  export class NightCloudy extends React.Component<Props> {}
  export class NightFog extends React.Component<Props> {}
  export class NightShowers extends React.Component<Props> {}
  export class Rain extends React.Component<Props> {}
  export class Snow extends React.Component<Props> {}
  export class Thunderstorm extends React.Component<Props> {}

  export type WeatherIcon =
    | typeof Cloud
    | typeof Cloudy
    | typeof DayCloudy
    | typeof DayFog
    | typeof DayShowers
    | typeof DaySunny
    | typeof NightClear
    | typeof NightCloudy
    | typeof NightFog
    | typeof NightShowers
    | typeof Rain
    | typeof Snow
    | typeof Thunderstorm;
}
