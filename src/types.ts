export type Coords = {
  lat: number;
  lon: number;
};

export type AirQualityLevel = "Good" | "Fair" | "Moderate" | "Poor" | "Very Poor"

interface Range {
  min: number
  max: number | null
}

export type Pollutant = "SO2" | "NO2" | "PM10" | "PM2_5" | "O3" | "CO" | "NO" | "NH3"

export type AirQualityRanges = Record<Pollutant, Record<AirQualityLevel, Range>>