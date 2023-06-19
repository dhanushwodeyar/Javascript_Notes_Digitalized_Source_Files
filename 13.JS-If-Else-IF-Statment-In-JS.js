var data1 = 30,
  data2 = "30",
  data3 = 40;
document.write("<pre><h1>  If Else If condition</h1></pre>");
document.write(`<h2>var data1=${data1}</h2>`);
document.write(`<h2>var data2=${data2}</h2>`);
document.write(`<h2>var data3=${data3}</h2>`);
if (data1 == data2) {
  document.write("data1==data2<br><br>");
} else if(data1!=data2) {
  document.write("data1==data2 ==>Both are NOT Equal<br><br>");
}
if (data1 === data2) {
  document.write("data1===data2<br><br>");
} else  if (data1 != data2) {
  document.write(
    "data1===data2 ==>Both are NOT Equal and diffrent type<br><br>"
  );
}
if (data1 > data3) {
  document.write("data1 is Grater<br><br>");
} else if (data3>data1) {
  document.write("data1>data3 ==> data3 is Gratter <br><br>");
}
if (data1 < data3) {
  document.write("data1 is Lesser<br><br>");
} else if(data3<data1) {
  document.write("data1<data3 ==> data3 is Lesser <br><br>");
}
if (data1 <= data3) {
  document.write("data1 is Lesser than equal<br><br>");
} else if (data3 <= data1) {
  document.write("data1<=data3 ==> data3 is Lesser than equal <br><br>");
}
if (data1 >= data3) {
  document.write("data1 is Grater than equal<br><br>");
} else if (data3 >= data1) {
  document.write("data1>=data3 ==> data3 is Grater than equal <br><br>");
}
