import { createUserWithEmailAndPassword, auth, addDoc, collection, db } from "../utils.js";

let name = document.getElementById('name');
let num = document.getElementById('num');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signup_btn = document.getElementById('signup_btn');

signup_btn.addEventListener('click', create);

async function create() {
  const emailValue = email.value;
  const passwordValue = password.value;

  try {
    signup_btn.innerHTML = 'loding...'
    signup_btn.disabled = true
    const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
    const user = userCredential.user;
    console.log('user', user);
    await addUserToFirestore();
       signup_btn.innerHTML = 'Submit'
       signup_btn.disabled = false
    window.location.href = '/'

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    signup_btn.innerHTML = 'Submit'
       signup_btn.disabled = false
    console.error('Error:', errorCode, errorMessage);
  }
}

async function addUserToFirestore() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      num: num.value,
      email: email.value,
      pass: password.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}