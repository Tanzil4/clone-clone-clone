import { auth, storage, ref, uploadBytes, getDownloadURL, db, collection, addDoc, getDocs } from "../utils.js"; // Ensure the import paths are correct

console.log('Script loaded');
console.log('auth', auth);

let upload_img_btn = document.getElementById('upload_img_btn');
let inpFile = document.getElementById('inp_file');

upload_img_btn.addEventListener('click', uploadProfile);

async function uploadProfile() {
    alert('Uploading image...');
    const file = inpFile.files[0];
    if (!file) {
        console.log('No file selected');
        return;
    }

    try {
        const imgRef = ref(storage, `profileimg/${file.name}`);
        await uploadBytes(imgRef, file);
        console.log('File is uploaded');

        const url = await getDownloadURL(imgRef);
        console.log('URL obtained:', url);

        // Add a new document with a generated ID
        const eventInfo = {
            profileimg: file.name,
            banner: url
        };
        const eventCollection = collection(db, "profileimg");
        const docRef = await addDoc(eventCollection, eventInfo);
        console.log('Document added:', docRef.id);

        // Optionally call another function or update UI here
        // window.location.href = '/';

        // Refresh the events to display the new image
        getEvents();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getEvents() {
    let container2 = document.getElementById('container2');
    if (!container2) {
        console.error("Container element not found.");
        return;
    }

    try {
        const querySnapshot = await getDocs(collection(db, "profileimg"));
        container2.innerHTML = ''; // Initialize an empty string to accumulate HTML

        querySnapshot.forEach((doc) => {
            let event = doc.data();
            console.log(event);
            let { banner } = event;

            // Construct the HTML for each event
            let ele = `
                <img src="${banner}" 
                    class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform">
            `;
            container2.innerHTML += ele; // Append each event's HTML to the accumulated string
        });
    } catch (error) {
        console.error("Error getting documents: ", error);
        alert(error);
    }
}
