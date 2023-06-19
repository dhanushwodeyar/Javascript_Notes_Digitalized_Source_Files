function array() {
  // var i;
  document.write(
    "<center><h3>[['Dhanush',30,true,undifind,null,NaN]</h3></center>"
  );
  document.write(
    "<center><h3>['Dhanush',30,true,undifind,null,NaN]</h3></center>"
  );
  document.write(
    "<center><h3>['Dhanush',30,true,undifind,null,NaN]]</h3></center>"
  );
  var arr = [
    ["Dhanush", 4, "Male", 7, 8, 9],
    ["Babu", 9, "Male", 10, 3, 11],
    ["Sumathi", 51, "Female", 7, 18, 91],
    ["Shashank", 41, "Male", 74, 3, 69],
    ["Darshan", 86, "Male", 17, 88, 99],
  ];
  //Copying array to another variable
  var arr1 = arr;
  var arr2 = arr;
  // Displaying orginal  array
    document.write("<center><h1>Original Array</h1></center>");
  document.write("<center><table border='1' cellpadding='10px'>");
  for (var i in arr) {
    document.write("<tr>");
    for (j in arr[i]) {
      document.write(`<td>${arr[i][j]}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</table></center>");

  // Modifying the array elements in an array=arr2
  arr2[1][0] = "Modifyed 1";
  arr2[1][1] = "Modifyed 2";
  arr2[3][2] = "Modifyed 3";
  arr2[2][3] = "Modifyed 4";
  arr2[1][4] = "Modifyed 5";
  arr2[1][5] = "Modifyed 6";
  // Displaying Modifyed  array
  document.write("<center><h1>Modifyed Array</h1></center>");
  document.write("<center><table border='1' cellpadding='10px'>");
  for (var i in arr2) {
    document.write("<tr>");
    for (j in arr2[i]) {
      document.write(`<td>${arr2[i][j]}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</table></center>");

  // Deleting Array Element in an array
  delete arr1[0][0];
  delete arr1[3][5];
  delete arr1[3][1];
  delete arr1[4][0];
  delete arr1[1][2];
  delete arr1[2][2];
 
  arr1[0][0] = "   ";
  arr1[3][5] = "   ";
  arr1[3][1] = "   ";
  arr1[4][0] = "   ";
  arr1[1][2] = "   ";
  arr1[2][2] = "   ";
  // Displaying Deleted  array
  document.write("<center><h1>Deleted Array</h1></center>");
  document.write("<center><table border='1' cellpadding='10px'>");
  for (var i in arr1) {
    document.write("<tr>");
    for (j in arr1[i]) {
      document.write(`<td>${arr1[i][j]}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</table></center>");
}
