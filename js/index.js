function changeColor(){
    document.getElementById('color').style.color='red';
}

function changeBack(){
    document.getElementById('body').style.backgroundColor='grey';
}
function home(){
    //document.getElementById('home').style.backgroundColor='cyan';
    //document.getElementById('home').style.color='red';
    

}
const checkNumber = ()=>{
    var date = document.getElementById("date");
    var date1= Number(date);
    if(isNaN(date1)){
        console.log("is not a date format");
    }
    else{
 switch(date1){
    case 1:
        console.log('january');
    break;
    case 2:
        console.log('february'+date1+'2021');
        break;
case 3:
        console.log('march'+date1+'2021');
        break;
 case 4:
        console.log('april'+date1+'2021');
        break;
  case 5:
        console.log('may'+date1+'2021');
        break;
  case 6:
        console.log('june'+date1+'2021');
        break;
    case 7:
        console.log('july'+date1+'2021');
        break;
    case 8:
        console.log('august'+date1+'2021');
        break;
    case 9:
        console.log('september'+date1+'2021');
        break;
    case 10:
        console.log('october'+date1+'2021');
        break;
    case 11:
        console.log('november'+date1+'2021');
        break;
    case 12:
        console.log('december'+date1+'2021');
         break;
    default:'none mentioned';

}

}
}

// retrieve person
const findPerson = ()=>{
const person = {
    id:1,
    firstName:"siborurema",
    lastName:"jean jaures",
    fullName: function(){
     return this.firstName+" "+this.lastName;
    },
    age:27,
    gender:"male",
    phone:"0787383099",
    status:"single",
    ubudehe:3

}
var i;
for(i in person){
    //document.getElementById("demo").innerHTML=person[i];
    console.log(person[i]);
}
}

// check input
 function checkInput() {
      var age, voteable;
      age = document.getElementById("date").value;
      voteable = (age < 18) ? "Too young":"Old enough";
      document.getElementById("demo").innerHTML = voteable + " to vote.";
    }
    // change color
    const changeColor =()=>{
        document.getElementById("body").style.backgroundColor= blue;
    }