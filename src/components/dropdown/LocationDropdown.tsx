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
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

const LocationDropdown = ({ location, setLocation }: Props) => {
  const selectedLocation = locations.find((item) => item.value === location);

  return (
    <Select
      value={location}
      onValueChange={(value) => setLocation(value || "ho chi minh city,vn")}
    >
      <SelectTrigger className="w-full sm:w-64">
        <SelectValue placeholder="Location">
          {selectedLocation?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {locations.map((location) => (
            <SelectItem key={location.value} value={location.value}>
              {location.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const locations = [
  { value: "hanoi,vn", label: "Hà Nội, Việt Nam" },
  { value: "ho chi minh city,vn", label: "TP. Hồ Chí Minh, Việt Nam" },
  { value: "da nang,vn", label: "Đà Nẵng, Việt Nam" },
  { value: "hai phong,vn", label: "Hải Phòng, Việt Nam" },
  { value: "can tho,vn", label: "Cần Thơ, Việt Nam" },
  { value: "da lat,vn", label: "Đà Lạt, Việt Nam" },
  { value: "nha trang,vn", label: "Nha Trang, Việt Nam" },
  { value: "tokyo,jp", label: "Tokyo, Nhật Bản" },
  { value: "seoul,kr", label: "Seoul, Hàn Quốc" },
  { value: "beijing,cn", label: "Bắc Kinh, Trung Quốc" },
  { value: "bangkok,th", label: "Bangkok, Thái Lan" },
  { value: "singapore,sg", label: "Singapore" },
  { value: "paris,fr", label: "Paris, Pháp" },
  { value: "london,gb", label: "London, Anh" },
  { value: "berlin,de", label: "Berlin, Đức" },
  { value: "canberra,au", label: "Canberra, Úc" },
  { value: "washington,us", label: "Washington DC, Mỹ" },
  { value: "ottawa,ca", label: "Ottawa, Canada" },
] as const;

export default LocationDropdown;
