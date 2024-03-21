// Asynchronous function to get a cat fact
async function CatFact() {
  try {
    // Use axios to get data from the API
    const response = await axios.get("https://cat-fact.herokuapp.com/facts");
    const data = await response.data;

    // Assuming the API returns an array of facts and we're taking the first one
    // const fact = data[0].text;

    // Check if the data contains an array of facts and it's not empty
    if (Array.isArray(data) && data.length > 0) {
      // Pick a random fact from the array
      const randomIndex = Math.floor(Math.random() * data.length);
      const fact = data[randomIndex].text;

      // Find the div with class 'fact' and set its text content to the fetched fact
      document.querySelector(".box__fact").textContent = fact;
    } else {
      throw new Error("No facts found in the response");
    }
  } catch (error) {
    console.error("Failed to get cat fact:", error);
    document.querySelector(".box__fact").textContent =
      "Failed to load fact. Please try again!";
  }
}

// Attach an event listener to the button to get a new fact on click
document.querySelector(".button").addEventListener("click", CatFact);
// Call the function once to display a fact when the page loads
CatFact();
