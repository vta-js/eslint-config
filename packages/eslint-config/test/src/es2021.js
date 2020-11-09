import User from "./User";

const u = new User("001", "Jack");

console.log(u.city ?? "No City Has Set");

console.log(new WeakRef());
