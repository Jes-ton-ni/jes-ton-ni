// script.js

const gallery = document.getElementById("image");
const fullImageContainer = document.getElementById("full-image-container");
const fullImage = document.getElementById("full-image");
const closeButton = document.getElementById("close-button");

// Open full image when a thumbnail is clicked
gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const imageUrl = event.target.src.replace("-thumbnail", "");
        fullImage.src = imageUrl;
        fullImageContainer.style.display = "flex";
    }
});

// Close full image when the close button is clicked
closeButton.addEventListener("click", () => {
    fullImageContainer.style.display = "none";
});
