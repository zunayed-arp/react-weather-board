import useWeather from "../../../rnext/src/hooks/useWeather";
import { WeatherContext } from "../context";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
