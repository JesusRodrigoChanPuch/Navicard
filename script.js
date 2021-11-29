const userText = document.getElementById("user-text");
const cardText = document.getElementById("card-text");

const updateText = () => {
  cardText.innerHTML = userText.value;
};

const backgrounds = document.getElementsByClassName("background-choice");
const cardBackground = document.getElementById("card-background")
  .firstElementChild;
for (let i = 0; i < backgrounds.length; i++) {
  backgrounds[i].addEventListener("click", () => {
    cardBackground.src = backgrounds[i].firstElementChild.src;
  });
}

const fontChoice = document.getElementsByClassName("font-choice");

const changeTextColor = (selectedColor) => {
  cardText.style.color = selectedColor;
};


