/**
 * declare relation one-to-many
 *
 */

interface Subject {
  registerObserver(o);
  removeObserver(o: Observer);
  notifyObserver();
}

interface Observer {
  id: number
  update(temp, humidity, pressure);
}

interface DisplayElement {
  display();
}

class WeatherData implements Subject {
  observers;
  temp;
  humidity;
  pressure;

  constructor() {
    this.observers = [];
  }

  registerObserver<T>(o: T) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    for (var i = 0; i < this.observers.length; i++) {
      if (this.observers[i].id === o.id) {
        this.observers.splice(i, 1);
      }
    }
  }

  notifyObserver() {
    this.observers.map((observer) =>
      observer.update(this.temp, this.humidity, this.pressure)
    );
  }

  measurementsChange() {
    this.notifyObserver()
  }

  setMeasurements(temp, humidity, pressure) {
    this.temp = temp
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChange()
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature;
  private humidity;
  private pressure;
  private weatherData;
  id

  constructor(weatherData: Subject, id) {
    this.weatherData = weatherData;
    this.id = id
    weatherData.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log(`display: ${this.id} ==== ${this.temperature}-${this.humidity}-${this.pressure}`);
  }
}

const weatherData = new WeatherData()
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData, 1)
const currentConditionsDisplay02 = new CurrentConditionsDisplay(weatherData, 2)

weatherData.setMeasurements(1,2,3)
weatherData.setMeasurements(4,5,6)
