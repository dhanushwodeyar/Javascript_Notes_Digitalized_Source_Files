document.write("<center><h1>DOM-Targeting in JavaScript</h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each DOM Targetting Ways.</h3></center>"
);
var index;
var ele;

// Demonstrating document object
var Documents = () => {
  ele = document;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.all object
var DocumentsAll = () => {
  ele = document.all;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.all[] object
var DocumentsAllwithIndex = () => {
  index = Number(
    prompt("Enter the index Access Spesific Element In A DOM Tree : ")
  );
  console.log(index);
  if (index === 0) {
    alert("please Enter some index to perform this operation :");
  } else {
    ele = document.all[index];
    alert(
      "Please shit to the console window to see the Actual results : " + ele
    );
    console.log(ele);
  }
};

// Demonstrating document.head object
var DocumentsHead = () => {
  ele = document.head;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.title object
var DocumentsTitle = () => {
  ele = document.title;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.body object
var DocumentsBody = () => {
  ele = document.body;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.links object
var DocumentsLinks = () => {
  ele = document.links;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.links[] object
var DocumentsLinkswithIndex = () => {
  index = Number(
    prompt("Enter the index Access Spesific Element In A DOM Tree : ")
  );
  console.log(index);
  if (index === 0) {
    alert("please Enter some index to perform this operation :");
  } else {
    ele = document.links[index];
    alert(
      "Please shit to the console window to see the Actual results : " + ele
    );
    console.log(ele);
  }
};

// Demonstrating document.images object
var DocumentsImages = () => {
  ele = document.images;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.images[] object
var DocumentsImageswithIndex = () => {
  index = Number(
    prompt("Enter the index Access Spesific Element In A DOM Tree : ")
  );
  console.log(index);
  if (index === 0) {
    alert("please Enter some index to perform this operation :");
  } else {
    ele = document.images[index];
    alert(
      "Please shit to the console window to see the Actual results : " + ele
    );
    console.log(ele);
  }
};

// Demonstrating document.forms object
var DocumentsForms = () => {
  ele = document.forms;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.forms[] object
var DocumentsFormswithIndex = () => {
  index = Number(
    prompt("Enter the index Access Spesific Element In A DOM Tree : ")
  );
  console.log(index);
  if (index === 0) {
    alert("please Enter some index to perform this operation :");
  } else {
    ele = document.forms[index];
    alert(
      "Please shit to the console window to see the Actual results : " + ele
    );
    console.log(ele);
  }
};

// Demonstrating document.URL object
var DocumentsURL = () => {
  ele = document.URL;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.domain object
var DocumentsDomain = () => {
  ele = document.domain;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.baseURI object
var DocumentsBaseURI = () => {
  ele = document.baseURI;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.anchors object
var DocumentsAnchors = () => {
  ele = document.anchors;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.documentElement object
var DocumentsDocumentElement = () => {
  ele = document.documentElement;
  alert("Please shit to the console window to see the Actual results : " + ele);
  console.log(ele);
};

// Demonstrating document.getElementById object
var DocumentsGetElementById = () => {
  ele = document.getElementById("result");
  alert("Your Reference Using getElementById Is: " + ele);
  ele.innerHTML =
    "<h1>This is a modification using getElementById Reference</h1>";
  console.log("Your Reference Using getElementById Is :" + ele);
};

// Demonstrating document.getElementsByClassName object
var DocumentsGetElementsByIdClassName = () => {
  ele = document.getElementsByClassName("result1");
  alert("Your Reference Using getElementsByClassName Is: " + ele);
  ele.innerHTML =
    "<h1>This is a modification using getElementsByClassName Reference</h1>";
  console.log("Your Reference Using getElementsByClassName Is :" + ele);
};

// Demonstrating document.getElementsByTagName object
var DocumentsGetElementsByTagName = () => {
  ele = document.getElementsByTagName("article");
  alert("Your Reference Using getElementsByTagName Is: " + ele);
  ele.innerHTML =
    "<h1>This is a modification using getElementsByTagName Reference</h1>";
  console.log("Your Reference Using getElementsByTagName Is :" + ele);
};
