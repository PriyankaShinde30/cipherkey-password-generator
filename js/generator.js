/* CHARACTER SETS */

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

const NUMBERS = "0123456789";

const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const SIMILAR_CHARACTERS = "O0Il";

const AMBIGUOUS_SYMBOLS = "{}[]()/\\'\"`~,;:.<>";

const options = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  excludeSimilar: false,
  excludeAmbiguous: false,
  noRepeated: false,
  avoidSequential: false,
  includeSpaces: false,
  startWithLetter: false,
};

const password = generatePassword(options);

function generatePassword(options) {
  let characterPool = "";
  let password = [];

  if (options.uppercase) {
    characterPool += UPPERCASE;
    password.push(getRandomCharacter(UPPERCASE));
  }

  if (options.lowercase) {
    characterPool += LOWERCASE;
    password.push(getRandomCharacter(LOWERCASE));
  }

  if (options.numbers) {
    characterPool += NUMBERS;
    password.push(getRandomCharacter(NUMBERS));
  }

  if (options.symbols) {
    characterPool += SYMBOLS;
    password.push(getRandomCharacter(SYMBOLS));
  }
  if (options.excludeSimilar) {
    for (const char of SIMILAR_CHARACTERS) {
      characterPool = characterPool.replaceAll(char, "");
    }
  }
  if (options.excludeAmbiguous) {
    for (const char of AMBIGUOUS_SYMBOLS) {
      characterPool = characterPool.replaceAll(char, "");
    }
  }
  if (characterPool.length === 0) {
    return "";
  }

  //generate random password
  while (password.length < options.length) {
    const character = getRandomCharacter(characterPool);

    if (options.noRepeated && password.includes(character)) {
      continue;
    }

    password.push(character);
  }
  password = shuffleArray(password);
  const finalPassword = password.join("");
  if (options.avoidSequential && hasSequentialCharacters(finalPassword)) {
    return generatePassword(options);
  }

  console.log("Options:", options);

  console.log("Character pool:", characterPool);

  console.log("Pool length:", characterPool.length);

  console.log("Password array:", password);

  console.log("Final password:", finalPassword);

  return finalPassword;
}
