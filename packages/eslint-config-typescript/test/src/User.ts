export default class User {
  #id: string;

  #name: string;

  constructor(id: string, name: string) {
    this.#id = id;
    this.#name = name;
  }

  public sayHello(): void {
    console.log(`[${this.#id}]:${this.#name}`);
  }

  public getName(): string {
    return this.#name;
  }
}
