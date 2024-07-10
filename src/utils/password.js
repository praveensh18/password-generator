function shuffle(myArray) {
  let arr = [...myArray];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * arr.length);
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function getRandomCharacter(text) {
  return text[Math.floor(Math.random() * text.length)];
}

export function generatePassword(config) {
  let result = '';

  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS = '0123456789';
  const SPECIALS = '!@#$%^&*()_-+=[]{}|;:\'",.<>?/\\';

  // The all alphabet options which are selected to generate the Password
  // By default lowercase is mandatory
  let selectedAlphabets = LOWERCASE;

  // it will be used to complete the password according to size
  let charsToSkip = 1;

  // generate password and save it in result
  result += getRandomCharacter(LOWERCASE);

  if (config.uppercase) {
    result += getRandomCharacter(UPPERCASE);
    selectedAlphabets += UPPERCASE;
    charsToSkip++;
  }

  if (config.number) {
    result += getRandomCharacter(NUMBERS);
    selectedAlphabets += NUMBERS;
    charsToSkip++;
  }

  if (config.special) {
    result += getRandomCharacter(SPECIALS);
    selectedAlphabets += SPECIALS;
    charsToSkip++;
  }

  // Need 'size - charsToSkip' more chars to complete the password
  for (let i = charsToSkip; i < Number(config.size); i++) {
    result += getRandomCharacter(selectedAlphabets);
  }

	// Shuffle the result
	const finalResult = shuffle(result).join('')
  return finalResult;
}
