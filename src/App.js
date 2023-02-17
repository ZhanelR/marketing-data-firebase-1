import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Article from "./Pages/Artickle";
import Articles from "./Pages/Articles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {query, collection, onSnapshot} from "firebase/firestore" 
import {db} from "./firebase"
import {addPostsToStore} from "./Slices/postsSlice"
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
 

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const q = query(collection(db, 'posts')) //отпр запрос к базе
    const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
      console.log(querySnapshot.docs[0].data())
      let postsArr = []
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        postsArr.push({...doc.data(), id: doc.title})
      });
      dispatch(addPostsToStore(postsArr))

    })
    return () => unsubscribe() //отписка от соединение когда компон unmount (напр, если что-то не так и компон не отображ). Иначе трата памяти
    }, [])

  
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/post/:title" element={<Article />} />
      <Route path="/" element={<Articles />}/>
      
    </Routes>
  </BrowserRouter>
   
    </>
  );
  }
export default App;