// Import Firebase functions
import { db, storage } from './firebase/firebase';

// Get references to HTML elements
const optionContainer = document.getElementById('option-container');
const concoctionIndicator = document.getElementById('concoction-indicator');
const codeDisplay = document.getElementById('code-display');

// Initialize options array
let options = [];

// Fetch data from Firestore
db.collection('options').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    const option = doc.data();
    options.push(option);
    // Create option HTML element
    const optionHTML = `
      <div class="option">
        <img src="${option.image}" alt="${option.name}">
        <span>${option.name}</span>
        <input type="checkbox" id="option-${option.id}">
      </div>
    `;
    optionContainer.innerHTML += optionHTML;
  });
});

// Add event listeners to option checkboxes
optionContainer.addEventListener('change', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const optionId = e.target.id.replace('option-', '');
    const option = options.find(o => o.id === optionId);
    if (e.target.checked) {
      // Add part to concoction
      addPartToConcoction(option);
    } else {
      // Remove part from concoction
      removePartFromConcoction(option);
    }
  }
});

// Function to add part to concoction
function addPartToConcoction(option) {
  // Update concoction indicator and code display
  updateConcoctionIndicator();
  updateCodeDisplay();
}

// Function to remove part from concoction
function removePartFromConcoction(option) {
  // Update concoction indicator and code display
  updateConcoctionIndicator();
  updateCodeDisplay();
}

// Function to update concoction indicator
function updateConcoctionIndicator() {
  const selectedOptions = options.filter(o => o.selected);
  const concoctionText = getConcoctionText(selectedOptions);
  concoctionIndicator.textContent = concoctionText;
}

// Function to update code display
function updateCodeDisplay() {
  const selectedOptions = options.filter(o => o.selected);
  const code = getCode(selectedOptions);
  codeDisplay.textContent = code;
}

function getConcoctionText(selectedOptions) {
  // Concatenates selected options with commas
  return selectedOptions.join(', ');
}

function getCode(selectedOptions) {
  // Hashes the concatenated string of selected options
  return hashCode(selectedOptions.join(', '));
}

function hashCode(s){
      return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

async function fetchImage(query) {
  try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID&searchType=image`);
      const data = await response.json();
      return data.items[0].link;
  } catch (error) {
      console.log(error);
  }
}