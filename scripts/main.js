document.addEventListener("DOMContentLoaded", function() {
    // Create password input
    let passwordInput = createElement('input', {type:'password', id:'password-input', placeholder:'Enter Password'});
    let submitButton = createElement('button', {id: 'submit', innerText: 'Submit'});
    let loginDiv = createElement('div', {id: 'login'}, passwordInput, submitButton);

    // Create div for protected content
    let protectedDiv = createElement('div', {id: 'protected-content', style: 'display: none;'})
    // Append elements to body
    document.body.append(loginDiv, protectedDiv);
    // Code here is the same as before, with minor edits

    const password = "MARK" 

    passwordInput.addEventListener('input', (e) => {
        const userInput = e.target.value;
        if (userInput === password) {
            // Show the protected page content
            protectedDiv.style.display = 'block';
        } else {
            // Hide the protected page content
            protectedDiv.style.display = 'none';
        }
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkPassword();
    });

    function checkPassword() {
        const userInput = passwordInput.value;
 
        if (userInput === password) {
            // Show the protected page content
            protectedDiv.style.display = 'block';
            // Hide the login form
            loginDiv.style.display = 'none';
            generateRows(); // Generate 16 rows dynamically
        } else {
            alert('Incorrect password!');
        }
    }

    function generateRows() {
        const table = document.createElement('table');
        table.id = 'options-table';
        for (let i = 1; i <= 16; i++) {
            const row = table.insertRow();
            row.innerHTML = `<td>${i}</td><td><input type="text" class="part-count"></td><td><input type="text" class="part-name"></td>`;
        }
        protectedDiv.append(table);
    }
});

function createElement(tag, attributes, ...children) {
    let element = document.createElement(tag);
    for(let key in attributes) {
        if(key === 'innerText') {
            element.innerText = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    element.append(...children);
    return element;
}