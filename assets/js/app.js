const form = document.querySelector('form');

const submitForm = (event) => {
  event.preventDefault();

  // Get Values
  const size = Number(document.querySelector('input[name="size"]').value);
  const age = Number(document.querySelector('input[name="age"]').value);
  const weight = Number(document.querySelector('input[name="weight"]').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const action = Number(document.querySelector('select[name="action"]').value);

  // Return if missing user input
  if (size === 0 || age === 0 || weight === 0) return;

  // Calculate Grundumsatz
  let grundumsatz = 0;

  if (gender === 'male') {
    grundumsatz = Number(
      (66.47 + 13.7 * weight + 5 * size - 6.8 * age).toFixed(2)
    );
  } else {
    grundumsatz = Number(
      (655.1 + 9.6 * weight + 1.8 * size - 4.7 * age).toFixed(2)
    );
  }

  // Calculate Gesamtumsatz
  const gesamtumsatz = (grundumsatz * action).toFixed(2);

  // Calculate Kj
  const grundumsatzKj = (grundumsatz * 4.184).toFixed(2);
  const gesamtumsatzKj = (gesamtumsatz * 4.184).toFixed(2);

  // Outputs
  document.querySelector('.grundumsatzKcal').textContent = grundumsatz;
  document.querySelector('.gesamtumsatzKcal').textContent = gesamtumsatz;
  document.querySelector('.grundumsatzKj').textContent = grundumsatzKj;
  document.querySelector('.gesamtumsatzKj').textContent = gesamtumsatzKj;
};

form.addEventListener('submit', submitForm);
