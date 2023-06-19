document.write("<center><h1>Date-Methods in JavaScript</h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each Date mentods.</h3></center>"
);

// Demonstrating of creation of Date and time Object using Date() constructor and new Keyword
let current_dateAndtime;
let CurrentDateAndTime = () => {
  current_dateAndtime = new Date();
  document.getElementById("result").innerHTML =
    "<h1><u>Current Date And Time Is...</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
  document.getElementById("result1").innerHTML = "";
};

// Demonstarting toLocaleString()
let ToLocaleString = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using toLocaleString()</u><br><span>" +
    current_dateAndtime.toLocaleString() +
    "</span></h1>";
};

// Demonstarting toString()
let ToString = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using toString()</u><br><span>" +
    current_dateAndtime.toString() +
    "</span></h1>";
};

// Demonstarting toDateString()
let ToDateString = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using toDateString()</u><br><span>" +
    current_dateAndtime.toDateString() +
    "</span></h1>";
};

// Demonstarting getDate()
let GetDate = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getDate()</u><br><span>" +
    current_dateAndtime.getDate() +
    "</span></h1>";
};

// Demonstarting getFullYear()
let GetFullYear = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getFullYear()</u><br><span>" +
    current_dateAndtime.getFullYear() +
    "</span></h1>";
};
// Demonstarting getMonth()
let GetMonth = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getMonth()</u><br><span>" +
    current_dateAndtime.getMonth() +
    "</span></h1>";
};

// Demonstarting getDay()
let GetDay = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getDay()</u><br><span>" +
    current_dateAndtime.getDay() +
    "</span></h1>";
};

// Demonstarting getHours()
let GetHours = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getHours()</u><br><span>" +
    current_dateAndtime.getHours() +
    "</span></h1>";
};

// Demonstarting getMinutes()
let GetMinutes = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getMinutes()</u><br><span>" +
    current_dateAndtime.getMinutes() +
    "</span></h1>";
};

// Demonstarting getSeconds()
let GetSeconds = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getSeconds()</u><br><span>" +
    current_dateAndtime.getSeconds() +
    "</span></h1>";
};
// Demonstarting getMilliseconds()
let GetMilliseconds = () => {
  CurrentDateAndTime();
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using getMilliseconds()</u><br><span>" +
    current_dateAndtime.getMilliseconds() +
    "</span></h1>";
};

// Demonstarting setDate()
let SetDate = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the Date value to set");
  current_dateAndtime.setDate(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setDate()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting setFullYear()
let SetFullYear = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the Year value to set");
  current_dateAndtime.setFullYear(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setFullYear()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting setHours()
let SetHours = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the Hours value to set");
  current_dateAndtime.setHours(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setHours()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting setMilliseconds()
let SetMilliseconds = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the MilliSeconds value to set");
  current_dateAndtime.setMilliseconds(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setMilliseconds()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting setMinutes()
let SetMinutes = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the Minutes value to set");
  current_dateAndtime.setMinutes(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setMinutes()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting setMonth()
let SetMonth = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the Month value to set");
  current_dateAndtime.setMonth(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setMonth()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting setSeconds()
let SetSeconds = () => {
  CurrentDateAndTime();
  var val = prompt("Enter the Seconds value to set");
  current_dateAndtime.setSeconds(Number(val));
  document.getElementById("result1").innerHTML =
    "<h1><u> Date And Time After Using setSeconds()</u><br><span>" +
    current_dateAndtime +
    "</span></h1>";
};

// Demonstarting Deletion of all the value
let Clearing = () => {
  if (current_dateAndtime != undefined || current_dateAndtime != undefined) {
    current_dateAndtime = undefined;
    document.getElementById("result").innerHTML =
      "<h1>The Current Date And Time as been Deleted Successfully.........<br>";
    document.getElementById("result1").innerHTML = "";
  } else {
    document.getElementById("result").innerHTML =
      "<h1>The current_dateAndtime Variables is Already Empty Please Insert A Date to Perform the Operation.....<br>";
  }
};