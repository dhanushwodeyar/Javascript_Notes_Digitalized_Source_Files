document.write("<center><h1>Demonstration of for-In-Loop In JavaScript</h1></center><br>");
document.write(
  '<div class="main"><h2>var <span class="name">ArrayOfObj</span><span class="equal">=</span><span class="squer">[</span>  <br> &emsp;&emsp;&emsp;&emsp; <span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Dhanush B"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 2" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "24" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">},</span><br>&emsp;&emsp;&emsp;&emsp; <span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Sangeetha Dhanush"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 21" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "24" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">},</span> <br>&emsp;&emsp;&emsp;&emsp;       <span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Babu NK"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 12" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "44" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">},</span><br>&emsp;&emsp;&emsp;&emsp;<span class="flower" >{</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Username <span class="colan"> : </span>"Sumathi G"<span class="camma">,</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Password <span class="colan" > : </span > "Value 21" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Age <span class="colan" > : </span > "40" <span  class="camma" >,</span > <br>&emsp;&emsp;&emsp;&emsp; <span class="flower">}</span><br><span class="squer">];</span></h2></div>'
);

var ArrayOfObj = [
  {
    Username: "Dhanush B",
    Password: "Value 2",
    Age: "24",
  },
  {
    Username: "Sangeetha Dhanush",
    Password: "Value 21",
    Age: "23",
  },
  {
    Username: "Babu NK",
    Password: "Value 12",
    Age: "44",
  },
  {
    Username: "Sumathi G",
    Password: "Value 2",
    Age: "40",
  },
];

var Arrayofobject = () => {
    for (i in ArrayOfObj) {
          console.log("Object "+ i +"In an Array: " + ArrayOfObj[i]);
          alert(
            "Object " + i + "In an Array: " + JSON.stringify(ArrayOfObj[i])
          );
    }

};





