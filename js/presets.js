function applyPreset(name) {
  // Reset optional settings first
  excludeSimilarCheckbox.checked = false;
  excludeAmbiguousCheckbox.checked = false;
  noRepeatedCheckbox.checked = false;
  avoidSequentialCheckbox.checked = false;
  includeSpacesCheckbox.checked = false;
  startWithLetterCheckbox.checked = false;

  switch (name) {
    case "personal":
      lengthSlider.value = 12;
      uppercaseCheckbox.checked = true;
      lowercaseCheckbox.checked = true;
      numbersCheckbox.checked = true;
      symbolsCheckbox.checked = false;

      startWithLetterCheckbox.checked = true;
      break;

    case "work":
      lengthSlider.value = 16;
      uppercaseCheckbox.checked = true;
      lowercaseCheckbox.checked = true;
      numbersCheckbox.checked = true;
      symbolsCheckbox.checked = true;

      excludeSimilarCheckbox.checked = true;
      startWithLetterCheckbox.checked = true;
      break;

    case "banking":
      lengthSlider.value = 24;
      uppercaseCheckbox.checked = true;
      lowercaseCheckbox.checked = true;
      numbersCheckbox.checked = true;
      symbolsCheckbox.checked = true;

      excludeSimilarCheckbox.checked = true;
      excludeAmbiguousCheckbox.checked = true;
      noRepeatedCheckbox.checked = true;
      avoidSequentialCheckbox.checked = true;
      startWithLetterCheckbox.checked = true;
      break;

    case "gaming":
      lengthSlider.value = 14;
      uppercaseCheckbox.checked = true;
      lowercaseCheckbox.checked = true;
      numbersCheckbox.checked = true;
      symbolsCheckbox.checked = false;

      noRepeatedCheckbox.checked = true;
      break;

    case "ultra":
      lengthSlider.value = 32;
      uppercaseCheckbox.checked = true;
      lowercaseCheckbox.checked = true;
      numbersCheckbox.checked = true;
      symbolsCheckbox.checked = true;

      excludeSimilarCheckbox.checked = true;
      excludeAmbiguousCheckbox.checked = true;
      noRepeatedCheckbox.checked = true;
      avoidSequentialCheckbox.checked = true;
      startWithLetterCheckbox.checked = true;
      break;
  }

  updateLengthValue();
}
