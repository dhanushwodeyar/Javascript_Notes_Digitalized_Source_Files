document.write(
  "<b><br><br> THIS BELLOW STATMENT IS WRITTEN IN JS FILE  Variable is Decleard Using Const Keyword  AND WE ARE USING Typeof() to find the type <br>.</b>"
);
const Phone_num = 7019863983,
  Address = [
    "House No 12",
    "Shri Sai Bridhavana layout Medahalli",
    "KR Purm",
    "Banglore",
    560049,
    "karnataka",
  ];

document.write(
  `<br><ol><li>Phone_Number = ${Phone_num} =================>>> type= ${typeof Phone_num}</li><li>House_No = ${
    Address[0]
  } =================>>> type= ${typeof Address[0]} </li><li>Area = ${
    Address[1]
  } =================>>> type= ${typeof Address[1]}</li><li>Taluk = ${
    Address[2]
  } =================>>> type= ${typeof Address[2]}</li><li>City = ${
    Address[3]
  } =================>>> type= ${typeof Address[3]}</li><li>Zip pin = ${
    Address[4]
  } =================>>> type= ${typeof Address[4]}</li><li>State = ${
    Address[5]
  } =================>>> type= ${typeof Address[5]}</li></ol>`
);
