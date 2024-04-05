import {Observer} from './Observer';
  export class HumidityDisplay implements Observer {
    update(temperature: number, humidity: number, pressure: number): void {
      console.log(`Humidity Display: ${humidity}%`);
    }
  }