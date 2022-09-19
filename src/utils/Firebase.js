
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import * as firebaseConfig from "./firebaseConfig.json";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);