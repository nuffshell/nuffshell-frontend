interface UserInterface {
  name: string | null;
}

class User implements UserInterface {
  name: string | null;
  constructor(name: string | null = null) {
    this.name = name;
  }
}

const patrick = new User("patrick");
const unknown = new User(null);
const unknown2 = new User();

console.log('[PH_LOG] patrick:', patrick); // PH_TODO
console.log('[PH_LOG] unknown:', unknown); // PH_TODO
console.log('[PH_LOG] unknown2:', unknown2); // PH_TODO

const result = null;
export default result;
