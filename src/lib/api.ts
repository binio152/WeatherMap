import axios from "axios";
import { WeatherSchema, type Weather } from "../schemas/weatherSchema";
import { GeocodeResponseSchema, type Geocode } from "@/schemas/geocodeSchema";
import {
  AirPollutionSchema,
  type AirPollution,
} from "@/schemas/airPollutionSchema";

const API_KEY = import.meta.env.VITE_API_KEY;

type WeatherParams = {
  lat: number;
  lon: number;
  part?: string;
  units?: string;
};

export const getWeatherFromApi = async ({
  lat,
  lon,
  part,
  units,
}: WeatherParams): Promise<Weather> => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=${units}&appid=${API_KEY}`,
  );

  const data = res.data;
  console.log("API Weather response:", data);
  return WeatherSchema.parse(data);
};

export const getGeocodeFromApi = async (location: string): Promise<Geocode> => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`,
  );
  const data = GeocodeResponseSchema.parse(res.data);

  if (data.length === 0) {
    throw new Error(`No geocode result found for location: ${location}`);
  }

  console.log("API Geocode response:", data);
  return data[0];
};

export const getAirPollutionFromApi = async ({
  lat,
  lon,
}: WeatherParams): Promise<AirPollution> => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );

  const data = res.data;
  console.log("API Air pollution response:", data);
  return AirPollutionSchema.parse(data);
};
