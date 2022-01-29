const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;
const SYMBOL_FIRST = 33;
const SYMBOL_LAST = 47;

const LOWERCASE_BOUNDARIES = [LOWERCASE_A, LOWERCASE_Z];
const UPPERCASE_BOUNDARIES = [UPPERCASE_A, UPPERCASE_Z];
const SYMBOL_BOUNDARIES = [SYMBOL_FIRST, SYMBOL_LAST];
const DIGIT_BOUNDARIES = [48, 57];

const replaceAt = (
  originalString: string,
  index: number,
  replacement: string
): string => {
  return (
    originalString.substr(0, index) +
    replacement +
    originalString.substr(index + replacement.length)
  );
};

function getRandomInt(min: number, max: number): number {
  const delta = max - min;
  const temporaryNumber = Math.floor(Math.random() * delta);
  return temporaryNumber + min;
}

const generateLetterInBoundary = (
  lowerBoundary: number,
  upperBoundary: number
): string => {
  const randomNumber = getRandomInt(lowerBoundary, upperBoundary);
  return String.fromCharCode(randomNumber);
};

const generateCharactersInBoundary = (
  numberOfCharacters: number,
  boundaryDefinition: number[]
): string => {
  if (boundaryDefinition.length != 2) {
    throw 'Check that boundary definition please';
  }

  let temporaryCharacters = '';
  for (let letter = 0; letter < numberOfCharacters; letter++) {
    temporaryCharacters += generateLetterInBoundary(
      boundaryDefinition[0],
      boundaryDefinition[1]
    );
  }
  return temporaryCharacters;
};

/**
 * Generates a random string that can be used as a password
 * @param lowerCaseLetters the number of lower case letters
 * @param upperCaseLetters the number of upper case letters
 * @param specialCharacters the number of special characters
 */
export const generatePassword = (
  lowerCaseLetters: number,
  upperCaseLetters: number,
  specialCharacters: number,
  digitCharacters: number
): string => {
  let generatedPassword = '';
  generatedPassword +=generateCharactersInBoundary(upperCaseLetters, UPPERCASE_BOUNDARIES) +
    generateCharactersInBoundary(lowerCaseLetters, LOWERCASE_BOUNDARIES) +
    generateCharactersInBoundary(specialCharacters, SYMBOL_BOUNDARIES) +
    generateCharactersInBoundary(digitCharacters, DIGIT_BOUNDARIES);

  const numbersToShuffle = getRandomInt(0, 6);
  for (let i = 0; i < numbersToShuffle; i++) {
    const firstIndexToShuffle = getRandomInt(0, generatedPassword.length);
    const secondIndexToShuffle = getRandomInt(0, generatedPassword.length);

    const firstCharacter = generatedPassword.charAt(firstIndexToShuffle);
    const secondCharacter = generatedPassword.charAt(secondIndexToShuffle);

    generatedPassword = replaceAt(generatedPassword, firstIndexToShuffle, secondCharacter);
    generatedPassword = replaceAt(generatedPassword, secondIndexToShuffle, firstCharacter);

  }

  return generatedPassword;
};