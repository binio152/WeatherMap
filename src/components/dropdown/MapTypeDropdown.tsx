import { type Dispatch, type SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
};

const MapTypeDropdown = ({ mapType, setMapType }: Props) => {
  const selectedOption = mapTypeOptions.find(
    (option) => option.value === mapType,
  );

  return (
    <Select
      value={mapType}
      onValueChange={(value) => setMapType(value || "clouds_new")}
    >
      <SelectTrigger className="w-full sm:w-56">
        <SelectValue placeholder="Map Layer">
          {selectedOption?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {mapTypeOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const mapTypeOptions = [
  { value: "clouds_new", label: "Cloud Cover" },
  { value: "temp_new", label: "Temperature" },
  { value: "wind_new", label: "Wind" },
  { value: "pressure_new", label: "Pressure" },
] as const;

export default MapTypeDropdown;
