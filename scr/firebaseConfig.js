import { initializeApp } from "firebase/app";  
import { getAnalytics } from "firebase/analytics";  
import { getAuth } from "firebase/auth";  

const firebaseConfig = {  
  apiKey: "AIzaSyBADPHYouX4HAugi6HFnAg_SNZAnodXWF8",  
  authDomain: "chatizo-1.firebaseapp.com",  
  projectId: "chatizo-1",  
  storageBucket: "chatizo-1.appspot.com",  
  messagingSenderId: "465505219978",  
  appId: "1:465505219978:web:1538e65a50ba3516c94473",  
  measurementId: "G-YGZ8BX61VH"  
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
const analytics = getAnalytics(app);  
export const auth = getAuth(app);