export default class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.city = undefined;
  }

  setCity(city) {
    this.city = city;
  }

  sayHello() {
    console.log(`[${this.id}]:${this.name}`);
  }
}
