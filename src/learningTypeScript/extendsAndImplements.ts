class ExtendsAndImplements {
  printCar = () => {
    console.log("[PH_LOG] this is my car"); // PH_TODO
  };
}
interface NewCar extends ExtendsAndImplements {
  name: String;
}
class NewestCar implements NewCar {
  name = "Car";
  constructor(name: string) {
    this.name = name;
  }
  printCar = () => {
    console.log("[PH_LOG] this is my newest car", this.name); // PH_TODO
  };
}
const car = new ExtendsAndImplements();
car.printCar();
const newestCar = new NewestCar("Silberglöckchen");
newestCar.printCar();

const result = null;
export default result;
