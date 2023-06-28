// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAKKwOmHkqQykIoJRpO2Bt215nlhhzccKY',
	authDomain: 'mums-care-7fe7e.firebaseapp.com',
	projectId: 'mums-care-7fe7e',
	storageBucket: 'mums-care-7fe7e.appspot.com',
	messagingSenderId: '300145556846',
	appId: '1:300145556846:web:167a34d2a3ce58689d157f',
	measurementId: 'G-6PSEFE0X0M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// eslint-disable-next-line
const analytics = getAnalytics(app);
