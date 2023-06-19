document.write("<center><h1>DOM-Get And Set Method in JavaScript</h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each DOM-Get And Set Method in JavaScript.</h3></center>"
);


var data;
// ==========================> Demonstration of DOM GET Methods  <==========================

// Implimentation of innerText and fetchingthe Data
var GetInnerText = () => {
    data = document.getElementById("content").innerText;
    alert("YOUR CONTENT ==========================>  " + data);
    console.log("YOUR CONTENT ==========================>  " + data);
    document.getElementById("result").innerText =data;
};

// Implimentation of innerHTML and fetchingthe Data
var GetInnerHTML = () => {
    data = document.getElementById("content").innerHTML;
    alert("YOUR CONTENT ==========================>  " + data);
    console.log("YOUR CONTENT ==========================>  " + data);
    document.getElementById("result").innerHTML =data;
};

// Implimentation of getAttribute and fetchingthe Data
var GetAttribute = () => {
    data = document.getElementById("content").getAttribute("class");
    alert("YOUR ATTRIBUTE NAME ==========================>  " + data);
    console.log("ATTRIBUTE NAME ==========================>  " + data);
    document.getElementById("result").innerHTML ="<span>"+data+"</span>";
};

// Implimentation of getAttributeNode and fetchingthe Data
var GetAttributeNode = () => {
    data = document.getElementById("content").getAttributeNode("class").value;
    alert("YOUR ATTRIBUTE NAME ==========================>  " + data);
    console.log("ATTRIBUTE NAME ==========================>  " + data);
    document.getElementById("result").innerHTML ="<span>"+data+"</span>";
};

// Implimentation of attributes and fetchingthe Data
var Getattributes = () => { 
    data = document.getElementById("content").attributes;
    alert("YOUR ATTRIBUTE NAME ==========================>  " + data);
    console.log("ATTRIBUTE NAME ==========================>  " + data);
    document.getElementById("result").innerHTML ="<span>"+data+"</span>";
};



// ==========================> Demonstration of DOM Set Methods  <==========================

// Implimentation of innerText and Inserting Data
var SetInnerText = () => {
    data = prompt("Enter the Paragraph to insert the text Using innerText ");
    document.getElementById("content").innerText=data;
  alert("YOUR CONTENT ==========================>  " + data);
  console.log("YOUR CONTENT ==========================>  " + data);
  document.getElementById("result").innerText = data;
};


// Implimentation of innerHTML and Inserting Data
var SetInnerHTML = () => {
    data = prompt("Enter the Paragraph to insert the text Using innerHTML ");
    document.getElementById("content").innerHTML=data;
  alert("YOUR CONTENT ==========================>  " + data);
  console.log("YOUR CONTENT ==========================>  " + data);
  document.getElementById("result").innerHTML = data;
};

// Implimentation of setAttribute and Inserting Data
var SetAttribute = () => {
    value = prompt("Enter the value for a class Atrribute ");
    document.getElementById("content").setAttribute("class", value);
    data = document.getElementById("content").getAttributeNode("class").value;
  alert("YOUR CONTENT ==========================>  " + data);
  console.log("YOUR CONTENT ==========================>  " + data);
  document.getElementById("result").innerHTML = data;
    document
      .getElementById("dd")
      .setAttribute("style", "background-color:blue");
};

// Implimentation of attribute and Inserting Data
var Atrribute = () => {
  document.getElementById("content").attributes[1].value = "Dhanush_Wodeyar";
  data = document.getElementById("content").getAttributeNode("class").value;
  alert("YOUR CONTENT ==========================>  " + data);
  console.log("YOUR CONTENT ==========================>  " + data);
  document.getElementById("result").innerHTML = data;
};

// Implimentation of removeAttribute and Inserting Data
var RemoveAtrribute = () => {
  document.getElementById("content").removeAttribute("onclick")
  alert("YOUR CONTENT ==========================>  Attribte Removed Succesfully ");
  console.log("YOUR CONTENT ==========================>  Attribte Removed Succesfully  ");
  document.getElementById("result").innerHTML = " Attribte Removed Succesfully ";
};