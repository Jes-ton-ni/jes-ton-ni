  // script.js
const divs = document.querySelectorAll('.gallery-content');
const radios = document.querySelectorAll('input[name="visibility"]');

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const selectedDivId = radio.value;
    divs.forEach(div => {
      if (div.id === selectedDivId) {
        div.style.display = "flex"; // Show the selected div
      } else {
        div.style.display = "none"; // Hide the other divs
      }
    });
  });
});

// Ensure that the initially checked radio button corresponds to the displayed div
const initiallyCheckedRadio = document.querySelector('input[name="visibility"]:checked');
const initiallyCheckedDivId = initiallyCheckedRadio.value;

divs.forEach(div => {
  if (div.id === initiallyCheckedDivId) {
    div.style.display = "flex"; // Show the initially checked div
  }
});