// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     // let date = new Date();
//     // return date.getFullYear() - this.year;
//     return x - this.year;
//   }
// }

// let date = new Date();
// let year = date.getFullYear();
// let myCar = new Car("Ford", 2014);
// // document.getElementById("demo").innerHTML =
// //   "My car is " + myCar.age() + " years old.";
// document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age(year) + " years old.";
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
