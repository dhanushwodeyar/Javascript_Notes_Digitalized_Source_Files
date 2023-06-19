var val = prompt("Please Enter your name");
function functions(value="Nothing send by the user it is default value") {
  var res = confirm("Are u Sure Do you want to allow the alert message");
  if (res) {
    alert("your are name is " + value);
    document.querySelector(".result").innerHTML=`<center><h1>Welcome ${value}</h1></center>`;
  } else {
    alert("thank you for your cancelation " + res);
    document.querySelector(".result").innerHTML=`<center><h1>you have canceld the Request</h1></center>`;
  }
}

function functioncall(){
    functions(val);

}
