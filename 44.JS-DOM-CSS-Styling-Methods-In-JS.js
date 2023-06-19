document.write("<center><h1>JavaScript DOM CSS Styling Methods </h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each JavaScript DOM CSS Styling Methods .</h3></center>"
);

// Demonstartion of style and changing the Background-color of Body
var ChangeBackgroundColor = () => {
  color = prompt("Enter the color name that you want to Change : ");
  document.querySelector("body").style.backgroundColor = color;
};


// Demonstartion of style and changing the Font-color of Paragraph
var ChangeFontColor = () => {
  Color = prompt("Enter the color name that you want to Change the font : ");
  for (ele of document.querySelectorAll("p")) {
    ele.style.color = Color;
  }
};


// Demonstartion of style and changing the Background-color of All Service-Box
var ChangeSeriveBox = () => {
  Color = prompt("Enter the Background color for service Div: ");
  for (ele of document.querySelectorAll(".service-box")) {
    ele.style.backgroundColor = Color;
  }
};


// Demonstartion of style and changing the Background-color of nav-header
var ChangeNavColor = () => {
  color = prompt("Enter the color name that you want to Change : ");
  document.querySelector("header").style.backgroundColor = color;
};

// Demonstartion of style and changing the Background-color of footer
var ChangefootColor = () => {
  color = prompt("Enter the color name that you want to Change : ");
  document.querySelector("footer").style.backgroundColor = color;
};


// Demonstartion of style and changing the font color of headings
var Changeh1h2h3 = () => {
  Color = prompt("Enter the color for Headings ");
  for (ele of document.querySelectorAll("h1")) {
    ele.style.color = Color;
  }
  for (ele of document.querySelectorAll("h2")) {
    ele.style.color = Color;
  }
  for (ele of document.querySelectorAll("h3")) {
    ele.style.color = Color;
  }
};


// Demonstartion of Style and changing the background-color of side bar
var Changesidebar = () => {
  color = prompt("Enter the color name that you want to Change : ");
  document.querySelector("aside").style.backgroundColor = color;
};


// Demonstartion of className and changing the font color of side bar anchers
var Changelistcolor = () => {
     for (ele of document.querySelectorAll("a")) {
       ele.className = "ancher";
     }
    Color = prompt("Enter the color name that you want to Change : ");
    for (ele of document.querySelectorAll(".ancher")) {
        console.log(ele);
    ele.style.color = Color;
  }
};
 
// Demonstarting classList and classList.add("ABC") ,classList.remove("XYZ").
var ChangeServiceContainer = () => {
    var color = prompt("Enter the background color for service-container");
    document.querySelector(".service-container").classList.add("Dhanush", "wodeyar", "is", "back");
    document.querySelector(".Dhanush").style.backgroundColor = color;
    document.querySelector(".service-container").classList.remove("is", "back");
    let classlist = document.querySelector(".service-container").classList;
    alert("Number of class in the service-container ====================> " + classlist);
    console.log(classlist);
    
}

