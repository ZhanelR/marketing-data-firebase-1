import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {query, collection, onSnapshot} from "firebase/firestore" 
import {db} from "../firebase"
import {addPostsToStore} from "../Slices/postsSlice"

const Article = () => {
    const params = useParams();//получ доступ к адресу конкр поста (УРЛ). Это объект 
    const {title} = params //достаю из адреса только тайтл. Это деструктуриз объекта. Так я знаю, какой именно пост отобразить  
    //const posts = useSelector(state => state.posts.items) 
    const dispatch = useDispatch()
    //const [posts, setPosts] = useState([]);
    //посты через useSelector
    const posts = useSelector(state => state.posts.items) 

const findCurrentPost = () => {
    let currentPost = {};
    posts.forEach(post => {
        console.log("posts", posts)
    if (post.title === title) currentPost = post
}) 
return currentPost
} 
// console.log(findCurrentPost())

    
/*     useEffect(() => {
        const getPosts = async () => {
          try {
            await dispatch(fetchPosts())
            } catch (error) {
            console.error(error);
          }
        }
        getPosts()
      }, []) */

      const curPost = findCurrentPost()
      return (
       
        <Container fluid >
            <Navigation />
            <Row>
                <div className="bg-secondary p-5">
                    <h4 className="text-white">{curPost.title}</h4>
                    <img className="mt-3" src={curPost.imageUrl}/>
                    <div className="mt-3">{curPost.description}</div>
                    <div className="bg-white mt-3">{curPost.expertComment}</div>
                </div>
            </Row>
        </Container>
   )
   }
   export default Article