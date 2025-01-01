const color = ["purple", "orange", "yellow", "grey", "pink"];
const bgcolor = ["blue", "green", "red", "aqua", "magenta"];
const boxes = document.querySelectorAll(".box");
const regenerateBtn = document.getElementById("regenerate");
const textColorPicker = document.getElementById("textColor");
const bgColorPicker = document.getElementById("bgColor");

// Function to assign random colors
function assignRandomColors() {
  boxes.forEach((box) => {
    let randomBg = Math.floor(Math.random() * color.length);
    let randomText = Math.floor(Math.random() * bgcolor.length);
    box.style.backgroundColor = color[randomBg];
    box.style.color = bgcolor[randomText];
  });
}

// Event listener for Regenerate Colors button
regenerateBtn.addEventListener("click", assignRandomColors);

// Event listener for individual box click
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = bgColorPicker.value;
    box.style.color = textColorPicker.value;
  });
});

// Initial random color assignment
assignRandomColors();
