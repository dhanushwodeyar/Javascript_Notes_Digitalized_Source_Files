function verify() {
    var num = Number(document.getElementById("num").value);
  var i = 0;
  while (i <= num) {
    document.write(`<center><h1>${i}</h1></center>`);
    i++;
  }
}
