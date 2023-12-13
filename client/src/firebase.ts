import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9tNR6VWZ_eEp0-4ft8UUZEuKi_JBkFMY",
    authDomain: "tie-up-f9262.firebaseapp.com",
    projectId: "tie-up-f9262",
    storageBucket: "tie-up-f9262.appspot.com",
    messagingSenderId: "827267162267",
    appId: "1:827267162267:web:9b605cf2a50dbbb92ce63e",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
