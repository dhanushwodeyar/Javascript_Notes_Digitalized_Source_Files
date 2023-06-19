document.write("<center><h1>Objects In JavaScript</h1></center><br>");
document.write(
  '<div class="main"><p>var <span class="name">Obj</span><span class="equal">=</span><span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Dhanush B"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 2" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "24" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Degree <span span class="colan" > : </span > <span class="squer">[</span>"BCA" <span span class="camma" >,</span > "MCA" <span span class="camma" >,</span > "PHD" <span span class="squer" >]</span ><span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Address <span class="colan"> : </span><span class="flower">{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;City"value3.1"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Country<span class="colan"> : </span>"value3.2"<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  <span class="flower">}</span><span  <span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Calling-Function <span class="colan"> : </span><span class="fun">FunctionCall<span class="round">(</span><span class="round">)</span></span><br> &emsp;&emsp;&emsp;&emsp;<span class="flower">}</span></p></div>'
);


var Obj = {
  Username: "Dhanush B",
  Password: "PassWord@1234512345",
  Age: "24",
  Degree: ["BCA", "MCA", "PHD"],
  Address: { City: "Bangalore", Country: "India" },
  Callingfunction:function() {
    return "This Function Called from  Inside The Object";
  },
   UsernameandPassword: function() {
    return this.Username +" "+this.Password;
  },
};


var objaccess = () => {
  console.log("Object : " + Obj);
  alert("Object : "+JSON.stringify(Obj));
};
var uaccess = () => {
  console.log("UserName : " + Obj.Username);
  alert("UserName : " + Obj.Username);
};
var paccess = () => {
  console.log("PassWord : " + Obj.Password);
  alert("PassWord : " + Obj.Password);
};
var aaccess = () => {
  console.log("Address : "+Obj.Address);
   alert("Address : " + JSON.stringify(Obj.Address));
};
var faccess = () => {
  console.log("Function Call :"+Obj.Callingfunction());
   alert("Function Call : " + Obj.Callingfunction());
};
var Aaccess = () => {
  console.log("Age : "+Obj.Age);
  alert("Age : " +Obj.Age);
};
var daccess = () => {
    console.log(Obj.Degree);
  alert("Degree : " + JSON.stringify(Obj.Degree));
};
var fuaccess = () => {
  console.log(Obj.UsernameandPassword());
  alert("Username And Password : " + Obj.UsernameandPassword());
};
var city = () => {
  console.log("City : " + Obj.Address.City);
  alert("City : " + Obj.Address.City);
};
var Country = () => {
  console.log("Country : " + Obj.Address.Country);
  alert("Country : " + Obj.Address.Country);
};

