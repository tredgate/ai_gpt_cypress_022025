function generateRodneCislo({ dateOfBirth, gender } = {}) {
  // Náhodně vybereme datum, pokud není zadán
  const randomDate = new Date(
    Math.floor(Math.random() * (2022 - 1900 + 1)) + 1900,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  );

  const dob = dateOfBirth ? new Date(dateOfBirth) : randomDate;
  const year = dob.getFullYear();
  const month = dob.getMonth() + 1;
  const day = dob.getDate();

  let shortYear = year % 100;
  let adjustedMonth = gender === "female" ? month + 50 : month;

  // Náhodná koncovka (0000–9999 pro 1954+, 001–999 pro <1954)
  let suffix =
    year >= 1954
      ? String(Math.floor(Math.random() * 10000)).padStart(4, "0")
      : String(Math.floor(Math.random() * 999) + 1).padStart(3, "0");

  let baseRodneCislo = `${String(shortYear).padStart(2, "0")}${String(
    adjustedMonth
  ).padStart(2, "0")}${String(day).padStart(2, "0")}`;

  // Pokud rok je 1954+, musí být dělitelné 11
  if (year >= 1954) {
    let baseNumber = parseInt(baseRodneCislo + suffix, 10);
    let remainder = baseNumber % 11;

    if (remainder !== 0) {
      let adjustment = (11 - remainder) % 11;
      suffix = String(parseInt(suffix) + adjustment).padStart(4, "0");
    }
  }

  return `${baseRodneCislo}/${suffix}`;
}

module.exports = generateRodneCislo;
