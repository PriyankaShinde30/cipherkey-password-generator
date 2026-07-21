//Initialize the Application
document.addEventListener("DOMContentLoaded", () => {
  updateLengthValue();
  clearPassword();

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

    console.log(options);

    const password = generatePassword(options);

    console.log(password);

    if (!password) {
      alert("Unable to generate a password with the selected options.");
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
    copyButton.addEventListener("click", () => {
      const password = passwordInput.value;

      if (!password) return;

      copyPassword(password);
    });
  }

  // Clear history button
  if (clearHistoryButton && typeof clearPasswordHistory === "function") {
    clearHistoryButton.addEventListener("click", () => {
      clearPasswordHistory();
      renderHistory([]);
    });
  }

  // Preset selector
  if (presetButtons && typeof applyPreset === "function") {
    presetSelect.addEventListener("change", () => {
      applyPreset(presetButtons.value);
      updateLengthValue();
    });
  }
});
