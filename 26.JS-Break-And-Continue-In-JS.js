function verify() {
  var num = Number(document.getElementById("num").value);
  for (var i = 0; i <= num; i++) {
    if (i % 3 == 0) {
      document.write(`<center><h1>${i}</h1></center>`);
      continue;
    } else if (i == 10) {
      document.write(`<center><h1>${i}</h1></center>`);
      break;
      }
  }
}
