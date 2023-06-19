function verify() {
    var num = Number(document.getElementById("num").value);
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            document.write(j+" ,");
        }
        document.write("<br>");
    }
}