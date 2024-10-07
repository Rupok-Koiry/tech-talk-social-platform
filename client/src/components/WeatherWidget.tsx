"use client";
import React, { useState, useEffect } from "react";
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaThermometerHalf,
  FaMapMarkerAlt,
  FaTint,
} from "react-icons/fa";
import Spinner from "./Spinner";
import axios from "axios";
interface IWeather {
  current: {
    temp_f: number;
    feelslike_f: number;
    condition: { text: string };
  };
  location: { name: string; region: string };
}
interface IForecast {
  forecast: {
    forecastday: {
      date: string;
      day: { avgtemp_f: number; daily_chance_of_rain: number };
    }[];
  };
}

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState<IForecast | null>(null);
  const [loading, setLoading] = useState(true);
  const city = "Dhaka";
  const apiKey = "ce476299ce914a40b32132837240310";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentResponse = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        setWeatherData(currentResponse.data);

        const forecastResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`
        );
        setForecast(forecastResponse.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading || !weatherData || !forecast) {
    return <Spinner />;
  }

  const { current, location } = weatherData as IWeather;
  const currentTemp = current.temp_f;
  const realFeel = current.feelslike_f;
  const weatherDescription = current.condition.text;
  const rainChance = forecast.forecast.forecastday[0].day.daily_chance_of_rain;

  const getWeatherIcon = (condition: string) => {
    if (condition.toLowerCase().includes("sun"))
      return <FaSun className="w-12 h-12 text-yellow-400" />;
    if (condition.toLowerCase().includes("cloud"))
      return <FaCloud className="w-12 h-12 text-gray-400" />;
    if (condition.toLowerCase().includes("rain"))
      return <FaCloudRain className="w-12 h-12 text-blue-500" />;
    return <FaSun className="w-12 h-12 text-yellow-400" />;
  };

  return (
    <div className="bg-gradient-to-br from-primary-blue to-secondary-background text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">{Math.round(currentTemp)}°F</h2>
          <p className="text-sm">{weatherDescription}</p>
        </div>
        {getWeatherIcon(weatherDescription)}
      </div>
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <FaThermometerHalf className="w-4 h-4 mr-1" />
          <span className="text-sm">Feels like {Math.round(realFeel)}°F</span>
        </div>
        <div className="flex items-center">
          <FaTint className="w-4 h-4 mr-1" />
          <span className="text-sm">Rain: {rainChance}%</span>
        </div>
      </div>
      <div className="border-t border-white/30 pt-4 mb-4">
        <h3 className="text-sm font-semibold mb-2">5-Day Forecast</h3>
        <div className="grid grid-cols-3 xl:grid-cols-5 gap-2">
          {forecast.forecast.forecastday.map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-xs">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <p className="text-sm font-semibold">
                {Math.round(day.day.avgtemp_f)}°F
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center text-xs">
        <FaMapMarkerAlt className="w-3 h-3 mr-1" />
        <span>
          {location.name}, {location.region}
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;
