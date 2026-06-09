export interface OtherWeatherIndicatorStyle {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    lineHeight?: string;
    padding?: string;
    margin?: string;
}
export interface ListCardWeatherForecastPropsItem {
    weatherName: string;
    weatherIconUrl: string;
    temperatureMax: number;
    temperatureMin: number;
    aqiMax: number;
    aqiMin: number;
    day: string;
    date: string;
    otherIndicator?: string[];
}
