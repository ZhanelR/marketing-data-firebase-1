import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {fetchPosts} from "../Slices/postsSlice"
import Navigation from "../components/Navigation"
import CardPost from "./cardPosts";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsGrid from "../components/CardsGrid";
import "./Styles.css"

const Articles = () => {
    const posts = useSelector(state => state.posts.items) 
    const dispatch = useDispatch()
    const { status, end, items } = useSelector(state => state.posts)

    useEffect(() => {
        const getPosts = async () => {
          try {
            await dispatch(fetchPosts())
            // строка выше - запрашиваю все посты. Это вызов экшна, который получит все посты. причем ждет, пока выполнится (await) 
            } catch (error) {
            console.error(error);
          }
        }
        getPosts()
      }, [])
 
      return (
        
        <Container fluid >
          <Navigation />
          <div class="articles-container bg-secondary mt-0">
            <CardsGrid posts={posts}/>
          </div>
        </Container>   
   )
   }
   export default Articles