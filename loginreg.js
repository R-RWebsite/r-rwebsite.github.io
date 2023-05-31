//Script for Registration - make new constant for button, quert select the class name for the button
//const username, password, email to store these three datas into the storage, setItem them to store

const submit_button = document.querySelector(".regis");
submit_button.onclick = (e) => {
    e.preventDefault();
    const username = document.getElementById('REGuser').value;
    const password = document.getElementById('REGpass').value;
    const email = document.getElementById('REGmail').value;

    localStorage.setItem('Username', username);
    localStorage.setItem('Password', password);
    localStorage.setItem('Email', email);

    if (username == "" && password == "" && email == "") {
        window.alert("Please fill-out the form!")
    }
    else {
        window.alert("Successfully Registered!")
        window.location = "index.html"
    }
}

//Script for Login

const login_button = document.querySelector(".submit");
login_button.onclick = (e) => {
    e.preventDefault();
    const userName = document.getElementById('LOGuser').value;
    const passWord = document.getElementById('LOGpass').value;

    const getUsername = localStorage.getItem('Username');
    const getPassword = localStorage.getItem('Password');

    if (userName == "" && passWord == "") {
        window.alert("Please enter your account!")
    }
    else {
        if(userName == getUsername && passWord == getPassword){
            window.alert("Successfully Logged In!")
            window.location = "index.html"
        }
        else {
            window.alert("User not recognized")
        }
    }

}

//Script for switching between Login and Register

function displayLogin()
{
    window.location.href = 'login.html';
}

function displayRegister()
{
    window.location.href = 'register.html';
}
