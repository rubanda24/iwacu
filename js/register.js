function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("nid").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 16) throw "enter 16 digit";
      if(x > 16) throw "id must have only 16 digit";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
    
  }

  //display data from input
  const display = () =>{
      let a = document.getElementById("nid").value;
      x = Number(a);
      if(isNaN(x)){
          alert("not a number")
      }else{
        window.alert(a);
      }
     
  }
  window.addEventListener("", function(){
    document.getElementById("p01").innerHTML= "helllo"
  })

  //check input search
  const checkInput = () =>{
    
      var x, text;
    
      // Get the value of the input field with id="numb"
      x = document.getElementById("nid").value;
    
      // If x is Not a Number or less than one or greater than 10
      if (isNaN(x) ) {
        text = "only number allowed";
      } 
      else if (x<16) {
        text = "entered over 16 digit";
      }
      document.getElementById("p01").innerHTML = text;
    
  }