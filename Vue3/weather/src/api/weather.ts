/*
  weather.ts
  API wrapper for weather fetching using wttr.in (free, no API key required).
*/

import emitter from "../utils/emitter.ts";

export interface WeatherResponse {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  localObsDateTime: string;
  observation_time: string;
  precipMM: string;
  pressure: string;
  temp_C: string;
  temp_F: string;
  uvIndex: string;
  visibility: string;
  weatherCode: string;
  weatherDesc: Array<{ value: string }>;
  weatherIconUrl: Array<{ value: string }>;
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}

export interface ForecastItem {
  astronomy: Array<{
    moon_illumination: string;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
  }>;
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: Array<{
    DewPointC: string;
    DewPointF: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    HeatIndexC: string;
    HeatIndexF: string;
    WindChillC: string;
    WindChillF: string;
    WindGustKmph: string;
    WindGustMiles: string;
    chanceoffog: string;
    chanceoffrost: string;
    chanceofhightemp: string;
    chanceofovercast: string;
    chanceofrain: string;
    chanceofremdry: string;
    chanceofsnow: string;
    chanceofsunshine: string;
    chanceofthunder: string;
    chanceofwindy: string;
    cloudcover: string;
    humidity: string;
    precipMM: string;
    pressure: string;
    tempC: string;
    tempF: string;
    time: string;
    uvIndex: string;
    visibility: string;
    weatherCode: string;
    weatherDesc: Array<{ value: string }>;
    weatherIconUrl: Array<{ value: string }>;
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
  }>;
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  sunHour: string;
  totalSnow_cm: string;
  uvIndex: string;
}

export type ForecastResponse = ForecastItem[];

export async function fetchWeatherByCity(
  city: string
): Promise<WeatherResponse | null> {
  try {
    emitter.emit("start-loading");
    const response = await fetch(
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`
    );
    if (!response.ok) {
      throw new Error(`wttr.in API error: ${response.status}`);
    }
    const data = await response.json();
    if (data.current_condition && data.current_condition.length > 0) {
      emitter.emit("stop-loading");
      return data.current_condition[0];
    }
    emitter.emit("stop-loading");
    return null;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    emitter.emit("stop-loading");
    return null;
  }
}

export async function fetchForecastByCity(
  city: string
): Promise<ForecastResponse | null> {
  try {
    emitter.emit("start-loading");
    const response = await fetch(
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`
    );
    if (!response.ok) {
      throw new Error(`wttr.in API error: ${response.status}`);
    }
    const data = await response.json();
    if (data.weather) {
      emitter.emit("stop-loading");
      return data.weather;
    }
    emitter.emit("stop-loading");
    return null;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    emitter.emit("stop-loading");
    return null;
  }
}
