function pattren1() {
  var num = Number(document.getElementById("num").value);
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      document.write(i + " ");
    }
    document.write("<br>");
  }
}
function pattren2() {
  var num = Number(document.getElementById("num").value);
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      document.write(i + " ");
    }
    document.write("<br>");
  }
}
function pattren3() {
  var num = Number(document.getElementById("num").value);
  for (var i = 1; i <= num; i++) {
    for (var j = i; j <= num; j++) {
      document.write(i + " ");
    }
    document.write("<br>");
  }
}
function pattren4() {
  var num = Number(document.getElementById("num").value);
  for (var i = 1; i <= num; i++) {
    for (var j = i; j <= num; j++) {
      document.write("  .");
    }
    for (var k = 1; k <= i; k++) {
      document.write(i);
    }
    for (var p = 1; p <= i - 1; p++) {
      document.write(i);
    }

    document.write("<br>");
  }
}
function pattren5() {
  var num = Number(document.getElementById("num").value);
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      document.write("   .");
    }
    for (var k = i; k <= num; k++) {
      document.write(i);
    }
    for (var p = i; p <= num - 1; p++) {
      document.write(i);
    }
    document.write("<br>");
  }
}
function pattren6() {
  var num = Number(document.getElementById("num").value);
  for (var i = 1; i <= num; i++) {
    for (var j = i; j <= num; j++) {
      document.write("  .");
    }
    for (var k = 1; k <= i; k++) {
      document.write(k);
    }
    for (var p = 1; p <= i - 1; p++) {
      document.write(p);
    }
    document.write("<br>");
  }
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      document.write("  .");
    }
    for (var k = i; k <= num; k++) {
      document.write(k);
    }
    for (var p = i; p <= num - 1; p++) {
      document.write(p);
    }
    document.write("<br>");
  }
}
