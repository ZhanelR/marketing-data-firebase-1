import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Article from "./Pages/Artickle";
import Articles from "./Pages/Articles";
import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
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