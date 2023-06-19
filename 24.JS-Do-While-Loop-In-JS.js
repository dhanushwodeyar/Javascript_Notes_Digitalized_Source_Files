function verify() {
  var num = Number(document.getElementById("num").value);
  var i = 0;
    do {
      document.write(`<center><h1>${i}</h1></center>`);
      i++;
    } while (i <= num);
}
