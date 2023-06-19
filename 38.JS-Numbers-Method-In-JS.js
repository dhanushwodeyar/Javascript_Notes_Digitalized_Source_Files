document.write("<center><h1>Number-Methods in JavaScript</h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each Number mentods.</h3></center>"
);


var num;

// Inserting the Number
const insert = () => {
   num = prompt("Enter the Number");
  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF THE VALUE</u><br><span>" +
    typeof num +
    "</span> </h1>";
};

// Converting into Number Using Number()
const Convet_to_Number = () => {
    if (num == undefined)
    {
        insert();
    } 
           
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL VALUE</u><br><span>" +
      num +
      "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
      typeof num +
      "</span><br><br><u>CONVERTED TYPE AND VALUE USING NUMBER()</u><br><span>" +
      Number(num) +
      "</span> of type <span>" +
      typeof Number(num) +
      "</span> </h1>";
}

// Converting into Integer Using parseInt()
const Convet_to_Int = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
    typeof num +
    "</span><br><br><u>CONVERTED TYPE AND VALUE USING PARSEINT()</u><br><span>" +
    parseInt(num) +
    "</span> of type <span>" +
    typeof parseInt(num) +
    "</span> </h1>";
};

// Converting into Float Using ParseFloat()
const Convet_to_float = () => {
  if (num == undefined) {
    insert();
  }
  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
    typeof num +
    "</span><br><br><u>CONVERTED TYPE AND VALUE USING PARSEFLOAT()</u><br><span>" +
    parseFloat(num) +
    "</span> of type <span>" +
    typeof parseFloat(num) +
    "</span> </h1>";
};

// Checking Wheter a  Number is Finite Or Not Using isFinite()
const Finite = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
    typeof num +
    "</span><br><br><u>RESULT USING ISFINITE</u><br><span> Number is " +
    isfin() +
    "</span> </h1>";
};
// function for isFinite() 
const isfin = () => {
    return isFinite(num) ? "Finite" : "Infinite";
}


// Checking Wheter a  Number is Integer Or Not Using isInteger()
const Isinteger = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
    typeof num +
    "</span><br><br><u>RESULT USING ISINTEGER</u><br><span> Number is " +
    isint() +
    "</span> </h1>";
};

// function for isInteger() 
const isint = () => {
    return Number.isInteger(Number(num)) ? "Integer" : "Not Integer";
}


// Fixing the number of digites after decimal point using toFixed().
const tofixed = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
    typeof num +
    "</span><br><br><u>RESULT USING TOFIXED</u><br><span> Number is " +
    Number(num).toFixed(2) +
    "</span> </h1>";
};

// Fixing the number of digites after decimal point using toPrecision().
const toprec = () => {
  if (num == undefined) {
    insert();
  }

  document.getElementById("result").innerHTML =
    "<h1><u>ORGINAL VALUE</u><br><span>" +
    num +
    "</span><br><br><u>TYPE OF VALUE</u><br><span>" +
    typeof num +
    "</span><br><br><u>RESULT USING TOFIXED</u><br><span> Number is " +
    Number(num).toPrecision(6) +
    "</span> </h1>";
};

// Deleting the Value From a Variable
const clearing = () => {
  if (num != undefined) {
      num = undefined;
       document.getElementById("result").innerHTML =
         "<h1>The Number Is Deleted Successfully.........<br>";
  } else {
    document.getElementById("result").innerHTML =
      "<h1>The Number Variable is Already Empty Please Insert A Number to Perform the Operation.....<br>";
  }
};