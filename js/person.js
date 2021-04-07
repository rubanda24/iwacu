class person {
    constructor(id,firstName,lastName,age,sex,phone,ubudehe){
     this.id = id,
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
     this.sex = sex;
     this.phone = phone;
     this.ubudehe = ubudehe;
    }
    name(){
        return this.firstName +" "+ this.lastName;
    }
}

let person1 = new person(1,"siborurema","jean jaures",12,"male","0785624824",3);
document.getElementById("p01").innerHTML="hi";