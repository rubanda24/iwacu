class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  const showAge = () =>{
    let date = new Date();
    let year = date.getFullYear();
    
    let myCar = new Car("Ford", 2014);
    document.getElementById("p01").innerHTML=
    "My car is " + myCar.age(year) + " years old.";
 
  }