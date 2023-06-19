document.write("<center><h1>String-Methods in JavaScript</h1></center>");
document.write(
  "<center><h3>Pleasee Check out and Explore the Source file to understand the actual implementation of each String mentods.</h3></center>"
);

var str1;
var str2;

// Insertion of String using String() Constructor and new keyword.
const insert = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  str1 = new String(prompt("Enter the String to perform operation : "));
  document.getElementById("result").innerHTML =
    "<h1><u>Your String 1 is :</u><br>" + str1 + "</h1>";
};
// Insertion of String using String() Constructor and new keyword.
const insert1 = () => {
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  str2 = new String(prompt("Enter the String 2 to perform operation : "));
  document.getElementById("result1").innerHTML =
    "<h1><u>Your String 2 is :</u><br>" + str2 + "</h1>";
};

// Finding Length of a String Using length keyword
const Length = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    document.getElementById("result1").innerHTML =
      "<h1><u>Length of a String <span>" +
      str1 +
      "</span> is  :</u><br>" +
      str1.length +
      "</h1>";
  }
};

// Finding Index of a String Using IndexOf()
const index = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    word = prompt("Enter the Sub String to find the index");
    start = prompt(
      'Enter the Start index to Search "' +
        word +
        '" in a String "' +
        str1 +
        '" .'
    );
    res =
      str1.indexOf(word, start) != -1
        ? "Found in Location " + str1.indexOf(word, start)
        : "Not Found";
    document.getElementById("result1").innerHTML =
      "<h1><u>The SubString <span>" + word + "</span> is " + res + "</h1>";
  }
};

// Finding Index of a String Using LastIndexOf()
const indexlast = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    word = prompt("Enter the Sub String to find the index");
    start = prompt(
      'Enter the Start index to Search "' +
        word +
        '" in a String "' +
        str1 +
        '" .'
    );
    res =
      str1.lastIndexOf(word, start) != -1
        ? "Found in Location " + str1.lastIndexOf(word, start)
        : "Not Found";
    document.getElementById("result1").innerHTML =
      "<h1><u>The SubString <span>" + word + "</span> is " + res + "</h1>";
  }
};

// Finding Position of a String Using Search()
const searching = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    word = prompt("Enter the Sub String to Search the index");
    res =
      str1.search(word) != -1
        ? "Found in Location " + str1.search(word)
        : "Not Found";
    document.getElementById("result1").innerHTML =
      "<h1><u>The SubString <span>" + word + "</span> is " + res + "</h1>";
  }
};

// Slicing a String using slice()
var Slicing = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var start = prompt("Enter start index :");
    var end = prompt("Enter End index :");
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>SLICED String:</u><br>" +
      str1.slice(start, end) +
      " </h1>";
  }
};

// Finding a Substring using substring()
var substrings = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var start = prompt("Enter start index :");
    var end = prompt("Enter End index :");
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>Substring result:</u><br>" +
      str1.substring(start, end) +
      " </h1>";
  }
};

// Finding a Substring using substr()
var substrs = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var start = prompt("Enter start index :");
    var len = prompt("Enter the length of sub String :");
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>Substring result:</u><br>" +
      str1.substr(start, len) +
      " </h1>";
  }
};

// replacing a word in a string using replace()
var replacing = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt(
      "Enter The word That you want in string to replace : ============>  " +
        str1
    );
    res = str1.search(word) != -1 ? "Found " : "Not Found";
    if (res == "Found ") {
      var rep = prompt("Enter The Replacing Word :");
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>The Replaced String:</u><br>" +
        str1.replace(word, rep) +
        " </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " <h1>" + word + " Not Found In a string</h1>";
    }
  }
};

// replacing a word in a string using replaceAll()
var replacingall = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt(
      "Enter The word That you want in string to replace : ============>  " +
        str1
    );
    res = str1.search(word) != -1 ? "Found " : "Not Found";
    if (res == "Found ") {
      var rep = prompt("Enter The Replacing Word :");
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>The Replaced String:</u><br>" +
        str1.replaceAll(word, rep) +
        " </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " <h1>" + word + " Not Found In a string</h1>";
    }
  }
};

// replacing a word in a string using replaceAll()
var replacingall = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt(
      "Enter The word That you want in string to replace : ============>  " +
        str1
    );
    res = str1.search(word) != -1 ? "Found " : "Not Found";
    if (res == "Found ") {
      var rep = prompt("Enter The Replacing Word :");
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>The Replaced String:</u><br>" +
        str1.replaceAll(word, rep) +
        " </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " <h1>" + word + " Not Found In a string</h1>";
    }
  }
};

// Finding the Charecter At the particluer position in a String using CharAt()
var characterat = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var pos = prompt(
      "Enter The Position that You Want get A Charecter : ============>  " +
        str1
    );
    res = !(pos > str1.length)
      ? str1.charAt(pos)
      : "Please Enter the valid position";
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>THE CHARACTER AT POSITION <span>" +
      pos +
      "</span> :</u><br>" +
      res +
      " </h1>";
  }
};

// Finding the Charecter ASCII Code At the particluer position in a String using CharCodeAt()
var charactercodeat = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var pos = prompt(
      "Enter The Position that You Want get A Charecter : ============>  " +
        str1
    );
    res = !(pos > str1.length)
      ? str1.charCodeAt(pos)
      : "Please Enter the valid position";
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>THE CHARACTER CODE AT POSITION <span>" +
      pos +
      "</span> :</u><br> <span> " +
      str1.charAt(pos) +
      "</span> ===> " +
      res +
      " </h1>";
  }
};

// Finding the Charecter At the particluer position in a String using Property Acess []
var propacess = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var pos = prompt(
      "Enter The Position that You Want get A Charecter : ============>  " +
        str1
    );
    res = !(pos > str1.length) ? str1[pos] : "Please Enter the valid position";
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>THE CHARACTER AT POSITION <span>" +
      pos +
      "</span> :</u><br>" +
      res +
      " </h1>";
  }
};

// Converting the lowercase String to the Uppercase String using toUpperCase()
var uppercase = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    res = !(str1 == str1.toUpperCase())
      ? str1.toUpperCase()
      : "Please Enter the Lowercase String";
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>The Uppercase of a String is <span>" +
      str1 +
      "</span> :</u><br>" +
      res +
      " </h1>";
  }
};

// Converting the lowercase String to the Uppercase String using toUpperCase()
var lowercase = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    res = !(str1 == str1.toLowerCase())
      ? str1.toLowerCase()
      : "Please Enter the UpperCase String";
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>The LowerCase of a String is <span>" +
      str1 +
      "</span> :</u><br>" +
      res +
      " </h1>";
  }
};

// Converting the lowercase String to the Uppercase String using toUpperCase()
var Concatination = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    insert1();
    res = !(str1 == null && str2 == null)
      ? str1.concat(str2)
      : "Please Enter the Strings to Concatinate";
    document.getElementById("result2").innerHTML =
      " </h1><br><h1><u>Concatination of <span>" +
      str1 +
      "</span>  And <span>" +
      str2 +
      "</span> is : </u><br>" +
      res +
      " </h1>";
  }
};

//Removing the White Spaces Using trim()
const triming = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    document.getElementById("result1").innerHTML =
      "<h1><u>The Removed White Spaces String <span>" +
      str1 +
      "</span> is  :</u><br>" +
      str1.trim() +
      "</h1>";
  }
};

//Splitting the string using spliting()
const spliting = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var sym = prompt(
      "Enter the Symbol or the word on what basis that you want to split the String"
    );
    res = str1.search(sym) != -1 ? "Found " : "Not Found";
    if (res == "Found ") {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>The Splited String is:</u><br>" +
        str1.split(sym) +
        " </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " <h1>" + sym + " Not Found The symbol or a string In a string</h1>";
    }
  }
};

//Includes() method in JavaScript
const include = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt("Enter the Word that you want to search in the String");
    res = str1.includes(word) != false ? "Found " : "Not Found";
    if (res == "Found ") {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>" +
        word +
        " found in the location " +
        str1.indexOf(word) +
        " </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " <h1>" + word + " Not Found in The string</h1>";
    }
  }
};

//startsWith() method in JavaScript
const startwith = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt(
      "Enter the spelling or a Word that you want to check whether a String starts with......"
    );
    
    start = Number(
      prompt("Enter the position  from where a searching as to start....")
    );

    res = str1.startsWith(word, start) != false ? "Found " : "Not Found";
    if (res == "Found ") {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>The word in a position <span>" +
        start +
        " </span> Starts with <span>" +
        word +
        "</span>  </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>The word in a position <span>" +
        start +
        " </span> Not Starts with  the word <span>" +
        word +
        "</span> </h1>";
    }
  }
};


// endsWith() method in JavaScript
const endswith = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt(
      "Enter the spelling or a Word that you want to check whether a String starts with......"
    );
    var end = str1.length;
    end = Number(
      prompt("Enter the position  from where a searching as to start....")
    );

    res = str1.endsWith(word) != false ? "Found " : "Not Found";
    if (res == "Found ") {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>The word in a position <span>" +
        end +
        " </span> ends with <span>" +
        word +
        "</span>  </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>The word in a position <span>" +
        end +
        " </span> Not ends with  the word <span>" +
        word +
        "</span> </h1>";
    }
  }
};

// match() function in JavaScript
const matching = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var word = prompt(
      "Enter the spelling or a Word that you want to search in a String"
    );

      var rgxp = new RegExp(word,"g");
    res = str1.match(rgxp);
    if (res!=null) {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>The words that have been Serached "+ word +" is  matched =====> <span>" +
        res +
        " and exist "+res.length+" Times </span> </h1>";
    } else {
      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using Includes :</u><br>The word that have been searched " +
        word +
        " is <span> Not Found </span> in the String </h1>";
    }
  }
};

// Finding the Charecter by giving a ASCII Code using fromCharCode()
var fromcharcode = () => {

    var ascii = prompt(
      "Enter The ASCII Code that You Want get A Charecter : ============>  " 
    );
  
    document.getElementById("result1").innerHTML =
      " </h1><br><h1><u>THE CHARACTER FOR THE ASCII CODE "+ascii+" IS ===========> <span>" +
      String.fromCharCode(ascii)+
      "</span> </h1>";

};


// match() function in JavaScript
const repeting = () => {
  if (str1 == null) {
    var con = confirm(
      'The String is " Null " . Do you Want to insert a String :'
    );
    if (con) {
      insert();
    } else {
      document.getElementById("result").innerHTML =
        "<h1>Please Insert the String Before Every Operation</h1>";
    }
  }
  if (str1.length != null) {
    var num = Number(prompt(
      "Enter the Number of time do you want to repeat the String"
    ));

      document.getElementById("result1").innerHTML =
        " </h1><br><h1><u>Your Result Using repeat() :</u>Your String "+ str1 +" is  Repeated "+ num+ " Times =====> <span>" +
        str1.repeat(num)+
        "<br><br> </span> </h1>";
    } 
  
};

