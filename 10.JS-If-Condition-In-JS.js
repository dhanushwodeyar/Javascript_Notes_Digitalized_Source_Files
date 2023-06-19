var data1 = 30, data2 = "30", data3 = 40;
document.write("<h1>If condition</h1><br><br>");
if(data1==data2){
    document.write("data1==data2<br><br>");
}
if (data1 === data2) {
  document.write("data1===data2<br><br>");
}
if (data1 > data3) {
    document.write("data1 Grater<br><br>");
}
if (data1 < data3) {
  document.write("data1 Lesser<br><br>");
}
if (data1 <= data3) {
  document.write("data1 Lesser than equal<br><br>");
}
if (data1 >= data3) {
  document.write("data1 grater than equal<br><br>");
}

function verify() {
  var result;
 var year = Number(document.getElementById("year").value);
  if (((year%4==0) && (year%100!=0))||(year%400==0))
  {
    result =  " is a Leap Year";
  }
  else {
    result =  " is not a Leap Year";
  }
  document.write(`<center><h2>${result}</h2></center>`);
}

