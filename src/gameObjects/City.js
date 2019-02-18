export default class City {
  constructor(city, lat, long) {
    this.city = city;
    this.location = {
      lat: lat,
      long: long,
      top: this.computeTop(),
      left: this.computeLeft()
    }
  }

  computeTop() {
    return this.lat * this.long;
  }
  
  computeLeft() {
    return this.lat * this.long;
  }
}