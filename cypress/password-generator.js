const fs = require("fs");

function generatePassword(length, options) {
  const charSets = {
    numbers: "0123456789",
    letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special: "!@#$%^&*()-_=+[]{}|;:,.<>?/`~",
  };

  let charPool = "";
  if (options.includeNumbers) charPool += charSets.numbers;
  if (options.includeLetters) charPool += charSets.letters;
  if (options.includeSpecial) charPool += charSets.special;

  if (!charPool.length) {
    console.error("Musíš vybrat alespoň jednu sadu znaků!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charPool[Math.floor(Math.random() * charPool.length)];
  }

  return password;
}

const passwordOptions = {
  length: 25, // Délka hesla
  includeNumbers: false, // Zahrnout čísla
  includeLetters: true, // Zahrnout písmena
  includeSpecial: true, // Zahrnout speciální znaky
};

const generatedPassword = generatePassword(
  passwordOptions.length,
  passwordOptions
);

const passwordData = {
  password: generatedPassword,
  options: passwordOptions,
};

fs.writeFileSync("password.json", JSON.stringify(passwordData, null, 2));
console.log("Heslo bylo vygenerováno a uloženo do password.json");
