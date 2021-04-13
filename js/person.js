class person {
    constructor(pid,id,firstname,lastname,age,sex,phone,ubudehe,zone,prison){
     this.pid = pid;
     this.id = id;
     this.firstname = firstname;
     this.lastname = lastname;
     this.age = age;
     this.sex = sex;
     this.phone = phone;
     this.ubudehe = ubudehe;
     this.zone = zone;
     this.prison = prison;
    }
    // seters and geters of my fields
    
    //first name
    set firstName(firstname){
      this.firstname = firstname;
    }
    get firstName(){
      return this.firstname
    }
    //last name
    set lastName(lastname){
      this.lastname = lastname;
    }
    get lastName(){
      return this.lastname
    }
    //age
    set age1(age){
      this.age = age;
    }
    get age1(){
      return this.age;
    }
    //set and get zone
    set Zone(zone1){
     this.zone = zone1;
    }
    get Zone(){
      return this.zone;
    }
    // set and get ubudehe

    set Ubudehe (ubudehe1){
     this.ubudehe= ubudehe1;
    }
    get Ubudehe(){
      return this.ubudehe;
    }
    // set and get prison
    
    set Prison (prison1){
      this.prison= prison1;
     }
     get Prison(){
       return this.prison;
     }
    //

    secondName(){
      
      return "hello";
    }
    name(){
        return this.secondName()+" "+ this.firstName +" "+ this.lastName+" "+ this.age;
    }
}



const showName = () =>{
  var firstname1 = document.getElementById("firstname").Value;
  var lastname1 = document.getElementById("lastname").Value;
  var age1 = document.getElementById("age").Value;
  var sex1= document.getElementById("sex").Value;
  var phone1 = document.getElementById("phone").Value;
  var ubudehe1 = document.getElementById("ubudehe").Value;
   // var person1 = new person(1,1,firstname1,lastname1,age1,sex1,phone1,ubudehe1);
    var person1 = new person(1,1,"rubanda","shyashya",12,"m",089,6);

console.log(person1.name());

}
// visitor inherit person
class visitor extends person{
  constructor(firstname,lastname,age,phone){
    super(firstname);

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.phone = phone;

  }
  // AGE CALL
  
  fullName(){
    return this.name()+" "+ this.phone;
  }
}


const vis = () =>{
  let v = new visitor("jimmy","maruwa",12,089898);
 document.getElementById("demo").innerHTML = v.fullName();
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

  // callbacks and asynchronous
  function display(a){
    console.log(a);
  }
  function calculate(b,c,displayer){
    let sum = b+c;
    displayer(sum);
  }
  calculate(1,2,display);

  //show the value entered by user
  function show(firstname1){
    firstname1 = document.getElementById("firstname1").Value;
  console.log("my names is Rubanda");
  }
  function show1(firstname1){
    firstname1 = document.getElementById("firstname1").Value;
  console.log("also shyashya");
  }
  function delay(){
    setInterval(show,3000);
    setTimeout(show1,5000);
  }

  //promises
  function check(some){
  
    document.getElementById("demo").innerHTML= some;
    }
    let myPromise = new Promise(function(myResolve,myReject){
        var a =document.getElementById("firstname1").value;
        //var a1 = Number(a);
        if(!isNaN(a)){
            myResolve("is a number");
        } else{
            myReject("no a number");
        } 
    });
    myPromise.then(
        function(value){check(value);},
        function(error){ check(error);}
    );


  
 