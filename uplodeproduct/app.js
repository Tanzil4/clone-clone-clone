import {auth, storage, ref, uploadBytes, getDownloadURL, db, collection, addDoc } from "../utils.js";


console.log('auth',auth);

const storageRef = ref(storage);

let createimg = document.getElementById('createimg')

createimg.addEventListener('submit', (e) => {


    e.preventDefault()
    // console.log(e);
let btn = e.target[4]
console.log(btn);

btn.innerHTML = 'loding...'
    btn.disabled = true

    const eventinfo = {
        banner : e.target[0].files[0],
        title : e.target[1].value,
        price : e.target[2].value,
        // email :  
    }

// console.log(eventinfo);
    const imgref = ref(storage, eventinfo.banner.name)
     uploadBytes(imgref, eventinfo.banner).then(()=>{
        console.log('file is uploded');

        getDownloadURL(imgref).then((url)=>{
            console.log('url aagia', url);
            eventinfo.banner = url;


            const eventcollection = collection(db, "events")
            addDoc(eventcollection, eventinfo).then((snapshot)=>{
console.log('document added');

btn.innerHTML = 'Submit'
    btn.disabled = false
window.location.href = '/'
            })
        })
     })
})

