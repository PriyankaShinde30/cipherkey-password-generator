function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomCharacter(characters) {
  return characters[getRandomNumber(characters.length)];
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomNumber(i + 1);

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function isLetter(char) {
  return /^[A-Za-z]$/.test(char);
}

function isUppercase(char) {
  return /^[A-Z]$/.test(char);
}

function isLowercase(char) {
  return /^[a-z]$/.test(char);
}

function isNumber(char) {
  return /^[0-9]$/.test(char);
}

function isSymbol(char) {
  return !/[A-Za-z0-9 ]/.test(char);
}

function removeDuplicateCharacters(text) {
  return [...new Set(text)].join("");
}

function hasSequentialCharacters(password) {
  const text = password.toLowerCase();

  for (let i = 0; i < text.length - 2; i++) {
    const first = text.charCodeAt(i);
    const second = text.charCodeAt(i + 1);
    const third = text.charCodeAt(i + 2);

    const isLetters =
      /[a-z]/.test(text[i]) &&
      /[a-z]/.test(text[i + 1]) &&
      /[a-z]/.test(text[i + 2]);

    const isNumbers =
      /[0-9]/.test(text[i]) &&
      /[0-9]/.test(text[i + 1]) &&
      /[0-9]/.test(text[i + 2]);

    if (isLetters || isNumbers) {
      // ascending: abc, 123
      if (second === first + 1 && third === second + 1) {
        return true;
      }

      // descending: cba, 321
      if (second === first - 1 && third === second - 1) {
        return true;
      }
    }
  }

  return false;
}

function getCurrentDateTime() {
  return new Date().toLocaleString();
}
