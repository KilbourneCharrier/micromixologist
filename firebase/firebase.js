// firebase.js
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Get a reference to the storage bucket
const storage = firebase.storage();

// Example function to save data to Firestore
export async function saveData(collectionName, data) {
  try {
    await db.collection(collectionName).add(data);
    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Example function to fetch data from Firestore
export async function fetchData(collectionName) {
  try {
    const snapshot = await db.collection(collectionName).get();
    const data = snapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Example function to upload an image to Storage
export async function uploadImage(file) {
  try {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    await uploadTask;
    const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}