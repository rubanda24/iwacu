class person {
    constructor(pid,firstName,lastName,age,sex,phone,ubudehe){
      this.pid = pid;
     this.id = id,
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
     this.sex = sex;
     this.phone = phone;
     this.ubudehe = ubudehe;
    }
    // seters and geters of my fields
    set id(id){
      this.id = id;
    }

    get id(){
      return this.id;
    }
    //first name
    set firstName(firstName){
      this.firstName = firstName;
    }
    get firstName(){
      return this.firstName
    }
    //last name
    set lastName(lastName){
      this.lastName = lastName;
    }
    get lastName(){
      return this.lastName
    }
    //age
    set age(age){
      this.age = age;
    }
    get age(){
      return this.age;
    }
    //
    name(){
        return this.firstName +" "+ this.lastName+" "+ this.age;
    }
}


const showName = () =>{
    var person1 = new person(1,"siborurema","jean jaures",12,"male","0785624824",3);

document.getElementById("p01").innerHTML = person1.name();

}

class visitor extends person{
  constructor(pid,firstName,lastName,age,phone){
    super(pid);

    this.firstName=firstName;
  }
  fullName(){
    return this.name()+" "+ this.firstName
  }
}


const vis= () =>{
  let v = new visitor("jimmy");
  document.getElementById("p01").innerHTML = v.fullName();
}






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