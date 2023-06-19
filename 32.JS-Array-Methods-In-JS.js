document.write("<center><h1>Array-Methods in JavaScript</h1></center>");
document.write("<center><h3>Pleasee Check out the Source file to understand the actual implementation of each Array mentods.</h3></center>");
var arr = new Array();
var arr1 = new Array();
var num, num1;

// PUSH() IN JS
function insertarray() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  num = prompt("Enter the number of elements in an array: ");
  for (var i = 0; i < num; i++) {
    arr.push(prompt("Enter the Array Item-" + (i + 1)));
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>INSERTED ARRAY 1:</u><br>" + arr + " </h1>";
  }
}

// Disp() Using for IN JS
function Disp() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY:</u><br>" + arr + " </h1>";
  }
}

// SORT() IN JS
function sorting() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY:</u><br>" +
      arr +
      " </h1><br><h1><u>SORTED ARRAY:</u><br>" +
      arr.sort() +
      " </h1>";
  }
}

// Reverse() IN JS
function reversing() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY:</u><br>" +
      arr +
      " </h1><br><h1><u>REVERSED ARRAY:</u><br>" +
      arr.reverse() +
      " </h1>";
  }
}

// pop() in js
function deleting() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var ele = arr.pop();
    document.getElementById("result").innerHTML =
      "<h1><u>DELETED ARRAY:</u><br>" +
      arr +
      " </h1><br><h1><u>DELETED ELEMENT:</u><br>" +
      ele +
      " </h1>";
  }
}

// unshift() in js
function Unshifting() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  num = prompt("Enter the number of elements in an array: ");
  for (var i = 0; i < num; i++) {
    arr.unshift(prompt("Enter the Array Item-" + (i + 1)));
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>INSERTED ARRAY 1:</u><br>" + arr + " </h1>";
  }
}

// shift() in js
function Shifting() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var ele = arr.shift();
    document.getElementById("result").innerHTML =
      "<h1><u>DELETED ARRAY:</u><br>" +
      arr +
      " </h1><br><h1><u>DELETED ELEMENT:</u><br>" +
      ele +
      " </h1>";
  }
}

// Array 2 Insert
function insertarray2() {
  num1 = prompt("Enter the number of elements in an Second array: ");
  for (var i = 0; i < num1; i++) {
    arr1.push(prompt("Enter the Second Array Item-" + (i + 1)));
  }
  if (arr1.length != 0) {
    document.getElementById("result1").innerHTML =
      "<br><h1><u>INSERTED ARRAY 2:</u><br>" + arr1 + " </h1>";
  }
}

// Concatination
function Concatinating() {
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
      insertarray2();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  } else {
    insertarray2();
  }
  if (arr.length != 0 && arr1.length != 0) {
    document.getElementById("result2").innerHTML =
      +" " +
      "<br><h1><u>CONCATINATED ARRAY:</u><br>" +
      arr.concat(arr1) +
      " </h1>";
  }
}

// Joinning
function joinning() {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var sym = prompt("Enter the Separeter Symbole");
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY:</u><br>" +
      arr +
      " </h1><br><h1><u>REVERSED ARRAY:</u><br>" +
      arr.join(sym) +
      " </h1>";
  }
}
// Slicing
var Slicing = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var start = prompt("Enter start number :");
    var end = prompt("Enter End number :");
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY:</u><br>" +
      arr +
      " </h1><br><h1><u>SLICED ARRAY:</u><br>" +
      arr.slice(start, end) +
      " </h1>";
  }
};
// splicing
var Splicing = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var index = prompt("Enter Index number :");
    var opp = prompt(
      "Enter a option do you what to delete the element :<br>Insert 0<br>Delete 1"
    );
    var ele = prompt("Enter the Element to be added :");
    var aa = arr;
    var a = arr.splice(index, opp, ele);
    document.getElementById("result").innerHTML =
      " </h1><br><h1><u>SPLICED ARRAY:</u><br>" + arr + " </h1>";
  }
};

// Array.isArray() in js
var checkarray = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  arr.length != 0
    ? `${
        Array.isArray(arr)
          ? (document.getElementById("result").innerHTML =
              "<h1><u>YOUR ARRAY:</u><br>" +
              arr +
              " </h1><h1>This is an Array</h1>")
          : (document.getElementById("result").innerHTML =
              "<h1>This is not an Array</h1>")
      }`
    : (document.getElementById("result").innerHTML =
        "<h1>An Array is Empty Please enter the Array</h1>");
};

// indexOf() in js
var forwordindex = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var ele = prompt("Enter the Element to be Searched :");
    var start = prompt("Enter start position :");
    if (arr.includes(ele)) {
      document.getElementById("result").innerHTML =
        "<h1><u>YOUR ARRAY:</u><br>" +
        arr +
        " </h1><br><h1><u>ELEMENT INDEX:</u><br>" +
        ele +
        " = " +
        arr.indexOf(ele, start) +
        " </h1>";
    } else {
      document.getElementById("result").innerHTML =
        "<h1><u>YOUR ARRAY:</u><br>" +
        arr +
        " </h1><br><h1><u>ELEMENT INDEX:</u><br>" +
        ele +
        " = Not Found </h1>";
    }
  }
};

// LastindexOf() in js
var backwordindex = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var ele = prompt("Enter the Element to be Searched :");
    var start = prompt("Enter start position :");
    if (arr.includes(ele)) {
      document.getElementById("result").innerHTML =
        "<h1><u>YOUR ARRAY:</u><br>" +
        arr +
        " </h1><br><h1><u>ELEMENT INDEX:</u><br>" +
        ele +
        " = " +
        arr.lastIndexOf(ele, start) +
        " </h1>";
    } else {
      document.getElementById("result").innerHTML =
        "<h1><u>YOUR ARRAY:</u><br>" +
        arr +
        " </h1><br><h1><u>ELEMENT INDEX:</u><br>" +
        ele +
        " = Not Found </h1>";
    }
  }
};

// Includes() in js
var isexist = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    var ele = prompt("Enter the Element to be Searched :");
    var start = prompt("Enter start position :");
    if (arr.includes(ele)) {
      document.getElementById("result").innerHTML =
        "<h1><u>YOUR ARRAY:</u><br>" +
        arr +
        " </h1><br><h1><u>ELEMENT INDEX:</u><br>" +
        ele +
        " = " +
        arr.lastIndexOf(ele, start) +
        " </h1>";
    } else {
      document.getElementById("result").innerHTML =
        "<h1><u>YOUR ARRAY:</u><br>" +
        arr +
        " </h1><br><h1><u>ELEMENT INDEX:</u><br>" +
        ele +
        " = Not Found </h1>";
    }
  }
};

// Some() in JS
var Somecondition = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR Element Index</u><br>" +
      arr.some(condition) +
      "</h1>";
  }
};
// Condition for some()
var condition = (age) => {
  return age >= 18;
};

// every() in js
var Everycondition = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR RESULT</u><br>" +
      arr.every(condition1) +
      "</h1>";
  }
};
// Condition for every()
var condition1 = (age) => {
  return age >= 18;
};



// find() in js
var findadult = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    var num = prompt("Enter the number to dived : ");
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR RESULT</u><br>" +
    arr.find((age) => {
      return age%num==0;
      }) +
      "</h1>";
  }
  
}



// findIndex() in js
var findindexadult = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    var num = prompt("Enter the number to dived : ");
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR RESULT</u><br>" +
    arr.findIndex((age) => {
      return age%num==0;
      }) +
      "</h1>";
  }
  
}




// filter() in js
var filteradult = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    var num = prompt("Enter the number to dived : ");
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR RESULT</u><br>" +
    arr.filter(ele => {
      return ele % num == 0;
   }) +
      "</h1>";
  }
  
}


// tostring() in js
var tostring = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr + "<br>" + typeof(arr) +
      "<br><br><u>YOUR RESULT</u><br>" +
      arr.toString() +"<br>"+typeof(arr)+
      "</h1>";
  }
  
}


// valueOf() in js
var valueof = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>YOUR ARRAY</u><br>" +
      arr + 
      "<br><br><u>YOUR RESULT USING VALUEOF()</u><br>" +
      arr.valueOf()+
      "</h1>";
  }
  
}

// valueOf() in js
var filling = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    var word = prompt("Enter the Static word to replace the entier ");
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY</u><br>" +
      arr + 
      "<br><br><u>YOUR RESULT USING VALUEOF()</u><br>" +
      arr.fill(word)+
      "</h1>";
  }
  
}


// ForEach() in js
var foreach = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY</u><br>" +
      arr + 
      "<br><br><u>YOUR RESULT USING FOREACH()</u><br>" +
    arr.forEach((ele,index,array) => {
      document.writeln(ele + "-->" + index + "-->" + array+"<br>");
      })+
      "</h1>";
  }
  
}


// Map() in js
var mapping = () => {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
     if (arr.length == 0) {
       var con = confirm(
         "The Array Was Empty. Do You want to insert an Array ? "
       );
       if (con) {
         insertarray();
       } else {
         document.getElementById("result").innerHTML =
           "<h1>Please Insert the Array Before Every Operation</h1>";
       }
  }
  if (arr.length != 0) {
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR RESULT USING MAP() -1</u><br>" +
      arr.map((ele, ind, array) => {
        return `${ind}-->${ele}-->${array} <br>`;
      }) +
      "<br><u>YOUR RESULT USING MAP() -2</u><br>" +
      arr.map(cal) +
      " </h1>";
  }
  
}
// map Method cal
const cal = (ele) => {
  return ele * 100;
}



// Reduce() in js
var reducing = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  if (arr.length == 0) {
    var con = confirm("The Array Was Empty. Do You want to insert an Array ? ");
    if (con) {
      insertarray();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the Array Before Every Operation</h1>";
    }
  }
  if (arr.length != 0) {
    num = prompt("Enter the Initial value fror accumulater : ");
    document.getElementById("result").innerHTML =
      "<h1><u>ORGINAL ARRAY</u><br>" +
      arr +
      "<br><br><u>YOUR RESULT USING REDUCE()</u><br>" +
    arr.reduce((acc, ele, ind, array) => {
      acc += Number(ele);  
      return acc;
      },Number(num) )+
      "<br></h1>";
  }
};

