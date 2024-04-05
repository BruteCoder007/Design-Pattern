

export interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
  }
  
  
  interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }
  