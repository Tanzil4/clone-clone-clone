import { getDocs, collection, db } from "../utils.js";

let container2 = document.getElementById('container2');

getEvents();

async function getEvents() {
  if (!container2) {
    console.error("Container element not found.");
    return;
  }

  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    let html = ''; // Initialize an empty string to accumulate HTML

    querySnapshot.forEach((doc) => {
      let event = doc.data();
      console.log(event);
      let { banner, title, price } = event;

      // Construct the HTML for each event
      let ele = `
      <div class="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
    <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
        <div class="relative w-full md:w-48 flex justify-center items-center">
            <img src="${banner}" 
                class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none">
        </div>
        <form class="flex-auto p-6">
            <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">${title}</h1>
                <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">${price}</div>
                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">In stock</div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <div class="flex space-x-2">

                    <label class="text-center">

                        <input type="radio"
                            class="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                            name="size" value="xs">XS
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="s">S
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="m">M
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="l">L
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="xl">XL
                    </label>
                </div>
                <a href="#"
                    class="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">Size
                    Guide
                </a>
            </div>
            <div class="flex mb-4 text-sm font-medium">
                <button type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
                    now</button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
        </form>
    </div>
</div>
`;
      
      html += ele; // Append each event's HTML to the accumulated string
    });

    container2.innerHTML = html; // Set the innerHTML of container2 after loop
    // window.location.href = '/'
  } catch (error) {
    console.error("Error getting documents: ", error);
    alert(error)
  }
}
