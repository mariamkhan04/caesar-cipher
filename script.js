// Caesar Cipher Logic
const shift = 3;

function encrypt(text) {
  return text
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const shiftAmount = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - shiftAmount + shift) % 26) + shiftAmount);
      }
      return char;
    })
    .join('');
}

function decrypt(text) {
  return text
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const shiftAmount = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - shiftAmount - shift + 26) % 26) + shiftAmount);
      }
      return char;
    })
    .join('');
}

// DOM Elements
const textInput = document.getElementById('text-input');
const textLabel = document.getElementById('text-label');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const resetBtn = document.getElementById('reset-btn'); 

// Event Listeners
encryptBtn.addEventListener('click', () => {
  const text = textInput.value;
  if (text) {
    textInput.value = encrypt(text);
    textLabel.textContent = 'Cipher Text';
  }
});

decryptBtn.addEventListener('click', () => {
  const text = textInput.value;
  if (text) {
    textInput.value = decrypt(text);
    textLabel.textContent = 'Plain Text';
  }
});

resetBtn.addEventListener('click', () => {
    textInput.value = ''; // Clear the text area
    textLabel.textContent = 'Plain Text'; // Reset the label
  });