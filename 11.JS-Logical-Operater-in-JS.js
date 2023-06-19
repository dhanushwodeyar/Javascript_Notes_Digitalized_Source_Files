var a = 20,
  b = 30,
  c = "20",
  d = "30";
document.write(
  "<br><br><b><center><h1>LOGICAL OPERSTIONS</h1></center></b>"
);
document.write(
  `<b><center> <h2>var a =${a} ,var b =${b} ,var c =${c} ,var d =${d}</h2></center></b>`
);
document.write("<b><br>LOGICAL AND(&&) OPERATION<br></b><br>");
document.write(`${a}==${c} && ${c}==${d} : ${(a==c)&&(c==d)}<br>`);
document.write(`${a}===${c} && ${b}===${d}: ${(a===c) && (b===d)}<br><br>`);
document.write("<b><br>LOGICAL OR(||) OPERATION <br></b><br>");
document.write(`${a}>${c} || ${c}<${d} : ${(a>c) || (c<d)}<br>`);
document.write(`${a}>=${c} || ${b}<=${d}: ${(a>=c) || (b<=d)}<br><br>`);
document.write("<b><br>LOGICAL NOT(!) OPERATION <br></b><br>");
document.write(`!(${a}>${c}) && !(${c}!=${d}) : ${!(a>c) && !(c<d)}<br>`);
document.write(`!(${a}>=${c}) || !(${b}<=${d}): ${!(a>=c) || !(b<=d)}<br><br>`);;
