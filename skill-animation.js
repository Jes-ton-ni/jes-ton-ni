const elements = document.querySelectorAll('.skill-per');

// Function to start the animation when scrolling onto elements with the class
function startAnimation(element) {
    element.style.animation = "progress 0.6s ease-in-out forwards";
    element.style.opacity = 1;
}

// Function to reset the animation when elements leave the viewport
function resetAnimation(element) {
    const rect = element.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
        element.style.animation = "none"; // Reset animation
        element.style.opacity = 0; // Reset opacity
    }
}

// Check for elements with the class when scrolling
window.addEventListener('scroll', function() {
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            startAnimation(element);
        } else {
            resetAnimation(element);
        }
    });
});