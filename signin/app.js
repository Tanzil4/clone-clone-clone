import {auth, signInWithEmailAndPassword } from "../utils.js";

let email = document.getElementById('email')
let password = document.getElementById('password')
let signinbtn = document.getElementById('signinbtn')


signinbtn.addEventListener('click', signacc)



function signacc() {
  signinbtn.innerHTML = 'Loding...'
  signinbtn.disabled = true
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      signinbtn.innerHTML = 'Submit'
      signinbtn.disabled = false
      window.location.href = '/'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      signinbtn.innerHTML = 'submit'
      signinbtn.disabled = false
      console.log(errorMessage);
      alert(errorMessage)
    });
} 


