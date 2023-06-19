document.write("<center><h1>JavaScript DOM Traversal Methods </h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each JavaScript DOM Traversal Methods  . </h3></center>"
);
//Demonstartion of parentElement Traversal Method In JS
const parentelement = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.parentElement.style.backgroundColor = color;
      ref.parentElement.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of parentnode Traversal Method In JS
const parentnode = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.parentNode.style.backgroundColor = color;
      ref.parentNode.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of children Traversal Method In JS
const Children = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      alert(ref.children.length - 1);
      for (let i = 0; i <= ref.children.length - 1; i++) {
        ref.children[i].style.backgroundColor = color;
        ref.children[i].style.color = color1;
      }

      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of childNode Traversal Method In JS
const Childnodes = () => {
  try {
    var id = prompt("Enter the id of any element above: ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element with the ID = " + id;
    } else {
      const color = prompt("Enter the Name of the Background color");
      const color1 = prompt("Enter the Name of the Font color");
      for (let i = 0; i < ref.childNodes.length; i++) {
        if (ref.childNodes[i] instanceof Element) {
          ref.childNodes[i].style.backgroundColor = color;
          ref.childNodes[i].style.color = color1;
        }
      }

      throw "Changed background successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of firstchild Traversal Method In JS
const firstchild = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.firstChild.style.backgroundColor = color;
      ref.firstChild.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of lastchild Traversal Method In JS
const lastchild = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.lastChild.style.backgroundColor = color;
      ref.lastChild.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of firstElementchild Traversal Method In JS
const firstElementchild = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.firstElementChild.style.backgroundColor = color;
      ref.firstElementChild.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of lastElementchild Traversal Method In JS
const lastElementchild = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.lastElementChild.style.backgroundColor = color;
      ref.lastElementChild.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of nextElementSibling Traversal Method In JS
const nextelementSibling = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.nextElementSibling.style.backgroundColor = color;
      ref.nextElementSibling.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of nextSibling Traversal Method In JS
const nextsibling = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.nextSibling.style.backgroundColor = color;
      ref.nextSibling.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of previousSibling Traversal Method In JS
const previoussibling = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.previousSibling.style.backgroundColor = color;
      ref.previousSibling.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};

//Demonstartion of previousElementSibling Traversal Method In JS
const previousElementsibling = () => {
  try {
    var id = prompt("enter the id of any element above : ");
    var ref = document.querySelector("[id=" + id + "]");
    if (ref === null) {
      throw "There is no element With the ID = " + id;
    } else {
      const color = prompt("Enter thye Name of the Background color");
      const color1 = prompt("Enter thye Name of the Font color");
      ref.previousElementSibling.style.backgroundColor = color;
      ref.previousElementSibling.style.color = color1;
      throw "changed background Successfully";
    }
  } catch (e) {
    alert(e);
  }
};
