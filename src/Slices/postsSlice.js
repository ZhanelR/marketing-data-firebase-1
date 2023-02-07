import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const {data} = await axios.get('http://localhost:3001/posts')
    //!! использован локальный сервер на node.js для возврата постов во избежание CORS
    return data
  }
)

const initialState = {
    items: [],
    showItems: [],
    currentPost: {},
    status: 'loading',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {},
extraReducers: {

  [fetchPosts.pending]: (state) => {
    state.status = 'loading'
    state.items = []
  },

  [fetchPosts.fulfilled]: (state, action) => {
    state.items = action.payload
    state.status = 'success'
    console.log(fetchPosts);
  },

  [fetchPosts.rejected]: (state) => {
    state.status = 'error'
    state.items = []
  }
}
},

)

export default postsSlice.reducer
