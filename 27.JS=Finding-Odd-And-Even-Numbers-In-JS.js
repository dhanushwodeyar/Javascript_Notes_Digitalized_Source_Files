function verify() {
    var num = Number(document.getElementById("num").value);
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            document.write(`<center><h3>${i} EVEN</h3></center>`);
        }
        else {
            document.write(`<center><h3>${i} ODD</h3></center>`);
        }
    }
}
