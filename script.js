document.getElementById("signinBtn").addEventListener("click", function(){
  var uname = document.getElementById("uname").value;
  var password = document.getElementById("psswd").value;
  if (uname === "username" && password === "password") {
    alert("Login Successful");
    window.location.href = "file:///E:/web%20project/homepage.html";
  }
  else{
    alert("Invalid login credentials");
  }
});



