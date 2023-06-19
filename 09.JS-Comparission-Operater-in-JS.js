var a = 20,
    b = 30,
    c = "20",
    d="30";
document.write(
  "<br><br><b><center><h1>COMPARISSION OPERSTIONS</h1></center></b>"
);
document.write(
  `<b><center> <h2>var a =${a} ,var b =${b} ,var c =${c} ,var d =${d}</h2></center></b>`
);
document.write("<b><br>EQUAL-TO<br></b><br>");
document.write(`${a}==${c} : ${a==c}<br><br>`);
document.write("<b><br>EXCETLY-EQUAL-TO<br></b><br>");
document.write(`${a}===${c} : ${a===c}<br><br>`);
document.write("<b><br>NOT-EQUAL-TO<br></b><br>");
document.write(`${a}!=${b} : "${a!=b}<br><br>`);
document.write("<b><br>GRATER-THAN<br></b><br>");
document.write(`${a}>${b} : ${a>b}<br><br>`);
document.write("<b><br>LESSER-THAN<br></b><br>");
document.write(`${a}<${b} : ${a<b}<br><br>`);
document.write("<b><br>LESSER-THAN-EQUAL-TO<br></b><br>");
document.write(`${a}<=${b} : ${a<=b}<br><br>`);
document.write("<b><br>GRATER-THAN-EQUAL-TO<br></b><br>");
document.write(`${a}>=${b} :${a>=b}<br><br>`);
