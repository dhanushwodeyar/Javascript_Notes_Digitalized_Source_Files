function promptbox() {
  var value = prompt("Please Enter your name");
  var res = confirm("Are u Sure Do you want to allow the alert message");
  if (res) {
      alert("your are name is " + value);
    document.querySelector(".result").innerHTML = "<center><h1>your are name is " + value + "</h1></center>";
  } else {
    alert(
      "thank you for your cancelation " + res
    );
    document.querySelector(".result").innerHTML =
      "<center><h1>you have canceld the Request</h1></center>";

  }
}
