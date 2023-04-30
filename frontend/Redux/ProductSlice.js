const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

 const productslice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
       add(state,action){
        state.push(action.payload)
       }
    }
})

export const {add} = productslice.actions;
export default productslice.reducer;