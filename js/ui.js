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
