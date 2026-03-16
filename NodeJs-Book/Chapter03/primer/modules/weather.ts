// Listing 3.60: The contents of the weather.ts file in the modules folder

export class WeatherLocation {
  constructor(
    public weather: string,
    public city: string,
  ) {}

  get weatherMessage() {
    return `It i s${this.weather} in ${this.city}`;
  }
}
