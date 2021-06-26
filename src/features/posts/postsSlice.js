import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
});

//postsSlice.reducer function is generated by createSlice

console.log(typeof postsSlice.reducer);
export default postsSlice.reducer;