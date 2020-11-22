type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const patrick: Person = {
  name: "Patrick",
  age: 49,
};

interface Name2 {
  name: string;
}
interface Age2 {
  age: number;
}

console.log("[PH_LOG] patrick:", patrick); // PH_TODO

type Person2 = Name2 & Age2;

const petra: Person2 = {
  name: "Petra",
  age: 52,
};

console.log("[PH_LOG] petra:", petra); // PH_TODO

type Person3 = Person | Person2;

const leonore: Person3 = {
  name: "Leonore",
  age: 11,
};

console.log("[PH_LOG] leonore:", leonore); // PH_TODO

const result = null;
export default result;
