var val = prompt("Please Enter your name");
function functions(value = "Nothing send by the user it is default value") {
  var res = confirm("Are u Sure Do you want to allow the alert message");
  if (res) {
    alert("your are name is " + value);
    return value;
  } else {
    alert("thank you for your cancelation " + res);
    document.querySelector(".result").innerHTML=`<center><h1>you have canceld the Request</h1></center>`;
  }
}

function functioncall() {
  var revalue1 = functions(val);
  document.querySelector(".result1").innerHTML=`<center><h1>Welcome ${revalue1}</h1></center>`;
  var revalue2 = functions();
  document.querySelector(".result2").innerHTML=`<center><h1>Welcome ${revalue2}</h1></center>`;
}
