//password display
const passwordInput = document.getElementById("password-input");
const copyButton = document.querySelector(".copy-button");
const refreshButton = document.querySelector(".refresh-button");

//Generate Button
const generateButton = document.getElementById("generate-btn");

//Strength
const strengthText = document.getElementById("strength-text");
const strengthFill = document.getElementById("strength-fill");

//Length
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");

//Character Options
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

//Customizations
const excludeSimilarCheckbox = document.getElementById("exclude-similar");
const excludeAmbiguousCheckbox = document.getElementById("exclude-ambiguous");
const noRepeatedCheckbox = document.getElementById("no-repeated-characters");
const avoidSequentialCheckbox = document.getElementById(
  "avoid-sequential-characters",
);
const includeSpacesCheckbox = document.getElementById("include-spaces");
const startWithLetterCheckbox = document.getElementById("start-with-letter");

//Presets
const presetButtons = document.querySelectorAll(".preset-button");

//History
const historyList = document.querySelector(".history-list");
const clearHistoryButton = document.querySelector(".clear-history-btn");

function updateLengthValue() {
  lengthValue.textContent = lengthSlider.value;
}

function showPassword(password) {
  passwordInput.value = password;
}

function clearPassword() {
  passwordInput.value = "";
}

function getOptions() {
  return {
    length: Number(lengthSlider.value),
    uppercase: uppercaseCheckbox.checked,
    lowercase: lowercaseCheckbox.checked,
    numbers: numbersCheckbox.checked,
    symbols: symbolsCheckbox.checked,
    excludeSimilar: excludeSimilarCheckbox.checked,
    excludeAmbiguous: excludeAmbiguousCheckbox.checked,
    noRepeated: noRepeatedCheckbox.checked,
    avoidSequential: avoidSequentialCheckbox.checked,
    includeSpaces: includeSpacesCheckbox.checked,
    startWithLetter: startWithLetterCheckbox.checked,
  };
}

function updateStrengthUI(level, width, color) {
  strengthText.textContent = level;
  strengthFill.style.width = `${width}%`;
  strengthFill.style.backgroundColor = color;
}

function renderHistory(history) {
  historyList.innerHTML = "";

  history.forEach((password) => {
    const li = document.createElement("li");
    li.textContent = password;
    historyList.appendChild(li);
  });
}
