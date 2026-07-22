//password display
const passwordInput = document.getElementById("password-input");
const copyButton = document.querySelector(".copy-button");
const themeToggle = document.getElementById("theme-toggle");

//Generate Button
const generateButton = document.getElementById("generate-btn");

//Strength
const strengthText = document.getElementById("strength-text");
const strengthFill = document.querySelector(".strength-fill");

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
presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyPreset(button.dataset.preset);
  });
});

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  if (!container) {
    console.error("Toast container not found!");
    return;
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

//History
const historyList = document.querySelector(".history-list");
const clearHistoryButton = document.querySelector(".clear-history-btn");

function setTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");

  const icon = themeToggle.querySelector("i");

  icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";

  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const dark = document.body.classList.contains("dark-theme");

  setTheme(dark ? "light" : "dark");
}

function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";

  setTheme(saved);
}

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

  history.forEach((item, index) => {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";

    const historyInfo = document.createElement("div");
    historyInfo.className = "history-info";

    const historyPassword = document.createElement("p");
    historyPassword.className = "history-password";
    historyPassword.textContent = item.password;

    historyInfo.appendChild(historyPassword);

    const historyActions = document.createElement("div");
    historyActions.className = "history-actions";

    const copyButton = document.createElement("button");
    copyButton.className = "history-copy-button";
    copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';

    const deleteButton = document.createElement("button");
    deleteButton.className = "history-delete-button";
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.setAttribute("aria-label", "Delete password");
    deleteButton.title = "Delete password";

    // Copy password when clicked
    copyButton.addEventListener("click", async () => {
      await copyPassword(item.password);

      copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';
      copyButton.setAttribute("aria-label", "Copy password");
      copyButton.title = "Copy password";

      setTimeout(() => {
        copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 1000);
    });
    deleteButton.addEventListener("click", () => {
      deletePassword(index);
      renderHistory(getPasswordHistory());
    });
    historyActions.appendChild(copyButton);
    historyActions.appendChild(deleteButton);

    historyItem.appendChild(historyInfo);
    historyItem.appendChild(historyActions);

    historyList.appendChild(historyItem);
  });
}
