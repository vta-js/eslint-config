import User from "./User";

const u = new User("001", "Jack");

// https://github.com/tc39/proposal-logical-assignment
u.city ??= "Default City";

// https://github.com/tc39/proposal-weakrefs
console.log(new WeakRef());
