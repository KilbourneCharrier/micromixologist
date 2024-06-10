# Concoction App

Welcome to the Concoction App! This application lets users create a concoction from predefined options, each part of the concoction contributing to a unique concoction code. If the user selected parts sum up to 10, a unique concoction code will be generated on the main page. Users can also view and manipulate the option values in a password-protected page.

## Code Overview

The codebase consists of JavaScript, CSS, Firebase for backend, and an environment file to store sensitive data like the Firebase configuration.

## Main Page (main.js)

The main.js file holds the core functionality of the concoction application and comprises several functions:
- addPartToConcoction(option): Triggers the update of the concoction indicator and the code display when a part is added to the concoction.
- removePartFromConcoction(option): Updates the concoction indicator and the code display when a part is removed.
- updateConcoctionIndicator(): Refreshes the concoction indicator text according to the selected options.
- updateCodeDisplay(): Updates the code display based on the selected options.
- getConcoctionText(selectedOptions): Generates the concoction text from the selected options.
- getCode(selectedOptions): Creates the code based on the selected options.
- fetchImage(query): Retrieves an image using the Google Custom Search API according to the search query.
The style of the main page is described in main.css file.

### Protected Page (protected.js)

The protected page secures the manipulation of option values via a password. An input field listens to events and checks the input against a hardcoded password. If the password matches, the protected content becomes visible.

This protected content consists of a dynamic table with 16 rows, each having two text-inputs. The styling of the protected page is contained in the protected.css file.

### Firebase Interaction (firebase.js and firebaseConfig.js)

To set up the project with Firebase, follow the steps below:

#### Step 1: Create a Firebase project
Go to the Firebase console and click on "Add project". Then, input your project's name and click on the "Create Project" button. Once the project is ready, you'll be directed to the project's overview page.

#### Step 2: Add Firebase to your web app
On your project's overview page, click on the "</>" symbol to add Firebase to your web app. Name your app if prompted.

Here, you'll see your Firebase SDK snippet, which includes your Firebase project's configuration. The configuration object looks like this:

var firebaseConfig = {
  apiKey: "AIza........",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-id",
  appId: "your:id",
  measurementId: "G-measurement-id",
};

#### Step 3: Initialize Firebase in your Web App
But, for the sake of security, we need to keep this firebaseConfig in a separate file which will not be pushed to the public repo. For this task, you can use environment variables or a firebaseConfig.js file which you can add to .gitignore.

Create a new file firebaseConfig.js and add the following code:

// firebaseConfig.js
export const firebaseConfig = {
  apiKey: "AIza........",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-id",
  appId: "your:id",
  measurementId: "G-measurement-id",
};
Now, in your firebase.js file, import this firebaseConfig:

import { firebaseConfig } from './firebaseConfig';
Then initialize firebase using this config:

firebase.initializeApp(firebaseConfig);
If other Firebase features are used - Firestore, Analytics, etc., they can be initialized in similar way.

#### Step 4: Firebase Rules Setup
In Firestore Database and Storage section in Firebase console, rules should be set up to control read/write permissions. Access Firebase Console and find the relevant sections to set these up.

Remember not to expose sensitive data, such as the Firebase configuration, to the public. Always add keys and sensitive data to a .gitignore file or environment variables.

With these setup, the Firebase is now ready to interact with the application - to conduct operations like saving data, fetching data, and uploading an image.

You might also want to check the Firestore data structure and make sure it aligns with the codebase.

That's it! You have successfully added and configured Firebase to your project. Now you can use Firebase services in your app.

Testing the Firebase functionality: You can check the Firebase database in Firebase console whether data is stored/fetched properly or not. Also, for storage, check if the file is being uploaded and retrieved accurately. Make sure to handle error scenarios as well.

## Usage

To use this app:
1. Navigate to the main page and select your options. If the concoction consists of 10 parts, a unique code will be generated. (used python3 -m http.server and http://localhost:8000/index.html for this)
2. To adjust the options available, go to the password-protected page and enter the correct password.

## Testing

To test the site, perform the following steps:
1. Try out each functionality provided in the main.js. This involves:
    - Clicking on the options and checking if they're added to the concoction.
    - Checking if the concoction code is updated when options are selected and deselected.
    - Checking if the total count of selected options correctly stops at 10 and beyond that if the selection is not allowed.
2. Try entering the hard-coded password in the password-input field. The protected content should appear if the password is correct. Try with an incorrect password as well – the input should handle the authentication correctly and not show the protected content.

3. After the protected page shows up, check if there are 16 rows of text-inputs properly shown.

4. Check if the images searched via Google Custom Search API through fetchImage(query) function are fetched accurately. For this, it's recommended to use a mocking tool or a sample query input considering actual API calls can lead to costs.

5. Experiment with the Firebase interaction functionality in the firebase.js file. Try saving and fetching data from Firestore, and uploading and retrieving an image from Storage.

6. Make sure all the styles and orientation of components on the page appear as expected. Check this in different browsers and screen sizes for a thorough test.

7. Finally, checking on console logs and browser's network XHR requests can help you deeply verify the functioning, especially for the API calls.

## Deploying on GitHub Pages

GitHub Pages can host your site directly from your GitHub repository. Here's how you do it:

1. First, you need to create a repository on GitHub. You can skip this step if you have already created one. The repository name should follow this format: .github.io.

2. Move your website code into this repository. Make sure your main HTML file is named index.html.

3. Under the repository name on GitHub, click on the Settings tab.

4. Scroll down to the section titled GitHub Pages, find the Source section and select main or master branch. Click Save.

5. GitHub will then publish your site at https://.github.io.

6. It might take some time for changes to reflect in the published site. You can check the status in the GitHub Pages section under the Settings tab.

Remember to commit and push your changes to the GitHub repository every time you make updates to your website.