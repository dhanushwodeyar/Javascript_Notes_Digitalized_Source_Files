function verify() {
  match = Number(document.getElementById("day").value);
  switch (match) {
    case 0:
      document.write("<center><h1>Today is monday</h1></center>");
      break;
    case 1:
      document.write("<center><h1>Today is Tuesday</h1></center>");
      break;
    case 2:
      document.write("<center><h1>Today is Wednesday</h1></center>");
      break;
    case 3:
      document.write("<center><h1>Today is Thursday</h1></center>");
      break;
    case 4:
      document.write("<center><h1>Today is Friday</h1></center>");
      break;
    case 5:
      document.write("<center><h1>Today is Sutarday</h1></center>");
      break;
    case 6:
      document.write("<center><h1>Today is sunday</h1></center>");
      break;
    default:
      document.write("Please Enter valid date </h1></center>");
  }
}
