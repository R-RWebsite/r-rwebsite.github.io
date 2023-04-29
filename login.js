var count = 2;

function validate ()
{
   let user = document.getElementById('LOGuser').value;
   let password = document.getElementById('LOGpass').value;
   var valid = false;
   var usernameArray = ["yuki","test"]
   var passwordArray = ["123","test"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (password == passwordArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Successfully Logged In!");
   window.location = "index.html";
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Wrong password or username")
   count--;
}
}

/*
function passVisible ()
{
    var x = document.getElementById("shows");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
    }
}
*/

function displayLogReg ()
{
   document.getElementById('logbox').style.display = "None";
   document.getElementById('regbox').style.display = "";
}

function displayRegLog ()
{
   document.getElementById('logbox').style.display = "";
   document.getElementById('regbox').style.display = "None";
}

function register ()
{
   let username = document.getElementById('REGuser').value;
   let password = document.getElementById('REGpass').value;
   let email = document.getElementById('REGmail').value;

  if (username == "test" && password == "test" && email == "test@gmail.com"){
      window.alert("Successfully Registered!")
    
      document.getElementById('REGuser').value = "";
      document.getElementById('REGpass').value = "";
      document.getElementById('REGmail').value = "";

      window.location = "index.html"

  } else {
      window.alert("Please fill-out the form!")
  }
}