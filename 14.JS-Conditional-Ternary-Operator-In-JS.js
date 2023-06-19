function verify() {
    var Age = Number(document.getElementById("age").value);
    var result = (Age >= 18) ? "You Are Eligible For Voting" : "You Are Not Eligible For Voting"; 
    document.write(`<center><h2>${result}</h2></center>`)
}
