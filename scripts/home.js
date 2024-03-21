// Function to get cat image
async function CatImage() {
  try {
    // Make a GET request to the cat API
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    const imageUrl = response.data[0].url;

    const catImageDiv = document.querySelector(".box");
    catImageDiv.innerHTML = "";

    // Create an <img> element
    const img = document.createElement("img");
    // Assign a class to the <img> element (e.g., 'cat-image')
    img.className = "box__image";
    // Set the src attribute to the fetched image URL
    img.src = imageUrl;

    // Set an alt attribute for accessibility
    img.alt = "Cute cat";

    // Append the <img> element to the <div>
    catImageDiv.appendChild(img);
  } catch (error) {
    console.error("Failed to fetch cat image:", error);
  }
}

// Call CatImage when the page loads
document.addEventListener("DOMContentLoaded", CatImage);

const button = document.querySelector(".button");
button.addEventListener("click", CatImage);
