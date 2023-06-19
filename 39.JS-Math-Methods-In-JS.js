document.write("<center><h1>Math-Methods in JavaScript</h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each Math mentods.</h3></center>"
);

var num;
var num1;
// Inserting the Number
const insert = () => {
  num = prompt("Enter the Float Number 1");
  document.getElementById("result").innerHTML =
    "<h1><u> VALUE 1</u><br><span>" + num + "</span> </h1>";
};
const insert1 = () => {
  num1 = prompt("Enter the Float Number 2");
  document.getElementById("result1").innerHTML =
    "<h1><u> VALUE 2</u><br><span>" + num1 + "</span> </h1>";
};

// Demonstrating Ceil()
const Ceil = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING CEIL()</u><br><span>" +
    Math.ceil(Number(num)) +
    "</span> </h1>";
};

// Demonstrating Floor()
const Floor = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING FLOOR()</u><br><span>" +
    Math.floor(Number(num)) +
    "</span> </h1>";
};

// Demonstrating Round()
const Round = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING FLOOR()</u><br><span>" +
    Math.round(Number(num)) +
    "</span> </h1>";
};

// Demonstrating Trunc()
const Trunc = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING TRUNC()</u><br><span>" +
    Math.trunc(Number(num)) +
    "</span> </h1>";
};

// Demonstrating Max()
const Max = () => {
  if (num == undefined) {
    insert();
  }
  if (num1 == undefined) {
    insert1();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING MAX()</u><br>Max(" +
    num +
    " , " +
    num1 +
    ")<br><span>" +
    Math.max(Number(num), Number(num1)) +
    "</span> </h1>";
};

// Demonstrating Min()
const Min = () => {
  if (num == undefined) {
    insert();
  }
  if (num1 == undefined) {
    insert1();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING MIN()</u><br>Min(" +
    num +
    " , " +
    num1 +
    ")<br><span>" +
    Math.min(Number(num), Number(num1)) +
    "</span> </h1>";
};

// Demonstrating Sqrt()
const Sqrt = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING SQRT()</u><br><span>" +
    Math.sqrt(Number(num)) +
    "</span> </h1>";
};

// Demonstrating Cbrt()
const Cbrt = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING Cbrt()</u><br><span>" +
    Math.cbrt(Number(num)) +
    "</span> </h1>";
};

// Demonstrating Pow()
const Pow = () => {
  if (num == undefined) {
    insert();
  }
  if (num1 == undefined) {
    insert1();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING POW()</u><br>Pow(" +
    num +
    " , " +
    num1 +
    ")<br><span>" +
    Math.pow(Number(num), Number(num1)) +
    "</span> </h1>";
};

// Demonstrating Random()
const Random = () => {
  document.getElementById("result").innerHTML =
    "<h1><br><br><u>RESULTING AFTER USING Random()</u><br><span>" +
    Math.trunc(Math.random() * 100) +
    "</span> </h1>";
};

// Demonstrating Abs()
const Abs = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>RESULTING AFTER USING ABS()</u><br>Abs(" +
    num +
    ")<br><span>" +
    Math.abs(Number(num)) +
    "</span> </h1>";
};

// Demonstrating PI()
const Pi = () => {
  document.getElementById("result").innerHTML =
    "<h1><br><br><u>RESULTING AFTER USING PI</u><br><span>" +
    Math.PI +
    "</span> </h1>";
};
// Deleting the Value From a Variable
const clearing = () => {
  if (num != undefined || num1 != undefined) {
    num = undefined;
    num1 = undefined;
    document.getElementById("result").innerHTML =
      "<h1>The Numbers Is Deleted Successfully.........<br>";
  } else {
    document.getElementById("result").innerHTML =
      "<h1>The Number Variables is Already Empty Please Insert A Number to Perform the Operation.....<br>";
  }
};
