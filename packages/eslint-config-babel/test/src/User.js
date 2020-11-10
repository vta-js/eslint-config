export default class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  sayHello = () => {
    console.log(`[${this.id}]:[${this.name}]`);
    console.log(new WeakRef());
  };
}
