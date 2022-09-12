import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  serverTimestamp,
  query,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';
import { createRoutesFromChildren } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyCJGuEMC0IcZfsQlAhjCFDwQnb7EdFA9DA',
  authDomain: 'odin-wheres-fry.firebaseapp.com',
  projectId: 'odin-wheres-fry',
  storageBucket: 'odin-wheres-fry.appspot.com',
  messagingSenderId: '519207827432',
  appId: '1:519207827432:web:79e004e7f287d00455165d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function getPosition(character) {
  const char = character;
  const docRef = doc(db, 'positions', char);

  try {
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data;
  } catch (error) {
    console.log('Error getting position from FireStore', error);
  }
}

export async function submitScore(score, name) {
  const scoreData = {
    score: score,
    name: name,
    timestamp: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, 'scores'), scoreData);
  } catch (error) {
    console.log('Error writing data to Firebase', error);
  }
}

export async function getHighScores() {
  const data = [];
  const highScoreQuery = query(
    collection(db, 'scores'),
    orderBy('score', 'asc'),
    limit(10)
  );

  const querySnapShot = await getDocs(highScoreQuery);

  querySnapShot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}
