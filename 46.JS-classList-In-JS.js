document.write("<center><h1>JavaScript classList Methods </h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each JavaScript classList Methods . </h3></center>"
);

var classes = new Array();
var num;
var classlist;

// Demonstration of classList.add()
function addClasses() {
  document.getElementById("result").innerHTML =
    "<h1><u> Classes Before Adding classes Is</u><br><span>" +
    document.getElementById("content").classList;
  +"</span></h1>";
  num = Number(prompt("Enter the Number of Classes that you want to add  : "));
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      classes[i] = prompt("Enter the Class Name " + (i + 1) + " : ");
      document.querySelector(".disc").classList.add(classes[i]);
    }
    classlist = document.querySelector(".disc").classList;
    alert("Your Class Lists After Adding Class is : " + classlist);
    console.log("Your Class Lists After Adding Class is : " + classlist);
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes After Adding classes Is </u><br><span>" +
      classlist +
      "</span></h1>";
  } else alert("Please Enter the  Number of Elements more than Zero : ");
}

// Demonstration of classList.remove()
function removeClasses() {
  document.getElementById("result").innerHTML =
    "<h1><u> Classes Before Removing classes Is</u><br><span>" +
    document.getElementById("content").classList;
  +"</span></h1>";
  classlist = document.querySelector(".disc").classList;
  console.log(classlist);
  var num = Number(
    prompt("enter the number of classes that you want to delete")
  );
  if (num <= classlist.length) {
    for (var i = 0; i < num; i++) {
      classes[i] = prompt("Enter the class name that you want to delete");

      if (Object.values(classlist).includes(classes[i])) {
        document.querySelector(".disc").classList.remove(classes[i]);
        alert("Deleted Successfully..................");
        document.getElementById("result1").innerHTML =
          "<h1><u>Classes After Adding classes Is </u><br><span>" +
          document.querySelector(".disc").classList;
        +"</span></h1>";
      } else {
        break;
      }
    }
  } else {
    alert("The number of classes exist is " + classlist.length);
  }
  console.log(document.querySelector(".disc").classList);
}

// Demonstration of Length and Displaying the classes()
var display = () => {
  classlist = document.querySelector("#content").classList;
  if (classlist.length > 0) {
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>" +
      Object.values(classlist);
    +"</span></h1>";
    alert(" your classes are : " + classlist);
    console.log(" your classes are : " + classlist);
  } else {
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>There is no Classes Exist</span></h1>";
    alert(" your classes are :  Empty");
    console.log(" your classes are :  Empty");
  }
};

// Demonstration of classList.toggle()
var toggleClass = () => {
  document.querySelector("body").classList.toggle("Dhanush");

  classlist = document.querySelector("body").classList;
  if (classlist.length > 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>" +
      Object.values(classlist);
    +"</span></h1>";
    alert(" your classes are : " + classlist);
    console.log(" your classes are : " + classlist);
  } else {
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>There is no Classes Exist</span></h1>";
    alert(" your classes are :  Empty");
    console.log(" your classes are :  Empty");
  }
};

// Demonstration of classList.length
var lengthofclass = () => {
  classlist = document.querySelector("#content").classList;
  if (classlist.length > 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>" +
      Object.values(classlist);
    +"</span></h1>";
    document.getElementById("result1").innerHTML =
      "<h1><u>Length of the classes is : </u><br><span>" + classlist.length;
    +"</span></h1>";
    alert(
      "The Classes and the length of the class is : " +
        classlist +
        "==========================>>" +
        classlist.length
    );
    console.log(
      "The Classes and the length of the class is : " +
        classlist +
        "==========================>>" +
        classlist.length
    );
  } else {
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>There is no Classes Exist</span></h1>";
    alert(" your classes are :  Empty");
    console.log(" your classes are :  Empty");
  }
};

// Demonstration of classList.item()
var classitem = () => {
  classlist = document.querySelector("#content").classList;
  if (classlist.length > 0) {
    var index = Number(prompt("Enter the number to acess the class : "));
    if (index <= classlist.length) {
      document.getElementById("result").innerHTML =
        "<h1><u>Classes In the Elements are </u><br><span>" +
        Object.values(classlist);
      +"</span></h1>";
      document.getElementById("result1").innerHTML =
        "<h1><u>The Item in the " +
        index +
        "<sup>th</sup> Position is : </u><br><span>" +
        classlist.item(index - 1);
      +"</span></h1>";
      alert(
        "The Classes and the item in the " +
          index +
          " Position of the class is : " +
          classlist +
          "==========================>>" +
          classlist.item(index - 1)
      );
      console.log(
        "The Classes and the item in the " +
          index +
          " Position of the class is : " +
          classlist +
          "==========================>>" +
          classlist.item(index - 1)
      );
    } else {
      document.getElementById("result").innerHTML =
        "<h1><u>Clasess in the Elements are :</u><br><span>" +
        classlist +
        "</span></h1>";
      document.getElementById("result1").innerHTML =
        "<h1><u>Result After using item() is:</u><br><span>Please Enter the number with in the range </span></h1>";
      alert(
        "Clasess in the Elements are : " +
          classlist +
          "==============> Please Enter the number with in the range... "
      );
      console.log(
        "Clasess in the Elements are : " +
          classlist +
          "==============> Please Enter the number with in the range... "
      );
    }
  } else {
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>There is no Classes Exist</span></h1>";
    alert(" your classes are :  Empty");
    console.log(" your classes are :  Empty");
  }
};

// Demonstration of classList.contains()
var classcontains = () => {
  classlist = document.querySelector("#content").classList;
  if (classlist.length > 0) {
    var cls = prompt("Enter the Class that you want check ");
    document.getElementById("result").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>" +
      Object.values(classlist);
    +"</span></h1>";
    if (classlist.contains(cls)) {
      document.getElementById("result1").innerHTML =
        "<h1><u>Length of the classes is : </u><br><span> the item that you are searching " +
        cls +
        " Was Found </span></h1>";
      alert(
        " the item that you are searching " +
          cls +
          " Was Found  " +
          classlist +
          "==========================>>" +
          cls
      );
      console.log(
        " the item that you are searching " +
          cls +
          " Was Found  " +
          classlist +
          "==========================>>" +
          cls
      );
    } else {
      document.getElementById("result1").innerHTML =
        "<h1><u>Result after using ClassList.contains()</u><br><span>There is no Classes Exist with the name  " +
        cls +
        "</span></h1>";
      alert(" There is no Classes Exist with the name  " + cls);
      console.log(" There is no Classes Exist with the name  " + cls);
    }
  } else {
    document.getElementById("result1").innerHTML =
      "<h1><u>Classes In the Elements are </u><br><span>There is no Classes Exist</span></h1>";
    alert(" your classes are :  Empty");
    console.log(" your classes are :  Empty");
  }
};
