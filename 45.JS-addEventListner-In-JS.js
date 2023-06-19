
 var margin = () => {
    document.querySelector("header").style.marginTop = "40px";
    
}
// Demonstration of Assigning Events using HTML DOM
document.querySelector("header").onclick = changeheaderback;
function changeheaderback() {
    color = prompt("Enter the Name of the Color that You want to change  : ");
    document.querySelector("header").style.backgroundColor = color;
}


// Demonstration of addEventListener 
function event() {
     color = prompt("Enter the Name of the Color that You want to change  : ");
    document.querySelector("p").style.backgroundColor = color;
}
document.querySelector("p").addEventListener("dblclick", event);
document.querySelector("p").addEventListener("mouseenter", () => {
    alert("you have been Mouse Enterd Here");
});
document.querySelector("p").addEventListener("mouseleave", () => {
    document.querySelector("p").removeEventListener;
  alert("you have been removed event Listner");
});

function event() {
  color = prompt("Enter the Name of the Color that You want to change  : ");
  document.querySelector(".service-container").style.backgroundColor = color;
}
document
  .querySelector(".service-container")
  .addEventListener("dblclick", event);



