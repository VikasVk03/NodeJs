"use strict";
// Listing 3.60: The contents of the weather.ts file in the modules folder
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherLocation = void 0;
class WeatherLocation {
    weather;
    city;
    constructor(weather, city) {
        this.weather = weather;
        this.city = city;
    }
    get weatherMessage() {
        return `It i s${this.weather} in ${this.city}`;
    }
}
exports.WeatherLocation = WeatherLocation;
