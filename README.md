# Concoction App

Welcome to the Concoction App! This application lets users create a concoction from predefined options, each part of the concoction contributing to a unique concoction code. If the user selected parts sum up to 10, a unique concoction code will be generated on the main page. Users can also view and manipulate the option values in a password-protected page.

## Code Overview

The codebase consists of JavaScript, CSS, and an environment file to store sensitive data like the password.

### Main Page (main.js)

The `main.js` file holds the core functionality of the concoction application and comprises several functions:

- `addPartToConcoction(option)`: Triggers the update of the concoction indicator and the code display when a part is added to the concoction.
- `removePartFromConcoction(option)`: Updates the concoction indicator and the code display when a part is removed.
- `updateConcoctionIndicator()`: Refreshes the concoction indicator text according to the selected options.
- `updateCodeDisplay()`: Updates the code display based on the selected options.
- `getConcoctionText(selectedOptions)`: Generates the concoction text from the selected options.
- `getCode(selectedOptions)`: Creates the code based on the selected options.
- `fetchImage(query)`: Retrieves an image using the Google Custom Search API according to the search query.

The style of the main page is described in `main.css` file.

### Protected Page (protected.js)

The protected page secures the manipulation of option values via a password. An input field listens to events and checks the input against a hardcoded password from the `.env` file. If the password matches, the protected content becomes visible.

This protected content consists of a dynamic table with 16 rows, each having two text-inputs. The styling of the protected page is contained in the `protected.css` file.

## Usage

To use this app:

Navigate to the main page and select your options.
If the concoction consists of 10 parts, a unique code will be generated.
To adjust the options available, go to the password-protected page and enter the correct password.

## Testing

To test the site, perform the following steps:

1. Try out each functionality provided in the main.js. This involves:

- Clicking on the options and checking if they're added to the concoction.
- Checking if the concoction code is updated when options are selected and deselected.
- Checking if the total count of selected options correctly stops at 10 and beyond that if the selection is not allowed.

2. Try entering the hard-coded password in the password-input field. The protected content should appear if the password is correct. Try with an incorrect password as well – the input should handle the authentication correctly and not show the protected content.

3. After the protected page shows up, check if there are 16 rows of text-inputs properly shown.

4. Check if the images searched via Google Custom Search API through fetchImage(query) function are fetched accurately. For this, it's recommended to use a mocking tool or a sample query input considering actual API calls can lead to costs.

5. Make sure all the styles and orientation of components on the page appear as expected. Check this in different browsers and screen sizes for a thorough test.

6. Finally, checking on console logs and browser's network XHR requests can help you deeply verify the functioning, especially for the API calls.

## Deploying on Github Pages

GitHub Pages can host your site directly from your GitHub repository. Here's how you do it:

1. First, you need to create a repository on GitHub. You can skip this step if you have already created one. The repository name should follow this format: <yourusername>.github.io.

2. Move your website code into this repository. Make sure your main HTML file is named index.html.

3. Under the repository name on GitHub, click on the Settings tab.

4. Scroll down to the section titled GitHub Pages, find the Source section and select main or master branch. Click Save.

5. GitHub will then publish your site at https://<yourusername>.github.io.

6. It might take some time for changes to reflect in the published site. You can check the status in the GitHub Pages section under the Settings tab.

Remember to commit and push your changes to the GitHub repository every time you make updates to your website.