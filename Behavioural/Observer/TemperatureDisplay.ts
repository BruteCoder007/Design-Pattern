
  import {Observer} from './Observer';
 export  class TemperatureDisplay implements Observer {
    update(temperature: number, humidity: number, pressure: number): void {
      console.log(`Temperature Display: ${temperature} degrees Celsius`);
    }
  }