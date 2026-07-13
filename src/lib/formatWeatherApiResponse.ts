export const formatWeatherApiResponse = ({
  value,
  number,
}: {
  value: string;
  number: number;
}) => {
  switch (value) {
    case "daily":
      return new Date(number * 1000).toLocaleDateString(undefined, {
        weekday: "short",
      });
    case "hourly":
    case "sunrise":
    case "sunset":
      return new Date(number * 1000).toLocaleTimeString(undefined, {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      });
    case "FtoC":
      return (((number - 32) * 5) / 9).toFixed(1) + "°C";
    case "humidity":
    case "clouds":
      return number + "%";
    case "wind_speed":
      return number + "mph";
    case "wind_deg": {
      const directions = [
        "North",
        "North Northeast",
        "Northeast",
        "East Northeast",
        "East",
        "East Southeast",
        "Southeast",
        "South Southeast",
        "South",
        "South Southwest",
        "Southwest",
        "West Southwest",
        "West",
        "West Northwest",
        "Northwest",
        "North Northwest",
      ];

      const index = Math.round(number / 22.5) % 16;
      return directions[index];
    }
    case "pressure":
      return number + "hPa";

    default:
      return number;
  }
};
