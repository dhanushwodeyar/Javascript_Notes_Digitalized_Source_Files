document.write(
  "<center><h1>JavaScript DOM querySelector & querySelectorAll </h1></center>"
);
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each JavaScript DOM querySelector & querySelectorAll.</h3></center>"
);


let data;

// Demonstration of querySelector in JavaScript.......
const querySelectorChoice = () => {
    var choice = Number(prompt("Enter your Choice ==============> 01.Class  02.id  03.Tag  :"));
    if (choice == 1)
    {
        data = document.querySelector(".disc").innerHTML;
    }
    else if (choice == 2)
    {
        data = document.querySelector("#content").innerHTML;
    }
    else {
        data = document.querySelector("p").innerHTML;
    }
    alert("Your Data is ===========> " + data);
    console.log("Your Data is ===========> " + data);
    document.querySelector("#result").innerHTML=data;
}


// Demonstration of querySelectorAll in JavaScript.......
const querySelectorAllChoice = () => {
  var choice = Number(
    prompt("Enter your Choice ==============> 01.Class  02.id  03.Tag  :")
  );
  if (choice == 1) {
    data = document.querySelectorAll(".service-disc")[1].innerHTML;
  } else if (choice == 2) {
    data = document.querySelectorAll("#content")[1].innerHTML;
  } else {
    data = document.querySelectorAll("p")[1].innerHTML;
  }
  alert("Your Data is ===========> " + data);
  console.log("Your Data is ===========> " + data);
  document.querySelectorAll("#result").innerHTML = data;
};
