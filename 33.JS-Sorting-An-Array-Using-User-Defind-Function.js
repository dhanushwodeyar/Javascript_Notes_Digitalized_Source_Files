var arr = new Array();
var num;
function sorting() {
  num = prompt("Enter the number of elements in an array: ");
  for (var i = 0; i < num; i++) {
    arr.push(prompt("Enter the Array Item-" + (i + 1)));
  }
  if (arr.length != 0) {
    var temp;
    for (var i = 0; i < num; i++) {
      for (var j = i+1; j < num; j++) {
        if (arr[i] >= arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      }
        for (var i = 0; i < num; i++) {
          document.write("<h1>" + arr[i] + "</h1>");
        }
  }

}
