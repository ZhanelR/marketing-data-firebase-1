import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation"
import CardPost from "./cardPosts";
import Container from 'react-bootstrap/Container';
import CardsGrid from "../components/CardsGrid";
import "./Styles.css"


const Articles = () => {
    const posts = useSelector(state => state.posts.items) 
    const dispatch = useDispatch()
    const { status, end, items } = useSelector(state => state.posts)


      return (
        
        <Container fluid >
          <Navigation />
          <div className="articles-container bg-secondary mt-0">
            <CardsGrid posts={posts}/> 
          </div>
        </Container>   
  //35 строка - передаю в качестве пропсов посты posts={posts}
   )
   }
   export default Articles