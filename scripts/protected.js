// Get the password input field
const passwordInput = document.getElementById('password-input');

// Set the password (hardcoded for simplicity, but you should use a secure method)
const password = process.env.PASSWORD

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

// Create the protected page content
const protectedContent = document.getElementById('protected-content');
protectedContent.innerHTML = `
  <h1>Protected Page</h1>
  <table id="options-table">
    ${Array(16).fill('').map((_, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><input type="text" id="option-${i + 1}-value" /></td>
        <td><input type="text" id="option-${i + 1}-string" /></td>
      </tr>
    `).join('')}
  </table>
`;