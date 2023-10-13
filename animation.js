const elements = document.querySelectorAll('.skill-per, .column');

// Function to start or restart the animation when scrolling onto elements with the class
function startAnimation(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight ) {
        setTimeout(() => {
            element.style.animation = element.classList.contains('skill-per') ? "progress 0.6s ease-in-out forwards" : "tracking-in-expand 1.2s ease";
            element.style.opacity = 1;
        }, 50); // Delay to ensure animation restarts
    }
}

// Function to reset the animation when elements completely exit the viewport
function resetAnimation(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
        element.style.animation = "none"; // Reset animation
        element.style.opacity = 0; // Reset opacity
    }
}

// Check for elements with the class when scrolling
window.addEventListener('scroll', function() {
    elements.forEach((element) => {
        startAnimation(element);
        resetAnimation(element);
    });
});