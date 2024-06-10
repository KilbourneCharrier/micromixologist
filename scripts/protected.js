// Get the password input field
const passwordInput = document.getElementById('password-input');

// Set the password (hardcoded for simplicity, but you should use a secure method)
const password = "MARK"

// Add an event listener to the password input field
passwordInput.addEventListener('input', (e) => {
  const userInput = e.target.value;
  if (userInput === password) {
    // Show the protected page content
    document.getElementById('protected-content').style.display = 'block';
  } else {
    // Hide the protected page content
    document.getElementById('protected-content').style.display = 'none';
  }
});

// Get the submit button
const submitButton = document.getElementById('submit');

// Add an event listener to the submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  checkPassword();
});

// Check password
function checkPassword() {
  const userInput = passwordInput.value;
 
  if (userInput === password) {
    // Show the protected page content
    document.getElementById('protected-content').style.display = 'block';

    // Hide the login form
    document.getElementById('login').style.display = 'none';

    generateRows(); // Generate 16 rows dynamically
  } else {
    alert('Incorrect password!');
  }
}

// Generate Rows
function generateRows() {
  const table = document.getElementById('options-table');
  for (let i = 1; i <= 16; i++) {
    const row = table.insertRow();
    row.innerHTML = `<td>${i}</td><td><input type="text" class="part-count"></td><td><input type="text" class="part-name"></td>`;
  }
}