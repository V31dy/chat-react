import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyDBZ-v-aZEsiAIuw-qp4HO3i1rnyIoiNXc",
        authDomain: "chat-react-f7739.firebaseapp.com",
        projectId: "chat-react-f7739",
        storageBucket: "chat-react-f7739.appspot.com",
        messagingSenderId: "538644932521",
        appId: "1:538644932521:web:2cd6a3e62ce034027886b8",
        measurementId: "G-LH369SQB68"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

