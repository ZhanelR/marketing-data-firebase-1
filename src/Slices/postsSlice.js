import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


/* export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const {data} = await axios.get('http://localhost:3001/posts')
    //!! использован локальный сервер на node.js для возврата постов во избежание CORS
    return data
  }
) */

const initialState = {
    items: [],
    showItems: [],
    currentPost: {},
    status: 'loading',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    addPostsToStore: (state, action) => {
      console.log(action.payload)
      if (action.payload[0]["some-data"]) state.items = action.payload[0]["some-data"]
          return state
    }
  },

},

)
export const { addPostsToStore } = postsSlice.actions;
export default postsSlice.reducer


