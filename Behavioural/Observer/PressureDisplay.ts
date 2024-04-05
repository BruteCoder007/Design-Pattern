import {Observer} from './Observer';  
 export  class PressureDisplay implements Observer {
    update(temperature: number, humidity: number, pressure: number): void {
      console.log(`Pressure Display: ${pressure} hPa`);
    }
  }