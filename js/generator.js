/* CHARACTER SETS */

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const SIMILAR_CHARACTERS = "O0Il";
const AMBIGUOUS_SYMBOLS = "{}[]()/\\'\"`~,;:.<>";

function generatePassword(options) {
  let characterPool = "";
  let password = [];

  // Create editable character pools
  let uppercasePool = UPPERCASE;
  let lowercasePool = LOWERCASE;
  let numbersPool = NUMBERS;
  let symbolsPool = SYMBOLS;

  // Remove similar characters
  if (options.excludeSimilar) {
    for (const char of SIMILAR_CHARACTERS) {
      uppercasePool = uppercasePool.replaceAll(char, "");
      lowercasePool = lowercasePool.replaceAll(char, "");
      numbersPool = numbersPool.replaceAll(char, "");
    }
  }

  // Remove ambiguous symbols
  if (options.excludeAmbiguous) {
    for (const char of AMBIGUOUS_SYMBOLS) {
      symbolsPool = symbolsPool.replaceAll(char, "");
    }
  }

  // Build character pool and guarantee at least one of each selected type
  if (options.uppercase) {
    characterPool += uppercasePool;
    password.push(getRandomCharacter(uppercasePool));
  }

  if (options.lowercase) {
    characterPool += lowercasePool;
    password.push(getRandomCharacter(lowercasePool));
  }

  if (options.numbers) {
    characterPool += numbersPool;
    password.push(getRandomCharacter(numbersPool));
  }

  if (options.symbols) {
    characterPool += symbolsPool;
    password.push(getRandomCharacter(symbolsPool));
  }

  // Allow spaces if selected
  if (options.includeSpaces) {
    characterPool += " ";
  }

  // No available characters
  if (characterPool.length === 0) {
    return "";
  }

  if (options.startWithLetter && !options.uppercase && !options.lowercase) {
    showToast("Enable uppercase or lowercase to start with a letter.");
    return "";
  }

  // Prevent infinite loop when unique characters are exhausted
  if (options.noRepeated && options.length > characterPool.length) {
    showToast("Password length is too long for the selected options.");
    return "";
  }

  // Fill remaining characters
  while (password.length < options.length) {
    const character = getRandomCharacter(characterPool);

    if (options.noRepeated && password.includes(character)) {
      continue;
    }

    password.push(character);
  }

  // Shuffle password
  password = shuffleArray(password);

  // Ensure password starts with a letter if requested
  if (options.startWithLetter && (options.uppercase || options.lowercase)) {
    while (!isLetter(password[0])) {
      password = shuffleArray(password);
    }
  }

  const finalPassword = password.join("");

  // Regenerate if sequential characters are found
  if (options.avoidSequential && hasSequentialCharacters(finalPassword)) {
    return generatePassword(options);
  }
  return finalPassword;
}
