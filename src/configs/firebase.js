import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAXbgOZ8T06Vfzp3uv9B6Wgi3DrkLrcS4Y',
	authDomain: 'project-a-8350b.firebaseapp.com',
	projectId: 'project-a-8350b',
	storageBucket: 'project-a-8350b.appspot.com',
	messagingSenderId: '76305479398',
	appId: '1:76305479398:web:d6364fb8c4cbdb9f742d27',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
