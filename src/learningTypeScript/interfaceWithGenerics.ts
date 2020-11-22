interface HandbagIF<Type> {
  add: (obj: Type) => void;
  get: () => Array<Type>;
}

class Handbag implements HandbagIF<string> {
  private contents: Array<string> = [];
  add(obj: string) {
    this.contents.push(obj);
  }
  get() {
    return this.contents;
  }
}

const handbag = new Handbag();

handbag.add("lipstick");
console.log('[PH_LOG] handbag.get():', handbag.get()); // PH_TODO

const result = null;
export default result;
