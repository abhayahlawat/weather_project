import React from "react";
import Image from "next/image";

interface WeatherIconProps {
  iconName: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconName }) => {
  return (
    <div className="relative h-20 w-20">
      <Image
        src={`https://openweathermap.org/img/wn/${iconName}@2x.png`}
        alt="Weather Icon"
        width={100}
        height={100}
        className="absolute h-full w-full"
      />
    </div>
  );
};

export default WeatherIcon;
