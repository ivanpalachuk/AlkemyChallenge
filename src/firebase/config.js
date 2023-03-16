
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBsb9-qRZLeW1wX8ajjz3CrpTH_I4kSj_M",
    authDomain: "mdbreactip.firebaseapp.com",
    projectId: "mdbreactip",
    storageBucket: "mdbreactip.appspot.com",
    messagingSenderId: "476449223672",
    appId: "1:476449223672:web:68d2825d3942afb4019c0d",
    measurementId: "G-75QW3RWHGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function iniFirebase() {
    return app
}

export const auth = getAuth(app)
