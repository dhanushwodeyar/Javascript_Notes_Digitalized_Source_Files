function array() {
  // var i;
    document.write(
      "<center><h1>['Dhanush',30,true,undifind,null,NaN]</h1></center>"
    );
  var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var arr1 = new Array("Dhanush", 100, null, undefined, true, NaN);
  for (i in arr) {
    document.write(`<b>${arr[i]}<br></b>`);
    if (i < arr1.length) {
      document.write(`<b>${arr1[i]}<br></b>`);
    }
  }
}
