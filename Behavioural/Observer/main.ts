
import {WeatherStation} from './WeatherStation';  
import {TemperatureDisplay} from './TemperatureDisplay';  
import {HumidityDisplay} from './HumidityDisplay';  
import {PressureDisplay} from './PressureDisplay';  
  
  const weatherStation = new WeatherStation();
  
  const temperatureDisplay = new TemperatureDisplay();
  const humidityDisplay = new HumidityDisplay();
  const pressureDisplay = new PressureDisplay();
  
  weatherStation.registerObserver(temperatureDisplay);
  weatherStation.registerObserver(humidityDisplay);
  weatherStation.registerObserver(pressureDisplay);
  
  weatherStation.setMeasurements(25, 60, 1015);

  weatherStation.removeObserver(temperatureDisplay);
  weatherStation.setMeasurements(28, 55, 1010);
  
  