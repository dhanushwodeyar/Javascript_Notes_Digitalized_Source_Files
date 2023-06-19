document.write("<center><h1>Array of Objects In JavaScript</h1></center><br>");
document.write(
  '<div class="main"><h2>var <span class="name">ArrayOfObj</span><span class="equal">=</span><span class="squer">[</span>  <br> &emsp;&emsp;&emsp;&emsp; <span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Dhanush B"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 2" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "24" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">},</span><br>&emsp;&emsp;&emsp;&emsp; <span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Sangeetha Dhanush"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 21" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "24" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">},</span> <br>&emsp;&emsp;&emsp;&emsp;       <span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Babu NK"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 12" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "44" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">},</span><br>&emsp;&emsp;&emsp;&emsp;<span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Sumathi G"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 21" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "40" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">}</span><br><span class="squer">];</span></h2></div>'
);

var ArrayOfObj = [
  {
    Username: "Dhanush B",
    Password: "Value 2",
    Age: "24"
  },
  {
    Username: "Sangeetha Dhanush",
    Password: "Value 21",
    Age: "23"
  },
  {
    Username: "Babu NK",
    Password: "Value 12",
    Age: "44"
  },
  {
    Username: "Sumathi G",
    Password: "Value 2",
    Age: "40"
  },
];

var Arrayofobject = () => {
  console.log("Object : " + ArrayOfObj);
  alert("Object : " + JSON.stringify(ArrayOfObj));
};
var uaccess = () => {
  for (var i = 0; i < ArrayOfObj.length; i++) {
    console.log("UserName : " + ArrayOfObj[i].Username);
    alert("UserName : " + ArrayOfObj[i].Username);
  }
};
var paccess = () => {
  for (var i = 0; i < ArrayOfObj.length; i++) {
    console.log("Password : " + ArrayOfObj[i].Password);
    alert("Password : " + ArrayOfObj[i].Password);
  }
};
var Aaccess = () => {
  for (var i = 0; i < ArrayOfObj.length; i++) {
    console.log("Age : " + ArrayOfObj[i].Age);
    alert("Age : " + ArrayOfObj[i].Age);
  }
};

var faccess = () => {
  for (i in ArrayOfObj) {
    console.log("Index of Object " + i + " :" + i);
    alert("Index of Object " + i + " : " + i);
  }
};

var daccess = () => {
  for (i of ArrayOfObj) {
    console.log(
      "Element of Array " +
        ArrayOfObj.indexOf(i) +
        "======>" +
        JSON.stringify(i)
    );
    alert(
      "Element of Array " +
        ArrayOfObj.indexOf(i) +
        "======> " +
        JSON.stringify(i)
    );
  }
};
var posaccess = () => {
  var pos = prompt("Enter the position");
  if (pos != 0 && pos < ArrayOfObj.length) {
    console.log(
      "Element of position " +
        pos +
        "======>" +
        JSON.stringify(ArrayOfObj[pos-1])
    );
    alert("Element of position " + pos + "======>" + JSON.stringify(ArrayOfObj[pos-1]));
  } else {
    console.log("Invalid Position access");
    alert("Invalid Position access");
  }
};

