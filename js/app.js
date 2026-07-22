//Initialize the Application
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  updateLengthValue();
  clearPassword();

  themeToggle.addEventListener("click", toggleTheme);

  // Load and display password history
  if (typeof getPasswordHistory === "function") {
    renderHistory(getPasswordHistory());
  }

  // Update length value when slider changes
  lengthSlider.addEventListener("input", () => {
    updateLengthValue();
  });

  // Generate password button
  generateButton.addEventListener("click", () => {
    const options = getOptions();

    const password = generatePassword(options);

    if (!password) {
      showToast("Unable to generate a password with the selected options.");
      return;
    }

    showPassword(password);

    const strength = calculatePasswordStrength(password, options);

    updateStrengthUI(strength.level, strength.width, strength.color);

    if (typeof savePassword === "function") {
      savePassword(password);
      renderHistory(getPasswordHistory());
    }
  });

  // Copy password button
  if (copyButton && typeof copyPassword === "function") {
    copyButton.addEventListener("click", async () => {
      const password = passwordInput.value;

      if (!password) return;

      await copyPassword(password);

      copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';

      setTimeout(() => {
        copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 1000);
    });
  }

  // Clear history button
  if (clearHistoryButton && typeof clearPasswordHistory === "function") {
    clearHistoryButton.addEventListener("click", () => {
      clearPasswordHistory();
      renderHistory([]);
    });
  }
});
