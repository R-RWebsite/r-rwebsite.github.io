// inputs
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const input = document.querySelectorAll('input');

// forms
const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');

// errors
const firstError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');
const userError = document.getElementById('userError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passError');
const message = document.querySelector('span');

// button
const logoutBtn = document.getElementById('logout');
 
//member name
const member_name = document.getElementById('member_name');

// user register
if (registerForm) {

    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const firstnameValue = firstname.value.trim();
      const lastnameValue = lastname.value.trim();
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
  
      const min = 2;
  
      //firstname

      if (firstnameValue === '') {
        firstError.innerText = 'Firstname is required.'
        firstError.classList.add('error');
        firstname.style.border = '2px solid red';
  
      } else if (firstnameValue.length < min) {
        firstError.innerText = 'Minimum length required is 2.';
        firstError.classList.add('error');
        firstname.style.border = '2px solid red';
  
      } else if (!validName(firstnameValue)) {
        firstError.innerText = 'Firstname is not valid.';
        firstError.classList.add('error');
        firstname.style.border = '2px solid red';
  
      } else {
        localStorage.setItem('firstname', firstnameValue);
        firstError.innerText = '';
        firstname.style.border = '2px solid green';
      }
  
      //lastname

      if (lastnameValue === '') {
        lastError.innerText = 'Lastname is required.';
        lastError.classList.add('error');
        lastname.style.border = '2px solid red';
  
      } else if (lastnameValue.length < 2) {
        lastError.innerText = 'Minimum length required is 2.';
        lastError.classList.add('error');
        lastname.style.border = '2px solid red';
  
      } else if (!validName(lastnameValue)) {
        lastError.innerText = 'Lastname is not valid.';
        lastError.classList.add('error');
        lastname.style.border = '2px solid red';
  
      } else {
        localStorage.setItem('lastname', lastnameValue);
        lastError.innerText = '';
        lastname.style.border = '2px solid green';
      }
  
      //username

      if (usernameValue === '') {
        userError.innerText = 'Username is required.';
        userError.classList.add('error');
        username.style.border = '2px solid red';
  
      } else {
        localStorage.setItem('username', usernameValue);
        userError.innerText = '';
        username.style.border = '2px solid green';
      }

      //email

      if (emailValue === '') {
        emailError.innerText = 'Email Address is required.';
        emailError.classList.add('error');
        email.style.border = '2px solid red';
  
      } else if (!validEmail(emailValue)) {
        emailError.innerText = 'Email Address is not valid.';
        emailError.classList.add('error');
        email.style.border = '2px solid red';
  
      } else {
        localStorage.setItem('email', emailValue);
        emailError.innerText = '';
        email.style.border = '2px solid green';
      }
  
      //password

      if (passwordValue === '') {
        passwordError.innerText = 'Password is required.';
        passwordError.classList.add('error');
        password.style.border = '2px solid red';
  
      } else if (!validPassword(passwordValue)) {
        passwordError.innerText = 'Minimum length required is 8, at least one letter, \n one number, and one special character.';
        passwordError.classList.add('error');
        password.style.border = '2px solid red';
  
      } else {
        localStorage.setItem('password', passwordValue);
        passwordError.innerText = '';
        password.style.border = '2px solid green';
      }
  
  
      const getFirstname = localStorage.getItem('firstname');
      const getLastname = localStorage.getItem('lastname');
      const getUsername = localStorage.getItem('username');
      const getEmail = localStorage.getItem('email');
      const getPassword = localStorage.getItem('password');
  
  
      const getRegister = getFirstname && getLastname && getUsername && getEmail && getPassword;
      const getRegisterValue = firstnameValue && lastnameValue && usernameValue && emailValue && passwordValue;
  
  
      if (getRegisterValue === '') {
        message.innerText = 'All fields are required.';
        message.classList.remove('success-message');
        message.classList.add('error-message');
      } else if (getRegister != null) {
        message.innerText = 'Account successfully created.';
        message.classList.remove('error-message');
        message.classList.add('success-message');
        window.alert("Created an account! Click here to continue");
        location.href = 'member.html';
  
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }

      }
    });
    
  }

// regular expressions
function validName(name) {
    const re = /^[a-zA-Z]+$/;
    return re.test(name);
}
  
function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
function validPassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
}

  
//user login
if (loginForm) {
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
  
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
  
      const getUsername = localStorage.getItem('username');
      const getEmail = localStorage.getItem('email');
      const getPasword = localStorage.getItem('password');
      
      
      if (usernameValue === getUsername && emailValue === getEmail && passwordValue === getPasword) {
        message.innerText = 'Succesfully Logged In!';
        message.classList.add('success-message');
        username.style.border = '2px solid green';
        email.style.border = '2px solid green';
        password.style.border = '2px solid green';
        window.alert("Logged in Successfully! Click her to continue");
        location.href = 'member.html';
  
      } else if (usernameValue === '' || emailValue === '' || passwordValue === '') {
        message.innerText = 'Username, Email, and Password are required.';
        message.classList.add('error-message');
        username.style.border = '2px solid red';
        email.style.border = '2px solid red';
        password.style.border = '2px solid red';
  
      } else if (!validEmail(emailValue)) {
        message.innerText = 'Email address is not valid.';
        message.classList.add('error-message');
  
      } else {
        message.innerText = 'Invalid username or email address or password.';
        message.classList.add('error-message');
        username.style.border = '2px solid red';
        email.style.border = '2px solid red';
        password.style.border = '2px solid red';
      }
    });
  
}
