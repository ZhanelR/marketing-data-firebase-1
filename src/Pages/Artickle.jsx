import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchPosts} from "../Slices/postsSlice";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Article = () => {
    const params = useParams();//получ доступ к адресу конкр поста (УРЛ). Это объект 
    console.log(params)
    const {title} = params //достаю из адреса только тайтл. Это деструктуриз объекта. Так я знаю, какой именно пост отобразить  
    const posts = useSelector(state => state.posts.items) 
    const dispatch = useDispatch()


const findCurrentPost = () => {
    let currentPost = {};
    posts.forEach(post => {
        console.log(title)
    if (post.title === title) currentPost = post
}) 
return currentPost
} 

console.log(findCurrentPost())


    
    useEffect(() => {
        const getPosts = async () => {
          try {
            await dispatch(fetchPosts())
            } catch (error) {
            console.error(error);
          }
        }
        getPosts()
      }, [])

    const curPost = findCurrentPost()
      return (
       
        <Container fluid >
            <Navigation />
            <Row>
                <div class="bg-secondary">
                    <h4 class="text-white mt-5 ml-6">{curPost.title}</h4>
                    <img src={curPost.imageUrl}/>
                    <div>{curPost.description}</div>
                    <div class="bg-white mb-5">{curPost.expertComment}</div>
                </div>
            </Row>
        </Container>
        
   )
   }
   export default Article