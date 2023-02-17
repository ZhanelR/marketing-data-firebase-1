import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Y_pzt52foW53ecxex-94RkebFvjFuME",
  authDomain: "lab1-posts-firestore-db.firebaseapp.com",
  projectId: "lab1-posts-firestore-db",
  storageBucket: "lab1-posts-firestore-db.appspot.com",
  messagingSenderId: "1066838331468",
  appId: "1:1066838331468:web:b271b12a04460aa11da4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 



/* import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {importData} from "./scriptImportToFirebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdFaspEVC8KZa24g_Fs1nPeIpFfeXqj0s",
  authDomain: "lab-1-articles.firebaseapp.com",
  projectId: "lab-1-articles",
  storageBucket: "lab-1-articles.appspot.com",
  messagingSenderId: "717010224481",
  appId: "1:717010224481:web:7063e758d0eea5a7077120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

// function writePosts(title, description, imageUrl, expertComment) {
//     const db = getDatabase();
//     const reference = ref(db, 'post/' + posts.title)

//     set(reference, {
//         title: posts.title,
//         description: posts.description,
//         imageUrl: posts.imageUrl,
//         expertComment: posts.expertComment
//     });
// } 

// writePosts("some title", "some text here", "https://images.barrons.com/im-296511", "bla-bla"); */