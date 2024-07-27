
import {auth, onAuthStateChanged, signOut, getDocs, collection, db} from './utils/utils.js';



console.log('asfsaf');
document.addEventListener("DOMContentLoaded", () => {
  getAllEvents();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      // Additional logic if needed
    } else {
      // User is signed out
      console.log('logout');
      window.location.href = '/signin/index.html';
    }
  });

  const logout = document.getElementById('logout');
  if (logout) {
    logout.addEventListener('click', logoutaccbtn);
  }
});

function logoutaccbtn() {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = '/signin/index.html';
  }).catch((error) => {
    // An error happened.
    alert(error)
    console.log(error);
  });
}
let container = document.getElementById('container')


async function getAllEvents() {
  container.innerHTML = ''
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
      // let event = doc.data()
      let event = doc.data();
      console.log(event);
      let {banner, title, price  } = event

      let ele = `
                <div class="col-4 col-md-3 col-lg-2 g-1">
                    <div class="card rounded-0 m-0 mb-3 border-0 item-card flash-sale mx-1">
                        <img class="card-img-top" src="${banner}">
                        <div class="card-body">
                            <p class="fw-medium m-0 p-0 two-line-text">
                                ${title}</p>
                            <p class="m-0 p-0 orange-text-color fw-medium">${'Rs', price}</p>
                            <p class="small-text  grayed-out-text d-inline">Rs.4,500</p>
                        </div>
                    </div>
                </div>`
      
container.innerHTML += ele

    });
  } catch (error) {
    alert(error)
    console.error("Error getting documents: ", error);
  }
}