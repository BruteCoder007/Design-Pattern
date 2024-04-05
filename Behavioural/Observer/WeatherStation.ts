
  import {Observer} from './Observer';
  import {Subject} from './Subject';
  export class WeatherStation implements Subject {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    private observers: Observer[] = [];
  
    setMeasurements(temperature: number, humidity: number, pressure: number): void {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.notifyObservers();
    }
  
    registerObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  }
  