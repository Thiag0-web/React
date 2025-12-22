const user = {
  name: "Thiago",
  age: 22,
  role: "dev",
  amor: "Tauani"
};

const { name, age,  ...rest } = user;

console.log(name); // "Thiago"
console.log(rest); // { age: 22, role: "dev" }